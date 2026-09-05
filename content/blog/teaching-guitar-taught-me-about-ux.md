---
slug: teaching-guitar-taught-me-about-ux
title: Teaching guitar taught me more about UX than my UX course did
date: 2026-08-22
order: 1
pinned: true
readingTime: 8 min read
cover: /assets/blog/guitar-ux.webp
coverAlt: >-
  An illustration of a classical guitar surrounded by a laptop, a phone showing a
  wireframe, a stack of books, a lightbulb, a brain and a target.
excerpt: >-
  A decade of watching people fail at a physical, cognitive, emotionally loaded
  task in real time — with no undo button and no analytics dashboard to hide
  behind. The instrument changed. The empathy didn't.
categories:
  - my story
  - Design
  - UX Laws
  - research
tags:
  - UX
  - Career
seo:
  title: Teaching guitar taught me more about UX than my UX course did
  description: >-
    Progressive disclosure, cognitive load, watching what users do rather than
    asking them — all of it learned on a fretboard years before I met the
    terminology.
  ogImage: null
---

I did the Google UX Design certificate. I did the full-stack bootcamp after it.
I have the certificates to prove it, and they were genuinely good — I'm not
about to tell you to skip your education and go busk for wisdom instead.

But if you'd asked me, two years ago, to name the single best training ground
I've ever had for understanding how humans interact with confusing systems, I
would not have said "Coursera." I'd have said "the eleven-year-old who cried
during his second lesson because he couldn't get his fingers to do the thing his
brain was very clearly telling them to do."

Teaching guitar for years before I ever touched a wireframe means I came into UX
with a head start most of my cohort didn't have, because I'd already spent a
decade running user research on actual humans in real time, watching them fail
at a task, and having to figure out — on the spot, with no A/B test to fall back
on — whether the failure was theirs or mine. Spoiler: it was almost always mine.

Here's what stuck.

## Nobody reads the manual, and nobody ever will

Every beginner guitar method book starts the same way: a page of music theory, a
diagram of the fretboard, a solemn little paragraph about posture. I have never,
not once, had a student read this page before diving in and trying to play
something.

They pick up the guitar and try to strum the one chord shape they saw on
YouTube. That's it. That's the onboarding flow they've chosen for themselves,
manual be damned.

You will recognise this instantly if you've ever watched a usability test.
Nobody reads your onboarding carousel either. They tap through it like it's a
EULA, then immediately go do the thing they came to do, and if it doesn't work,
they don't go back and read the carousel — they just conclude your product is
broken, or that they're bad at it, and one of those conclusions is a UX failure
regardless of which one they land on.

> If your student won't read the manual, the manual is not the intervention.

The guitar-teaching version of this lesson: if your student won't read the
manual, the manual is not the intervention. The *first five minutes with the
instrument in their hands* is the intervention. I stopped starting lessons with
theory decades before I ever heard the term "progressive disclosure," because
I'd already learned the hard way that frontloading information nobody's ready
for is just a very inefficient way of teaching nothing.

## Cognitive load has a face, and it looks like someone trying to hold a barre chord

If you've never played guitar: a barre chord requires you to press one finger
flat across all six strings while your other three fingers do something
completely different, and your strumming hand does a *third* completely
different thing, all simultaneously, all while reading notation, all while
probably also trying not to look terrified.

This is, not to put too fine a point on it, an absolute masterclass in what
happens when you exceed someone's working memory in one go. I watched it happen
to student after student for years before I ever encountered Miller's "seven
plus or minus two" in a UX reading list, and my reaction to reading it was less
"fascinating new insight" and more "yes, obviously, have you met a fourteen-year-old
with a Fender."

The fix, in guitar teaching, is scaffolding: you don't teach the barre chord.
You teach the finger position without the barre. Then the barre without the
chord shape. Then you combine them once each half is boring and automatic rather
than effortful. You never ask someone to learn two hard things at the same time
if you can help it, because the failure they experience isn't "I need more
practice," it's "I am bad at this and possibly stupid," and that emotional
conclusion is much harder to undo than the technical gap that caused it.

