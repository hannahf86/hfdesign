// Micro-mockup visuals for each case study card

export function MirianVisual() {
  return (
    <div className="cv-frame">
      <div className="cv-chrome">
        <span className="cv-dot" style={{ background: "#ff5f57" }} />
        <span className="cv-dot" style={{ background: "#febc2e" }} />
        <span className="cv-dot" style={{ background: "#28c840" }} />
        <span className="cv-url">
          https://debt-tracker-sigma-rust.vercel.app/
        </span>
      </div>
      <img
        src="/mirian-cover.svg"
        alt="Mirian asset cover image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
        }}
      />
    </div>
  );
}

export function WisemindVisual() {
  return (
    <div className="cv-frame" style={{ overflow: "hidden" }}>
      <div className="cv-chrome">
        <span className="cv-dot" style={{ background: "#ff5f57" }} />
        <span className="cv-dot" style={{ background: "#febc2e" }} />
        <span className="cv-dot" style={{ background: "#28c840" }} />
        <span className="cv-url">wiseminddbt.com</span>
      </div>
      <div className="cv-body" style={{ padding: 0, background: "#f2f0eb" }}>
        <img
          src="/wisemind-cover.svg"
          alt="Wise Mind DBT — homepage hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}

export function JorvikVisual() {
  return (
    <div className="cv-frame" style={{ overflow: "hidden" }}>
      <div className="cv-chrome">
        <span className="cv-dot" style={{ background: "#ff5f57" }} />
        <span className="cv-dot" style={{ background: "#febc2e" }} />
        <span className="cv-dot" style={{ background: "#28c840" }} />
        <span className="cv-url">www.jorvikweb.dev</span>
      </div>
      <div className="cv-body" style={{ padding: 0, background: "#f7f5f0" }}>
        <img
          src="/client-portal-cover.svg"
          alt="Jorvik Web Dev — homepage hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}

export const VISUALS = {
  mirian: MirianVisual,
  wisemind: WisemindVisual,
  jorvik: JorvikVisual,
};
