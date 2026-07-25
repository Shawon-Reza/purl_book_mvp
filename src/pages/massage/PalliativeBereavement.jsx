import React from "react";

const MassagePalliativeBereavement = React.forwardRef(function MassagePalliativeBereavement(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <header className="page-header">
          <span className="brand-label">Massage Therapy</span>
          <h1>Palliative Care &amp; Bereavement</h1>
        </header>

        <div className="ornament-divider"><span>✦</span></div>

        <div className="two-column">
          <div className="massage-card">
            <h2>Palliative Care Massage</h2>
            <p>
              A compassionate, gentle massage service offered to individuals living with
              life-limiting illness. Our specially trained practitioners understand the
              sensitivity required and adapt every aspect of the session to the client's
              current condition, comfort, and wishes.
            </p>
            <p>
              The primary goal is comfort — reducing pain, easing breathlessness, and
              providing a sense of peace and human connection during a deeply challenging
              time. We work alongside medical and care teams to ensure a holistic approach.
            </p>
            <p style={{ fontStyle: "italic", fontSize: "0.74rem", color: "var(--gold)", marginTop: "0.5rem" }}>
              ✦ Available at home, hospice, or hospital — please contact us to discuss
            </p>
          </div>

          <div className="massage-card">
            <h2>Bereavement Massage</h2>
            <p>
              Grief can manifest in the body as well as the mind. Bereavement massage offers
              a safe, nurturing space for those who have experienced loss — whether recent or
              ongoing — to receive gentle, healing touch and compassionate support.
            </p>
            <p>
              Touch, in its most caring form, can ease feelings of isolation, help regulate
              the nervous system, and provide profound comfort during the grieving process.
              No words are necessary — this treatment is simply about presence and care.
            </p>
            <p style={{ fontStyle: "italic", fontSize: "0.74rem", color: "var(--gold)", marginTop: "0.5rem" }}>
              ✦ Offered on a flexible, needs-based basis — please enquire confidentially
            </p>
          </div>
        </div>

        <div className="page-footer">
          <span>PURLS Mobile Wellness</span>
          <span>Massage — Page 6 of 7</span>
        </div>
      </div>
    </div>
  );
});

export default MassagePalliativeBereavement;
