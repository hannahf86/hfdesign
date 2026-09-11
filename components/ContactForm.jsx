'use client'

// Component: ContactForm — the short enquiry form in the contact section.
//
// Four fields and a send. On success the form is replaced in place by a
// confirmation, so the reader's eye does not have to travel: the answer appears
// where the question was.
//
// The mailto link alongside it is the fallback and stays whatever happens here.
// This is a client component, so a reader with JavaScript off, or one who hits
// a delivery failure, still has a working way to make contact.

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const PROJECTS = [
  'Role or job opportunity',
  'Website',
  'Web app',
  'Mobile app',
  'Still deciding',
]

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Field order, so an invalid submit focuses the first problem as it reads down
// the form rather than in whatever order the errors object happens to hold.
const ORDER = ['name', 'email', 'project', 'message']

// Drawn rather than shipped as an icon so the tick can be animated stroke-first.
function Tick() {
  return (
    <svg viewBox="0 0 52 52" width="44" height="44" fill="none" aria-hidden="true">
      <circle className="cf-tick-ring" cx="26" cy="26" r="23" stroke="var(--accent-light)" strokeWidth="2" />
      <path
        className="cf-tick-mark"
        d="M15 26.5l8 8 14-15"
        stroke="var(--accent-light)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', project: '', message: '' })
  const [errors, setErrors] = useState({})
  const [state, setState] = useState('idle') // idle | sending | sent | error
  const [company, setCompany] = useState('') // honeypot
  const startedAt = useRef(Date.now())
  const formRef = useRef(null)
  const doneRef = useRef(null)
  const headingRef = useRef(null)

  const set = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    // Clear the error as soon as the reader starts fixing it, rather than
    // making them submit again to find out whether they have.
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
  }

  // The same rules the route enforces. This copy exists to answer immediately,
  // not to be trusted: the server validates again regardless.
  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please add your name.'
    if (!values.email.trim()) next.email = 'Please add an email address.'
    else if (!EMAIL.test(values.email.trim())) next.email = 'That does not look like an email address.'
    if (!values.project) next.project = 'Please choose one.'
    if (!values.message.trim()) next.message = 'Please add a message.'
    return next
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (state === 'sending') return

    const found = validate()
    setErrors(found)
    const firstBad = ORDER.find((f) => found[f])
    if (firstBad) {
      // Send focus to the first problem so a screen reader lands on it rather
      // than being told only that something, somewhere, is wrong. The field is
      // found from the validation result rather than by querying the DOM for
      // aria-invalid: setErrors has not rendered yet at this point, so that
      // query would match nothing and focus would go nowhere.
      formRef.current?.querySelector(`#cf-${firstBad}`)?.focus()
      return
    }

    setState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, company, startedAt: startedAt.current }),
      })
      const data = await res.json().catch(() => ({}))

      if (res.ok) {
        setState('sent')
        return
      }
      if (data.errors) {
        setErrors(data.errors)
        setState('idle')
        return
      }
      setState('error')
    } catch {
      setState('error')
    }
  }

  // The success animation. `data-motion` is the single source of truth, same as
  // everywhere else on the site: under reduced motion the confirmation is simply
  // there, which is the whole point of the setting.
  useEffect(() => {
    if (state !== 'sent') return
    const done = doneRef.current
    if (!done) return

    // Move focus to the confirmation so the outcome is announced and a keyboard
    // reader is not left on a button that no longer exists.
    headingRef.current?.focus()

    if (document.documentElement.dataset.motion === 'reduced') return

    const ring = done.querySelector('.cf-tick-ring')
    const mark = done.querySelector('.cf-tick-mark')
    const lines = done.querySelectorAll('[data-cf-line]')

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      tl.fromTo(done, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' })
      // Draw both strokes from nothing, so the tick is written rather than
      // faded in. The lengths are measured rather than guessed.
      ;[ring, mark].forEach((el, i) => {
        if (!el) return
        const len = el.getTotalLength()
        tl.fromTo(
          el,
          { strokeDasharray: len, strokeDashoffset: len },
          { strokeDashoffset: 0, duration: i === 0 ? 0.5 : 0.35, ease: 'power2.inOut' },
          i === 0 ? '-=0.25' : '-=0.12',
        )
      })
      tl.fromTo(
        lines,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.09, ease: 'power3.out' },
        '-=0.2',
      )
    }, done)

    return () => ctx.revert()
  }, [state])

  if (state === 'sent') {
    return (
      <div ref={doneRef} className="cf-done" role="status">
        <Tick />
        <div>
          <p data-cf-line="" ref={headingRef} tabIndex={-1} className="cf-done-head">
            Message sent.
          </p>
          <p data-cf-line="" className="cf-done-body">
            Hannah will be in touch within 2 working days.
          </p>
        </div>
      </div>
    )
  }

  const field = (name) => ({
    id: `cf-${name}`,
    name,
    value: values[name],
    onChange: set(name),
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `cf-${name}-error` : undefined,
  })

  return (
    <form ref={formRef} className="cf" onSubmit={onSubmit} noValidate>
      <div className="cf-grid">
        <div className="cf-field">
          <label htmlFor="cf-name" className="label">name</label>
          <input type="text" autoComplete="name" maxLength={100} {...field('name')} />
          {errors.name && <p id="cf-name-error" className="cf-error">{errors.name}</p>}
        </div>

        <div className="cf-field">
          <label htmlFor="cf-email" className="label">email</label>
          <input type="email" autoComplete="email" maxLength={200} {...field('email')} />
          {errors.email && <p id="cf-email-error" className="cf-error">{errors.email}</p>}
        </div>
      </div>

      <div className="cf-field">
        <label htmlFor="cf-project" className="label">what is it about</label>
        <select {...field('project')}>
          <option value="">Choose one</option>
          {PROJECTS.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        {errors.project && <p id="cf-project-error" className="cf-error">{errors.project}</p>}
      </div>

      <div className="cf-field">
        <label htmlFor="cf-message" className="label">message</label>
        <textarea rows={4} maxLength={5000} {...field('message')} />
        {errors.message && <p id="cf-message-error" className="cf-error">{errors.message}</p>}
      </div>

      {/* Honeypot. Hidden from view and from assistive tech, and never
          autofilled, so only a bot filling every field it finds will reach it. */}
      <div className="cf-hp" aria-hidden="true">
        <label htmlFor="cf-company">Company</label>
        <input
          id="cf-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="cf-actions">
        <button type="submit" className="btn btn-primary" disabled={state === 'sending'}>
          {state === 'sending' ? 'sending…' : 'send message →'}
        </button>
        {/* Assertive rather than polite: this replaces what the reader was
            about to do, so it should interrupt. */}
        <p className="cf-status" role="alert">
          {state === 'error' && (
            <>
              That did not send. Please email{' '}
              <a href="mailto:hannahfeehan.dev@gmail.com">hannahfeehan.dev@gmail.com</a> instead.
            </>
          )}
        </p>
      </div>
    </form>
  )
}
