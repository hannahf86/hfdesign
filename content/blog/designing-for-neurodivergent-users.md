---
slug: designing-for-neurodivergent-users
title: Designing for neurodivergent users
subtitle: What Wise Mind taught me about cognitive load.
date: 2026-08-31
readingTime: 9 min read
excerpt: >-
  Most of what I knew about cognitive load was written for users having a
  reasonably okay day. This is what changed once I started designing for the
  worst five minutes of someone's week.
categories:
  - Neurodivergence
  - Design
  - UX Laws
  - research
tags:
  - Accessibility
  - UX
seo:
  title: Designing for neurodivergent users — what Wise Mind taught me about cognitive load
  description: >-
    Building a DBT skills app for neurodivergent users exposed the gap between
    visual simplicity and cognitive simplicity — and changed how I audit
    language, structure and consistency on every project since.
  ogImage: null
---

When I started building Wise Mind, a DBT (Dialectical Behaviour Therapy) skills
app aimed at neurodivergent users, I thought I understood cognitive load. I'd
read the Nielsen Norman articles. I knew about Hick's Law and the perils of
choice paralysis. I could talk fluently about "reducing friction."

Then I started designing for people who are, on a bad day, trying to regulate an
emotional crisis while also trying to use my app to help them regulate it — and
I realised that most of what I thought I knew about cognitive load was written
for users who were, at minimum, having a reasonably okay day.

This post is about what changed in my process once I stopped designing for the
average user and started designing for the worst five minutes of someone's week.

## The problem with "clean and minimal"

Every design system I'd ever worked in prized the same things: whitespace,
restraint, a single clear call to action per screen. This is good advice, and
I'm not here to trash minimalism. But early on, I made a mistake that's common
enough to have a name in accessibility circles: I confused **visually quiet**
with **cognitively quiet**.

> What actually helps is predictable.

A screen can look uncluttered and still be hard to parse if the person using it
is dysregulated, distracted, or processing information differently than a
neurotypical baseline. For someone in emotional crisis, or someone with ADHD
trying to hold a thought long enough to act on it, "minimal" isn't automatically
helpful. What actually helps is **predictable**. Those aren't the same thing,
and conflating them was the first assumption I had to unlearn.

The redesign that followed wasn't about adding more visual noise. It was about
making sure that when someone's working memory has maybe two slots free instead
of the usual seven, the interface isn't asking them to hold anything they don't
strictly need.

## Language is an interface

One of the first structural changes I made was on the audit level, before a
single pixel moved: I went through every screen and replaced disorder-based
language with symptom-based language. Instead of labelling a section around a
diagnosis, I described what someone might actually be experiencing — the
feeling, the state, the moment — and let the app meet them there.

This sounds like a copywriting decision. It isn't. It's a cognitive load
decision.

Diagnostic labels require a layer of self-categorisation before someone can even
get to the help. If a user is mid-spiral and the app's navigation requires them
to first correctly identify which clinical category they fall into, you've
inserted a decision point at exactly the moment their decision-making capacity
is most compromised. Symptom language — "overwhelmed," "can't sit still," "need
to get through the next ten minutes" — lets someone navigate by how they feel
rather than by what they've been told they have. It's faster, it's kinder, and
critically, it doesn't assume the user has a diagnosis at all, which matters a
lot for people who are self-identifying or waiting on assessment (a genuinely
enormous population right now).

The lesson generalised beyond this one app: language isn't just tone-of-voice
work bolted onto a finished IA. It's part of the information architecture. Get
it wrong and you've built an extra, invisible step into every single task flow.

## Designing the moment nobody wants to design for

Wise Mind has a screen I think about more than any other part of the app: the
SOS screen. It surfaces UK crisis line numbers and walks a user through
5-4-3-2-1 grounding — the sensory technique where you name five things you can
see, four you can touch, and so on, pulling attention back into the present
moment.

> In a crisis flow, every single design decision either lowers cognitive load or
> adds to it, and there is no neutral option.

Designing this screen taught me something I hadn't fully internalised before: in
a crisis flow, every single design decision either lowers cognitive load or adds
to it, and there is no neutral option. A button that's slightly ambiguous, a
font that's slightly harder to scan, a colour that doesn't quite pop against the
background — none of these are cosmetic issues on this screen. They're the
difference between someone completing a grounding exercise and someone
abandoning the app to go find help elsewhere, or not looking at all.

