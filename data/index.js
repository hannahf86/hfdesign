// src/data/index.js — case studies, credentials, stack

export const CASES = [
  {
    id: "mirian",
    num: "01",
    client: "Sael North",
    sector: "Finance · Wellbeing",
    date: "June 2026",
    role: "Full stack development · UX design · Brand identity · Product strategy",
    title: "A debt tracker for neurodiverse individuals.",
    summary:
      "A full-stack web app designed and built from scratch. Research-led UX decisions translated into a working product — non-judgmental tone, executive-function-aware flows, and a calm visual identity built for people who find money stressful.",
    description: [
      "Most debt trackers are built for people who are already on top of their finances. They assume you know your balances, remember your due dates, and feel comfortable logging a missed payment without shame. For neurodiverse people — those with ADHD, autism, anxiety, or other conditions that affect executive function — that assumption fails completely.",
      "Mirian started from a simple question: what would a debt tracker look like if it was genuinely built for someone who finds this stuff hard?",
      "I designed and built the entire product myself — from the initial UX decisions through to deployment — with neurodiverse users at the centre of every decision.",
      "The result is a freemium SaaS product under my digital tools studio, Sael North, sitting alongside Wise Mind (a DBT skills app currently in development).",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "NextAuth",
      "Vercel",
    ],
    accent: "#5b7d74",
    accentText: "#fffaf3",
    metrics: [
      { label: "Core pages built", value: "12" },
      { label: "Payment flow states", value: "5" },
      { label: "Project lead & Developer", value: "1" },
    ],
    deliverables: [
      "Full stack web app",
      "Supabase schema with RLS",
      "Brand identity",
      "Yearly & monthly tracker",
      "Debt detail pages",
      "Branching payment flow",
    ],
    process: [
      "UX research · Problem definition · Audience identification",
      "Information architecture · User flow mapping · Navigation design",
      "Component design · Light mode UI · Sael North brand system",
      "Full stack build · Auth · CRUD · Payment logic · Deployment",
    ],
    visual: "mirian",
    body: [
      {
        kind: "eyebrow-h",
        label: "Brief",
        title:
          "To design a finance app that genuinely works for people who find money stressful, especially those with ADHD and executive dysfunction.",
      },
      {
        kind: "p",
        text: "Mirian is a personal project and the first commercial product from Sael North, a digital tools studio I founded in York. Built from lived experience of neurodiversity and financial stress, it's designed for the people that most fintech products completely overlook.",
      },
      {
        kind: "pull-quote",
        text: '"Track what you owe. Celebrate what you\'ve paid. Watch it all get smaller." Progress over perfection, always.',
      },
      {
        kind: "eyebrow-h",
        label: "The problem",
        title: "Most fintech is built for people who don't need it.",
      },
      {
        kind: "p",
        text: "Debt management apps assume a level of executive function that many neurodiverse people simply don't have on a bad day. They're binary — paid or not paid — with no room for the messy reality of short payments, late payments, or the shame spiral that stops people logging anything at all.",
      },
      {
        kind: "list",
        items: [
          "No space for 'I paid, but less than I should have'",
          "No acknowledgement that missing a payment doesn't make you a bad person",
          "No support for the executive function wall of 'I need to contact them but I can't face it'",
          "No celebration of progress — only a record of what's still owed",
        ],
      },
      {
        kind: "eyebrow-h",
        label: "UX decisions",
        title: "Shame-free by design.",
      },
      {
        kind: "p",
        text: "Every decision in Mirian was made with one question in mind: does this make the user feel worse, or better? The language, the flows, the visual identity — all of it designed to reduce friction and increase self-compassion.",
      },
      {
        kind: "list",
        items: [
          "The payment modal branches based on what actually happened — on time, late, short, overpaid — removing the executive function burden of 'I don't know what category this is'",
          "Missed payments are muted on the tracker, not shown as red crosses — avoiding the shame spiral of seeing a row of failures",
          "Every confirmation message is supportive — 'Late payments happen. What matters is you're on it.'",
          "The arrangement system reflects reality — payment plan in place, needs setting up, awaiting response — not just active or inactive",
          "The debt cleared by date is always visible and always dynamic — giving users a concrete, hopeful endpoint",
        ],
      },
      {
        kind: "eyebrow-h",
        label: "Brand",
        title: "Sage and peach, said warmly.",
      },
      {
        kind: "p",
        text: "Sael North palette throughout — sage, peach, mint. Atkinson Hyperlegible, a font designed specifically for readability and accessibility. A leaf motif logo that says growth and renewal, not debt and obligation. Deliberately warm where fintech is cold.",
      },
      {
        kind: "eyebrow-h",
        label: "V2 roadmap",
        title: "Where it goes next.",
      },
      {
        kind: "list",
        items: [
          "AI email templates — pre-populated from missed payment notes, one tap to send to creditor. Removes the executive function wall of 'I can't face writing that email'",
          "Reflection page — all notes and reasons over time, pattern recognition",
          "Gamification — streaks, badges, celebrating milestones",
          "Therapist / support worker login — read-only view for professionals supporting clients",
          "Printable reports — for debt management appointments and benefit reviews",
          "React Native mobile app — same Supabase backend, native iOS and Android",
        ],
      },
      {
        kind: "metrics-row",
        items: [
          { label: "Pages built", value: "12" },
          { label: "Payment flow states", value: "5" },
          { label: "Stack layers", value: "6" },
          { label: "Post-launch tickets", value: "00" },
        ],
      },
    ],
  },
  {
    id: "wisemind",
    num: "02",
    client: "Sael North",
    sector: "Mental Health · Wellbeing",
    date: "Jan 2026 — ongoing",
    role: "Product strategy · UX design · Frontend engineering",
    title: "A DBT skills app that teaches users to help themselves.",
    summary:
      "Dialectical Behaviour Therapy is one of the most evidence-based treatments for emotional dysregulation and a range of conditions that disproportionately affect neurodiverse people. In the midst of the NHS mental health crisis, there's a huge opportunity to build digital tools that increase access to DBT skills and support. ",
    description: [
      "Dialectical Behaviour Therapy is one of the most evidence-based treatments for emotional dysregulation, borderline personality disorder, and a range of conditions that disproportionately affect neurodiverse people. But the existing tools are clunky, clinical, and completely ignore the reality of what it's like to need help in the middle of a crisis.",
      "Wise Mind started with the Linehan manual, then moved to clinician and patient interviews. The goal: understand how DBT actually works in practice — not the 24-skill theory, but the four core modules and the three or four skills any given person actually uses.",
      "Two deliberate UX decisions shaped everything. First: most people use 3–5 skills consistently, not all 30. So SOS mode and 'My Toolkit' exist as emergency shortcuts that learn what actually helps you. Second: therapist involvement is built in — clinicians can monitor skill usage without patients having to actively share, giving them talking points in session.",
      "Currently in private beta with clinical users, iterating on usage data and feedback. Wise Mind is the second product under Sael North and the one most likely to pursue external funding — clinical complexity and safeguarding requirements make it a different beast to Mirian.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Tailwind", "Supabase"],
    accent: "#5b7d74",
    accentText: "#ffffff",
    metrics: [
      { label: "Taps to first skill", value: "2" },
      { label: "DBT modules", value: "4" },
      { label: "Target session length", value: "< 60s" },
    ],
    deliverables: [
      "Research synthesis from DBT clinicians and patients",
      "Information architecture",
      "React Native component library",
      "SOS mode and My Toolkit flows",
      "Therapist monitoring layer",
    ],
    process: [
      "Research: Linehan manual + clinician & patient interviews",
      "IA: Four emotional states mapped to skill modules",
      "Build: React Native + Expo, Supabase backend",
      "Private beta with clinical users · Weekly iteration",
    ],
    visual: "wisemind",
    body: [
      {
        kind: "eyebrow-h",
        label: "Brief",
        title:
          "Build a DBT skills app for the moment someone actually needs it — not when they're calm, organised, and have time to read.",
      },
      {
        kind: "p",
        text: "Wise Mind is the second product under Sael North, a York-based studio building digital tools for neurodiverse individuals. Where Mirian handles the practical — debt, money, executive function — Wise Mind handles the emotional. DBT skills, crisis support, and therapist connection, in an app designed for the worst moments, not the best ones.",
      },
      {
        kind: "pull-quote",
        text: '"Your DBT skills, your way." Two taps to the right skill. Out again in under a minute.',
      },
      {
        kind: "eyebrow-h",
        label: "The problem",
        title:
          "Most mental health apps are designed for when you're already fine.",
      },
      {
        kind: "p",
        text: "Existing DBT tools present 24 skills in a library and expect users to browse, read, and select the right one under emotional duress. That's not how crisis works. The cognitive load of navigation is exactly what you can't afford when you need help most.",
      },
      {
        kind: "list",
        items: [
          "24 skills presented as a flat list — no hierarchy, no urgency routing",
          "No distinction between 'I have five minutes' and 'I need help right now'",
          "No therapist integration — skills practiced in isolation, never discussed in session",
          "No personalisation — the app doesn't learn what actually works for you",
          "Designed for compliance, not for crisis",
        ],
      },
      {
        kind: "eyebrow-h",
        label: "UX decisions",
        title: "Two taps to the right skill.",
      },
      {
        kind: "p",
        text: "Every decision was made with one constraint: if someone is in emotional crisis, this has to work. That means ruthless prioritisation, no cognitive overhead, and a design that assumes the user is not at their best.",
      },
      {
        kind: "list",
        items: [
          "SOS mode — one tap from anywhere, routes to the user's most-used crisis skills immediately",
          "My Toolkit — a personalised shortlist that learns what you actually reach for, not what the manual suggests",
          "Four emotional states as entry points, not 24 module names — 'I'm overwhelmed' not 'Distress Tolerance'",
          "Therapist monitoring layer — clinicians see skill usage data without patients having to actively share, creating natural session talking points",
          "Session length target under 60 seconds — if it takes longer than that to get to a skill, the design has failed",
        ],
      },
      {
        kind: "eyebrow-h",
        label: "Brand",
        title: "Sage mist and warm neutrals.",
      },
      {
        kind: "p",
        text: "Sael North palette — sage, peach, mint. Calm without being clinical. The Wise Mind visual identity uses the same leaf motif as Mirian — growth, renewal, care — but applied to a darker, more grounding context. This is a crisis tool. It needs to feel safe, not cheerful.",
      },
      {
        kind: "eyebrow-h",
        label: "What's next",
        title: "External funding, clinical validation.",
      },
      {
        kind: "p",
        text: "Wise Mind is the Sael North product most likely to pursue external funding. Clinical validation, NHS partnership potential, and safeguarding requirements make it a different beast to Mirian — it needs resource and credibility that a bootstrap model alone can't deliver. The plan: get to a solid private beta, gather clinical evidence, then approach investors from a position of strength.",
      },
      {
        kind: "metrics-row",
        items: [
          { label: "Taps to first skill", value: "2" },
          { label: "DBT modules", value: "4" },
          { label: "Target session", value: "< 60s" },
          { label: "Beta users", value: "ongoing" },
        ],
      },
    ],
  },
  {
    id: "jorvik",
    num: "03",
    client: "Jorvik Web Dev",
    sector: "Internal tools · SaaS",
    date: "Mar 2026",
    role: "Systems thinking · Full-stack development",
    title: "The portal I wish I'd had three years ago.",
    summary:
      "A self-built client portal for running a solo studio — projects, milestones, handovers, client tasks, useful links. Built because nothing on the market quite fit, and because eating your own cooking makes you a better cook.",
    description: [
      "I was losing hours a day context-switching between Notion, email, ClickUp, and spreadsheets. Separate services that almost did what I needed but never quite fit. So I built a portal to consolidate everything: projects, milestones, handovers, client tasks, useful links — all in one place, queryable, and fast.",
      "I started with schema design. Projects have milestones; milestones have handovers; handovers surface client tasks. Built NextAuth for the auth layer and a light RBAC so clients can see their own work without access to everything else.",
      "The dashboard answers one question: what's overdue? Stats at the top, recent project list, pending actions. Nothing extraneous. If it doesn't answer that question, it doesn't get built.",
      "Shipped six routes over a long weekend; the rest landed across two evenings each. LUCENT Biopharma, Feel Good Menopause, Wise Mind DBT, and Mirian are all managed inside it. Eating your own cooking means the tool evolves with the business.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "NextAuth",
      "Tailwind",
      "Vercel",
    ],
    accent: "#9388e8",
    accentText: "#0c0a10",
    metrics: [
      { label: "Hours / week saved", value: "~6" },
      { label: "Routes shipped", value: "14" },
      { label: "Tables", value: "08" },
    ],
    deliverables: [
      "Schema design",
      "Auth + RBAC",
      "Project, milestone & handover flows",
      "Client task surfaces",
      "Useful links library",
    ],
    process: [
      "Schema design · Projects, milestones, handovers, tasks",
      "Auth layer (NextAuth) · RBAC for client access",
      "Dashboard design · Overdue-first prioritisation",
      "Shipped MVP over a weekend · Incremental feature builds",
    ],
    visual: "jorvik",
    body: [
      {
        kind: "eyebrow-h",
        label: "Brief",
        title:
          "Stop paying for five tools that almost fit. Build one that actually does.",
      },
      {
        kind: "p",
        text: "The Jorvik Web Dev portal is a self-built internal tool for running a solo studio. Projects, milestones, handovers, client tasks — all in one place, without the subscription overhead or the compromise of making your workflow fit someone else's product.",
      },
      {
        kind: "pull-quote",
        text: "The dashboard answers one question: what's overdue? If a feature doesn't answer that question, it doesn't get built.",
      },
      {
        kind: "eyebrow-h",
        label: "The problem",
        title: "Solo studios bleed time to context switching.",
      },
      {
        kind: "p",
        text: "Running a solo studio means wearing every hat. Project manager, developer, account manager, copywriter. The cognitive overhead of switching between Notion, ClickUp, email, and spreadsheets wasn't just annoying — it was costing real hours every week.",
      },
      {
        kind: "list",
        items: [
          "No single source of truth — project status lived in three different places",
          "Client handovers done via email, impossible to track or reference",
          "No way to surface what was actually overdue without opening five tabs",
          "Paying for tools that each did 70% of what was needed",
          "Context switching breaking deep work sessions multiple times a day",
        ],
      },
      {
        kind: "eyebrow-h",
        label: "Architecture",
        title: "Schema first, features second.",
      },
      {
        kind: "p",
        text: "Started with the data model, not the UI. Projects have milestones. Milestones have handovers. Handovers surface client tasks. Getting that hierarchy right meant every feature that followed had a clean place to live.",
      },
      {
        kind: "list",
        items: [
          "NextAuth for session management — same pattern as Mirian and Wise Mind, consistent across the Sael North stack",
          "Light RBAC — clients log in and see their own project, nothing else",
          "Overdue-first dashboard — the most important information at the top, always",
          "Useful links library — every client gets a curated set of resources relevant to their project",
          "Milestone and handover flows — structured enough to be useful, flexible enough to fit any project type",
        ],
      },
      {
        kind: "eyebrow-h",
        label: "Build",
        title: "Six routes over a long weekend.",
      },
      {
        kind: "p",
        text: "Shipped the MVP over a single long weekend. The remaining routes came across two evenings each. No ceremony, no planning sprints — just schema, build, deploy, use. LUCENT Biopharma, Feel Good Menopause, Wise Mind DBT, and Mirian are all managed inside it now. The tool evolves as the business does.",
      },
      {
        kind: "eyebrow-h",
        label: "What's next",
        title: "A subscription product for other solo studios.",
      },
      {
        kind: "p",
        text: "The portal works well enough that it's worth turning into a product. A subscription tier for other solo freelancers and small studios — the people who are also losing hours to context switching and paying for tools that almost fit. Planned under the Sael North umbrella alongside Mirian and Wise Mind.",
      },
      {
        kind: "metrics-row",
        items: [
          { label: "Hours / week saved", value: "~6" },
          { label: "Routes shipped", value: "14" },
          { label: "Tables", value: "08" },
          { label: "Subscriptions cancelled", value: "04" },
        ],
      },
    ],
  },
];

