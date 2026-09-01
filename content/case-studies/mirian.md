---
# Content follows the CV, which lists Mirian as IN BETA TESTING and makes no
# claim about interview counts, SUS scores or completed usability testing.
# Those figures have been removed rather than carried over from the design
# handoff, where they were placeholders.
slug: mirian
num: "03"
client: Mirian
eyebrow: case study 03 · 2026
title: Mirian
titleLine2: Debt Tracker
lead: >-
  A debt tracker designed to reduce shame, because shame is why people stop
  opening the app.
hero: /assets/work/mirian.webp
liveUrl: https://www.mirian-debt-tracker.app/auth/login
liveLabel: Visit the Mirian beta
heroAlt: The Mirian debt tracker, showing the calm, red-free balance view.
meta:
  - label: role
    value: Product design, research, frontend
  - label: tools
    value: Figma, React, TypeScript, Supabase
  - label: duration
    value: 6 weeks
  - label: sector
    value: Personal finance
next:
  slug: lucent-biopharma
  label: LUCENT Biopharma
seo:
  title: Mirian case study
  description: >-
    A debt tracker designed to reduce shame, because shame is why people stop
    opening the app.
  ogImage: /assets/work/mirian.webp
sections:
  - id: problem
    num: "01"
    label: problem
    heading: Debt tools are built for people who feel fine about their debt.
  - id: research
    num: "02"
    label: research
    heading: >-
      What the interface itself was doing to people, not just what it was
      tracking.
    personas:
      - name: avoidant
        body: >-
          Knows the balance exists and actively avoids checking it, because
          seeing the number feels worse than not knowing. Needs the app to lead
          with something other than the total.
      - name: over-monitoring
        body: >-
          Checks compulsively, re-entering the same numbers for reassurance,
          which increases anxiety rather than resolving it. Needs a single,
          trustworthy source of truth rather than a running mental tally.
      - name: newly diagnosed
        body: >-
          Recently identified as neurodivergent and only just connecting that
          diagnosis to years of financial struggle. Needs the app's tone to
          explain, not judge, since it may be the first tool that has
          acknowledged the connection at all.
    artefact:
      label: Dashboard, tracker and debts
      image: /assets/case-studies/mirian-screens-01.webp
      alt: >-
        Three Mirian screens on mobile. The dashboard leads with a debt-free
        date rather than a balance, then the total, the monthly budget and what
        is due this month. The 2026 tracker gives each debt a twelve-month row
        of payment markers. The debts list shows what is remaining and, on each
        debt, a plain prompt that more details can be added whenever, with no
        deadline attached.
  - id: decisions
    num: "03"
    label: decisions
    heading: >-
      Every decision answers a specific ND mechanism, not a general
      accessibility checklist.
    numbered:
      - >-
        Paid/unpaid became on time, late, short, overpaid. A binary only works
        if life is binary. This state alone addresses the avoidant persona
        directly: a short payment now has somewhere to go other than "failure",
        which is what stops it going unlogged.
      - >-
        Due dates are tracked per debt, not left to memory. Executive function
        is what fails first under financial stress, so the app was built to
        carry that specific load rather than assume it will be remembered, which
        is also what stops the over-monitoring persona re-checking the same
        information by hand.
      - >-
        The balance owed stepped aside for a live debt-free-by date. An open
        balance only measures distance from a goal, which research on ADHD
        motivation identifies as demotivating precisely because the win never
        feels reachable. A date that moves closer with each entry gives a
        visible, incremental reward instead.
      - >-
        Arrangements got a third state: in place, needs setting up, awaiting
        response. Most real debt sits unresolved, not settled, and a system that
        only offers two states forces a false answer, which is its own small,
        avoidable source of shame.
      - >-
        No red, no streaks, no total on the home screen unless asked for. Colour
        and gamification mechanics common to the category read as pressure, and
        pressure is exactly what a PDA profile responds to with avoidance rather
        than compliance.
      - >-
        Plain-language framing over financial jargon, because jargon adds a
        second barrier on top of an already anxiety-loaded task.
      - >-
        Every destructive or overdue state is written as a sentence, never
        signalled by colour alone, both for colourblind accessibility and
        because a red badge alone reads as an alarm, where a sentence can carry
        the same information without the same charge.
      - >-
        Reduced motion respected throughout, since sudden movement is a common
        sensory trigger and has no functional purpose here.
      - >-
        A creditor contact email field sits ready in the debt record, so the
        hardest single action in debt management, actually contacting a
        creditor, has its detail in place before the moment someone is ready to
        use it, rather than adding a lookup step on top of an already difficult
        decision.
  - id: handoff
    num: "04"
    label: handoff
    heading: Built solo, in beta.
  - id: outcome
    num: "05"
    label: outcome
    stats:
      - value: "4"
        label: payment options
      - value: "5"
        label: payment states
    closing: >-
      In beta testing. Outcome figures follow once that finishes, nothing is
      claimed here that hasn't happened yet.
---

## problem

97% of neurodivergent people say their neurodivergence makes debt harder to
manage, but 64% never ask their creditors for help, and only 32% of those who
reach debt advice disclose being neurodivergent at all
([StepChange/Equifax, 2025](https://www.stepchange.org/about-us/impact-report-2025/equifax.aspx)).
The gap isn't awareness. It's shame: overwhelm, anxiety and stigma are the top
reasons people go quiet exactly when they need support most.

Red totals, streaks and scolding notifications punish exactly the moment a user
most needs to engage, and neurodivergent users, who are over-represented in
problem debt, drop out first. For users with a PDA profile, it goes further: PDA
is an anxiety-driven need to stay in control, where demands themselves, not just
the task behind them, trigger avoidance. A notification pushing "pay now"
doesn't create urgency, it creates a reason to look away.

## research

Most trackers offer only paid or not paid. For a user managing debt with ADHD,
that binary is actively hostile: a part payment, made on a month when full
payment wasn't possible, reads as failure and either goes unlogged or gets
recorded as a loss. Research on ADHD motivation shows goals become more
achievable with visible context and reachable wins, which reframed the problem:
the interface was the thing triggering avoidance, not the balance itself.

## decisions

## handoff

Built solo rather than handed over, and currently in beta testing. Five payment
states with row-level security scoping each user's financial data individually,
and the interface set in Atkinson Hyperlegible throughout for legibility. Jade
green and peach replace the red-and-alarm palette the category defaults to, with
a leaf motif standing in for growth rather than debt.

## outcome
