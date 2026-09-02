---
slug: researching-users-who-cant-tell-you
title: Researching users who can't always tell you what they need
subtitle: What building Wise Mind taught me.
date: 2026-07-27
readingTime: 7 min read
excerpt: >-
  Standard UX research assumes the user can tell you what they need, if you just
  ask the right question. That assumption fell apart the moment I started
  researching for people who might open the app mid-crisis.
categories:
  - research
  - Neurodivergence
tags:
  - Research
  - UX
seo:
  title: What building Wise Mind taught me about researching users who can't always tell you what they need
  description: >-
    Methods for research where self-report is unreliable — recruiting with
    empathy first, structured recall over general reflection, proxies for the
    moment you cannot ethically observe, and treating silence as data.
  ogImage: null
---

Standard UX research methodology has a quiet assumption baked into almost all of
it: that the user can accurately tell you what they need, if you just ask the
right question in the right way.

Most of the time, that assumption holds up fine. It's why interviews and surveys
work as well as they do.

But when I started researching for Wise Mind — a DBT skills app for
neurodivergent users, some of whom would be opening it during genuine emotional
crisis — that assumption fell apart almost immediately.

Not because these users are somehow less capable of self-knowledge. They're not.
It's because the exact moment your product matters most to them is also, very
often, the moment their access to their own insight is most compromised.

> You cannot reliably interview someone about what they needed during a panic
> attack while they're mid-panic-attack.

And by the time they're calm enough to reflect on it, memory has already
smoothed the experience into something tidier than what actually happened.

This post is about what I had to build instead.

## The problem with asking "what do you need"

Early on, I ran the research the way I'd been trained to: recruit users, ask
open questions, listen for patterns.

It produced real, useful insight. I'm not dismissing interviews wholesale here.

But I noticed a specific gap. When I asked users to describe what they'd want
from a crisis-support screen, the answers were thoughtful, articulate, and
reasonable — and consistently more composed than what I later observed when I
watched people actually try to use early prototypes under simulated time
pressure.

This isn't a contradiction or a sign anyone was lying to me. It's a known
effect. People describing a state from outside it reconstruct a more coherent
version of it than the one they were actually in.

> Ask someone calm to describe what they need when overwhelmed, and you get the
> *overwhelmed self as imagined by the calm self* — which is a real and useful
> data point, but not the same thing as the overwhelmed self's actual,
> in-the-moment requirements.

## Recruiting for a study you can't fully script in advance

Recruiting itself needed rethinking.

I put together a fairly detailed user-testing questionnaire — 32 questions, run
through Tally — because I needed structured data I could actually compare across
responses, not just a pile of individually interesting anecdotes.

But structure alone doesn't solve the harder problem: how do you invite people
into a study about crisis and cognitive overwhelm without either scaring them
off, or worse, making the recruitment process itself feel clinical and detached
from the actual lived experience you're trying to understand?

The answer, for me, was to lead with story rather than with a formal study
brief. I wrote a founder-story post for recruitment — explaining why I was
building this, and why their input specifically mattered — rather than a generic
"seeking participants for UX research" call.

It changed who showed up, and how they showed up. People engaged with something
that felt like it understood them first, and only asked something of them
second.

> That ordering matters more in this kind of research than it does in most.

## Designing around the moment you can't observe directly

There's an ethical wall in this kind of research that doesn't exist in most UX
work: you generally shouldn't be watching someone in real crisis in order to
gather data on them. Nor should you be trying to induce anything resembling
crisis conditions in a testing environment. That would be actively harmful, and
no research insight justifies it.

So a meaningful part of the actual crisis-facing experience is, by design,
something I can never directly observe happening in the wild, in the moment, the
way you might watch someone struggle through a checkout flow.

What I could do instead was work in proxies.

I audited existing screens for cognitive load under *simulated* pressure — timed
tasks, deliberately degraded attention conditions — rather than genuine crisis.
It's an approximation, not a replacement, and I want to be honest about that
rather than oversell it as equivalent.

I also leaned much harder on retrospective accounts specifically structured to
reduce the smoothing effect I mentioned earlier — asking not "what do you want
in that moment" but "walk me through the last time this actually happened, in
order, including the parts that didn't work."

Specific, sequential, recent recall produces meaningfully less polished — and
more useful — data than a general reflective question does.

## Symptom language as a research finding, not just a copy choice

One of the clearest research-driven decisions to come out of this work was
replacing diagnostic labels with symptom-based language throughout the app —
describing what someone is feeling, rather than naming a clinical category they
might, or might not, identify with.

I've written about this before as a design decision. But it started life as a
research finding.

Several participants, when talking through their own past experiences, never
once used a diagnostic term to describe what they were going through in the
moment. They used feelings. States. Physical sensations. The clinical vocabulary
came later, if at all, applied retrospectively once they were already calm
enough to categorise the experience.

That told me something concrete: if the interface required someone to
self-categorise diagnostically in order to find help, it was asking them to do a
cognitive task that didn't match how they'd actually described the moment to me
at all.

> This is the kind of finding you only get by listening closely to *how* people
> narrate an experience, not just what they say they want from a feature.

## Learning to read absence

A genuinely difficult skill to build in this kind of research is treating what
people *don't* say as data.

Several early testers, when walked through a proposed crisis flow, gave polite,
positive feedback on features I'd expected more resistance to, and stayed
conspicuously quiet on a part of the flow I'd assumed was fine.

> My first instinct was to read the silence as neutral. It wasn't.

Following up specifically on the quiet sections, rather than the sections people
volunteered opinions about, surfaced some of the most important feedback in the
whole study — including confirmation that a particular navigation pattern was
quietly confusing enough that people didn't feel equipped to articulate why, so
they said nothing rather than admit they couldn't explain the problem.

I now treat unprompted silence on a specific screen as a flag worth actively
investigating, not a sign everything's fine.

## What I'd tell another researcher walking into this kind of project

If you're researching for users in crisis states, cognitive overwhelm, or
conditions that affect self-report reliability, a few things I'd say plainly:

Don't discard interviews and surveys. They still produce real signal. Just don't
treat them as a complete picture, and build in methods that don't depend
entirely on accurate, in-the-moment self-report.

Recruit with empathy leading, not the study design leading. Who shows up, and
how honestly they engage, depends heavily on how the invitation itself feels.

Accept the ethical boundary around directly observing genuine crisis, and get
comfortable working through proxies and structured recall instead of treating
that boundary as an obstacle to route around.

Pay attention to the vocabulary people use unprompted, not just the answers to
the questions you asked. It's often more honest than anything a structured
question can surface.

And treat silence as data worth chasing, not as an absence of a problem.

## Why this changed how I think about research generally

I don't think every project needs this level of methodological care. Most UX
research is, appropriately, more straightforward than this.

But working on Wise Mind permanently shifted my baseline assumption about
self-report. I now treat "what the user told me they need" as one input among
several, rather than the ground truth, on every project I work on — not just the
ones involving crisis states.

Because if the method only works when the user is calm, articulate, and fully
able to reflect on their own experience, it was never actually testing the
hardest, most important five minutes of their relationship with your product.
And for a lot of the users who need good design the most, that's precisely the
five minutes that matters.
