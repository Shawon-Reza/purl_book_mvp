import React from "react";

const MassageLymphaticAroma = React.forwardRef(function MassageLymphaticAroma(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <header className="page-header">
          <span className="brand-label">Massage Therapy</span>
          <h1>Lymphatic Drainage &amp; Aromatherapy</h1>
        </header>

        <div className="ornament-divider"><span>✦</span></div>

        <div className="two-column">
          <div className="massage-card">
            <h2>Lymphatic Drainage</h2>
            <p>
              A gentle, rhythmic massage technique that stimulates the lymphatic system to
              encourage the natural drainage of lymph fluid from tissues throughout the body.
              Particularly effective for reducing oedema (swelling) and supporting the immune system.
            </p>
            <p>
              Recommended following surgery, for those with lymphoedema, or for clients
              seeking detoxification and reduced water retention. The light touch promotes deep
              relaxation alongside its therapeutic benefits.
            </p>
            <p style={{ fontStyle: "italic", fontSize: "0.74rem", color: "var(--gold)", marginTop: "0.5rem" }}>
              ✦ Particularly beneficial post-surgery or for oedema management
            </p>
          </div>

          <div className="massage-card">
            <h2>Aromatherapy &amp; Hot Stones</h2>
            <p>
              A deeply relaxing full-body massage combining the therapeutic properties of
              essential oils with the warmth of smooth, heated basalt stones. The heat penetrates
              muscle tissue more deeply than standard massage alone.
            </p>
            <p>
              Essential oils are selected specifically for your needs — whether calming, energising,
              or balancing — and are blended into a carrier oil for use throughout the treatment.
            </p>
            <p style={{ fontStyle: "italic", fontSize: "0.74rem", color: "var(--gold)", marginTop: "0.5rem" }}>
              ✦ Ideal for stress relief and deep muscular relaxation
            </p>
          </div>
        </div>

        <div className="page-footer">
          <span>PURLS Mobile Wellness</span>
          <span>Massage — Page 3 of 7</span>
        </div>
      </div>
    </div>
  );
});

export default MassageLymphaticAroma;
