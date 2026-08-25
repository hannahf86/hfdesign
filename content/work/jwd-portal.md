---
# NOTE: "9 live projects" and "62% less status email" are PLACEHOLDER figures
# from the design handoff. Replace with real numbers before this goes public.
# CREDENTIALS: the demo login below is rendered on the public page. Confirm the
# account is safe to publish (read-only, disposable data) before launch.
slug: jwd-portal
num: "02"
title: JWD Client Portal
meta: 2025 · product, design, full-stack
year: "2025"
summary: >-
  A portal for my own studio, built around one question: what do I need to see,
  at what point.
cover: /assets/work/jwd-portal.webp
coverAlt: The JWD Client Portal dashboard, showing project status and milestones.
roleTools: Product, design, full-stack · Next.js, TypeScript, Supabase, Postgres, Vercel
liveUrl: https://portal.jorvikweb.dev
credentials:
  username: client@jorvikweb.dev
  password: JorvikWebDev2026!
openByDefault: false
hasCaseStudy: true
stats:
  - value: "9"
    label: live projects
    count: true
  - value: "62"
    label: "% less status email"
    count: true
  - value: AA
    label: wcag 2.2
    count: false
---

## problem

Running Jorvik Web Dev on my own, project state lived across an inbox, a
spreadsheet and memory. Clients asked reasonable questions I could not answer
quickly, and the cost of re-orienting between projects was the real tax.

## process

I mapped a fortnight of my own working days and logged every moment I had to
hunt for something. Designing with my AuDHD rather than against it meant
building the information architecture around moments of need, not around
database objects.

## design decisions

One screen, one decision. A Today view answers what is due and what is blocked;
everything else sits behind progressive disclosure. Status is stated in words,
never colour alone. No dashboard of vanity charts.

## outcome

In daily use across live client projects. Status-chasing email cut sharply, and
onboarding a new project now follows a single guided path instead of a checklist
held in my head.
