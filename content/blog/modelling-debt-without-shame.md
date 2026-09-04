---
slug: modelling-debt-without-shame
title: Modelling debt without modelling shame
subtitle: The data structure decisions behind Mirian.
date: 2026-06-27
readingTime: 8 min read
excerpt: >-
  A binary paid/unpaid field is the obvious way to model a debt payment. It's
  also the wrong one. The schema decisions behind Mirian, and why a data
  structure can encode shame just as easily as a UI can.
categories:
  - Development
  - Design
  - Neurodivergence
tags:
  - Development
  - UX
seo:
  title: Modelling debt without modelling shame
  description: >-
    A binary paid/unpaid field is the obvious way to model a debt payment. It's
    also the wrong one. The schema decisions behind Mirian, and why a data
    structure can encode shame just as easily as a UI can.
  ogImage: null
---

When you sit down to build a debt tracker, the first schema that occurs to
almost everyone is a boolean. A payment is either paid or it isn't. It's the
obvious model, it's the simplest model, and it's the model I threw out almost
immediately once I actually thought about who Mirian was for.

Mirian is a debt tracker built for neurodivergent users — particularly people
with ADHD and PDA — designed specifically to reduce the shame that tends to
attach itself to debt management. And it turns out a binary `paid: true/false`
field isn't a neutral technical choice sitting quietly underneath the UI. It's a
value judgement, encoded at the schema level, about what counts as success and
what counts as failure. I just hadn't noticed that until I tried to build one.

## Why a boolean is a moral position, not just a data type

A paid/unpaid boolean has exactly one way to succeed and infinite, unstructured
ways to fail. Paid on time, paid a day late, paid two weeks late after three
reminders, paid half of what was owed with an arrangement to cover the rest — a
boolean collapses all of that into a single "false," which means the schema
itself has already decided that partial effort and complete non-payment are the
same event.

> That's not a neutral representation of reality. It's a design decision that
> happens to live in a migration file instead of a Figma frame, and it's
> arguably a more consequential one, because every screen built on top of it
> inherits the same flattened judgement whether the UI designer intended that or
> not.

For a general-purpose finance app, this might not matter much. For an app
explicitly built to reduce shame for a user group that's often already carrying
a lot of it around money, a schema that can only say "you did the thing or you
failed" was never going to produce a UI that felt any different, no matter how
gently I worded the copy sitting on top of it.

## Replacing the boolean with branching payment states

What replaced it was a set of branching payment states rather than a single
flag: on time, late, short, and overpaid, with each state able to carry its own
optional notes and its own partial-amount tracking rather than forcing every
payment into a single number that either matches the expected amount or doesn't.

This sounds like a fairly small schema change, but it does real work downstream.
"Short" is not the same event as "unpaid," and a user who paid £30 of a £50
payment has, factually, done something different from a user who paid nothing —
the old boolean model had no way to represent that difference at all, which
meant the UI built on top of it couldn't represent it either, no matter how the
copy was worded.

> Once the states existed as distinct values rather than shades of the same
> failure flag, the interface could finally tell the truth about what actually
> happened — including the version of the truth where someone did most of the
> right thing, which a binary model structurally cannot express.

The optional notes field matters here too, in a quieter way: it gives a user
room to record context for themselves — "paid late because payday moved" —
without that context needing to change the underlying state. The schema doesn't
need to interpret the note. It just needs to have somewhere for it to live, so
the user isn't forced to either omit useful context or force it into a field
that wasn't built for it.

## Reframing the core object: from balance owed to debt-free-by

The bigger structural decision sat one level up from individual payments: what
the "core object" of the whole app actually represents. The obvious model treats
a debt as a balance — a number that goes down, ideally to zero, and sits there
as a persistent reminder of how much is still owed every time the user opens the
app.

I reframed the core object around a live "debt free by" date instead of a static
balance figure. The underlying numbers are the same — you still need to know
what's owed and what's been paid — but the thing the schema treats as the
primary, most-displayed value is a forward-looking date rather than a
backward-looking total.

> This isn't cosmetic. A balance owed is inherently a measure of a gap between
> where you are and where you should be, updated every time you open the app to
> remind you of the gap. A debt-free-by date is a measure of progress toward a
> resolution. Same data underneath, completely different relationship to time,
> and the schema has to be built to treat the date as the primary object, not
> just calculated and displayed as an afterthought on top of a balance-centric
> model.

## Modelling arrangements as a state machine, not a flag

Debt often isn't a simple bilateral relationship between a person and a fixed
payment schedule — arrangements get set up, renegotiated, fall through, get
re-established. I modelled payment arrangements with their own status — in
place, needs setting up, or awaiting response — rather than treating an
arrangement as either existing or not.

This matters for the same reason the payment states matter: "needs setting up"
and "awaiting response" are genuinely different situations that require
different actions from the user, and collapsing them into a single "no
arrangement" flag would have hidden that difference from both the data model
and, eventually, the UI built on top of it. A creditor contact email field sits
alongside this, because an arrangement that's "awaiting response" implies an
actual point of contact the data model needs to reference, not just an abstract
status with nothing behind it.

## What the schema deliberately refuses to track

Just as important as what the data model does track is what I deliberately kept
out of it. There's no streak counter. There's no field anywhere that would let a
"consecutive on-time payments" number get calculated and surfaced, because
that's exactly the kind of gamification mechanic that turns one missed payment
into a visible, quantified loss — the sort of thing that reads as motivating in
a habit-tracking app and reads as punishing in a debt app aimed at people who
are often already anxious about money.

> If a field doesn't exist in the schema, no future feature built on top of it
> can accidentally resurrect the shame mechanic it was designed to avoid.
> Deciding what not to model is as much a design decision as deciding what to
> include, and it's a lot easier to enforce at the schema level than to keep
> policing at the UI level every time someone adds a new screen.

The same logic shaped the colour system built on top of this data — no red
anywhere in the payment-state UI, regardless of which state a payment is
actually in, because red carries an alarm connotation that a "short" or "late"
state doesn't need reinforced visually on top of what the data already
communicates plainly enough in words.

## Why this is really a UX decision wearing a schema diagram

I think there's a tendency, especially among people newer to full-stack work, to
treat the database schema as the "backend part" that happens before the "real"
design work starts on top of it. Building Mirian convinced me that's backwards,
at least for a product like this.

> Every UI decision I made — the branching payment language, the debt-free-by
> framing, the absence of streaks — was only possible because the schema
> underneath it was built to support that decision in the first place. If the
> data model can only represent a boolean, no amount of thoughtful copywriting
> on top of it will ever produce an interface that tells the truth about a
> partial payment.

The database design and the UX design were, in this project, the same decision
made twice — once in TypeScript types and Supabase tables, and once in Tailwind
and copy. Getting the first one right is what made the second one possible at
all.