export const CREDENTIALS = [
  {
    label: "Google UX Design",
    org: "Google · Coursera",
    detail: "Certificate · 2022",
    type: "cert",
  },
  {
    label: "Full-Stack Developer",
    org: "IT Career Switch",
    detail: "Diploma · 2023",
    type: "cert",
  },
  {
    label: "Meta Social Media Marketing",
    org: "Coursera",
    detail: "Certificate · 2025",
    type: "cert",
  },
  {
    label: "Webflow Foundations Partner",
    org: "Webflow",
    detail: "Certificate · 2026",
    type: "cert",
  },
  {
    label: "Enterprise Cube",
    org: "Digital skills training",
    detail: "Official trainer · 2025 →",
    type: "partner",
  },
  {
    label: "York & N. Yorks Growth Hub",
    org: "Small-business support",
    detail: "Course provider · 2025 →",
    type: "partner",
  },
  {
    label: "LX Foundry",
    org: "Course provider",
    detail: "Official trainer · 2026 →",
    type: "partner",
  },
];

export const TRAINING_TOPICS = [
  "Data-driven decision making",
  "E-commerce fundamentals",
  "Website strategy for small business",
  "UX for non-designers",
  "AI in everyday business workflows",
];

export const STACK = [
  {
    label: "Design",
    lead: ["Figma", "Adobe XD"],
    rest: ["Canva", "Auto-layout", "Variables", "Prototyping", "Handoff"],
  },
  {
    label: "Frontend",
    lead: ["React", "Next.js", "TypeScript"],
    rest: [
      "Tailwind CSS",
      "React Native",
      "CSS",
      "HTML",
      "Liquid",
      "Server components",
    ],
  },
  {
    label: "No-code",
    lead: ["Webflow", "Shopify"],
    rest: ["Wix", "CMS modelling", "Interactions"],
  },
  {
    label: "Backend",
    lead: ["NextAuth", "Vercel", "Postgres"],
    rest: [
      "SQL",
      "Supabase",
      "Server actions",
      "Edge functions",
      "Authentication flows",
    ],
  },
  {
    label: "Research",
    lead: ["User journeys", "Personas", "Site mapping"],
    rest: ["Content audits", "Interviews", "Usability testing"],
  },
];

export const ACCENT_PRESETS = {
  "#6657d4": {
    hover: "#9388e8",
    deep: "#4a3da8",
    glow: "rgba(102, 87, 212, 0.30)",
    tint: "rgba(102, 87, 212, 0.08)",
  },
  "#6a53fe": {
    hover: "#9f90fe",
    deep: "#4e3acf",
    glow: "rgba(106, 83, 254, 0.32)",
    tint: "rgba(106, 83, 254, 0.08)",
  },
  "#3aa550": {
    hover: "#5fc474",
    deep: "#268040",
    glow: "rgba(58, 165, 80, 0.26)",
    tint: "rgba(58, 165, 80, 0.08)",
  },
  "#ad3e28": {
    hover: "#cf5b41",
    deep: "#7e2c1c",
    glow: "rgba(173, 62, 40, 0.28)",
    tint: "rgba(173, 62, 40, 0.07)",
  },
};
