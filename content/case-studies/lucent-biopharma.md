---
# NOTE: 98 / 40 / 14 in `outcome.stats` are PLACEHOLDER figures from the design
# handoff. Replace with real numbers before this goes anywhere public.
slug: lucent-biopharma
num: "01"
client: Lucent Biopharma
eyebrow: case study 01 · 2025
title: Lucent
titleLine2: Biopharma
lead: >-
  Persona-led research, a 40-component design system, and a Figma-to-Webflow
  build the client can maintain.
hero: /assets/work/lucent-biopharma.webp
heroAlt: The rebuilt Lucent Biopharma homepage, showing the pipeline overview.
meta:
  - label: role
    value: UX research, design, build
  - label: tools
    value: Figma, Webflow, CMS, GA4
  - label: duration
    value: 11 weeks
  - label: sector
    value: Biopharma · B2B
next:
  slug: jwd-portal
  label: JWD Client Portal
seo:
  title: Lucent Biopharma — case study
  description: >-
    Persona-led research, a 40-component design system, and a Figma-to-Webflow
    build the client can maintain.
  ogImage: /assets/work/lucent-biopharma.webp
sections:
  - id: problem
    num: "01"
    label: problem
    heading: Three audiences, one undifferentiated page.
    quote:
      text: We send investors a PDF because the site does not answer their questions.
      attribution: stakeholder interview · 02
  - id: research
    num: "02"
    label: research
    heading: Five interviews, twelve competitors, three personas.
    personas:
      - name: investor
        body: What stage, what timeline, what is de-risked.
      - name: clinical partner
        body: Mechanism, published evidence, who to contact.
      - name: prospective hire
        body: What it is like here, and what I would work on.
    artefact: artefact · journey map
  - id: decisions
    num: "03"
    label: decisions
    heading: A system, not a set of pages.
    numbered:
      - "Pipeline as a CMS collection: stage, indication, modality, last reviewed date."
      - Evidence blocks cite the paper inline, so claims are checkable without leaving the page.
      - Contrast and focus states audited to WCAG AA before build, not after.
    artefact: figma · component library
  - id: handoff
    num: "04"
    label: handoff
    heading: Figma variants mapped to Webflow classes.
  - id: outcome
    num: "05"
    label: outcome
    stats:
      - value: "98"
        label: lighthouse performance
      - value: "40"
        label: system components
      - value: "14"
        label: pages shipped
    closing: >-
      The site now answers each audience's first question above the fold, and the
      pipeline has been updated by the science team every month since launch.
---

## problem

Lucent had a credible clinical pipeline and a site that buried it. Investors
could not find stage or timeline. Clinical partners could not find the science.
Prospective hires could not find a reason to apply. Everything lived at the same
level of hierarchy, and the pipeline table had not been updated in nine months
because updating it required a developer.

## research

I interviewed five stakeholders across science, commercial and leadership, then
audited twelve comparable biopharma sites for how they structured pipeline and
evidence. The audit gave me a vocabulary the sector already understands; the
interviews told me which questions each audience arrives with.

## decisions

Each persona got an entry route and a clear next step. The pipeline became the
site's spine: one component, three densities, driven by CMS fields the science
team owns. Typography carries the seriousness: one accent colour, no stock
laboratory photography, no gradients over data.

## handoff

The interesting problem was keeping the design file and the built site legible to
each other over time. Every Figma component variant maps one-to-one onto a
Webflow combo class, with the same naming on both sides. Two client seats were
migrated with a written maintenance doc, so editors can add a trial or a paper
without opening a support ticket.

## outcome