That's what pushed me toward Atkinson Hyperlegible for body text across the app
rather than something more conventionally "friendly" — it's a typeface literally
designed to maximise character distinction for low-vision and cognitive
accessibility, and once I understood the stakes of the SOS screen, using it
everywhere else stopped being a nice-to-have and started feeling like the only
defensible choice. Consistency matters here too: I didn't want the typography to
shift register between "normal" screens and "crisis" screens, because that shift
is itself a cognitive event. The app should feel like the same place no matter
what state the user is in when they open it.

The same logic drove the colour system — a jade green built around calm without
tipping into the kind of pastel, saccharine wellness-app aesthetic that can feel
patronising to people who are dealing with something serious. Warm off-white
backgrounds instead of stark white, because stark white has a harshness under
certain lighting and cognitive states that a lot of neurotypical designers never
think to test for, because it's never been harsh to them.

## Structure as a form of care

A DBT app inherently has a lot of content: modules, skills, categories,
journaling, tracking. The naive approach is a single long list or a dense grid,
and I started there before realising it was a mistake.

What we moved to instead was colour-coded accordions per module on the tracking
pages, with search and filtering layered on top so a user could get to a
specific skill without scanning past twenty others first. On the Learn section,
a 2×2 grid on desktop rather than a long scroll. Small decisions, but they add
up to something specific: they let a user's goal determine how much of the
interface they have to process, rather than forcing everyone through the same
maximal information set regardless of what they came in needing.

This is where I think a lot of "accessible design" conversations stop short.
Accessibility gets treated as compliance — sufficient contrast, alt text, ARIA
labels — and those things matter, but they're the floor, not the ceiling. The
deeper accessibility question is: how much does someone have to hold in their
head to get from "I opened the app" to "I got what I needed"? For neurodivergent
users specifically, and for anyone in a dysregulated state, that number needs to
be much lower than most standard UX heuristics assume, and getting it that low
means being willing to add structure even when your instinct says to add
simplicity. Sometimes those pull in opposite directions, and this project is
where I learned to notice when they do.

## Customisation isn't a feature, it's an admission

One planned feature I keep coming back to is a fully customisable UI and
dashboard — letting users rearrange what they see and how much of it. My
instinct, trained by years of "opinionated design is good design," was initially
resistant to this. Good design, I'd have said, means making the right decisions
for the user so they don't have to.

Working on this app changed my mind, because it clarified something I'd been
fuzzy on: opinionated design is a bet that you know your user's context better
than they do. For a general consumer product, that bet is often correct enough
of the time to be worth making. For neurodivergent users, whose needs vary
enormously between individuals and even day to day for the same individual, that
bet is much shakier. Someone with ADHD might need a stripped-back dashboard on a
low-focus day and a fuller one when they're in a productive stretch and want
everything visible. A one-size interface can't serve both states well.

Building in customisation, in this context, isn't a nice-to-have or a power-user
feature. It's an honest acknowledgment that I don't know, and can't know,
exactly what any individual user needs at any given moment — and that the more
responsible design move is to give them the control rather than guess on their
behalf.

## What this changed about how I design, generally

I don't design exclusively for mental health or accessibility contexts, and I
don't think every product needs an SOS screen. But this project permanently
shifted a few defaults in how I approach any UX work:

- I now audit language as part of information architecture, not as a copy pass
  that happens after the wireframes are locked.
- I distinguish between visual simplicity and cognitive simplicity, and I check
  which one a design decision is actually serving.
- I treat consistency across "normal" and "high-stakes" states of a product as a
  deliberate design decision, not an afterthought.
- I'm more willing to add structure (categorisation, filtering, colour-coding)
  instead of defaulting to minimalism, when structure is what actually reduces
  the load on a user's working memory.
- I hold "customisable" and "opinionated" as a real trade-off to weigh per
  project, rather than assuming one is always the more mature choice.

Designing for cognitive load in a crisis context is a much higher bar than
designing for cognitive load in general, and I think that's exactly why it's
worth doing: it exposes the gap between UX best practices that sound right and
UX decisions that actually hold up when someone needs them to. Wise Mind is
still evolving, and I expect my thinking on this will keep evolving with it. But
it's the project that taught me to ask a better question than "is this clean?" —
namely, "who is this clean for, and what are they going through when they open
it?"
