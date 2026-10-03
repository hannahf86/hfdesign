---
slug: creditor-phone-only-accessibility-gap
title: The creditor who only takes phone calls
subtitle: Designing around a data gap that's also an accessibility failure I don't own.
date: 2026-09-29
readingTime: 7 min read
excerpt: >-
  There's no API for a creditor's contact details, so I'm building the directory
  by hand. The harder problem isn't the data-sourcing effort — it's that a
  meaningful number of UK utility companies still don't publish an email address
  at all, which is an accessibility failure I can't design around, only design
  beside.
categories:
  - Neurodivergence
  - Design
  - Development
tags:
  - Development
  - UX
seo:
  title: The creditor who only takes phone calls
  description: >-
    There's no API for a creditor's contact details, so I'm building the
    directory by hand. The harder problem isn't the data-sourcing effort — it's
    that a meaningful number of UK utility companies still don't publish an
    email address at all, which is an accessibility failure I can't design
    around, only design beside.
  ogImage: null
---

Somewhere in the middle of building Mirian's creditor contact directory, I hit a
problem that had nothing to do with my code. I was compiling contact details for
the UK's main high-street banks and utility companies, so users could reach a
creditor directly from inside the app instead of hunting for a number
mid-crisis, and I kept finding the same dead end: a genuinely large proportion
of utility providers simply do not publish an email address anywhere. Phone
only. Sometimes a contact form that routes into a queue with no visible outcome.
For a product built specifically for ADHD and PDA users, that's not a minor
data-sourcing inconvenience. It's an accessibility failure that exists upstream
of my app, that I didn't create and can't fix, and that I still have to design
around.

## Why there's no API, and what that already tells you

The first thing I checked, reflexively, was whether a contact-directory API
existed — something I could query rather than compile by hand. There isn't one,
at least not in any usable, comprehensive form for UK creditors. That absence is
itself a small data point worth sitting with: the infrastructure for "how do I
reach this company" hasn't been treated as worth building properly, which tracks
with the same institutional attitude that produces the phone-only contact pages
in the first place. Nobody built the API because nobody treated reachability as
a first-class problem. Building the directory as a static, manually maintained
data file was the only real option, and I'm doing exactly that.

## Why phone-only is a genuine accessibility failure, not just an inconvenience

A phone call asks something specific of the person making it: real-time verbal
processing, the ability to hold a multi-step conversation in working memory
while also taking in new information, tolerance for unstructured, unscripted
social interaction with a stranger, and often a wait on hold beforehand, during
which anxiety has plenty of time to build before the actual hard part even
starts.

> For a lot of ADHD and autistic people, a phone call isn't just a less
> convenient channel than email. It's a categorically harder cognitive and
> social task, and for some people it's one they'll avoid entirely, even at real
> financial cost, rather than make the call.

This is precisely the population Mirian is built for. A debt tracker that gets
someone to the point of being ready to contact a creditor, only to discover the
only route forward is a phone call, hasn't actually closed the loop. It's handed
the user back exactly the barrier the entire product exists to help them get
past.

## What I can't fix, and what I decided to do instead

I want to be honest about the limit here: I cannot make a utility company
publish an email address. That's an institutional decision made by organisations
with no reason to consult me, and no amount of good app design changes their
contact policy. Pretending otherwise would be dishonest about what software can
actually solve.

What I can do is make the barrier visible and specific rather than silent. Each
creditor entry in the directory records which contact channels actually exist —
not just "here's a number," but an explicit note when email genuinely isn't an
option, so the user knows that going in rather than discovering it mid-task
after they've already built up the resolve to make contact. Knowing in advance
that a call is unavoidable is a meaningfully different experience from psyching
yourself up to send an email and then hitting a wall.

> A false affordance — implying a channel exists when it doesn't — is worse than
> an honest constraint. If the app can't remove the barrier, the least it can do
> is stop pretending the barrier isn't there.

## Designing support for the call itself, since the call can't be avoided

Where phone contact is genuinely the only route, the product's job shifts from
"help the user avoid this" to "reduce the cognitive load of the part that can't
be avoided." That's a different design problem, and it's the one I can actually
make progress on.

This means structuring information the user will need mid-call before they pick
up the phone, rather than expecting them to locate and relay it live under
pressure — account references, the specific ask, key dates — presented as a
short, scannable brief they can have open on screen while talking, rather than
something they have to hold entirely in working memory while also managing the
conversation itself. It's a small thing. It doesn't remove the phone call. It
removes one layer of difficulty stacked on top of the phone call, which for a
task someone's already avoiding, can be the difference between making the call
and putting it off another week.

## The responsibility question: is this mine to fix?

There's a reasonable objection here: should a debt-tracking app be in the
business of compensating for institutional accessibility failures it didn't
cause? I've gone back and forth on this, and landed on yes, within limits, for a
specific reason — the user doesn't experience the barrier as "the bank's
problem" and "the app's problem" as two separate things. They experience it as
one continuous task that either gets completed or doesn't. If Mirian's job is to
help someone follow through on managing their debt, stopping at "well,
technically, the hard part is the bank's fault" doesn't get anyone any closer to
the call actually happening.

> The barrier being someone else's design failure doesn't make it any less real
> for the person standing in front of it. I can be clear-eyed about whose
> failure it originally was and still decide it's worth designing around,
> because the user's experience doesn't care about that distinction.

What it doesn't mean is pretending I can solve it completely, or building
something that implies the phone call isn't really necessary when it is. The
honest version of this feature is "here's everything I can do to make an
unavoidable, harder-than-it-should-be task slightly less hard," not "problem
solved."

## Why I think this is worth writing about

It would be easy to write this project up as a straightforward data-sourcing
story — compiled a directory, filled a gap, shipped a feature. The more
interesting, and more honest, version is that building it surfaced a structural
accessibility failure sitting entirely outside my own codebase, that I have no
authority to fix, and that I had to decide how much responsibility to take for
anyway.

> A lot of accessibility work in software assumes the barrier is inside the
> product you're building. Sometimes the barrier is upstream, baked into an
> institution's contact policy, and the actual design skill is figuring out what
> a product can still meaningfully do when the root cause is permanently out of
> reach.

I don't think I fully solved this. I don't think it's solvable, not by me, not
from inside an app. But treating "we can't fix the bank" as a reason to do
nothing felt like a worse answer than doing the smaller, honest thing that was
actually within reach.
