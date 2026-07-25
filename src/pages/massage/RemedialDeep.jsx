import React from "react";

const MassageRemedialDeep = React.forwardRef(function MassageRemedialDeep(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <header className="page-header">
          <span className="brand-label">Massage Therapy</span>
          <h1>Remedial &amp; Deep Tissue</h1>
        </header>

        <div className="ornament-divider"><span>✦</span></div>

        <div className="two-column">
          <div className="massage-card">
            <h2>Remedial Massage</h2>
            <p>
              Focuses on addressing underlying issues, whether they are related to muscle injuries,
              postural imbalances, or chronic pain. Offering long-term benefits that improve recovery
              and mobility, reduced pain and restore proper function and range of motion.
            </p>
            <p>
              Suitable for those recovering from injury, managing ongoing musculoskeletal conditions,
              or seeking to correct postural patterns developed over time.
            </p>
            <p style={{ fontStyle: "italic", fontSize: "0.74rem", color: "var(--gold)", marginTop: "0.5rem" }}>
              ✦ Recommended: 90 or 120 minutes
            </p>
          </div>

          <div className="massage-card">
            <h2>Deep Tissue</h2>
            <p>
              Uses slow, intense pressure to focus on fascia, knots, and adhesions, designed to target
              the deeper layers of muscle and connective tissue. Highly effective for releasing chronic
              tension and stubborn areas of tightness.
            </p>
            <p>
              Particularly beneficial for individuals with persistent muscle tension, limited mobility,
              or those who engage in regular physical activity and require thorough recovery work.
            </p>
            <p style={{ fontStyle: "italic", fontSize: "0.74rem", color: "var(--gold)", marginTop: "0.5rem" }}>
              ✦ Recommended: 60 or 90 minutes
            </p>
          </div>
        </div>

        <div className="page-footer">
          <span>PURLS Mobile Wellness</span>
          <span>Massage — Page 1 of 7</span>
        </div>
      </div>
    </div>
  );
});

export default MassageRemedialDeep;
