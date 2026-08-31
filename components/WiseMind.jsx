// Component: WiseMind — the "currently building" panel. Deliberately a
// highlighted panel rather than a fourth accordion card, so an in-progress
// project never reads as finished work.

import Image from 'next/image'

const TECH = ['React Native', 'Expo', 'Supabase', 'TypeScript']

// Component: PhoneScreen — a real app screen in a phone frame.
function PhoneScreen({ src, alt, offset = 0 }) {
  return (
    <div
      style={{
        borderRadius: 'var(--r-5)',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-phone)',
        background: 'var(--img-bg)',
        marginTop: offset,
        lineHeight: 0,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={792}
        height={1752}
        sizes="(max-width: 900px) 44vw, 240px"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  )
}

export default function WiseMind() {
  return (
    <div
      data-anim="up"
      style={{
        marginTop: 40,
        border: '1px solid var(--accent)',
        borderRadius: 'var(--r-3)',
        background: 'linear-gradient(180deg, rgba(102,87,212,0.10), rgba(102,87,212,0.02))',
        padding: 'clamp(28px, 3.6vw, 48px)',
      }}
    >
      <div className="wm-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <span className="dot" data-dot="" aria-hidden="true" />
            <span className="label">currently building</span>
          </div>

          <h3 style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', letterSpacing: '-.03em' }}>Wise Mind</h3>

          <p
            style={{
              marginTop: 16,
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontVariationSettings: "'wdth' 100",
              fontSize: 'clamp(17px, 1.7vw, 21px)',
              lineHeight: 1.35,
              letterSpacing: '-.01em',
              color: 'var(--fg-1)',
              maxWidth: '32ch',
            }}
          >
            A DBT skills app for neurodivergent users, with an accessibility-first visual redesign in
            progress.
          </p>

          <p style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.85, maxWidth: '54ch' }}>
            Skills reference, diary card and crisis plan in one place. The current work is a full
            visual pass: contrast, motion, reading load, and a distress-state entry path that does
            not require a decision from someone in crisis.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24 }}>
            {TECH.map((t) => (
              <span key={t} className="chip chip-pill">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="wm-phones">
          <PhoneScreen
            src="/assets/case-studies/wisemind-lesson.webp"
            alt="The Wise Mind lesson screen: a ten-minute mindfulness module explaining Emotion Mind, Reasonable Mind and Wise Mind, showing step one of five."
          />
          <PhoneScreen
            src="/assets/case-studies/wisemind-journal.webp"
            alt="The Journal screen: a weekly completion tracker above a list of reflection, mood and free-write entries, each marked shared or private."
            offset={32}
          />
        </div>
      </div>

      <style>{`
        .wm-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: clamp(32px, 5vw, 72px);
          align-items: end;
        }
        .wm-phones {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          /* Without this the grid stretches each frame to the row height, and
             the offset second phone makes the row taller than the first frame's
             image — leaving empty frame below it. */
          align-items: start;
        }
        @media (max-width: 900px) {
          .wm-grid { grid-template-columns: 1fr; align-items: start; }
          .wm-phones { max-width: 320px; }
        }
      `}</style>
    </div>
  )
}
