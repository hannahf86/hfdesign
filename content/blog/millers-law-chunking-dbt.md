---
slug: millers-law-chunking-dbt
title: "Miller's Law, chunking, and what DBT skills taught me about grouping information"
subtitle: Seven items, give or take — but the grouping matters more than the count.
date: 2026-07-19
readingTime: 7 min read
excerpt: >-
  Miller's Law says working memory holds about seven items. Building the
  information architecture for a DBT skills app taught me that the real skill
  isn't counting items — it's finding the grouping logic the user already
  carries in their head.
categories:
  - UX Laws
  - Design
  - Neurodivergence
tags:
  - UX Laws
seo:
  title: Miller's Law, chunking, and what DBT skills taught me about grouping information
  description: >-
    Miller's Law says working memory holds about seven items. Building the
    information architecture for a DBT skills app taught me that the real skill
    isn't counting items — it's finding the grouping logic the user already
    carries in their head.
  ogImage: null
---

Miller's Law gets summarised, almost universally, as "people can hold about
seven items in working memory, plus or minus two." It's one of the most cited
findings in cognitive psychology, and also one of the most lazily applied,
because most people stop at the number and never get to the actually useful part
of the original research.

The number isn't the finding. The finding is that the number changes completely
depending on how the information is grouped — and that grouping, not counting,
is the entire lever a designer actually has to pull.

I learned this properly while building the information architecture for Wise
Mind, a DBT (Dialectical Behaviour Therapy) skills app, which meant organising a
genuinely large body of therapeutic content into something a user could actually
navigate — including, sometimes, a user who was navigating it at the exact
moment their working memory was under the most strain.

## Why "just keep it to seven items" is bad advice on its own

DBT as a therapeutic framework has four skill modules, each containing multiple
individual skills, each of which can be broken down further into steps. Taken
flat, that's easily forty or fifty discrete pieces of content. "Keep it to
seven" doesn't survive contact with content that's genuinely, unavoidably large.

> Miller's actual insight wasn't a hard limit on quantity. It was that the limit
> applies to chunks, not items — and a chunk can be as large as you like
> internally, provided it's grouped in a way the user's brain already recognises
> as one thing.

This is the distinction that got the IA right. Forty individual skills is over
the limit. Four modules, each one a single recognisable chunk, is comfortably
under it — the internal complexity of each module doesn't count against the
number, provided the grouping itself is legible.

## Finding a grouping logic that isn't just mine

The dangerous trap here is inventing a grouping scheme that makes sense to the
designer and calling it chunking. Chunking only works if the chunk boundary
matches something the user already carries in their head — otherwise you've just
relabelled the same forty items into four arbitrary buckets, and the user still
has to learn your taxonomy before they can use it.

DBT actually solved part of this problem for me, because its four skill modules
— the named categories the framework itself uses — already function as a
grouping logic that anyone who's encountered the framework will recognise.
Rather than inventing my own categorisation, the IA followed the clinical
structure users might already have some familiarity with, or would learn once
and reuse everywhere in the app.

> The chunk boundary has to be someone else's mental model already, not a
> taxonomy you're asking them to learn from scratch alongside everything else
> the app is asking of them.

## Colour as a second channel for the same chunk

Once the module grouping was in place, the next problem was making the grouping
visible at a glance, not just structurally true underneath the interface. This
is where the colour-coded accordions came in — each module gets its own
consistent colour across every screen it appears on, so a user can identify
which chunk they're in without reading the label first.

This matters more than it sounds like it should, because reading a label is a
small but real cognitive cost, and if a user is scanning quickly or under
strain, a colour is processed faster than text. The colour isn't decoration.
It's a second, faster channel carrying the same chunking information the text
label already carries — redundant coding, not visual flourish.

> If someone can tell which chunk they're in before they've consciously read
> anything, you've moved a piece of navigational work out of working memory and
> into pattern recognition, which is a much cheaper resource to spend.

## Search and filtering as an escape hatch from the hierarchy

Grouping solves the "too many items" problem, but it introduces a new one: what
happens when a user knows exactly which skill they want and doesn't want to
navigate the hierarchy at all to find it?

This is where search and filtering on the tracking pages matter — not as a
replacement for the chunked structure, but as a parallel route that bypasses it
entirely for users who already know what they're looking for. A good chunking
scheme should never be the *only* way in. Forcing every user through the
categorisation, even the ones who don't need it, turns a memory aid into an
obstacle for anyone with a specific goal already in mind.

> The hierarchy is for browsing. Search is for retrieving. Conflating the two,
> and making everyone browse even when they already know the answer, is one of
> the more common IA mistakes I see — treating the chunking structure as
> mandatory rather than as one route among several.

## Layout as its own chunking decision

The same logic extended to layout choices that had nothing to do with the
accordion structure. On the Learn section, content is presented in a 2×2 grid on
desktop rather than a long single-column list.

A 2×2 grid isn't just an aesthetic layout choice — it's a spatial chunking
decision. Four items arranged as a grid read as "four related things I can
compare," in a way a long vertical list doesn't communicate nearly as clearly.
The grid does some of the same cognitive work the colour-coding does elsewhere:
it lets the *shape* of the information carry meaning, rather than putting all
the interpretive work on the user reading and remembering each item
individually.

## What this changed about how I approach information architecture generally

I don't build every IA around a DBT-style four-category framework — most
projects don't hand you a pre-existing grouping logic this cleanly. But this
project changed a few defaults in how I approach any content-heavy structure:

I now spend real time hunting for a grouping logic the user already carries,
rather than inventing a clean-looking taxonomy and assuming clarity will follow
from tidiness. I treat colour, layout, and spatial arrangement as chunking tools
in their own right, not just visual polish applied after the structure's
decided. And I build an escape hatch — search, filtering, a direct route — into
every hierarchy, because a chunking scheme that's mandatory for everyone stops
being a memory aid and starts being a tax on the users who didn't need it in the
first place.

> Miller's Law isn't really about the number seven. It's about the fact that the
> ceiling on what someone can hold in mind moves enormously depending on how
> well the grouping matches a structure they already understand — and finding
> that structure is the actual design work, not counting the items that go
> inside it.
