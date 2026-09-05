---
# Copy, stats and tools come from Hannah's own notes: Mirian is built and live,
# awaiting its first testers. No interview counts, SUS scores or usability
# testing results are claimed here, because none have been run yet.
# CREDENTIALS: the demo login below is rendered on the public page. Confirm the
# account is safe to publish before launch.
slug: mirian
num: "01"
title: Mirian
meta: 2026 · UX Research, Product Design, Fullstack Development
year: "2026"
summary: A debt tracker designed to reduce shame.
cover: /assets/work/mirian.webp
coverAlt: The Mirian debt tracker, showing the calm, red-free balance view.
role: UX Research, Product Design, Fullstack Development
tools: Figma, Canva, VS Code, React, Next.js, TypeScript, NextAuth, PostgreSQL, Vercel
liveUrl: https://www.mirian-debt-tracker.app/auth/login
credentials:
  username: client@jorvikweb.dev
  password: JorvikWebDev2026!
openByDefault: true
hasCaseStudy: true
stats:
  - value: "12"
    label: core pages
    count: true
  - value: "1"
    label: solo build
    count: true
  - value: "100"
    label: "% row-level security"
    count: true
---

## problem

- 97% of neurodivergent people say their neurodivergence makes debt harder to
  manage
- 64% never ask their creditors for help
- Only 32% of those who reach debt advice disclose being neurodivergent at all

([StepChange/Equifax, 2025](https://www.stepchange.org/about-us/impact-report-2025/equifax.aspx))

The gap isn't awareness. It's shame: overwhelm, anxiety and stigma are the top
reasons people go quiet exactly when they need support most.

For users with a PDA profile, it goes further. Demands themselves trigger
anxiety and avoidance, so the more a notification pushes "pay now", the more it
gets ignored. The app has to lower the demand, not raise it.

Something needs to change.

## design decisions

Every decision started from the same question: what does this app do on
someone's worst day? The paid/unpaid toggle became on time, late, short or
overpaid, because a binary only works if life is binary. Due dates get logged
rather than left to memory, so the app carries that load instead of asking for
it back. The balance owed stepped aside for a live debt-free-by date, one that
moves closer with every entry instead of just measuring distance from a goal.
And arrangements got a third state, because most real debt sits unresolved, not
settled: in place, needs setting up, or awaiting response.

Nothing in the interface was allowed to punish. No red, no streaks, no scolding,
because shame is what stops people opening the app in the first place, not what
gets them to pay. Jade green and peach replace the harsh contrast the category
runs on, set in Atkinson Hyperlegible, with a leaf standing in for growth
instead of debt.

## key features

- Branching payment states: on time, late, short, overpaid
- Optional notes on every payment
- Partial and overpayment support
- Due date tracking per debt
- Live debt-free-by date
- Arrangement status: in place / needs setting up / awaiting response
- Creditor contact email field
- Shame-free visual language and copy throughout
- Jade green and peach palette, Atkinson Hyperlegible typeface

## outcome

Mirian is built and live, ready for its first testers. Five payment states, four
payment options, full auth and a Supabase schema scoped with row-level security
per user. No red crosses. No harsh binaries. Just a debt tracker that assumes a
bad month, rather than punishing one.
