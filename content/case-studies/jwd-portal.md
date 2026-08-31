---
slug: jwd-portal
num: "02"
client: Jorvik Web Dev
eyebrow: case study 02 · 2026
title: JWD
titleLine2: Client Portal
lead: >-
  A portal for my own studio, built around one question: what do I need to see,
  at what point.
hero: /assets/work/jwd-portal.webp
liveUrl: https://portal.jorvikweb.dev
liveLabel: Visit portal.jorvikweb.dev
heroAlt: The JWD Client Portal dashboard, showing project status and milestones.
meta:
  - label: role
    value: |-
      UX/UI Designer
      Developer
  - label: tools
    value: VS Code, Next.js, TypeScript, React, NextAuth, PostgreSQL, Vercel, Canva
  - label: duration
    value: 4 weeks
  - label: sector
    value: Internal tools
next:
  slug: mirian
  label: Mirian
seo:
  title: JWD Client Portal case study
  description: >-
    A studio portal built around one question: what do I need to see, at what
    point.
  ogImage: /assets/work/jwd-portal.webp
sections:
  - id: problem
    num: "01"
    label: problem
    heading: >-
      Projects were managed across email, Notion and ClickUp, costing money and
      needing constant setup.
  - id: research
    num: "02"
    label: research
    heading: Lived experience and existing research informed every design and IA decision.
  - id: decisions
    num: "03"
    label: decisions
    heading: Exactly what needs to be seen, and nothing else.
    numbered:
      - >-
        Stats sit at the top of the dashboard. A visible sense of how much is
        actually done builds momentum rather than dread, so this was placed
        first rather than buried under task lists. Colour coding and large icons
        frame the same numbers without triggering PDA the way a demand-styled
        progress bar would, and give a quick, low-effort win to look at on a low
        dopamine day, when opening a wall of text wouldn't happen at all.
      - >-
        "To do" and "due this week" are separate, not one sorted list. A single
        long list, however well ordered, doesn't hold attention on its own, it
        just becomes background noise. Splitting the same data into "everything,
        in date order" and "only what's due now" means time gets planned around
        what's actually urgent, not around whatever happens to be at the top of
        a scroll.
      - >-
        Views are mixed, not fixed. Kanban, lists and charts sit alongside each
        other because the same project needs to be read differently depending on
        the day and the headspace, and forcing one view to do every job would
        mean fighting the interface on the days it matters least to.
      - >-
        Invoices generate with JWD branding built in. Removing the step of
        exporting into a separate invoicing tool removes a context switch that
        has nothing to do with the actual task of getting paid.
    # Placeholders until the screens are exported. Replace each string with an
    # object carrying image and alt. Labels follow the four decisions above; the
    # count is a guess.
    artefact:
      label: Screens
      items:
        - Dashboard stats
        - To do and due this week
        - Mixed views
        - Invoices
  - id: handoff
    num: "04"
    label: handoff
    heading: Built to be handed to a client, not just used by me.
  - id: outcome
    num: "05"
    label: outcome
    heading: >-
      8 live client projects, one system instead of four, and roughly 5 to 10
      hours a week back.
    stats:
      - value: "8"
        label: live projects
      - value: 4 → 1
        label: tools consolidated
      - value: 5-10
        label: hours saved weekly (est.)
    closing: >-
      Communication with clients now lives in one place instead of scattered
      across email and separate tools, so nobody has to learn anything new to
      use it. Reminders and project timelines run automatically instead of being
      tracked by memory, which keeps things on schedule without adding admin.
      It's in daily use across 8 live client projects, with onboarding now a
      single guided path instead of a checklist held in my head.
---

## problem

Running a freelance web dev studio across three separate platforms meant three
separate systems to maintain, and for an AuDHD brain, three separate places to
lose track of things. Notion and ClickUp both demanded structure be imposed up
front, before a project had shown what structure it actually needed. Clients had
to learn tools they'd never use again for a single job. Emails got buried in
spam, deadlines slipped through the gap between platforms, and projects dragged
on for reasons that had nothing to do with the work itself.

## research

There was no separate research phase, because the research had already happened,
just not for this project. Years of lived experience as AuDHD sat alongside
existing evidence: adults with ADHD show measurably lower dopamine receptor and
transporter levels in the brain regions that drive motivation and reward
processing, which is part of why a distant, undifferentiated task list rarely
gets opened, let alone finished. The reward system responds far better to
something immediate and visible than to a single outcome sitting weeks away,
which is what pointed toward stats and progress markers sitting at the top of
the interface rather than buried in it.

PDA needed separate handling from that. PDA is an anxiety-driven need to stay in
control and avoid other people's demands and expectations, where control is what
keeps the anxiety manageable, so anything in the interface that reads as an
instruction risks the same shutdown a verbal demand would trigger, however
well-intentioned the nudge. That ruled out due-date banners, red badges and
progress bars styled as pressure, and pointed toward colour and iconography that
inform rather than instruct.

That reframed the brief. The question wasn't "which project management tool fits
my workflow", it was "what does an interface have to do to stop me avoiding it".
Designing with the AuDHD rather than around it meant building the information
architecture around moments of need, rather than around database objects, which
is the opposite of how Notion and ClickUp are structured.

## decisions

Every screen decision was tested against the same standard: does this reduce the
gap between wanting to check on a project and actually checking. If a piece of
information couldn't justify its presence against that standard, it didn't make
the screen.

## handoff

Clients are invited manually, project by project, there's no self-serve signup
to get wrong. Access is role-based once in: a client sees their own project in
full, but anything not relevant to them is hidden by default rather than exposed
and roped off, which keeps the interface calm for them in the same way it's calm
for me. When a project ends, its data is archived rather than deleted
immediately, and cleared after two years.

## outcome
