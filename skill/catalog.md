# Diagram catalog

Before using this catalog, read the complete indexes in both `templates/mono-diagrams-liquid-palm-en.html` and `templates/mono-diagrams-liquid-palm-zh.html`. Each entry below states the information contract of one of the 35 allowed templates. Numbers and order match both files.

After narrowing the choice, read the candidate card's complete `<section class="card">` in both template files. Use the selected card as the implementation source. If no entry fits the source semantics, report the missing diagram type and obtain user approval before creating a new one.

## Essentials

### 01 · `decision` · Decision Flow
- Best for: conditional work in which a test sends a request into distinct actions or outcomes.
- Required input: start, decision question, named branches, actions, terminal outcomes, and arrow direction.
- Do not use when / caveat: avoid for a single linear checklist or a state model with repeated transitions. Every branch needs an explicit condition.

### 02 · `mind-map` · Mind Map
- Best for: exploring one topic through associated themes and optional subtopics without sequence or authority.
- Required input: central topic, first-level themes, subtopics, and any known associative links.
- Do not use when / caveat: do not use for hierarchy, reporting lines, dependencies, or ordered steps. Branch position and length carry no quantity.

### 03 · `folded-timeline` · Folded Timeline
- Best for: dated milestones shown in chronological order when a long route must fit a wide card.
- Required input: ordered events and explicit dates or timestamps; optional milestone notes.
- Do not use when / caveat: route length does not encode duration. Use a scaled schedule only when intervals must be measured.

### 04 · `venn-sets` · Venn Diagram
- Best for: membership in two sets, including items exclusive to each set and items in their intersection.
- Required input: definitions of both sets and membership for every item.
- Do not use when / caveat: circle and overlap areas do not represent counts. Avoid when membership is uncertain or more than two sets need precise reading.

### 05 · `journey` · User Journey
- Best for: a person's ordered experience across stages, actions, touchpoints, and qualitative experience changes.
- Required input: actor, stages in order, actions or touchpoints per stage, and evidence for any experience annotation.
- Do not use when / caveat: avoid for internal ownership lanes or software messages. Do not invent emotion scores.

### 06 · `gantt` · Gantt Schedule
- Best for: tasks placed against actual calendar intervals, including overlaps and dependencies visible through timing.
- Required input: tasks, start and end dates or durations, time unit, and optional owner or dependency.
- Do not use when / caveat: avoid when dates are unknown or purely aspirational. Bar length must follow the declared time scale.

### 07 · `qualitative-quadrant` · Qualitative Quadrant
- Best for: comparing options against two named qualitative dimensions with verbal low-to-high endpoints.
- Required input: two independent dimensions, endpoint meanings, options, and evidence for approximate placement.
- Do not use when / caveat: do not fabricate coordinates or scores. Placement is qualitative unless measured values and scales are supplied.

### 08 · `decision-matrix` · Decision Matrix
- Best for: comparing alternatives against explicit criteria with stated ratings, weights, or evidence notes.
- Required input: alternatives, criteria, rating method, source ratings, and weights if totals are calculated.
- Do not use when / caveat: avoid calculated rankings when weights or scores are missing. Keep qualitative judgments labeled as such.

### 09 · `organization` · Organization Chart
- Best for: formal reporting or accountability relationships among roles, teams, or units.
- Required input: roles or units, direct parent for each, and any dotted-line relationship stated separately.
- Do not use when / caveat: do not use a mind map in its place. Avoid implying authority from proximity alone.

## Process & Analysis

### 10 · `swimlane` · Cross-functional Swimlanes
- Best for: an ordered process with actions assigned to distinct people, teams, or systems and visible handoffs.
- Required input: lane owners, ordered actions, handoffs, decisions, and start and end conditions.
- Do not use when / caveat: avoid when ownership is unknown or the process has no meaningful cross-lane handoff.

### 11 · `blueprint` · Service Blueprint
- Best for: customer actions aligned with frontstage work, backstage work, and supporting systems across service stages.
- Required input: stages, customer actions, visible interactions, backstage actions, support processes, and separation lines.
- Do not use when / caveat: avoid for a simple internal workflow. Do not infer invisible operations from the customer experience.

