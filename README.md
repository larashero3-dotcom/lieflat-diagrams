# lieflat-diagrams

[中文](README.zh-CN.md) | English

`lieflat-diagrams` is a liquid-glass diagram skill with 35 diagram types, built around a coconut-grove green palette, for Moxt, Claude Code, Codex, and any other AI agent that reads `SKILL.md`. It covers the common flowchart and structure types, generates refined motion from HTML, and delivers HTML, SVG, and PNG.

The 35 templates fall into four groups:

- **Essentials**: decision flows, mind maps, timelines, quadrants, and matrices — the everyday structures, covering conditional branching, scheduling, and option comparison.
- **Process & Analysis**: swimlanes, service blueprints, feedback cycles, dependencies, and causal loops, for processes with role handoffs and circular feedback.
- **Systems & Engineering**: architecture, sequence, state machine, class, deployment, and fault-tree diagrams, for precise structure in software and engineering contexts.
- **Editorial & Experimental**: curved classification, central orbit, common-origin arcs — expressive diagrams that trade exact measurement for editorial rhythm and breathing room.

## Preview

Below are real renders: the large single images show the depth of the glass material, the motion previews show the entrance animation, and the full index sits at the end as a thumbnail grid.

### Material detail

The liquid-glass material is built from `backdrop-filter` refraction, gradient strokes, and restrained shadows. Thumbnails flatten that layer, so here it is at size.

<p align="center"><img src="preview/gallery-motion-en/decision-hero.gif" alt="Decision Flow material detail and entrance animation" width="100%"></p>
<p align="center"><strong>Decision Flow</strong> · Essentials</p>

<p align="center"><img src="preview/gallery-large-en/concept-map.png" alt="Concept Map material detail" width="100%"></p>
<p align="center"><strong>Concept Map</strong> · Process &amp; Analysis</p>

### Motion preview

Each card plays its entrance animation once when it enters the viewport: strokes draw in sequence, panes fade up in turn. In the HTML, click the diagram to replay it (focus it and press Enter or Space for the same effect). Under `prefers-reduced-motion` it stays static.

<table>
  <tr>
    <td width="50%"><img src="preview/gallery-motion-en/gantt.gif" alt="Gantt Schedule motion preview" width="100%"><br><p align="center"><strong>Gantt Schedule</strong></p></td>
    <td width="50%"><img src="preview/gallery-motion-en/swimlane.gif" alt="Cross-functional Swimlanes motion preview" width="100%"><br><p align="center"><strong>Cross-functional Swimlanes</strong></p></td>
  </tr>
</table>

<table>
  <tr>
    <td width="33%"><img src="preview/gallery-motion-en/feedback.gif" alt="Feedback Cycle motion preview" width="100%"><br><p align="center"><strong>Feedback Cycle</strong></p></td>
    <td width="33%"><img src="preview/gallery-motion-en/mind-map.gif" alt="Mind Map motion preview" width="100%"><br><p align="center"><strong>Mind Map</strong></p></td>
    <td width="33%"><img src="preview/gallery-motion-en/free-meander.gif" alt="Free Meander motion preview" width="100%"><br><p align="center"><strong>Free Meander</strong></p></td>
  </tr>
</table>

### Full index

All 35 templates, in `catalog.md` order.

