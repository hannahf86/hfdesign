'use client'

// Component: SchemaMap — the interactive database diagram for the JWD client
// portal, built from the Claude Design project "Portal Schema Map".
//
// Twenty tables grouped by what they do. Each card collapses to a name and a
// column count and expands in place to its full column list. Hovering a card
// dims every table it does not connect to, so a reader can see a table's
// neighbourhood without reading any SQL.
//
// The related set is derived on each render rather than stored: the hovered
// table's own foreign-key targets, plus every table whose foreign keys point
// back at it. Only three things are state — which cards are open, which card
// is hovered, and whether the bulk toggle last expanded or collapsed.
//
// The design is Jorvik Web Dev's, not this site's, because the diagram is an
// artefact of that project in the same way the wireframe boards are. Its
// styles all sit under `.sm-` in styles/schema-map.css and it declares its own
// three font families on the root element, so nothing leaks into the case
// study around it.

import { useCallback, useMemo, useState } from 'react'
import { GROUPS, TABLES, fksOf } from '@/data/portal-schema'

// Which tag a column earns, and the colour it is drawn in. A primary key that
// is also a foreign key shows both, because portal_users and project_briefs
// are exactly that and the distinction matters when reading the joins.
function tagFor(flags) {
  const pk = /pk/.test(flags)
  const fk = /fk:/.test(flags)
  const uniq = /uniq/.test(flags)
  const req = /req/.test(flags) || pk || uniq

  if (pk) return { text: fk ? 'PK·FK' : 'PK', tone: 'pk' }
  if (fk) return { text: 'FK', tone: 'fk' }
  if (uniq) return { text: 'UNIQUE', tone: 'fk' }
  if (req) return { text: '•', tone: 'req' }
  return { text: '', tone: '' }
}

function columnTone(flags) {
  if (/pk/.test(flags)) return 'pk'
  if (/fk:/.test(flags)) return 'fk'
  return ''
}

function TableCard({ table, open, hovered, dimmed, onToggle, onEnter, onLeave, referencedBy }) {
  const fks = fksOf(table)
  const panelId = `sm-cols-${table.name}`

  return (
    <div
      className="sm-card"
      data-hovered={hovered ? 'true' : 'false'}
      data-dimmed={dimmed ? 'true' : 'false'}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* A real button, so the card is reachable and announced without us
          reinventing what a disclosure already does. Focus doubles as hover
          so keyboard readers get the same highlighting. */}
      <button
        type="button"
        className="sm-card-head"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        onFocus={onEnter}
        onBlur={onLeave}
      >
        <span className="sm-card-name">{table.name}</span>
        <span className="sm-card-count">{table.cols.length} cols</span>
      </button>

      {fks.length > 0 && (
        <div className="sm-card-links" aria-hidden="true">
          → {fks.join(' · ')}
        </div>
      )}

      <div id={panelId} className="sm-card-body" hidden={!open}>
        {table.cols.map((col) => {
          const tag = tagFor(col.f)
          return (
            <div key={col.n} className="sm-col">
              <span className="sm-col-name" data-tone={columnTone(col.f)}>
                {col.n}
              </span>
              {tag.text && (
                <span className="sm-col-tag" data-tone={tag.tone}>
                  {tag.text}
                </span>
              )}
              <span className="sm-col-gap" />
              <span className="sm-col-type">{col.t}</span>
            </div>
          )
        })}

        {referencedBy.length > 0 && (
          <div className="sm-card-refs">Referenced by {referencedBy.join(', ')}</div>
        )}
      </div>
    </div>
  )
}

export default function SchemaMap() {
  const [open, setOpen] = useState({})
  const [hover, setHover] = useState(null)
  const [allOpen, setAllOpen] = useState(false)

  // Who points at whom. Neither side changes, so both directions are worked
  // out once rather than on every hover.
  const { childrenOf, targetsOf } = useMemo(() => {
    const childrenOf = {}
    const targetsOf = {}
    TABLES.forEach((t) => {
      const fks = fksOf(t)
      targetsOf[t.name] = fks
      fks.forEach((target) => {
        if (!childrenOf[target]) childrenOf[target] = []
        childrenOf[target].push(t.name)
      })
    })
    return { childrenOf, targetsOf }
  }, [])

  const related = useMemo(() => {
    if (!hover) return null
    const set = new Set([hover])
    ;(targetsOf[hover] || []).forEach((n) => set.add(n))
    ;(childrenOf[hover] || []).forEach((n) => set.add(n))
    return set
  }, [hover, targetsOf, childrenOf])

  const toggle = useCallback((name) => {
    setOpen((s) => ({ ...s, [name]: !s[name] }))
  }, [])

  const toggleAll = useCallback(() => {
    setAllOpen((wasOpen) => {
      const next = !wasOpen
      const map = {}
      if (next) TABLES.forEach((t) => { map[t.name] = true })
      setOpen(map)
      return next
    })
  }, [])

  return (
    <div className="sm-root">
      <div className="sm-head">
        <div className="sm-head-text">
          <div className="sm-eyebrow">Client portal · database</div>
          <div className="sm-title">Schema map</div>
          <p className="sm-intro">
            Twenty tables, grouped by what they do. Select any card to see its columns. Hover to
            light up everything it connects to.
          </p>
        </div>

        <div className="sm-head-controls">
          <span className="sm-legend" data-tone="pk">
            <span className="sm-legend-key">PK</span>
            <span className="sm-legend-label">primary key</span>
          </span>
          <span className="sm-legend" data-tone="fk">
            <span className="sm-legend-key">FK</span>
            <span className="sm-legend-label">foreign key</span>
          </span>
          <span className="sm-legend" data-tone="req">
            <span className="sm-legend-key">•</span>
            <span className="sm-legend-label">required</span>
          </span>
          <button type="button" className="sm-toggle-all" onClick={toggleAll}>
            {allOpen ? 'Collapse all' : 'Expand all'}
          </button>
        </div>
      </div>

      <div className="sm-groups">
        {GROUPS.map((group, gi) => (
          <section key={group.title} className="sm-group">
            <div className="sm-group-head">
              <h3 className="sm-group-pill" style={{ background: group.hue }}>
                {group.title}
              </h3>
              <span className="sm-group-note">{group.note}</span>
              <span className="sm-group-rule" />
            </div>

            <div className="sm-cards">
              {TABLES.filter((t) => t.group === gi).map((t) => (
                <TableCard
                  key={t.name}
                  table={t}
                  open={!!open[t.name]}
                  hovered={hover === t.name}
                  dimmed={!!related && !related.has(t.name)}
                  referencedBy={childrenOf[t.name] || []}
                  onToggle={() => toggle(t.name)}
                  onEnter={() => setHover(t.name)}
                  onLeave={() => setHover(null)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="sm-callout">
        <span className="sm-callout-pill">auth.users</span>
        <p className="sm-callout-copy">
          Supabase Auth owns this table, so it sits outside <strong>public</strong>. The only way in
          is <strong>portal_users.user_id</strong>, which carries the admin-or-client role and, for
          clients, the one <strong>client_id</strong> their row-level security rules are built on.
        </p>
      </div>
    </div>
  )
}
