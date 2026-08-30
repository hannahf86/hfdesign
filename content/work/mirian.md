---
# Content follows the CV. The CV lists Mirian as IN BETA TESTING and makes no
# claim about interview counts, SUS scores or completed usability testing, so
# those figures have been removed rather than carried over from the design
# handoff, where they were placeholders.
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
tools: Figma, React, TypeScript, Supabase
liveUrl: https://www.mirian-debt-tracker.app/auth/login
credentials:
  username: client@jorvikweb.dev
  password: JorvikWebDev2026!
openByDefault: false
hasCaseStudy: true
stats:
  - value: "4"
    label: payment options
    count: true
  - value: "5"
    label: payment states
    count: true
  - value: Beta
    label: in testing
    count: false
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

Most trackers offer only paid or not paid, so a part payment reads as failure or
goes unlogged entirely, designed for adults with ADHD, where executive function
fails unpredictably under financial stress.

For users with a PDA profile, it goes further. Demands themselves trigger
anxiety and avoidance, so the more a notification pushes "pay now", the more it
gets ignored. The app has to lower the demand, not raise it.

Something needs to change.

## process

Research on ADHD motivation shows goals become more achievable with visible
context and reachable wins. That pointed at the interface, not the balance, as
the thing causing avoidance, so the work started by questioning what the app
treats as its core object, rather than by restyling what was already there.

[FILL IN — if you ran your own interviews or a diary study, add the numbers and
what they surfaced. Nothing is claimed here that the CV does not support.]

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

In beta testing. The build handles five payment states with row-level security
per user, and there are no red crosses or harsh binaries anywhere in it.

[FILL IN — outcome figures once beta testing finishes. Task completion, any SUS
score, and what testers said about the tone.]