<table>
<tr><td align="center" width="33%"><img src="preview/gallery-en/decision.png" width="100%" alt="Decision Flow"><br><sub>Decision Flow</sub></td><td align="center" width="33%"><img src="preview/gallery-en/mind-map.png" width="100%" alt="Mind Map"><br><sub>Mind Map</sub></td><td align="center" width="33%"><img src="preview/gallery-en/folded-timeline.png" width="100%" alt="Folded Timeline"><br><sub>Folded Timeline</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery-en/venn-sets.png" width="100%" alt="Venn Diagram"><br><sub>Venn Diagram</sub></td><td align="center" width="33%"><img src="preview/gallery-en/journey.png" width="100%" alt="User Journey"><br><sub>User Journey</sub></td><td align="center" width="33%"><img src="preview/gallery-en/gantt.png" width="100%" alt="Gantt Schedule"><br><sub>Gantt Schedule</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery-en/qualitative-quadrant.png" width="100%" alt="Qualitative Quadrant"><br><sub>Qualitative Quadrant</sub></td><td align="center" width="33%"><img src="preview/gallery-en/decision-matrix.png" width="100%" alt="Decision Matrix"><br><sub>Decision Matrix</sub></td><td align="center" width="33%"><img src="preview/gallery-en/organization.png" width="100%" alt="Organization Chart"><br><sub>Organization Chart</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery-en/swimlane.png" width="100%" alt="Cross-functional Swimlanes"><br><sub>Cross-functional Swimlanes</sub></td><td align="center" width="33%"><img src="preview/gallery-en/blueprint.png" width="100%" alt="Service Blueprint"><br><sub>Service Blueprint</sub></td><td align="center" width="33%"><img src="preview/gallery-en/feedback.png" width="100%" alt="Feedback Cycle"><br><sub>Feedback Cycle</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery-en/annotated-cycle.png" width="100%" alt="Annotated Cycle"><br><sub>Annotated Cycle</sub></td><td align="center" width="33%"><img src="preview/gallery-en/dependencies.png" width="100%" alt="Dependencies"><br><sub>Dependencies</sub></td><td align="center" width="33%"><img src="preview/gallery-en/causal-loop.png" width="100%" alt="Causal Loop"><br><sub>Causal Loop</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery-en/concept-map.png" width="100%" alt="Concept Map"><br><sub>Concept Map</sub></td><td align="center" width="33%"><img src="preview/gallery-en/fishbone.png" width="100%" alt="Fishbone Diagram"><br><sub>Fishbone Diagram</sub></td><td align="center" width="33%"><img src="preview/gallery-en/architecture.png" width="100%" alt="System Architecture"><br><sub>System Architecture</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery-en/sequence.png" width="100%" alt="Message Sequence"><br><sub>Message Sequence</sub></td><td align="center" width="33%"><img src="preview/gallery-en/state-machine.png" width="100%" alt="State Machine"><br><sub>State Machine</sub></td><td align="center" width="33%"><img src="preview/gallery-en/entity-relations.png" width="100%" alt="Entity Relationships"><br><sub>Entity Relationships</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery-en/use-cases.png" width="100%" alt="Use Cases"><br><sub>Use Cases</sub></td><td align="center" width="33%"><img src="preview/gallery-en/class-diagram.png" width="100%" alt="UML Class Diagram"><br><sub>UML Class Diagram</sub></td><td align="center" width="33%"><img src="preview/gallery-en/deployment-diagram.png" width="100%" alt="Deployment Diagram"><br><sub>Deployment Diagram</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery-en/fault-tree.png" width="100%" alt="Fault Tree"><br><sub>Fault Tree</sub></td><td align="center" width="33%"><img src="preview/gallery-en/curved-classification.png" width="100%" alt="Curved Classification"><br><sub>Curved Classification</sub></td><td align="center" width="33%"><img src="preview/gallery-en/overlapping-circles.png" width="100%" alt="Overlapping Circles"><br><sub>Overlapping Circles</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery-en/central-orbit.png" width="100%" alt="Central Orbit"><br><sub>Central Orbit</sub></td><td align="center" width="33%"><img src="preview/gallery-en/common-origin-arcs.png" width="100%" alt="Common-origin Arcs"><br><sub>Common-origin Arcs</sub></td><td align="center" width="33%"><img src="preview/gallery-en/tangent-circles.png" width="100%" alt="Tangent Nested Circles"><br><sub>Tangent Nested Circles</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery-en/segmented-day.png" width="100%" alt="Segmented Day"><br><sub>Segmented Day</sub></td><td align="center" width="33%"><img src="preview/gallery-en/open-spiral.png" width="100%" alt="Open Spiral"><br><sub>Open Spiral</sub></td><td align="center" width="33%"><img src="preview/gallery-en/wave-annotations.png" width="100%" alt="Wave Annotations"><br><sub>Wave Annotations</sub></td></tr>
<tr><td align="center" width="33%"><img src="preview/gallery-en/wave-checkpoints.png" width="100%" alt="Wave Checkpoints"><br><sub>Wave Checkpoints</sub></td><td align="center" width="33%"><img src="preview/gallery-en/free-meander.png" width="100%" alt="Free Meander"><br><sub>Free Meander</sub></td><td width="33%"></td></tr>
</table>

## Templates

| Group | Count | Good for |
|---|---:|---|
| **Essentials** | 9 | Decision branches, idea expansion, timelines, quadrant comparison, option scoring, org relationships |
| **Process & Analysis** | 8 | Cross-role processes, front- and backstage service work, feedback cycles, dependency layout, causal and fishbone analysis |
| **Systems & Engineering** | 8 | System architecture, message sequences, state machines, entity relationships, use cases, class diagrams, deployment, fault trees |
| **Editorial & Experimental** | 10 | Qualitative spectra, radiating themes, nested hierarchy, day segmentation, open-ended iteration, wave narratives |

For the full selection criteria — what each template is and is not suited for — see `skill/catalog.md`.

## Formats

HTML is the complete interactive and design source. Static formats must be exported after the HTML is finished and validated.

PNG is a high-resolution static capture of the complete card, on the paper-grey background.

SVG is a static vector export of the diagram canvas. It preserves the original SVG geometry, text, defs, title, and description, and converts the HTML glass panes into native SVG material shapes. A browser's `backdrop-filter` and refraction have no exact equivalent in native SVG, so exported SVGs are marked `static material approximation`. Use HTML or PNG when visual fidelity matters most.

