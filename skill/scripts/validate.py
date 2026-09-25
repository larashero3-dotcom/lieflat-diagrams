#!/usr/bin/env python3
"""Validate the lieflat-diagrams package without third-party dependencies."""

from __future__ import annotations

import re
import sys
from html.parser import HTMLParser
from pathlib import Path

EXPECTED_IDS = [
    "decision", "mind-map", "folded-timeline", "venn-sets", "journey", "gantt",
    "qualitative-quadrant", "decision-matrix", "organization", "swimlane", "blueprint",
    "feedback", "annotated-cycle", "dependencies", "causal-loop", "concept-map",
    "fishbone", "architecture", "sequence", "state-machine", "entity-relations",
    "use-cases", "class-diagram", "deployment-diagram", "fault-tree",
    "curved-classification", "overlapping-circles", "central-orbit",
    "common-origin-arcs", "tangent-circles", "segmented-day", "open-spiral",
    "wave-annotations", "wave-checkpoints", "free-meander",
]

TEMPLATE_FILENAMES = {
    "EN": "mono-diagrams-liquid-palm-en.html",
    "ZH": "mono-diagrams-liquid-palm-zh.html",
}


class GalleryParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.card_ids: list[str] = []
        self.href_ids: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if tag == "section" and "card" in (values.get("class") or "").split():
            diagram_id = values.get("id")
            if diagram_id:
                self.card_ids.append(diagram_id)
        if tag == "a" and (values.get("href") or "").startswith("#"):
            self.href_ids.append((values.get("href") or "")[1:])


def parse_html(path: Path) -> GalleryParser:
    parser = GalleryParser()
    parser.feed(path.read_text(encoding="utf-8"))
    return parser


def frontmatter_name(path: Path) -> str | None:
    text = path.read_text(encoding="utf-8")
    match = re.match(r"\A---\s*\n(.*?)\n---\s*(?:\n|\Z)", text, re.S)
    if not match:
        return None
    name = re.search(r"^name:\s*(.+?)\s*$", match.group(1), re.M)
    return name.group(1).strip(" '\"") if name else None


def main() -> int:
    project = Path(__file__).resolve().parents[2]
    skill = project / "skill"
    templates = skill / "templates"
    required = [
        project / "README.md",
        project / "README.zh-CN.md",
        project / "LICENSE",
        project / "LICENSE-ASSETS.md",
        project / "preview" / "README.md",
        skill / "SKILL.md",
        skill / "catalog.md",
        skill / "assets" / "standalone-template.html",
        *(templates / filename for filename in TEMPLATE_FILENAMES.values()),
        skill / "scripts" / "extract-diagram.py",
        skill / "scripts" / "export-diagram.mjs",
        skill / "scripts" / "validate.py",
    ]
    errors: list[str] = []

    for path in required:
        if not path.is_file():
            errors.append(f"missing required file: {path.relative_to(project)}")

    old_references = skill / "references"
    if old_references.exists():
        errors.append("legacy skill/references path must not exist")

    gallery_paths = {
        label: templates / filename for label, filename in TEMPLATE_FILENAMES.items()
    }
    galleries: dict[str, GalleryParser] = {}
    for label, path in gallery_paths.items():
        if not path.is_file():
            continue
        parser = parse_html(path)
        galleries[label] = parser
        if len(parser.card_ids) != 35:
            errors.append(f"{label} template has {len(parser.card_ids)} cards; expected 35")
        if parser.card_ids != EXPECTED_IDS:
            errors.append(f"{label} template card order differs from the required 35-id order")
        href_set = set(parser.href_ids)
        card_set = set(parser.card_ids)
        if href_set != card_set:
            missing = sorted(card_set - href_set)
            extra = sorted(href_set - card_set)
            errors.append(f"{label} index coverage mismatch; missing={missing}, extra={extra}")
        if len(parser.href_ids) != len(set(parser.href_ids)):
            errors.append(f"{label} index contains duplicate diagram hrefs")

    if "EN" in galleries and "ZH" in galleries:
        if galleries["EN"].card_ids != galleries["ZH"].card_ids:
            errors.append("EN and ZH template card IDs or order differ")

    skill_path = skill / "SKILL.md"
    if skill_path.is_file():
        if frontmatter_name(skill_path) != "lieflat-diagrams":
            errors.append("SKILL.md frontmatter name must be lieflat-diagrams")
        skill_text = skill_path.read_text(encoding="utf-8")
        for filename in TEMPLATE_FILENAMES.values():
            if f"templates/{filename}" not in skill_text:
                errors.append(f"SKILL.md does not reference templates/{filename}")
        if "Non-negotiable template rule" not in skill_text:
            errors.append("SKILL.md lacks the non-negotiable template rule")
        if "static material approximation" not in skill_text:
            errors.append("SKILL.md lacks the SVG material limitation")

    catalog_path = skill / "catalog.md"
    if catalog_path.is_file():
        catalog = catalog_path.read_text(encoding="utf-8")
        catalog_ids = re.findall(r"^###\s+\d{2}\s+·\s+`([^`]+)`\s+·", catalog, re.M)
        if catalog_ids != EXPECTED_IDS:
            errors.append("catalog.md does not cover the required 35 IDs in template order")

    examples = {
        "decision-flow.html": "decision",
        "system-architecture.html": "architecture",
        "causal-loop.html": "causal-loop",
    }
    for filename, expected_id in examples.items():
        path = project / "examples" / filename
        if not path.is_file():
            errors.append(f"missing example: examples/{filename}")
            continue
        parsed = parse_html(path)
        if parsed.card_ids != [expected_id]:
            errors.append(
                f"examples/{filename} must contain exactly one card with id {expected_id}; "
                f"found {parsed.card_ids}"
            )

    if errors:
        print("Validation failed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    print("Validation passed")
    print("- EN template: 35 cards and complete index")
    print("- ZH template: 35 cards and matching order")
    print("- Catalog: all 35 IDs in template order")
    print("- Package files, export script, and SKILL frontmatter: present")
    print("- Legacy references path: absent")
    print("- Examples: one expected card each")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
