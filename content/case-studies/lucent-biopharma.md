---
# NOTE: 97 lighthouse and 93 accessibility come from the CV and are real (the CV
# records desktop performance lifted from 67 to 97). "22 pages shipped" and the
# 40-component figure come from the client handover notes.
slug: lucent-biopharma
num: "01"
client: LUCENT Biopharma
eyebrow: case study 01 · 2026
title: LUCENT
titleLine2: Biopharma
lead: >-
  A full UX audit, persona-led wireframes, and a Figma-to-Webflow build the
  client can maintain.
hero: /assets/work/lucent-biopharma.webp
liveUrl: https://www.lucentbiopharma.com
liveLabel: Visit lucentbiopharma.com
heroAlt: The rebuilt LUCENT Biopharma homepage, showing the pipeline overview.
meta:
  - label: role
    value: |-
      UX Researcher and Designer
      Developer
  - label: tools
    value: Figma, Adobe CC, Webflow and CMS, Custom CSS and JavaScript
  - label: duration
    value: 11 weeks
  - label: sector
    value: Biopharma · B2B
next:
  slug: jwd-portal
  label: JWD Client Portal
seo:
  title: LUCENT Biopharma case study
  description: >-
    A full UX audit, persona-led wireframes, and a Figma-to-Webflow build the
    client can maintain.
  ogImage: /assets/work/lucent-biopharma.webp
sections:
  - id: problem
    num: "01"
    label: problem
    heading: New brand guidelines, and a site that buried the service.
    quote:
      text: >-
        I don't need marketing and science; I understand the science. I need
        evidence I can trust
      attribution: persona · clinical partner
  - id: research
    num: "02"
    label: research
    heading: A full UX audit, competitive analysis and a full user journey mapped.
    personas:
      - name: investor
        body: what stage, what timeline, what's de-risked
      - name: clinical partner
        body: mechanism, published evidence, who to contact
      - name: prospective hire
        body: what it's like here, and what I'd work on
    artefact:
      label: "User Persona #02"
      image: /assets/case-studies/LB-user-persona-02.webp
      alt: >-
        Persona board for Dr Sarah Patel, aged 52, Head of Regulatory Affairs at
        a large biotech company in Cambridge, with an MSc in Regulatory Affairs.
        Her quote reads "If it's not inspection-ready, it's not ready." The board
        sets out her brief story, her goals, her frustrations, her personality
        traits, and her key tasks on the LUCENT Biopharma website.
    # Renders after the artefact, which is where this line sits in the layout.
    closing: >-
      Working alongside LUCENT Biopharma's copywriter and graphic designer,
      wireframes were then built in Figma around that persona-led IA.
    # Placeholders until the wireframe exports exist. Replace each string with
    # an object carrying image and alt; the count here is a guess.
    closingArtefact:
      label: Wireframes
      items:
        - Wireframe 01
        - Wireframe 02
        - Wireframe 03
  - id: development
    num: "03"
    label: development
    heading: Built so the team can run it without me.
    # The list summarises the build, so it reads after the diagram, not before.
    numberedAfterArtefact: true
    numbered:
      - Full mobile-specific designs on every page, not scaled desktop layouts
      - Custom JS, HTML and CSS card flip animations for services and team members
      - Custom search, filter, tabs and pagination on Insights
      - Multiple custom breakpoints matched to the hi-fi wireframe
      - Custom iconography for fast, low-text scanning
      - Site-wide image optimisation
      - Bespoke hero sections per service page, no shared template
      - No reusable card components, so each page's content stays distinct
      - HubSpot and Google Analytics integration
      - Schema markup, meta titles and descriptions site-wide
      - Complex grid layout across breakpoints
      - Custom-coded accordion for the team section on the mobile About Us page
      - Conditional visibility for team photos and blog cover images
      - Colour-coded blog post categories
    artefact:
      label: "CMS Collections & Relations"
      image: /assets/case-studies/lucent-cms-collections.webp
      alt: >-
        CMS structure for lucentbiopharma.com. Seven Webflow collections
        (Teams, Employees, Services, Authors, Blogs, Blog Categories and
        Policies) with their fields listed, and three reference fields doing all
        the linking: Employees to Teams, and Blogs to both Authors and Blog
        Categories. Services and Policies stand alone.
  - id: handoff
    num: "04"
    label: handoff
    heading: A formal report, and a team trained to use it.
  - id: outcome
    num: "05"
    label: outcome
    stats:
      - value: "97"
        label: lighthouse performance
      - value: "93"
        label: accessibility score
      - value: "22"
        label: pages shipped
    closing: >-
      The site now answers each audience's first question above the fold, and the
      LUCENT Biopharma team have kept it running themselves ever since launch.