### 12 · `feedback` · Feedback Cycle
- Best for: a repeating operational loop in which an output is observed and used to adjust a later pass.
- Required input: ordered cycle stages, feedback source, adjustment target, and loop direction.
- Do not use when / caveat: avoid when the process runs once or when no output actually affects a later action.

### 13 · `annotated-cycle` · Annotated Cycle
- Best for: a recurring sequence whose stages need short explanatory notes, responsibilities, or evidence around the loop.
- Required input: cyclic stages, direction, and one supported annotation per relevant stage.
- Do not use when / caveat: avoid when annotations are unrelated commentary or when the final stage does not return to the first.

### 14 · `dependencies` · Dependencies
- Best for: prerequisites among tasks, modules, or deliverables where one item requires another before completion or use.
- Required input: items, directed prerequisite edges, and any independent items or blocked endpoints.
- Do not use when / caveat: do not treat association, influence, or message exchange as dependency. Avoid implying chronological duration.

### 15 · `causal-loop` · Causal Loop
- Best for: supported cause-and-effect variables connected by positive or negative influence, including reinforcing or balancing loops.
- Required input: variables, directed causal links, polarity for each link, and evidence or rationale for each loop.
- Do not use when / caveat: correlation is insufficient. Do not add polarity or feedback from assumption alone.

### 16 · `concept-map` · Concept Map
- Best for: named concepts connected by explicit relationship phrases that form readable propositions.
- Required input: concepts and a verb or relationship label for every connection.
- Do not use when / caveat: avoid unlabeled generic links. Position does not imply sequence, rank, or quantity.

### 17 · `fishbone` · Fishbone Diagram
- Best for: organizing proposed causes of one defined effect into meaningful cause families for investigation.
- Required input: effect, cause categories, candidate causes, and status such as observed, suspected, or unverified.
- Do not use when / caveat: the diagram does not prove causation. Do not mix remedies or outcomes into cause branches without labels.

## Systems & Engineering

### 18 · `architecture` · System Architecture
- Best for: components, trust or service boundaries, stores, external systems, and directional interfaces at one abstraction level.
- Required input: components, boundaries, interfaces or data flows, direction, and known protocols or data types.
- Do not use when / caveat: avoid mixing deployment hosts, source-code classes, and message timing without clear layers. Mark unknown interfaces.

### 19 · `sequence` · Message Sequence
- Best for: ordered messages among actors or components, including responses, alternatives, and timing relative to prior messages.
- Required input: participants in fixed order and a chronological list of messages with sender, receiver, and label.
- Do not use when / caveat: horizontal spacing does not represent elapsed time unless a scale is declared. Avoid for static architecture.

### 20 · `state-machine` · State Machine
- Best for: valid states of one entity and the events or guards that permit transitions between them.
- Required input: states, initial state, terminal states if any, transitions, triggers, and guards.
- Do not use when / caveat: do not use process actions as states. Every arrow should name the event or condition that causes it.

### 21 · `entity-relations` · Entity Relationships
- Best for: data entities with named relationships and cardinalities.
- Required input: entities, key attributes when relevant, relationship names, and cardinality at both ends.
- Do not use when / caveat: avoid guessing cardinality or using it as a runtime interaction diagram.

### 22 · `use-cases` · Use Cases
- Best for: actors and the goals they can perform within a defined system boundary.
- Required input: system boundary, actors, goal-oriented use cases, and supported include or extend relations.
- Do not use when / caveat: avoid implementation steps, screen flows, or message order. Ellipse size carries no priority.

### 23 · `class-diagram` · UML Class Diagram
- Best for: software types with attributes, operations, inheritance, composition, aggregation, and explicit multiplicity.
- Required input: classes or interfaces, members, visibility where needed, and typed relationships.
- Do not use when / caveat: avoid for database tables unless the intent is object design. Do not invent methods or access modifiers.

