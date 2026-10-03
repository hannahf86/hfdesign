---
slug: resumable-forms-autosave
title: "Building forms that don't punish you for stopping halfway"
subtitle: '"I got distracted and came back three days later" should be a non-event, not a data-loss incident.'
date: 2026-10-03
readingTime: 8 min read
excerpt: >-
  "Got distracted and came back three days later" is a completely normal way for
  an ADHD user to interact with a long form. Most backends treat it as data
  loss. The state logic that makes it a non-event instead.
categories:
  - Development
  - Neurodivergence
tags:
  - Development
seo:
  title: Building forms that don't punish you for stopping halfway
  description: >-
    "Got distracted and came back three days later" is a completely normal way
    for an ADHD user to interact with a long form. Most backends treat it as
    data loss. The state logic that makes it a non-event instead.
  ogImage: null
---

Most multi-step forms are built on an unspoken assumption: the user will sit
down, start at step one, and finish at step five in a single, uninterrupted
session. The whole state model — what's held in memory, what's persisted, what
happens if the tab closes — is designed around that assumption, usually without
anyone consciously deciding to design around it. It's just the default shape a
form takes when nobody specifically thought about interruption.

For a lot of ADHD users, that assumption is wrong more often than it's right.
Starting a form, getting distracted by literally anything else, and returning to
it a day, three days, or a week later is an extremely normal interaction pattern
— not an edge case, not user error, just how the task actually gets done.
Building forms that treat this as the expected path, rather than a failure mode
to route around, is mostly a backend and state-management problem, and it's a
more interesting one than it looks from the outside.

## Why "just add a confirm-before-leaving dialog" doesn't solve this

The naive fix for form abandonment is a `beforeunload` warning — "are you sure
you want to leave, your changes will be lost" — which treats the symptom rather
than the actual problem. It assumes the user is choosing to lose their progress
and just needs a nudge to reconsider. That's not what's happening when someone
gets distracted mid-form. They're not making a decision to abandon it. Their
attention has simply moved somewhere else, often involuntarily, and a dialog box
asking them to confirm a choice they're not consciously making doesn't help —
it's just one more thing demanding a decision from someone whose executive
function has already redirected elsewhere.

> The actual fix isn't warning the user not to leave. It's making leaving, at
> any point, completely safe to do — so the warning becomes unnecessary rather
> than more aggressive.

## Treating every field change as a save event, not the final submit

The structural shift is moving away from a single "submit" event that persists
everything at once, toward treating the form as a continuously-saved draft from
the first keystroke. Each field change debounces into a save — typically a few
hundred milliseconds after the user stops typing — rather than waiting for a
submit button that might never get pressed in that session at all.

On the backend, this means the row representing a given form response needs to
exist, in a `draft` or `in_progress` status, from the moment the user starts,
not from the moment they finish. An upsert on a stable identifier — tied to the
user and the form instance, generated the moment the form opens, before any
field has been touched — means every save is idempotent: the same operation
whether it's the first keystroke or the fiftieth session resuming three weeks
later. There's no special "create" path and separate "update" path to keep in
sync. It's the same write, every time, which removes an entire category of bug
where the two paths drift apart over time as the form evolves.

> If your resume logic is structurally different code from your initial-save
> logic, you now have two places a future feature can accidentally forget to
> update one of them. Collapsing them into the same upsert removes that risk
> entirely rather than relying on discipline to keep both paths in sync.

## Partial validation vs. final validation, kept as genuinely separate concerns

A form that saves every keystroke immediately runs into an obvious tension: you
don't want to enforce full validation on a field the user has only half-typed,
but you also don't want to persist genuinely malformed data that'll cause
problems downstream. The fix is keeping two distinct validation passes that
never get conflated into one.

Draft-save validation is permissive — it checks that the value is safe to store
(correct type, not something that'll break a later query) but doesn't require it
to be complete or fully correct yet. Submit-time validation is the strict pass,
applied only when the user actually declares the form finished, checking the
full set of business rules a draft was never required to satisfy. A half-finished
email address is a perfectly valid thing to have sitting in a draft row. It's not
a valid thing to accept as a final answer. Conflating these two checks — or
worse, only having one — either lets through genuinely broken final submissions,
or blocks a legitimate draft save because the user hasn't finished typing yet.

## Resuming where they left off, including which step they were on

Persisting field values solves half the problem. The other half is step position
— if it's a multi-step form, the user needs to land back on the step they were
on, not step one, when they return. This means the step index itself is part of
what gets saved on every transition, not just inferred client-side from which
fields happen to be filled in.

> Inferring position from filled fields is tempting because it avoids an extra
> bit of state, but it breaks the moment a later step has fields that happen to
> overlap in shape with an earlier one, or the moment the form's structure
> changes between the session that started the draft and the session that
> resumes it. An explicit, persisted step index is a few extra bytes of state
> that removes an entire category of "why did it put me back on the wrong step"
> bug.

## Handling a form schema that's changed since the user started

This is the edge case most resumable-form implementations quietly ignore, and
it's a real one: if a form gets a new required field added between the session a
user started a draft and the session they resume it, what happens to that stale
draft? The safest approach is treating the saved draft as a partial record
against the *current* schema, not a frozen snapshot of the old one — meaning a
newly added field simply appears as unanswered when the user resumes, exactly as
if they'd just reached that point for the first time, rather than the resume
flow breaking or silently dropping their existing progress because the shape no
longer matches exactly.

> A resumable form that can't survive its own schema changing isn't actually
> resumable — it's just a draft save that happens to work until the next deploy.
> Designing for schema drift from the start, rather than treating the current
> schema as permanent, is the difference.

## Why this is worth the extra backend complexity

None of this is free. A form that saves continuously, validates in two passes,
tracks explicit step position, and tolerates schema drift is genuinely more
backend logic than a single-submit form with one validation pass. I don't think
every form needs this treatment — a simple three-field contact form doesn't need
draft persistence, and building it in anyway would be over-engineering a problem
that doesn't exist at that scale.

> Where it earns its complexity is any form long enough, or high-stakes enough,
> that abandonment is a near-certainty for a meaningful chunk of your users —
> and where a user returning to find their progress gone isn't just an
> inconvenience, it's the kind of friction that stops them from ever finishing
> the task at all.

For that category of form, the extra backend work isn't polish. It's the
difference between a tool that actually gets used by the people it was built
for, and one that quietly filters out exactly the users who most needed it to be
forgiving in the first place.
