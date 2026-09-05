---
slug: reading-ga4-and-reading-a-user
title: Reading GA4 and reading a user are two different skills
date: 2026-09-03
readingTime: 6 min read
excerpt: >-
  A dashboard will tell you with total confidence that 68% of users dropped off
  at step three. It will never tell you why — and the people who assume those
  two skills are interchangeable are usually the ones shipping the wrong fix.
categories:
  - research
  - workflow
tags:
  - Research
  - Process
seo:
  title: Reading GA4 and reading a user are two different skills
  description: >-
    Why quantitative data tells you the shape of a problem and never its
    texture — and how qualitative observation and analytics narrow each other
    down, rather than running as two separate phases.
  ogImage: null
---

A GA4 dashboard will tell you, with total confidence, that 68% of users dropped
off at step three of your checkout flow.

What it will never tell you is *why*. And I've watched enough people — smart,
experienced people — treat the number as if it already contains the answer, when
really it's just a very precise description of the question.

This is the gap I spend a lot of my working life sitting inside: reading
quantitative data well enough to know exactly where to look, and reading actual
users well enough to know what I'm looking at once I get there. They're
genuinely different skills. Most people are better at one than the other, and
the people who assume the two are interchangeable are usually the ones shipping
the wrong fix.

## What quantitative data is actually good at

I want to be clear that this isn't an "analytics bad, interviews good" post.
GA4, funnel data, heatmaps, A/B test results — these tools are extraordinary at
doing one specific job: telling you *where* to spend your limited attention.

Without that data, you're guessing at scale. You might correctly intuit that
your onboarding flow has a problem, but you won't know if it's costing you 2% of
users or 40% of them, and those are two very different conversations with a
stakeholder. Quantitative data is what turns "I have a hunch" into "here is
exactly which step, for exactly what proportion of users, is the actual
problem."

> That's not a small thing. It's the difference between fixing what's broken and
> fixing what you *feel* is broken, which are not reliably the same list.

## What quantitative data cannot do, no matter how good the dashboard is

Here's where I see people go wrong, repeatedly: they treat the drop-off point as
the diagnosis rather than the symptom.

A 68% drop-off at step three could mean the form is confusing. It could mean the
page loads slowly on mobile. It could mean people are being asked for a phone
number they weren't expecting and don't want to give out. It could mean
absolutely nothing is wrong with step three, and something upstream is quietly
filtering out everyone who was never going to complete the flow anyway, so the
people who do reach step three are disproportionately the least motivated ones.

All of these produce the exact same number in the exact same dashboard. GA4
cannot distinguish between them. It's not a flaw in the tool — it's simply not
the kind of question quantitative data is built to answer.

> Numbers tell you the shape of a problem. They don't tell you its texture.

## The mistake of "optimising the number"

A/B testing makes this worse in a specific way, because it gives you a
satisfying, statistically clean answer without ever forcing you to ask why that
answer is true.

If Variant B converts better than Variant A, you have a real, actionable result.
But if you stop there, you can end up in a strange position: shipping a change
you can prove works, without being able to explain what it fixed. That's
fragile. It means you can't generalise the insight to your next design decision,
because you never actually understood the underlying user behaviour — you just
found a version that happened to perform better, for reasons you never
investigated.

I've seen this produce genuinely bizarre outcomes, where a "winning" variant
ships and the team learns nothing transferable from it at all, because nobody
asked the qualitative question underneath the quantitative result.

## Where the two skills actually meet

My actual process, in practice, looks less like "run analytics, then run
interviews" as two separate sequential phases, and more like a back-and-forth
between the two, each one narrowing what the other needs to investigate.

Quantitative data tells me where to point qualitative attention. If a specific
screen has an unusually high exit rate, that's where I go watch real people use
it, rather than spreading observational effort evenly across a whole flow and
hoping I happen to notice the right thing.

Qualitative observation then tells me what to actually test quantitatively.
Watching someone hesitate, re-read a label twice, or start filling in a field
and then stop, gives me a specific hypothesis — "the label's ambiguous," "the
field feels like it's asking for more than it needs to" — that I can then
validate against a much larger sample than I could ever personally watch.

Neither direction works well alone.

> Quant without qual tells you where the fire is without telling you what's
> burning. Qual without quant tells you what's burning in vivid, convincing
> detail, based on a sample size too small to know if it's the actual fire or
> just the one person you happened to be watching.

## A concrete example of how this plays out

Say a client's Shopify checkout flow shows a spike in cart abandonment on a
specific step — the kind of thing GA4 surfaces easily and immediately. The lazy
read is "make the button bigger" or "add urgency copy," because those are the
two interventions everyone reaches for reflexively.

The better process is to go and actually watch a handful of real users hit that
step. Sometimes what you find is boring and unglamorous: a shipping cost that
only appears at that exact point, and the abandonment isn't a UX problem at all,
it's a pricing transparency problem wearing a UX costume. No amount of
button-resizing fixes that, and no A/B test on button colour would ever have
surfaced the real cause, because the test was answering a question nobody should
have been asking yet.

> This is the actual value of holding both skills at once: it stops you from
> confidently solving the wrong problem, quickly, with data to back it up.

## Why this matters for how I work with clients and teams

Part of why I think this distinction matters so much, professionally, is that a
lot of organisations reward whichever skill is easier to put in a slide.

> A conversion percentage looks authoritative in a report. "I watched three
> people get confused by this label" looks soft by comparison, even when it's
> the more useful finding.

I try to bring both into the room, deliberately, and translate between them for
whoever I'm working with — because a stakeholder who only sees the GA4 number
will reach for the wrong fix with total confidence, and a stakeholder who only
hears the qualitative anecdote won't know if it's worth acting on at scale. My
job, a lot of the time, isn't picking one method over the other. It's being the
person in the room who can hold both, and knows which one to reach for first
depending on whether the question is "where's the problem" or "what actually is
it."

That's the skill that doesn't show up cleanly on a CV line that just says
"experienced with GA4 and A/B testing." But it's the one that actually
determines whether the data leads somewhere useful, or just somewhere
measurable.
