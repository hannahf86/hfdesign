---
# NOTE: figures come from Hannah's handover notes: 8 live clients as of Aug
# 2026 and roughly 60% less admin. These replace the old "9 live projects" and
# "62% less status email" placeholders.
# CREDENTIALS: the demo login below is rendered on the public page, where it can
# be scraped and indexed. It is now a personal Gmail address rather than a
# disposable one, so the password must be portal-only and used nowhere else,
# above all not on that Google account. Unconfirmed as of this change.
slug: jwd-portal
num: "02"
title: JWD Client Portal
meta: 2026 · UX/UI design, development
year: "2026"
summary: >-
  A portal for my own studio, built around one question: what do I need to see,
  at what point.
cover: /assets/work/jwd-portal.webp
coverAlt: The JWD Client Portal dashboard, showing project status and milestones.
role: UX/UI Designer | Developer
tools: VS Code, Next.js, TypeScript, React, NextAuth, Postgres, Vercel, Canva
liveUrl: https://portal.jorvikweb.dev
credentials:
  username: hannahfeehan.music@gmail.com
  password: "Asturias86!"
openByDefault: false
hasCaseStudy: true
stats:
  - value: "8"
    label: live clients
    count: true
  - value: "60"
    label: "% less admin"
    count: true
  - value: AA
    label: wcag 2.2
    count: false
---

## problem

As a freelance web developer working with multiple clients at once, my projects
were organised across ClickUp, Notion and various Google apps. As an AuDHD
individual, I often found this overwhelming and frustrating to work with.
Clients also found having to learn ClickUp and Notion confusing, and it felt
like an unnecessary step in the project, so I decided enough was enough.

## design decisions

I needed a system that was intuitive and easy for clients, rather than one that
had me finding ways to work around a set system and adapting my way of working
to suit it. It had to be flexible.

Starting with hand-drawn wireframes, I thought about what I needed to see and
when: what was the vital information that had to get my attention, and how would
I make this work?

Everything had to be meaningful and serve a purpose, and I designed it all to
fit on one screen, because scrolling to find things was grating.

## outcome

Phase 1 is live, and cancelling the Notion and ClickUp subscriptions has cut my
monthly expenditure. I now have one system where I can:

- communicate with clients directly
- manage all document uploads
- produce invoices and get approvals
- create custom project templates
- book meetings
- track my own tasks
- create tasks for clients

I am extremely proud of this product, and v2 is planned. It will include:

- a calendar API, so a Google Meet no longer has to be added in two places
- payments taken directly
- notifications
- custom UI functionality
