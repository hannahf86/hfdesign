// Component: SectionHead — index numeral, title, optional trailing note, and the
// hairline beneath. The rule wipes in from the left on entry, echoing the
// travelling hairline in the contact block so the page reads as one system.

export default function SectionHead({ index, title, note }) {
  return (
    <div data-anim="up" className="sec-head">
      <span className="label label-accent">{index}</span>
      <h2>{title}</h2>
      {note && (
        <>
          <span className="spacer" />
          <span className="note">{note}</span>
        </>
      )}
      <span className="sec-rule" data-rule="" aria-hidden="true" />
    </div>
  )
}