Users can request `html`, `svg`, `png`, or several formats. With nothing specified, deliver HTML and briefly ask whether static images are also wanted.

## Painless install

One command:

```bash
npx skills add https://github.com/larashero3-dotcom/lieflat-diagrams --skill lieflat-diagrams
```

Or send this to any agent with shell access:

```text
Please install lieflat-diagrams. Clone https://github.com/larashero3-dotcom/lieflat-diagrams
into ~/.claude/skills/lieflat-diagrams, then check that SKILL.md, catalog.md,
templates/, and scripts/ are present.
```

On Codex, use `~/.codex/skills/lieflat-diagrams` instead.

Once installed, just say:

```text
Turn this release process into a liquid-glass flow diagram.
```

Already installed and want the latest version:

```text
Please update lieflat-diagrams. Run git pull in ~/.claude/skills/lieflat-diagrams,
then tell me the current commit.
```

Generating HTML needs only Python 3 (the script uses the standard library). Playwright and Chromium are required only for PNG and SVG export:

```bash
npm install playwright
npx playwright install chromium
```

The export script loads the HTML in local Chromium. To keep template fonts consistent it allows Google Fonts only and blocks other remote addresses; diagram content is never sent to an external service.

## Generate HTML

From the project root:

```bash
python3 skill/scripts/extract-diagram.py \
  --source skill/templates/mono-diagrams-liquid-palm-en.html \
  --id architecture \
  --output architecture.html
```

Edit the generated copy and preserve the implementation structure of the selected card. Never modify the gallery when producing a single diagram.

## Export PNG

```bash
node skill/scripts/export-diagram.mjs \
  --input examples/decision-flow.html \
  --format png \
  --output /tmp/decision.png \
  --scale 2
```

PNG defaults to scale 2. The output contains the complete `.card`, without the index or unrelated page space.

## Export SVG

```bash
node skill/scripts/export-diagram.mjs \
  --input examples/decision-flow.html \
  --format svg \
  --output /tmp/decision.svg
```

The output contains the diagram canvas only.

## Example prompts

```text
Draw these services, data stores, and request directions as a system architecture diagram. Keep every direction stated in the source, and mark unstated protocols as "unspecified". Deliver HTML and PNG.
```

```text
Organize this research topic into a mind map. Branches indicate topical association only — no rank, order, or parent-child hierarchy. Deliver SVG.
```

```text
Compare these options in a qualitative quadrant. I have not supplied scores, so describe the axis ends in words only, and pick the closest existing template.
```

```text
This is a cross-team release process. Draw it as swimlanes, making clear who owns each step and where a handoff needs confirmation.
```

```text
Turn these failure causes into a fault tree. Mark whether each level is an AND or OR combination, and keep remediation steps out of the causal hierarchy.
```

## Validate

```bash
python3 skill/scripts/validate.py
```

## Design

The 35 templates are not independent chart types but one shared design system: one Palm colour token set, one liquid-glass material, one rhythm of stroke weight and whitespace, one entrance-motion timing. Picking a diagram type is only the first step — what decides the result is whether that shared grammar survives into it.

So the difference between `lieflat-diagrams` and asking a model to hand-write an SVG is not just "having templates":

- Candidate cards are checked against both galleries before a structure is chosen, rather than sketching a layout first and assembling a diagram to fit
- A card's geometric proportions, glass material, and whitespace are part of the source; content changes, those visual tokens do not
- Both the English and Chinese galleries get verified, which is how label-length and narrow-screen wrapping differences surface
- HTML is the single design source; PNG and SVG are derived from validated HTML and never maintained separately
- Motion data drives opacity and stroke only, never geometry, so the static state with motion disabled always matches the final layout

## Directory

```text
lieflat-diagrams/
├── README.md
├── README.zh-CN.md
├── LICENSE
├── LICENSE-ASSETS.md
├── examples/                      # generated single-diagram examples
├── preview/
│   ├── gallery/                   # 35 Chinese index thumbnails
│   ├── gallery-en/                # 35 English index thumbnails
│   ├── gallery-large/             # Chinese material-detail image
│   ├── gallery-large-en/          # English material-detail image
│   ├── gallery-motion/            # 6 Chinese entrance-motion GIFs
│   └── gallery-motion-en/         # 6 English entrance-motion GIFs
└── skill/
    ├── SKILL.md
    ├── catalog.md                 # data-contract index for all 35 types
    ├── assets/standalone-template.html
    ├── templates/
    │   ├── mono-diagrams-liquid-palm-en.html
    │   └── mono-diagrams-liquid-palm-zh.html
    └── scripts/
        ├── export-diagram.mjs
        ├── extract-diagram.py
        └── validate.py
```

## License

Code, scripts, and prose documentation are under the [MIT License](LICENSE).

The galleries, SVG templates, and visual assets are under [CC BY 4.0](LICENSE-ASSETS.md). Attribution is required when redistributing or modifying these assets.
