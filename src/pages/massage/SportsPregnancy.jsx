import React from "react";

const MassageSportsPregnancy = React.forwardRef(function MassageSportsPregnancy(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <header className="page-header">
          <span className="brand-label">Massage Therapy</span>
          <h1>Sports Specific &amp; Pregnancy</h1>
        </header>

        <div className="ornament-divider"><span>✦</span></div>

        <div className="two-column">
          <div className="massage-card">
            <h2>Sports Specific</h2>
            <p>
              Tailored for athletes and active individuals, sports massage addresses the specific
              demands placed on the body through physical activity. It can be used as part of a
              warm-up, cool-down, or recovery programme.
            </p>
            <p>
              Techniques include deep tissue work, stretching, and neuromuscular therapy to improve
              performance, prevent injury, and accelerate recovery after training or competition.
            </p>
            <p style={{ fontStyle: "italic", fontSize: "0.74rem", color: "var(--gold)", marginTop: "0.5rem" }}>
              ✦ Suitable for all fitness levels and sporting disciplines
            </p>
          </div>

          <div className="massage-card">
            <h2>Pregnancy Massage</h2>
            <p>
              Specially adapted massage designed to support expectant mothers throughout all
              trimesters of pregnancy. Our therapists use safe positioning and gentle techniques
              to relieve common discomforts such as back pain, swollen ankles, and fatigue.
            </p>
            <p>
              Promotes relaxation, reduces stress hormones, and can improve sleep quality. Always
              carried out with appropriate support cushions in the comfort of your own home.
            </p>
            <p style={{ fontStyle: "italic", fontSize: "0.74rem", color: "var(--gold)", marginTop: "0.5rem" }}>
              ✦ Available from 12 weeks onwards — please advise at booking
            </p>
          </div>
        </div>

        <div className="page-footer">
          <span>PURLS Mobile Wellness</span>
          <span>Massage — Page 2 of 7</span>
        </div>
      </div>
    </div>
  );
});

export default MassageSportsPregnancy;
