// Route: POST /api/contact — the contact form's delivery endpoint.
//
// Sends through Resend's REST API with fetch rather than the SDK. It is one
// authenticated POST, so a dependency would buy nothing and this repo keeps a
// deliberately short dependency list.
//
// Three environment variables, all set in Vercel rather than here:
//   RESEND_API_KEY  required. Without it the route returns 503 and the form
//                   tells the reader to email instead, rather than silently
//                   swallowing a message.
//   CONTACT_TO      where enquiries land. Defaults to the address already
//                   published in the contact section.
//   CONTACT_FROM    the sender. Must be on a domain verified in Resend, which
//                   is why it is configurable rather than hard-coded.

const TO = process.env.CONTACT_TO || 'hannahfeehan.dev@gmail.com'
const FROM = process.env.CONTACT_FROM || 'hfdesign contact form <contact@hfdesign.co.uk>'

// The values the select offers. Anything else is a client that did not use the
// form, so it is rejected rather than passed through into an email.
const PROJECTS = new Set([
  'Role or job opportunity',
  'Website',
  'Web app',
  'Mobile app',
  'Still deciding',
])

const LIMITS = { name: 100, email: 200, message: 5000 }

// Deliberately loose. The only address shape worth rejecting here is one that
// cannot be replied to at all; anything stricter turns away valid addresses for
// no gain, since the real check is whether Hannah's reply arrives.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value, max) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Malformed request.' }, { status: 400 })
  }

  // Spam traps, both invisible to a person. `company` is a honeypot: it is
  // hidden from view and from assistive tech, so only a bot filling every field
  // it finds will populate it. `startedAt` catches the other kind, which posts
  // the moment the page loads. Both return 200 rather than an error, because an
  // error tells a bot what to change.
  if (clean(body.company, 100)) return Response.json({ ok: true })
  const elapsed = Date.now() - Number(body.startedAt || 0)
  if (!Number.isFinite(elapsed) || elapsed < 2500) return Response.json({ ok: true })

  const name = clean(body.name, LIMITS.name)
  const email = clean(body.email, LIMITS.email)
  const project = clean(body.project, 60)
  const message = clean(body.message, LIMITS.message)

  const errors = {}
  if (!name) errors.name = 'Please add your name.'
  if (!email) errors.email = 'Please add an email address.'
  else if (!EMAIL.test(email)) errors.email = 'That does not look like an email address.'
  if (!PROJECTS.has(project)) errors.project = 'Please choose one.'
  if (!message) errors.message = 'Please add a message.'

  if (Object.keys(errors).length > 0) {
    return Response.json({ errors }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('Contact form: RESEND_API_KEY is not set, message not sent.')
    return Response.json({ error: 'unconfigured' }, { status: 503 })
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        // Replying to the notification replies to the sender, so the enquiry
        // can be answered from the inbox without copying the address out.
        reply_to: email,
        subject: `${project} — ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Enquiry: ${project}`,
          '',
          message,
        ].join('\n'),
      }),
    })

    if (!res.ok) {
      // Resend's body explains the failure (unverified domain, bad key). It is
      // logged for Hannah and never returned, since it is not the reader's
      // problem and can name internal configuration.
      console.error('Contact form: Resend returned', res.status, await res.text())
      return Response.json({ error: 'send-failed' }, { status: 502 })
    }
  } catch (err) {
    console.error('Contact form: request to Resend failed.', err)
    return Response.json({ error: 'send-failed' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
