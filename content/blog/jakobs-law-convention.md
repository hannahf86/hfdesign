---
slug: jakobs-law-convention
title: "Jakob's Law: when following convention is lazy, and when it's correct"
subtitle: Knowing when to break the pattern — and how to design the break clearly.
date: 2026-09-04
readingTime: 8 min read
excerpt: >-
  Users expect your product to work like the ones they already know. On when
  following convention is the correct call, when it's a cover for not thinking,
  and how to design a deviation clearly enough that it reads as intentional.
categories:
  - UX Laws
  - Design
tags:
  - UX Laws
seo:
  title: Jakob's Law — when following convention is lazy, and when it's correct
  description: >-
    Users expect your product to work like the ones they already know. On when
    following convention is the correct call, when it's a cover for not
    thinking, and how to design a deviation clearly enough that it reads as
    intentional.
  ogImage: null
---

Jakob's Law states that users spend most of their time on other products, and so
they arrive at yours already expecting it to work the same way those other
products do. It's one of the most quoted "laws of UX" out there, usually as a
justification for putting the logo top-left and the cart icon top-right and
calling it a day.

Which is fine. It's also, on its own, a slightly boring way to use one of the
more genuinely useful principles in the field, because it gets treated as a rule
about following convention when the actually valuable skill is knowing precisely
when not to.

## Convention exists because it's already paid for

Let's start with why Jakob's Law is correct, because it's correct a lot of the
time.

> Every convention a user already knows is a cost that's already been paid by
> someone else's product, not yours.

The hamburger menu, the shopping cart icon, the underlined blue link — none of
these are inherently the best possible solution to their respective problems.
They're just the solution enough products settled on that users no longer have
to think about them. If you redesign the shopping cart icon into something more
"on brand" and less immediately recognisable, you're not being creative. You're
asking every single user to re-spend cognitive effort they'd already banked, for
a benefit that's almost always aesthetic rather than functional.

## Where the rule gets applied lazily

Here's my actual complaint about how Jakob's Law usually gets invoked: it's
frequently used as cover for not thinking, rather than as a genuine design
decision.

"Users expect it to work like [competitor]" is a real, valid design input. It is
not, on its own, a design decision. Plenty of conventions exist not because
they're good, but because one influential product did it first and everyone else
copied the homework without checking the working.

> Following convention reflexively, without asking whether it's actually serving
> the user or just serving inertia, is the design equivalent of citing a source
> you haven't read.

The tell is when "that's just how it's done" is offered as the entire
justification, with no follow-up about why it's done that way, or whether the
reason still applies here.

## When breaking convention is actually correct

The cases where I've deliberately gone against expected patterns share a common
thread: the convention was solving a problem my product didn't actually have,
while ignoring one it did.

A concrete example from my own work: when I built the JWD client portal, the
obvious, convention-following move would have been to replicate the
fixed-template structure that tools like ClickUp or Notion use — predefined
boards, predefined stages, the pattern every client would already recognise.
That's Jakob's Law working exactly as advertised: familiar structure, zero
onboarding cost.

I built a flexible per-project system instead. The reason wasn't novelty for its
own sake — it was that the fixed-template convention assumes every project fits
the same shape, and mine genuinely didn't.

> The actual test I apply: is the convention solving my user's problem, or just
> satisfying my own risk-aversion? Breaking from the expected structure was a
> real risk — clients had to learn something new. But the alternative risk, a
> tool that looked familiar and quietly didn't fit anyone's actual workflow, was
> worse and just less visible upfront.

## The part everyone skips: designing the deviation clearly

Here's the actual skill, and it's the part most "break the rules" advice
conveniently leaves out.

> If you're going to violate an expectation, you owe the user a clear signal
> that you're doing it, and why.

This is where a lot of "bold, unconventional design" quietly fails. Breaking
convention silently just produces confusion with better branding. The user still
expected the familiar pattern; you just didn't tell them you weren't giving it
to them, and now they're debugging your interface instead of using it. The
deviation has to be legible as an intentional choice — a first-use explanation
at exactly the point the unfamiliar pattern appears, clear cues that signal
"this works differently" before the user commits, and consistency within your
own new pattern so you haven't just replaced one set of unpredictable behaviour
with another.

> Unlabelled novelty is just a bug with good intentions.

## A useful gut-check before you break the pattern

When I'm deciding whether to follow or deviate from an established convention, I
run through the same handful of questions every time.

Is the convention actually solving the user's problem, or just matching a
pattern they'll recognise? What specifically does my product need that the
convention doesn't account for — and if I can't answer that concretely, am I
about to deviate for ego reasons rather than user reasons? Can I clearly signal
the deviation at the exact moment it matters, not buried somewhere the user
won't see it until after they're already confused? And once I've deviated, am I
being internally consistent with my own new pattern?

> If I can't answer all four honestly, the safer move is almost always to just
> follow the convention. Unconventional design that isn't rigorously justified
> isn't brave. It's just unfamiliar, which is a cost with no offsetting benefit.

## Why I think this distinction matters for hiring

A junior designer, in my experience, tends to treat Jakob's Law as a rule:
follow convention, always, because it's safe. A designer earlier in their
confidence also sometimes swings the other way and treats breaking convention as
inherently more sophisticated, because novelty reads as effort.

Neither instinct is actually the skill.

> The skill is holding both options open simultaneously and having a specific,
> defensible reason for whichever one you land on — one you could explain to a
> stakeholder in a single sentence, not a vague feeling that either "familiar is
> safer" or "different is better."

That's the version of this principle I'd want a hiring manager to take away: I
don't follow Jakob's Law because it's a rule. I follow it, or don't, because
I've actually checked which choice is doing real work for the person using the
product — and I can tell you which, and why, for every deviation I've made.