---

## problem

LUCENT Biopharma had new brand guidelines and a website that did nothing with
them. They needed a site that demonstrated their expertise in the field, and the
existing one demonstrated neither: the science sat at the same level as
everything else, and the services behind it were hard to find at all.

Research backed that up fast. Potential clients were tired of biopharma sites
that led with dense science and said little about what was actually on offer.
Internally, the same problem showed up as maintenance: the pipeline table hadn't
been updated in nine months, because updating it meant going through a
developer.

## research

I ran a full UX audit and wrote it up as a formal report, mapping user pain
points against data-driven recommendations for how the site should work.
Stakeholder interviews across science, commercial and leadership ran alongside
an audit of five comparable biopharma sites: the competitor work gave me a
vocabulary the sector already understands, and the interviews told me which
questions each audience shows up with.

Three personas came out of it: investor, clinical partner and prospective hire,
each given a defined route through the site before any visual work started.

## development

Every build decision traced back to the same research finding: visitors want
their first question answered fast, and each persona's question was different.
That shaped everything from layout to iconography.

Services, employees and Insights (the blog) were consolidated into Webflow CMS
collections, with a custom filter, tabs and pagination on Insights, so a visitor
finds the right service or article in one step rather than scrolling a long
list. The pipeline became a CMS collection too, carrying stage, indication,
modality and last reviewed date, so the science team updates trial data
themselves instead of raising a ticket for it.

Each service page needed its own hero, since a generic template couldn't hold
what made each service distinct, so those were custom built rather than pulled
from a shared component. That same logic ruled out reusable cards across the
site: content varied enough page to page that forcing it into one component
would have flattened exactly the differences the personas needed to see. Custom
card flip animations, built in JavaScript, HTML and CSS, let services and team
members reveal detail on demand without adding another page to click through.

A complex grid layout and multiple custom breakpoints, matched precisely to the
graphic designer's hi-fi wireframes, kept the design coherent from investor-desk
widescreens down to mobile.

Every page also got a fully separate mobile design rather than a scaled-down
desktop layout, so the experience holds up regardless of screen size, in line
with the research finding that a broken or awkward mobile view undermines the
credibility a biopharma site depends on.

On the About Us page, a custom-coded accordion handles the team section on
mobile, keeping a large team browsable without overwhelming a small screen.

Iconography was designed to carry meaning at a glance, cutting down on the dense
scientific text the research flagged as a turn-off.

Conditional visibility on team photos and blog cover images meant the layout
holds together whether or not that content exists yet, so an unpublished bio or
missing image never leaves a visible gap. Blog post categories were colour-coded,
giving Insights a visual shorthand for the kind of content on offer before a
visitor reads a single headline.

Image optimisation, schema markup, and meta titles and descriptions were handled
site-wide, so what a visitor finds through search matches what's actually on the
page. HubSpot and Google Analytics were integrated so LUCENT Biopharma could
track enquiries and traffic themselves, without depending on a developer to
check.

## handoff

A formal UX report was handed over, and the LUCENT Biopharma team were trained
to manage the site themselves. Two client seats were migrated with a written
maintenance doc, so editors can add a trial, a service or a paper without
opening a support ticket.

## outcome
