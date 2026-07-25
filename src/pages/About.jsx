import React from "react";

const About = React.forwardRef(function About(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <header className="page-header">
          <span className="brand-label">Our Story</span>
          <h1>About PURLS</h1>
        </header>

        <p className="about-intro">
          PURLS is a mobile wellness service bringing professional massage therapy,
          personal training, and beauty treatments directly to your home, workplace, or chosen venue — anywhere in the UK.
        </p>

        <div className="about-pillars">
          <div className="pillar-card">
            <span className="pillar-icon">💆</span>
            <h3>Massage Therapy</h3>
            <p>From remedial to palliative care — tailored treatments for every need and life stage.</p>
          </div>
          <div className="pillar-card">
            <span className="pillar-icon">🏋️</span>
            <h3>Personal Training</h3>
            <p>Bespoke fitness programmes designed around your goals, ability, and lifestyle.</p>
          </div>
          <div className="pillar-card">
            <span className="pillar-icon">✨</span>
            <h3>Beauty Services</h3>
            <p>Premium beauty treatments that come to you, at a time that suits your schedule.</p>
          </div>
        </div>

        <div className="ornament-divider"><span>✦</span></div>

        <p>
          Our fully qualified and insured practitioners bring all necessary equipment,
          ensuring a seamless, professional experience every time. We pride ourselves
          on a compassionate, client-centred approach — whether you are recovering from
          an injury, managing a chronic condition, or simply treating yourself to well-deserved self-care.
        </p>

        <p>
          All treatments are adapted to meet your individual needs, and we are committed
          to the highest standards of professionalism, safety, and discretion.
        </p>

        <div className="page-footer">
          <span>PURLS Mobile Wellness</span>
          <span>About Us</span>
        </div>
      </div>
    </div>
  );
});

export default About;
