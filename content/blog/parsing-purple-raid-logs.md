---
slug: parsing-purple-raid-logs
title: "Parsing purple: what raid log analysis taught me about reading behavioural data"
subtitle: Long before GA4, I was staring at a different kind of dashboard, trying to work out why the numbers dipped.
date: 2026-09-15
readingTime: 7 min read
excerpt: >-
  Before I ever opened GA4 professionally, I was staring at combat logs trying
  to work out why my healing throughput dipped for four seconds during a boss
  fight. It turns out reading a raid log and reading a session funnel require
  almost exactly the same instinct.
categories:
  - research
  - my story
tags:
  - Research
seo:
  title: Parsing purple — what raid log analysis taught me about reading behavioural data
  description: >-
    Before I ever opened GA4 professionally, I was staring at combat logs trying
    to work out why my healing throughput dipped for four seconds during a boss
    fight. It turns out reading a raid log and reading a session funnel require
    almost exactly the same instinct.
  ogImage: null
---

I was a resto shaman on a mythic raiding guild — a Horde troll named Messa, if
you want the full specificity — and for years, a meaningful chunk of my "off
hours" involved sitting in front of a combat log analysis site, not playing the
game at all, trying to work out why my healing throughput dipped for four
seconds in the middle of a boss fight that otherwise went fine.

If you've never seen one: a raid log is a colour-coded percentile ranking of
your performance against every other player who's logged the same fight on the
same difficulty, on the same class and spec. Green is mediocre. Blue is decent.
Purple is good — the top quarter or so of logged performances. Orange, pink and
gold are the rarefied territory most people never sniff. I parsed orange and
gold a lot, and getting there took a genuinely large amount of time in those
logs. It wasn't until years later, staring at a GA4 funnel for a client's
checkout flow, that I realised I'd been training the exact same muscle the whole
time.

## A percentile ranking tells you where you stand. It doesn't tell you why.

A raid log will tell you, with total precision, that your healing output ranked
in the 40th percentile for that fight. It will not tell you why. It won't tell
you if you were assigned a harder healing job than the people who outranked you,
whether you made a positioning mistake that cost you uptime, or whether the
fight itself has a phase that structurally disadvantages your class regardless
of skill.

> The number is a starting point for investigation, not the investigation
> itself — which is precisely the trap I now watch clients fall into with a
> conversion percentage. A 40th-percentile ranking and a 68% cart abandonment
> rate are functionally the same kind of artifact: precise, confident, and
> completely silent on cause.

## Reading the timeline, not just the summary score

The actual analytical work, in both contexts, happens one level below the
headline number. A raid log breaks the fight down into a timeline — every cast,
every heal, every death, every cooldown usage, second by second — and the real
diagnostic work is reading that timeline against what was actually happening in
the fight at each moment, not just staring at the final aggregate percentile.

This is identical, in structure, to the difference between a conversion rate and
a session recording. The rate tells you the outcome. The timeline tells you the
story that produced it — where someone hesitated, where they backtracked, where a
specific event on the page correlates with a specific behaviour change. I learned
to read a raid timeline against fight mechanics years before I learned to read a
session recording against page events, and it's the same skill wearing a
different UI.

## Isolating the variable that actually matters

A raid log has an enormous number of variables tangled together in any single
pull: your gear, your positioning, your reaction time, your raid team's
mechanics execution, random variance in encounter design, even server latency on
a given night. Getting good at reading logs meant learning to isolate one
variable at a time rather than treating a bad log as one undifferentiated "bad
performance."

> If healing output was low because three people stood in fire and needed
> emergency triage instead of the planned rotation, that's not a personal
> performance problem — it's a raid-execution problem showing up in an
> individual's numbers. Attributing it to the wrong cause means you go and "fix"
> the wrong thing entirely.

This maps directly onto a mistake I see constantly in behavioural data:
attributing a bad number to the nearest plausible cause rather than the actual
one. A dip in engagement on a specific page might be a UX problem on that page,
or it might be a targeting problem sending the wrong audience to it in the first
place, and the metric alone can't tell you which. You have to isolate the
variable, the same way you'd isolate whether a bad heal parse was a personal
execution issue or a raid-wide mechanics failure landing on one person's log.

## Bench-marking against the right comparison group

A raid log's percentile ranking is only meaningful because it's comparing you
against other players on the same spec, same fight, same difficulty — the same
class running a different spec, or the same spec on a different difficulty,
would make the comparison meaningless. Comparing your numbers against the wrong
reference group produces a confident, precise, completely useless conclusion.

> I see the equivalent mistake constantly in web analytics — benchmarking a
> client's conversion rate against an industry-wide average that includes wildly
> different price points, traffic sources, and purchase intent, and drawing a
> conclusion from a comparison that was never valid in the first place.

Getting comfortable questioning "compared to what, exactly" before trusting a
benchmark is a habit that transferred directly, and it's one I still see missing
in a lot of otherwise competent analytics work.

## The difference between chasing the number and understanding the system

Here's the part where the metaphor gets genuinely useful rather than just cute:
the players who got good at raiding weren't the ones optimising directly for the
percentile number. They were the ones who understood the underlying system — the
fight mechanics, the class kit, the team's execution — well enough that a good
log was simply what happened when the system was understood and executed
correctly. Chasing the number directly, without the underlying understanding,
produces brittle performance that falls apart the moment the fight changes
slightly.

> The same failure mode shows up when a team optimises a UI purely to move a
> conversion metric without understanding why the change worked. It's the raid
> equivalent of copying someone else's rotation without understanding the fight
> — it might work once, on this exact encounter, and fall apart the moment
> anything shifts.

## Why I think this is a genuinely relevant skill, not just a fun anecdote

I'm not going to pretend a video game is equivalent to professional analytics
work, and I'd be suspicious of anyone who oversold that comparison. But the
underlying cognitive skill — reading a quantitative output, refusing to stop at
the headline number, isolating the actual variable responsible, and checking
whether the comparison you're drawing is even valid — is genuinely the same
skill, and I built a large chunk of it for free, for fun, years before I ever got
paid to apply it to a funnel instead of a fight.

If you're the kind of hiring manager who's slightly sceptical of a CV line that
just says "experienced with GA4 and A/B testing," this is roughly my answer to
"how do I actually know you can read data rather than just export it": I've been
doing a version of this diagnostic work, obsessively, for years, on numbers that
happened to be attached to a shaman instead of a shopping cart. The instrument
changed. The reading comprehension didn't.
