---
# NOTE: "8 interviews" and "SUS 86" are PLACEHOLDER figures from the design
# handoff. Replace with real numbers before this goes public.
# CREDENTIALS: the demo login below is rendered on the public page. Confirm the
# account is safe to publish before launch.
slug: mirian
num: "03"
title: Mirian
meta: 2024 · product design, research, frontend
year: "2024"
summary: >-
  A debt tracker designed to reduce shame, because shame is why people stop
  opening the app.
cover: /assets/work/mirian.webp
coverAlt: The Mirian debt tracker, showing the calm, red-free balance view.
roleTools: Product design, research, frontend · Figma, React, TypeScript, Supabase
liveUrl: https://www.mirian-debt-tracker.app/auth/login
credentials:
  username: client@jorvikweb.dev
  password: JorvikWebDev2026!
openByDefault: false
hasCaseStudy: true
stats:
  - value: "8"
    label: interviews
    count: true
  - value: "86"
    label: sus score
    count: true
  - value: AA
    label: contrast audited
    count: false
---

## problem

Debt tools are built for people who feel fine about their debt. Red totals,
streaks and scolding notifications punish exactly the moment a user most needs
to engage, and neurodivergent users, who are over-represented in problem debt,
drop out first. Most trackers offer only paid or not paid, so a part payment
reads as failure or goes unlogged entirely — designed for adults with ADHD,
where executive function fails unpredictably under financial stress.

## process

Eight interviews and a two-week diary study with participants managing multiple
debts, six of them ADHD or autistic. Empathy maps surfaced a consistent pattern:
avoidance was triggered by the interface, not the balance.

## design decisions

Four payment options instead of a binary, so an imperfect month stays honest.
The core object is reframed from amount owed to a live cleared-by date, because
research on ADHD motivation shows goals become more achievable with visible
context and reachable wins — every payment moves that date closer.

Logging is one tap away, notes are optional and confirmation copy never scolds,
because avoidance is the failure point rather than effort. No red, no streaks,
no total on the home screen unless asked for. Five payment states with row-level
security per user. No harsh binaries anywhere, and the interface is set in
Atkinson Hyperlegible.

## outcome

Moderated testing with seven participants: task completion rose across the board
and the shame-related language in feedback dropped away almost entirely.
Contrast audited to WCAG AA at every state.
