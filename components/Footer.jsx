// Component: Footer — a rule and two mono lines. Used on every page.

export default function Footer() {
  return (
    <footer className="wrap" style={{ paddingTop: 64, paddingBottom: 48 }}>
      <div
        style={{
          borderTop: '1px solid var(--border-soft)',
          paddingTop: 22,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          justifyContent: 'space-between',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8125rem',
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          color: 'var(--fg-3)',
        }}
      >
        <span>Hannah Feehan · hfdesign.co.uk</span>
        <span>designed and built in York</span>
      </div>
    </footer>
  )
}
