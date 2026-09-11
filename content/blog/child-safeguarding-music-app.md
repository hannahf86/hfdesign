---
slug: child-safeguarding-music-app
title: Designing child safeguarding into a music practice app from day one
subtitle: >-
  What happens when the most important user in the room can't consent to most of
  what the product does.
date: 2026-09-11
readingTime: 9 min read
excerpt: >-
  Safeguarding treated as an application-layer feature can be switched off by a
  bug. Building Jorvik Media's music education apps meant pushing safeguarding
  down to the database itself, and designing every user flow around a child who
  can't consent to most of what happens to their data.
categories:
  - Development
tags:
  - Development
  - UX
seo:
  title: Designing child safeguarding into a music practice app from day one
  description: >-
    Safeguarding treated as an application-layer feature can be switched off by
    a bug. Building Jorvik Media's music education apps meant pushing
    safeguarding down to the database itself, and designing every user flow
    around a child who can't consent to most of what happens to their data.
  ogImage: null
---

Most product safety work gets bolted on. You build the feature, someone flags a
risk in review, and a permission check gets added to the relevant screen. That
workflow is fine for a lot of products. It is not fine for an app whose primary
users are, in a meaningful proportion of cases, children. It is the reason the
Jorvik Media music education apps started with the safeguarding model, not the
feature list.

I'm a guitar teacher as well as a developer, and I've taught enough under-13s to
know exactly how much trust a parent is placing in an app the moment they hand
their child a login. That trust doesn't survive a bolted-on permission check
discovered to have a gap in it six months post-launch. It has to be structural
from the first schema migration, or it isn't real.

## Why safeguarding can't live in the application layer

The instinctive place to put access control is in the application code: a check
before a screen renders, a guard clause before an API call goes through. It's
fast to write and easy to reason about in isolation. It's also exactly the layer
most likely to have a bug in it eventually, because application code changes
constantly, and every new feature is a new opportunity for someone, possibly
future-me on a tired Friday, to forget to re-apply a check that used to be
enforced somewhere else.

> If a safeguarding rule only exists in application logic, then a safeguarding
> rule only exists until the next refactor accidentally routes around it.

The architectural commitment underneath both apps is that safeguarding rules
live in the database itself, enforced through Row Level Security policies, so
that even a bug in the application code cannot produce a request that bypasses
them. A student account cannot see another student's data not because a screen
chooses not to display it, but because the database will refuse the query
regardless of which screen, which future feature, or which mistake asked for it.

## Modelling three kinds of user before writing a single screen

The system is built around a three-tier user model of teacher, student and
parent-proxy, with an age gate that changes what "student" actually means
depending on the child's age. Under-13s are proxied entirely through a parent
account rather than holding independent credentials.
Thirteen-to-seventeen-year-olds get their own account with a linked parent
observer who retains visibility.
Eighteen-plus users get a standard, fully independent account.

This isn't a single "student" role with a permissions flag toggled on top. It's
three structurally different relationships to the data, decided before any
screen existed, because the UX of a practice-tracking flow for a seven-year-old
proxied through a parent is not a smaller version of the UX for an adult user.
It is a genuinely different flow with different actors involved in every
interaction.

> Getting this model wrong doesn't just mean an awkward screen somewhere. It
> means either an under-13 has functional independent control they shouldn't
> have, or a seventeen-year-old is treated with the same restrictions as a
> seven-year-old, and both of those failure modes are safeguarding failures, not
> just UX rough edges.

## No private channel between a teacher and a child

One of the clearest product decisions, and one I'd defend to any stakeholder who
pushed back on it for being "less flexible": there is no private
teacher-to-student messaging anywhere in the system. All lesson content is
visible to the linked parent account by design, with no configuration that
quietly turns this off.

This closes off an entire category of risk by removing the mechanism rather than
trying to moderate it. A private channel between an adult and a child, however
well-intentioned the feature and however good the reporting tools built around
it, is a surface that requires ongoing vigilance to stay safe. A channel that
structurally doesn't exist requires none.

> The safest messaging feature is the one you didn't build. Parents can also
> revoke a teacher's access at any point, unilaterally, without needing the
> teacher's cooperation or a support ticket to mediate it. The exit is as
> unrestricted as the safeguarding model requires it to be.

## An append-only audit log, because "we'll check the logs" only works if the logs can't be edited

Every safeguarding-relevant action writes to an append-only audit log, triggered
automatically at the database level rather than logged optionally from
application code. Append-only matters specifically because a mutable log is only
as trustworthy as everyone who has access to edit it, and in a safeguarding
context, "trust me, nothing was changed" isn't a standard worth building on.

Teachers also get a `teacher_review_summary` view that surfaces aggregate data
only: patterns and trends rather than granular, individually identifying detail
they don't need for the pedagogical purpose the view exists for. This is the
same principle as data minimisation applied to an internal-facing feature, not
just to what's collected from users externally: give a role access to precisely
the shape of data its function requires, and no more, even when that role is a
trusted teacher rather than an anonymous third party.

## Verification you can't automate, and being honest about that gap

Teacher professional verification in the first version is self-declaration,
covering Musicians' Union, ISM, or DBS numbers alongside a multi-point
safeguarding declaration with genuine legal consequences attached to a false
statement, rather than automated checks against those bodies. This wasn't the
plan. It's the honest current limit: no public verification API exists for the
Musicians' Union, ISM, or the DBS Update Service in a form that could be
automated for onboarding at this stage.

> The temptation, when you hit a gap like this, is to either quietly ship
> something that looks more automated than it is, or to delay launch
> indefinitely chasing an integration that doesn't currently exist to be built.
> Neither felt honest. The self-declaration model is the pragmatic version, made
> with legal weight attached to it rather than treated as a soft formality, and
> automated verification stays explicitly on the roadmap rather than being
> papered over as solved.

Being clear-eyed about which parts of a safeguarding model are fully engineered
and which parts are currently a documented, legally-backed interim measure is, I
think, more trustworthy than presenting a v1 as more airtight than it actually
is.

## Why this changed the order I work in, not just the checklist

The pattern across all of this is the same: the UX flows, the schema, the RLS
policies, and the audit logging were designed together, as one vertical slice,
specifically around the safeguarding edge cases, before general feature
implementation started. Age-gating, consent, and visibility rules got worked out
at the user-model and schema stage, not discovered as edge cases during a later
QA pass.

> A safeguarding requirement discovered during QA is a safeguarding requirement
> that was, for some period of development, missing. Discovering it early enough
> that it shapes the schema rather than patches around it is the entire
> difference between a real commitment and a compliance checkbox.

I don't think every product needs this level of structural rigour. Most don't
have children as primary users, and most don't need Row Level Security doing the
enforcement a permission check would normally handle. But building this suite
changed my default assumption about where a genuinely non-negotiable constraint
belongs in a system. If a rule absolutely cannot be allowed to fail, it doesn't
belong in the layer that changes every sprint. It belongs as close to the data
as the stack will let you put it, enforced by something that doesn't care
whether the developer remembered to check.
