---
# Copy, stats and tools come from Hannah's own notes: Mirian is built and live,
# awaiting its first testers. No interview counts, SUS scores or usability
# testing results are claimed here, because none have been run yet.
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
role: Product design, research, frontend
tools: Figma, Canva, VS Code, React, Next.js, TypeScript, NextAuth, PostgreSQL, Vercel
liveUrl: https://www.mirian-debt-tracker.app/auth/login
credentials:
  username: client@jorvikweb.dev
  password: JorvikWebDev2026!
openByDefault: false
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

(StepChange/Equifax, 2025)

The gap isn't awareness. It's shame: overwhelm, anxiety and stigma are the top
reasons people go quiet exactly when they need support most.

Debt tools are built for people who feel fine about their debt. Red totals,
streaks and scolding notifications punish exactly the moment a user most needs
to engage, and neurodivergent users, who are over-represented in problem debt,
drop out first.

For users with a PDA profile, it goes further. Demands themselves trigger
anxiety and avoidance, so the more a notification pushes "pay now", the more it
gets ignored. The app has to lower the demand, not raise it.

Something needs to change.

## design decisions

Every decision started from the same question: what does this app do on
someone's worst day?

The paid/unpaid toggle went first. It became on time, late, short or overpaid,
so a bad month still leaves an honest record instead of no record at all. A note
is there if it's needed, but never demanded. Partial payments count.
Overpayments count.

Due dates are tracked so the app carries the mental load, not the user.

The balance owed stopped being the headline. In its place: a live debt-free-by
date that moves closer with every payment, a reason to open the app instead of a
reason to avoid it.

Arrangements are shown as in place, needs setting up, or awaiting response,
because most real debt is mid-negotiation, not settled.

A creditor email sits ready for the moment someone's ready to use it.

There is no red emergency colouring anywhere. No streaks. No scolding. Jade
green and peach replace the harsh contrast the category runs on, set in Atkinson
Hyperlegible, with a leaf standing in for growth instead of debt.

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
