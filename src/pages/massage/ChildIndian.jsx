import React from "react";

const MassageChildIndian = React.forwardRef(function MassageChildIndian(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <header className="page-header">
          <span className="brand-label">Massage Therapy</span>
          <h1>Infant, Child &amp; Indian Head</h1>
        </header>

        <div className="ornament-divider"><span>✦</span></div>

        <div className="two-column">
          <div className="massage-card">
            <h2>Infant / Toddler / Child Massage</h2>
            <p>
              Gentle, nurturing massage designed for babies, toddlers, and children. Techniques
              are adapted to each age group, promoting bonding, relaxation, and overall wellbeing
              for young ones at every stage of development.
            </p>
            <p>
              Can support infants experiencing colic or digestive discomfort, improve sleep
              patterns, and strengthen the parent-child connection. Sessions include guidance
              so parents can continue the practice at home.
            </p>
            <p style={{ fontStyle: "italic", fontSize: "0.74rem", color: "var(--gold)", marginTop: "0.5rem" }}>
              ✦ Parent or guardian must be present throughout the session
            </p>
          </div>

          <div className="massage-card">
            <h2>Indian Head Massage</h2>
            <p>
              A traditional Ayurvedic treatment focusing on the scalp, face, neck, and shoulders —
              areas that commonly hold tension and stress. Based on techniques developed over
              centuries in India, this treatment promotes circulation and relieves tension headaches.
            </p>
            <p>
              Performed seated with no oils required (oils are optional upon request). An excellent
              choice for those short on time who still wish to experience a deeply calming treatment
              with immediate results.
            </p>
            <p style={{ fontStyle: "italic", fontSize: "0.74rem", color: "var(--gold)", marginTop: "0.5rem" }}>
              ✦ Typically 30–45 minutes — ask about combined session rates
            </p>
          </div>
        </div>

        <div className="page-footer">
          <span>PURLS Mobile Wellness</span>
          <span>Massage — Page 4 of 7</span>
        </div>
      </div>
    </div>
  );
});

export default MassageChildIndian;
