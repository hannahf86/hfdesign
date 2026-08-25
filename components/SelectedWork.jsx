// Component: SelectedWork — section head, the three accordion cards, and the
// Wise Mind in-progress panel beneath them.

import WorkAccordion from './WorkAccordion'
import WiseMind from './WiseMind'
import SectionHead from './SectionHead'

export default function SelectedWork({ items }) {
  return (
    <section id="work" className="wrap" style={{ paddingTop: 96 }}>
      <SectionHead index="01" title="Selected work" note="problem → process → decisions → outcome" />

      <WorkAccordion items={items} />
      <WiseMind />
    </section>
  )
}
