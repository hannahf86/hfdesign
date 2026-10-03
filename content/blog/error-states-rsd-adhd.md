---
slug: error-states-rsd-adhd
title: "Error states are a cruelty risk for ADHD users, and most devs don't treat them that way"
subtitle: A red border costs most users half a second of irritation. For some users, it costs a lot more.
date: 2026-09-23
readingTime: 8 min read
excerpt: >-
  A red border and the word "Error" cost most users half a second of irritation.
  For a user with rejection-sensitive dysphoria, the same red border can cost
  them the rest of the session. Validation logic and error copy, rewritten
  around that difference.
categories:
  - Neurodivergence
  - Design
  - Development
tags:
  - Development
  - UX
seo:
  title: Error states are a cruelty risk for ADHD users, and most devs don't treat them that way
  description: >-
    A red border and the word "Error" cost most users half a second of
    irritation. For a user with rejection-sensitive dysphoria, the same red
    border can cost them the rest of the session. Validation logic and error
    copy, rewritten around that difference.
  ogImage: null
---

Most developers treat form validation as a solved problem. Required field, regex
check, red border, error text, done. It's a pattern so standardised that most of
us implement it without thinking about it, which is exactly the problem, because
"without thinking about it" is precisely how a genuinely harmful default gets
copied from project to project without anyone ever questioning it.

Rejection-sensitive dysphoria — an intense emotional response to perceived
criticism or failure, common though not universal among people with ADHD — means
that for a meaningful number of users, a red form field isn't a neutral piece of
information. It can register as something closer to a personal verdict. I didn't
fully internalise how much that should change my validation logic until I was
building Mirian, a debt tracker explicitly aimed at ADHD and PDA users, where
getting this wrong wasn't a minor UX miss. It was a design choice that could
plausibly stop someone from using a tool they needed.

## Why the standard pattern is worse than it looks

The default web form pattern stacks several small decisions that each seem
reasonable in isolation and compound into something much harsher than intended.
Validation fires on blur or on submit, often after the user has already moved
past the field, so the "failure" is delivered as a surprise rather than in the
moment it's still easy to act on. The visual language is red, a colour that
carries an alarm connotation regardless of how mild the actual issue is. And the
copy is frequently terse and declarative — "Invalid input," "This field is
required" — phrased as a statement about what's wrong rather than an instruction
about what to do next.

> None of these decisions were made maliciously. They were made by default,
> inherited from a thousand other forms, by developers who never had a reason to
> ask whether "Invalid input" in red, delivered as a surprise after the fact,
> might land differently for some of the people reading it.

For a user without RSD, this pattern costs a flash of mild annoyance. For a user
with it, the same pattern can trigger a genuine shame spiral severe enough to
make them close the tab rather than finish the form — which, in a debt-tracking
app specifically, means the one moment they were trying to engage with their
finances just got interrupted by the tool itself.

## Moving validation earlier, so "wrong" never gets a chance to feel like a verdict

The single highest-leverage change is timing, not colour. Validating as the user
types, rather than after they've moved on or submitted, means a mismatch gets
caught and corrected while it's still part of active, forward-moving effort —
not surfaced later as a standalone failure to confront.

In Mirian's forms, inline validation runs on a short debounce as the user types,
with feedback appearing close to the moment of the actual keystroke that caused
the issue rather than batched up and delivered as a block of errors after
submission. The practical effect: a user correcting a date format mid-entry
experiences it as "still writing," not "got it wrong and am now being told so."
The same information reaches them either way. The emotional framing is
completely different depending on when it arrives.

> An error delivered mid-task reads as a correction. The same error delivered
> after submission reads as a result — and a result is the kind of thing RSD
> attaches itself to.

## No red, anywhere, regardless of severity

This is a decision I made at the colour-system level, not the component level,
specifically so no individual developer working on a future feature could
accidentally reintroduce it by picking a sensible-looking default. There is no
red in Mirian's UI, including in validation states. Issues are communicated
through a warmer, lower-alarm colour from the existing palette, paired with an
icon and copy doing the actual work of explaining what's needed, rather than
relying on a colour that's culturally coded as "stop, you've done something
wrong."

> If red doesn't exist anywhere in the design tokens, no future error state can
> accidentally use it, the way "no streak counter in the schema" meant no future
> feature could accidentally resurrect a shame mechanic. Removing the option is
> more reliable than trusting every future decision to be made thoughtfully
> under deadline pressure.

This isn't about pretending an issue doesn't exist, or softening it to the point
of being unclear. The field still needs to communicate, plainly, that something
needs attention. It just doesn't need to borrow the visual vocabulary of an
alarm to do it.

## Rewriting error copy from a verdict into an instruction

The copy change matters as much as the colour change, and it's the part that's
easiest for a developer to get right without needing a designer's input at all,
because it's mostly just a sentence-level rewrite. "Invalid input" is a verdict
about the user. "Needs a date in DD/MM/YYYY" is an instruction about the field.
The information content is identical. The emotional register is not.

> Every error message in a form is implicitly answering one of two questions:
> "what did you do wrong," or "what do I need from you." The first framing
> centres the user's failure. The second centres the task still to be completed.
> Only one of those is actually useful information, and it's not a coincidence
> that it's also the kinder one.

I apply this as close to a hard rule across every form I write now: no error
copy that names the user as the subject of the sentence. The field is missing
something, or the format doesn't match — the user isn't wrong, the input doesn't
match yet, which is a factually identical statement with a completely different
emotional target.

## Letting a field stay "unresolved" without escalating

One pattern I actively avoid is compounding visual severity the longer a field
stays unfixed — a field that starts with a gentle outline and gets progressively
louder, redder, or more insistent the more times a user fails to correct it.
It's a common pattern, usually framed as "drawing attention," but for an
RSD-sensitive user, an error state that gets visually louder each time they fail
reads as escalating disappointment, not escalating helpfulness.

> Mirian's fields hold a single, consistent level of attention regardless of how
> many attempts it takes to resolve them. The tenth attempt looks exactly as
> calm as the first. The system doesn't get more annoyed with you the longer you
> take, because the system genuinely isn't annoyed with you at all, and the UI
> shouldn't imply otherwise.

## Why this isn't really a "nice to have" accessibility layer

I think the easiest way to misunderstand this post is to file it under
"thoughtful extra polish for a specific user group," the kind of thing that's
good practice but optional under deadline. I'd push back on that framing. A
validation pattern that reliably causes a meaningful subset of your users to
abandon the task isn't a polish gap. It's a functional failure of the form,
measured in actual lost completions, that happens to disproportionately affect
users with a specific, common, often undiagnosed trait.

> The standard red-border-plus-terse-copy pattern isn't neutral just because
> it's familiar. It was built without this user in mind, which isn't the same as
> being built to be fair to them. Once you know that, shipping the default
> without examining it is a choice, not an oversight.

I don't think every form needs the full treatment Mirian's forms get — not every
product carries the same stakes. But I now default to asking the same four
questions on every form I build regardless of the project: when does this fire,
what colour is doing the signalling, who is the grammatical subject of the error
copy, and does the system get louder the longer someone struggles. Four small
questions, asked early enough to shape the component rather than patch it
afterwards, and the difference in how the form actually feels to use is enormous.