Translate that directly into a checkout flow, an onboarding sequence, a settings
page with fourteen toggles on it: the number of *individually easy* things you
ask someone to do simultaneously is almost always the actual source of the
friction, not the difficulty of any one of them. I now audit flows the way I
used to audit chord progressions — not "is each step easy," but "how many steps
is this person's brain being asked to hold open at once."

## Every student's "obvious" is different, and so is every user's

I've taught the same chord to hundreds of people, and I can tell you with
complete confidence that there is no such thing as an intuitive way to explain a
G chord. Some people need the shape drawn as a diagram. Some people need me to
physically move their fingers into place. Some people need me to relate it to a
shape they already know. Some people need to be told it's supposed to feel
awkward, because otherwise they assume they're doing it wrong and quietly give
up rather than admit it.

None of these students were wrong to need what they needed. And critically —
none of them could tell me, unprompted, which explanation would work for them.
If I'd asked "how would you like this explained?" most of them would've
shrugged, because you generally don't know what you don't understand yet, or
what shape the not-understanding is taking.

This is, roughly, the entire argument for why "just ask the user what they want"
is a much weaker research method than watching what they actually do. Students
didn't need me to survey them. They needed me to watch their hands, notice where
the shape fell apart, and adjust the explanation in real time based on the
specific way they were stuck — which is a different skill from being a good
explainer, and honestly the more important one.

I still think this is the most transferable skill guitar teaching gave me: the
instinct to watch for the specific shape of someone's confusion rather than
assuming confusion is a single, generic problem with a single, generic fix. A
user rage-clicking a button and a user quietly abandoning a form are both
"confused," but they're not confused in the same way, and they don't need the
same intervention.

## Motivation is a design constraint, not a personality trait

Here's an uncomfortable thing about teaching guitar to children who did not
choose to be there and are, in fact, being made to attend by a parent who has
already paid for the term: you learn very quickly that "just try harder" is not
a strategy. If a kid isn't motivated, that's not a them-problem you can lecture
your way out of. It's a design problem, and the lesson plan needs to change, not
the kid.

So you restructure. You let them pick a song they actually like instead of the
one in the book. You break the win into something achievable in the next ten
minutes instead of the next ten weeks. You make the *feedback loop* shorter,
because a nine-year-old's tolerance for delayed gratification is, generously,
about ninety seconds.

> The kid isn't lazy. The user isn't dumb.

This is, essentially, retention design. Every product person who's ever said
"users just aren't engaged enough with this feature" and stopped there, without
asking why, is making the same mistake I used to make before I learned better:
treating a design failure as a user failure. The kid isn't lazy. The user isn't
dumb. The flow is asking for more patience, memory, or motivation than the
person on the other end has to give at that moment, and your job is to lower the
ask, not raise your expectations of them.

## Why this actually matters for hiring, not just as a nice anecdote

I'll be straightforward about why I'm telling you this rather than just listing
my Figma proficiency and calling it a day: a lot of UX portfolios read like they
were written by people who learned empathy as a bullet point on a Miro board
titled "Phase 1: Empathise." I didn't. I learned it by watching a genuinely huge
number of humans try and fail at a physical, cognitive, emotionally loaded task,
in real time, for years, with no undo button and no analytics dashboard to hide
behind — just a person in front of me, visibly getting either more or less
frustrated, and my job was to notice which and fix it before they gave up.

That's not a soft skill I'm dressing up as a hard one. It's pattern recognition,
built over a decade, applied to a different medium. The interface changed from a
fretboard to a screen. The underlying problem — how do you get a person from "I
don't understand this" to "I can do this" with the least frustration and the
most dignity along the way — did not change at all.

So yes, I can talk you through Nielsen's heuristics. I can walk you through a
user journey map with the best of them. But if you want to know why I actually
believe in this stuff rather than just being able to recite it, it's because I
spent years watching an eleven-year-old nearly cry over a chord shape, figuring
out why, fixing it, and watching his face when it finally clicked. That moment —
confusion resolving into competence — is the entire job. I just used to do it
with a guitar, and now I do it with a Figma file. The instrument changed. The
empathy didn't.
