import React from "react";

const MassageThaiAged = React.forwardRef(function MassageThaiAged(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <header className="page-header">
          <span className="brand-label">Massage Therapy</span>
          <h1>Thai Massage &amp; Aged Care</h1>
        </header>

        <div className="ornament-divider"><span>✦</span></div>

        <div className="two-column">
          <div className="massage-card">
            <h2>Thai Massage</h2>
            <p>
              An ancient healing system combining gentle pressure along energy lines (Sen lines)
              with assisted yoga-like stretching. Performed fully clothed on a comfortable mat,
              it improves flexibility, relieves tension, and restores energy flow throughout the body.
            </p>
            <p>
              Thai massage is both invigorating and deeply relaxing — often described as
              "passive yoga." It is particularly effective for individuals who feel energetically
              depleted, physically stiff, or in need of a thorough full-body release.
            </p>
            <p style={{ fontStyle: "italic", fontSize: "0.74rem", color: "var(--gold)", marginTop: "0.5rem" }}>
              ✦ Performed fully clothed — loose, comfortable attire recommended
            </p>
          </div>

          <div className="massage-card">
            <h2>Aged Care Massage</h2>
            <p>
              Specially designed for older adults, this gentle massage addresses the unique
              physical and emotional needs associated with ageing. Techniques are modified to
              accommodate reduced mobility, sensitive skin, and medical conditions common in later life.
            </p>
            <p>
              Regular massage can significantly improve quality of life for elderly clients by
              reducing isolation, alleviating aches and joint stiffness, improving circulation,
              and promoting a greater sense of wellbeing and dignity.
            </p>
            <p style={{ fontStyle: "italic", fontSize: "0.74rem", color: "var(--gold)", marginTop: "0.5rem" }}>
              ✦ Available in residential homes, care facilities, and private homes
            </p>
          </div>
        </div>

        <div className="page-footer">
          <span>PURLS Mobile Wellness</span>
          <span>Massage — Page 5 of 7</span>
        </div>
      </div>
    </div>
  );
});

export default MassageThaiAged;
