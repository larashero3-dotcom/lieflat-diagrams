# Preview checklist

Preview assets exist in parallel Chinese and English sets. The `-en` directories are rendered from `skill/templates/mono-diagrams-liquid-palm-en.html` and referenced from `README.md`; the unsuffixed ones come from the Chinese gallery and are referenced from `README.zh-CN.md`. Both sets use identical parameters unless noted.

`gallery/` and `gallery-en/` hold one static PNG per template (35 files each, full catalog), extracted with `skill/scripts/extract-diagram.py` and rendered with `skill/scripts/export-diagram.mjs` at scale 2, then downscaled to 1000px wide and compressed with `pngquant --quality=80-95 --speed 1` for the thumbnail index. Quality is kept high because the liquid-glass material (gradients, soft shadows) degrades visibly under aggressive quantization. Each set is about 2.7MB.

`gallery-large/` and `gallery-large-en/` hold one PNG each (concept-map), rendered at scale 3 and downscaled to 1400px wide with `pngquant --quality=85-100 --speed 1`. These are meant to be viewed near full width so the backdrop-filter glass panes stay legible — the 1000px thumbnails are too small for that. The Essentials hero (decision) uses a GIF instead — see below — because a static PNG stretched to full width still looked soft; capturing the entrance animation at native card width reads sharper.

`gallery-motion/` and `gallery-motion-en/` hold 6 GIFs each: five grid-sized previews (gantt, swimlane, feedback, mind-map, free-meander) plus `decision-hero.gif`, which doubles as the Essentials material-detail hero image. All capture each card's `data-at`/`data-draw` entrance animation instead of the settled static frame.

Encoding parameters for the motion sets:

- recorded with a throwaway Playwright script — card video without `reducedMotion: 'reduce'`, 1400x1000 viewport, cropped to the `.card` bounding box
- converted with ffmpeg's two-pass palette (`palettegen` + `paletteuse`), `dither=bayer`
- the five grid GIFs: 760px wide, 14fps, 128 colours, trimmed with `-t` to the card's animation length plus a short buffer (derived from its largest `data-at` value)
- `decision-hero.gif`: encoded at the card's native width (1200px) rather than 760px, since it is displayed full width. The Chinese version uses 14fps/160 colours (~424KB). The English version needed 10fps and `bayer_scale=5` to stay near 660KB — at identical settings it encoded to over 1MB, since the longer English labels put more per-frame detail in the frame.

No recording script ships in `skill/scripts/` — it is not part of the diagram-authoring workflow, only a one-off for README assets.

All six sets are referenced from the Preview section of the two READMEs. Regenerate them the same way after any template visual change, and keep the two languages in sync.

Before a public release, capture verified screenshots from the actual HTML files:

- one full English gallery overview at a desktop viewport
- one full Chinese gallery overview at the same viewport
- focused desktop captures of the decision, architecture, and causal-loop examples
- one narrow-screen capture showing horizontal canvas scrolling and readable labels
- one reduced-motion capture or test record confirming the complete static state

Record the browser version, viewport dimensions, device pixel ratio, source file, and capture date. Review each image for clipped labels, missing fonts, displaced glass panes, broken SVG markers, incorrect language, and unintended animation state.

Only publish screenshots produced from the package version being released. If an image is edited for cropping or compression, note the change and preserve the diagram content.
