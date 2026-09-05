---
slug: solo-not-alone-design-qa
title: Solo, not alone
subtitle: Running design QA when you're a one-woman studio.
date: 2026-08-02
readingTime: 7 min read
excerpt: >-
  "So who checks your work?" The honest answer is a version of me, deliberately
  made unfamiliar with the work, using tools built to compensate for the fact
  that I can't unknow what I already know about it.
categories:
  - workflow
  - Development
tags:
  - Process
  - Career
seo:
  title: Solo, not alone — running design QA when you're a one-woman studio
  description: >-
    The process a solo UX and dev practice uses in place of a second pair of
    eyes: manufactured distance, checklists as outsourced memory, adversarial
    self-review and a documented decision log.
  ogImage: null
---

Here's a question I get, sometimes politely and sometimes not, whenever a hiring
manager clocks that I run my own freelance practice: "so who checks your work?"

It's a fair question. It's also, I've come to realise, usually asked by someone
who's picturing QA as a *person* — a second pair of eyes sitting across the
room, ready to catch the typo or the broken breakpoint before it ships. When
you're solo, you don't have that person. What you have instead is a decision:
either you build a process rigorous enough to catch your own blind spots, or you
ship things with your blind spots baked in and hope nobody notices. I've done
both.

> Only one of those is a career strategy.

This post is about the boring, unglamorous infrastructure I've built to make
sure "solo" doesn't quietly become a synonym for "unsupervised."

## The uncomfortable truth about being your own reviewer

The core problem with self-QA isn't laziness, and I want to say that upfront
because I think most solo practitioners already work plenty hard. The problem is
structural.

> You cannot spot your own blind spot by looking harder in the same direction
> you already looked.

If you missed something because of how you were thinking about a project,
re-reading it with the same brain, in the same mood, five minutes later, mostly
just confirms what you already believed. This is true in code review, it's true
in copyediting, and it's especially true in UX, where the mistake you're most
likely to make is designing around your own mental model of the user rather than
theirs.

So the actual goal of a solo QA process isn't "look at it again." It's
**manufacturing a different vantage point on demand**, since you don't have a
colleague sitting there to provide one for free.

## Distance is the whole trick

The single most effective QA tool I have costs nothing and requires zero
technical setup: I do not review work the same day I finish it, if I can
possibly help it.

This sounds almost too simple to be a "process," but it's the thing that
actually works, because a huge percentage of what a second reviewer catches
isn't specialist knowledge — it's fresh eyes. If I finish a build on a Tuesday
afternoon and QA it Tuesday afternoon, I'm reviewing it with the same
assumptions I made *while building it*, which means the review mostly just
re-confirms my own decisions rather than questioning them. If I come back
Wednesday morning, I'm closer to seeing it the way a client or a user would:
cold, without the context of every micro-decision still loaded in short-term
memory.

Where a same-day turnaround is unavoidable, I've learned to fake the distance
artificially — switch tasks completely for thirty minutes, review on a different
device, or literally just walk away from the desk. It's a crude substitute for a
colleague's fresh perspective, but it's a substitute, and a crude one beats none.

## Checklists aren't bureaucracy, they're outsourced memory

I used to resist checklists a little, because they felt like the kind of thing a
"real" designer shouldn't need — as if intuition should be enough.

> It should not be enough, and pretending otherwise is how things slip through.

What changed my mind wasn't a productivity book, it was a client engagement
early on where the scope, left to informal back-and-forth instead of a
documented process, drifted a very long way past what either side had originally
agreed — a project that was meant to run two design iterations and, without a
clear checkpoint forcing a "are we still inside scope" conversation, quietly ran
to ten. Nobody was acting in bad faith. There just wasn't a structural moment
built in to catch the drift before it became a problem, and by the time it was
obvious, it was already expensive to fix.

That's when checklists stopped feeling like bureaucracy and started feeling like
**outsourced memory** — a way of making sure a rule I know intellectually
("confirm scope at each milestone") actually gets applied under the pressure of
a live client relationship, rather than being the first thing that gets quietly
skipped when things get busy. My current process includes a fixed checkpoint at
each project milestone specifically to ask the unglamorous question — *are we
still where we said we'd be* — before it becomes a fire I'm putting out three
weeks later.

## Building the "difficult client" simulator

One blind spot that's genuinely hard to catch alone is: *would this actually
make sense to someone who isn't me?* I know what every element on a page is
supposed to do, because I built it.

> That knowledge is precisely what disqualifies me from judging whether it's
> obvious to someone encountering it cold.

My workaround is deliberately adversarial self-review — I go through a finished
flow role-playing a specific kind of difficult user: the one who's rushed,
mildly annoyed, and looking for a reason to bounce. I click the thing I'm *not*
supposed to click. I try to complete the task in the wrong order. I imagine the
least patient version of a client looking at the deliverable for the first time
and ask what they'd complain about, then go check whether they'd be right to.

It's a bit theatrical, and if you walked past my desk while I was doing it you'd
probably assume I was having an argument with my laptop. But treating usability
review as an adversarial exercise rather than a confirmatory one — actively
hunting for the failure instead of scanning for reassurance that everything's
fine — catches a category of problem that a friendly, "does this look okay?"
pass never will.

## The paper trail is not paranoia, it's professionalism

Every project I run now has a documented decision log — what was agreed, what
changed, and why — and I used to think of this as slightly excessive admin. It
isn't. It's the closest thing I have to a team's institutional memory when the
team is just me.

When you work with a design partner, disagreements and scope questions get
resolved in real time, in a room, and everyone remembers roughly the same
version of what was decided. Solo, there's no one to cross-check your memory
against.

> An undocumented verbal agreement is really just a private opinion with extra
> confidence attached.

Writing it down isn't about covering myself legally, although it does that too —
it's about making sure that six weeks later, when a client asks "didn't we agree
X," I have an actual answer instead of a vague, anxious feeling that we probably
did.

## Where I've actually brought in another set of eyes

I want to be honest that some things genuinely can't be self-QA'd, and
pretending otherwise would undercut the entire point of this post. Cross-browser
and device testing, for instance — I don't trust my own assumptions about how
something renders on a device I don't own, so I test on real hardware or proper
emulation rather than guessing. Copy that I've been staring at for hours goes
through a read-aloud pass, because your eyes will auto-correct a typo your ears
won't. And for anything genuinely high-stakes — legal-adjacent copy,
accessibility claims, a client-facing figure I'm not fully certain of — I will
explicitly go find an outside source or a second opinion rather than trust my
own confidence, because confidence and correctness are not the same thing, and
solo work makes it dangerously easy to mistake one for the other.

## What I'd actually say to the "who checks your work" question

The honest answer is: a version of me, deliberately made unfamiliar with the
work, using tools specifically designed to compensate for the fact that I can't
unknow what I already know about it. It's not the same as having a second brain
in the room. But treating "no colleague" as an excuse for looser standards would
be a choice, not a consequence — and it's a choice I've deliberately not made.

If anything, running solo QA for years has made me more process-literate than I
might have been on a team, because nobody was going to hold that line for me if
I didn't build it myself. That's the actual pitch, if you're the employer
weighing up whether a freelancer can operate to a team's standard: I didn't get
to inherit a QA process from someone else. I had to work out, from first
principles, which parts of quality control genuinely require a second person and
which parts just require a good enough substitute — and then build the
substitute, deliberately, rather than skip the step because nobody was watching.
That's a habit that travels well into a team, not away from it.