### 24 · `deployment-diagram` · Deployment Diagram
- Best for: software artifacts or services placed on runtime nodes, devices, clusters, or network zones.
- Required input: deployment nodes, contained artifacts, environments or zones, and communication paths.
- Do not use when / caveat: avoid for logical architecture alone. Do not imply physical separation or redundancy without evidence.

### 25 · `fault-tree` · Fault Tree
- Best for: deductive analysis from one failure event through AND and OR combinations of contributing events.
- Required input: top event, intermediate events, basic events, gate type for each combination, and analysis scope.
- Do not use when / caveat: missing gate types change the logic. Do not interpret the tree as probability without validated rates and calculations.

## Editorial & Experimental

### 26 · `curved-classification` · Curved Classification
- Best for: placing named items along a qualitative curved continuum with distinct endpoint meanings and optional regions.
- Required input: continuum definition, endpoint labels, item order, and evidence for approximate placement.
- Do not use when / caveat: curve distance is not numeric. Avoid when categories are discrete or overlap substantially.

### 27 · `overlapping-circles` · Overlapping Circles
- Best for: a small set of related themes whose overlaps are discussed qualitatively without strict set membership notation.
- Required input: circle themes and a clear statement of what each overlap means.
- Do not use when / caveat: use `venn-sets` when exact membership matters. Area and overlap size carry no quantity.

### 28 · `central-orbit` · Central Orbit
- Best for: one focal subject surrounded by peer considerations, channels, stakeholders, or lenses with no required order.
- Required input: central subject, peripheral items, and the meaning of their connection to the center.
- Do not use when / caveat: orbit radius and angular position do not encode importance, frequency, or hierarchy.

### 29 · `common-origin-arcs` · Common-origin Arcs
- Best for: several routes, scenarios, or outcomes that begin from one shared origin and diverge without later branching detail.
- Required input: common origin, ordered or named destinations, and the meaning of each arc.
- Do not use when / caveat: arc height and length do not encode probability, duration, or volume.

### 30 · `tangent-circles` · Tangent Nested Circles
- Best for: nested scopes or levels that meet at a shared boundary point, with labels explaining containment and contact.
- Required input: scopes from outer to inner and the specific meaning of the tangent point.
- Do not use when / caveat: avoid when scopes overlap without containment or when tangency has no semantic meaning. Circle area carries no quantity.

### 31 · `segmented-day` · Segmented Day
- Best for: activities assigned to explicit intervals within one day or another fixed cycle.
- Required input: cycle start and end, segments, exact interval boundaries, labels, and time zone when relevant.
- Do not use when / caveat: segment length must match duration. Avoid when times are approximate unless that uncertainty is visible.

### 32 · `open-spiral` · Open Spiral
- Best for: ordered iterations that revisit a subject while expanding scope, maturity, or detail without closing into a repeated loop.
- Required input: ordered iterations, the changing dimension, and labeled checkpoints.
- Do not use when / caveat: spacing and radius do not encode magnitude unless explicitly scaled. Avoid for a truly repeating cycle.

### 33 · `wave-annotations` · Wave Annotations
- Best for: a continuous qualitative pattern with named peaks, troughs, phases, or contextual notes.
- Required input: horizontal progression, meaning of vertical change, and evidence-backed annotations.
- Do not use when / caveat: do not present a decorative wave as measured data. State clearly when amplitude and spacing are illustrative.

### 34 · `wave-checkpoints` · Wave Checkpoints
- Best for: ordered checkpoints placed along repeated qualitative rises and falls while the checkpoints remain the primary information.
- Required input: checkpoint order, labels, and a defined meaning for the wave pattern.
- Do not use when / caveat: avoid when rises and falls have no supported interpretation. Path distance does not encode elapsed time by default.

### 35 · `free-meander` · Free Meander
- Best for: a single ordered route through decisions or editorial stages when compact straight layouts would cause collisions.
- Required input: ordered checkpoints, one continuous route, and labels for each point.
- Do not use when / caveat: the route has no branches or loops. Curvature, distance, and direction changes do not encode duration or importance.
