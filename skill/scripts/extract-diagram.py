#!/usr/bin/env python3
"""Extract one complete card from a lieflat-diagrams template gallery."""

from __future__ import annotations

import argparse
import html
import re
import sys
from pathlib import Path

CARD_START = re.compile(
    r"<section\b(?=[^>]*\sclass\s*=\s*(['\"])[^'\"]*\bcard\b[^'\"]*\1)(?=[^>]*\sid\s*=\s*(['\"])(?P<id>[^'\"]+)\2)[^>]*>",
    re.IGNORECASE,
)
SECTION_TOKEN = re.compile(r"</?section\b[^>]*>", re.IGNORECASE)


def card_starts(source: str) -> list[tuple[str, int, int]]:
    return [(m.group("id"), m.start(), m.end()) for m in CARD_START.finditer(source)]


def extract_balanced_section(source: str, start: int) -> str:
    depth = 0
    for match in SECTION_TOKEN.finditer(source, start):
        token = match.group(0)
        if token.lower().startswith("</section"):
            depth -= 1
            if depth == 0:
                return source[start : match.end()]
        else:
            depth += 1
    raise ValueError("Card section is not closed")


def collect(pattern: str, source: str, flags: int = 0) -> list[str]:
    return [match.group(0) for match in re.finditer(pattern, source, flags)]


def build_document(source: str, diagram_id: str) -> str:
    starts = card_starts(source)
    available = [item[0] for item in starts]
    selected = next((item for item in starts if item[0] == diagram_id), None)
    if selected is None:
        raise KeyError(diagram_id)

    card = extract_balanced_section(source, selected[1])
    lang_match = re.search(r"<html\b[^>]*\blang\s*=\s*(['\"])(.*?)\1", source, re.I | re.S)
    language = lang_match.group(2) if lang_match else "en"

    font_links = collect(
        r"<link\b(?=[^>]*(?:fonts\.googleapis\.com|fonts\.gstatic\.com))[^>]*>",
        source,
        re.I,
    )
    styles = collect(r"<style\b[^>]*>.*?</style\s*>", source, re.I | re.S)
    scripts = collect(r"<script\b[^>]*>.*?</script\s*>", source, re.I | re.S)

    body_start = re.search(r"<body\b[^>]*>", source, re.I)
    first_main = re.search(r"<main\b", source, re.I)
    hidden_filter = ""
    if body_start and first_main and body_start.end() < first_main.start():
        prefix = source[body_start.end() : first_main.start()]
        svg_match = re.search(
            r"<svg\b(?=[^>]*\baria-hidden\s*=\s*(['\"])true\1)[^>]*>.*?</svg\s*>",
            prefix,
            re.I | re.S,
        )
        if svg_match:
            hidden_filter = svg_match.group(0)

    heading = re.search(r"<h2\b[^>]*>(.*?)</h2\s*>", card, re.I | re.S)
    page_title = diagram_id
    if heading:
        page_title = re.sub(r"<[^>]+>", " ", heading.group(1))
        page_title = html.unescape(" ".join(page_title.split()))

    if not styles:
        raise ValueError("Source gallery has no style block")
    if not hidden_filter:
        raise ValueError("Source gallery has no hidden SVG filter")

    parts = [
        "<!doctype html>",
        f'<html lang="{html.escape(language, quote=True)}">',
        "<head>",
        '<meta charset="utf-8">',
        '<meta name="viewport" content="width=device-width,initial-scale=1">',
        f"<title>{html.escape(page_title)}</title>",
        *font_links,
        *styles,
        "</head>",
        "<body>",
        hidden_filter,
        '<main class="wrap">',
        card,
        "</main>",
        *scripts,
        "</body>",
        "</html>",
        "",
    ]
    return "\n".join(parts)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--source",
        required=True,
        type=Path,
        help=(
            "Complete template HTML: templates/mono-diagrams-liquid-palm-en.html "
            "or templates/mono-diagrams-liquid-palm-zh.html"
        ),
    )
    parser.add_argument("--id", required=True, dest="diagram_id", help="Diagram card id from catalog.md")
    parser.add_argument("--output", required=True, type=Path, help="Destination standalone HTML file")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    try:
        source = args.source.read_text(encoding="utf-8")
    except OSError as error:
        print(f"error: cannot read {args.source}: {error}", file=sys.stderr)
        return 2

    available = [item[0] for item in card_starts(source)]
    try:
        output = build_document(source, args.diagram_id)
    except KeyError:
        print(f"error: diagram id {args.diagram_id!r} was not found", file=sys.stderr)
        print("available ids: " + ", ".join(available), file=sys.stderr)
        return 3
    except ValueError as error:
        print(f"error: {error}", file=sys.stderr)
        return 4

    try:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(output, encoding="utf-8")
    except OSError as error:
        print(f"error: cannot write {args.output}: {error}", file=sys.stderr)
        return 5

    print(f"extracted {args.diagram_id} to {args.output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
