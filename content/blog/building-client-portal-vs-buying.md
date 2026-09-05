---
slug: building-client-portal-vs-buying
title: Building a client portal instead of buying one
subtitle: When custom beats off-the-shelf, and when it definitely doesn't.
date: 2026-07-09
readingTime: 8 min read
excerpt: >-
  I replaced ClickUp and Notion with a custom-built client portal. Not because
  off-the-shelf tools are bad, but because they were solving a problem I didn't
  have while quietly ignoring one I did. The real trade-offs of build vs. buy.
categories:
  - Development
  - workflow
tags:
  - Development
seo:
  title: Building a client portal instead of buying one
  description: >-
    I replaced ClickUp and Notion with a custom-built client portal. Not because
    off-the-shelf tools are bad, but because they were solving a problem I
    didn't have while quietly ignoring one I did. The real trade-offs of build
    vs. buy.
  ogImage: null
---

I want to open with the caveat that undercuts my own headline slightly:
build-vs-buy is not a contest with a permanent winner, and anyone telling you
"always build" or "always buy" is selling something, possibly their own dev
time. I've run both ClickUp and Notion for client project management at Jorvik
Web Dev. I eventually replaced them with a custom-built portal — Next.js,
Supabase, Resend, Vercel. This post is about why that specific decision was
correct for this specific problem, and where I'd tell you not to follow me.

## What ClickUp and Notion are actually good at

Off-the-shelf project management tools are good at exactly what they're built
for: giving you a flexible-enough template, a mature UI, integrations you didn't
have to build, and zero infrastructure to maintain. For a huge range of
freelance and small-agency workflows, that trade is obviously correct — you're
paying a subscription in exchange for not having to think about auth, hosting,
or backups ever again.

> I want to be honest that for most solo practitioners, most of the time, "just
> use Notion" is still the right answer. My situation was specific, not
> universal.

The reason it stopped being the right answer for me wasn't that these tools are
badly built. It's that they're built around a fixed-template assumption —
boards, statuses, predefined stages — that works well when your projects are
similar enough to share a shape.

## Where the fixed-template assumption started costing me

Client engagements at JWD vary a lot more than a single template comfortably
accommodates. A brochure site build, a Webflow migration, an ongoing retainer,
and a full custom Next.js build don't share a workflow shape, and forcing all of
them through the same board structure meant I was constantly either bending the
template to fit a project it wasn't designed for, or maintaining several
slightly different templates and manually keeping them in sync in my head.

> That's its own quiet tax — not visible in a monthly invoice, but real: time
> spent fighting the tool's assumptions instead of running the project, on every
> single engagement that didn't fit the shape the template was built around.

The actual trigger, though, wasn't the internal admin friction. It was
client-facing. Neither tool gave me a client-facing surface I actually wanted to
hand someone — the client view always felt like a slightly-too-honest look at my
internal task management, rather than a clean, branded space that reflected the
actual relationship.

## What building custom actually bought me

The portal I built replaces the fixed-template structure with a flexible
per-project system — each engagement gets a structure built around what that
specific project actually needs, rather than being squeezed into a generic
board. Practically, that means a brochure-site client and a retainer client can
have genuinely different views of what's happening, instead of both looking at
the same generic Kanban columns with different labels stuck on top.

Using Next.js and Vercel meant the portal could be genuinely branded as a JWD
product rather than a client landing inside a third-party tool's UI with my logo
pasted at the top. Supabase gave me a proper relational data model for project
structure, rather than working within Notion's document-and-database hybrid
model, which is flexible but not actually built for the kind of structured,
per-client permissioning a client portal needs. And Resend handled the
notification layer — client updates, status changes — without me needing to
stand up a separate email service just for transactional sends.

> None of these are dramatic technical wins on their own. The value is that each
> piece was chosen to fit a specific gap the off-the-shelf tools left, rather
> than being adopted because "custom" sounds more impressive on a portfolio.

## The costs I paid that a subscription would have avoided

I don't want to undersell what building custom actually costs, because
pretending it's free is exactly the kind of dishonesty that gives "build" a bad
name in these conversations.

I now own the infrastructure. If Vercel has an outage, or Supabase has a service
disruption, that's my problem to communicate and manage, not a support ticket to
a vendor with an SLA. I own the maintenance surface — auth flows, notification
logic, and the data layer all need to keep working as I add features, and
there's no vendor patching security issues for me in the background. And I paid
an upfront build cost in actual hours that a subscription tool would have let me
skip entirely, meaning the break-even point for this decision wasn't immediate —
it only pays off because the tool gets reused across every client engagement
going forward, not because it saved time on the first project it touched.

> If I were running two or three similar client engagements a year instead of a
> continuous stream of varied ones, I don't think this would have been the right
> call. The maintenance burden only makes sense when the tool earns its keep
> across enough repeated use to outweigh the ongoing cost of owning it.

## The actual decision framework, stripped of the "no-code bad, code good" framing

The question I'd tell anyone to ask isn't "should I build or buy," treated as a
philosophy. It's a handful of concrete checks specific to the actual situation.

Does the off-the-shelf tool's core assumption — its template, its data model,
its workflow shape — actually match the shape of what you're doing, or are you
the one bending to fit it on every use? Is the client-facing surface something
you're comfortable handing to a client as-is, or are you already compensating
for it with extra explanation every time someone new logs in? Will you be using
this often enough, and consistently enough, that an upfront build cost pays for
itself in saved friction over the tool's lifetime — or is this a one-off need
dressed up as a recurring one? And critically: are you actually equipped to own
the maintenance burden long-term, or would "custom" just mean an unmaintained
internal tool eighteen months from now, quietly rotting while you tell yourself
you'll get back to it?

> "Buy" wins on all four questions far more often than developer culture likes
> to admit. "Build" won for me here because the fixed-template assumption was
> actively working against a genuinely varied client base, and I was building
> something I'd use, and maintain, continuously — not because custom is
> inherently superior to a subscription.

The honest version of this case study isn't "I built better software than
ClickUp." It's that I had a specific, recurring mismatch between my workflow and
what the market's templates assumed, I had the skills to close that gap myself,
and I was going to use the result often enough to justify owning it. Those three
things being true simultaneously is a genuinely narrower condition than most
"just build it yourself" advice implies — which is exactly why it's worth being
precise about when it actually applies.
