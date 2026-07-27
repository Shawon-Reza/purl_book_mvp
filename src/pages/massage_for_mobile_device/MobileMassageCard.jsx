import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Each exported component is wrapped in React.forwardRef because
// react-pageflip passes a ref to each direct child to control the flip.
// The ref must land on the root DOM element of every page.
// ─────────────────────────────────────────────────────────────────────────────

/* ── Shared inner divider ──────────────────────────────────────────────────── */
function Divider() {
  return (
    <div className="mb-card-divider">
      <span className="mb-card-divider-line" />
      <span className="mb-card-divider-star">✦</span>
      <span className="mb-card-divider-line" />
    </div>
  );
}

/* ── Cover ──────────────────────────────────────────────────────────────────── */
const CoverCard = React.forwardRef(function CoverCard(props, ref) {
  return (
    <div className="mb-flip-page mb-cover-page" ref={ref}>
      <div className="mb-flip-inner mb-cover-inner">
        <div className="mb-cover-body">
          <span className="mb-cover-tag">Mobile Wellness &amp; Beauty</span>
          <h1 className="mb-cover-title ">PURLS</h1>
          <div className="mb-cover-gold-line" />
          <p className="mb-cover-tagline">Bringing the spa experience to your door</p>
          <div className="mb-cover-services">
            <span>Massage Therapy</span>
            <span>Personal Training</span>
            <span>Beauty Services</span>
          </div>
        </div>
        <p className="mb-cover-footer">Est. in the United Kingdom &bull; PURLS Mobile Services</p>
      </div>
    </div>
  );
});

/* ── About ──────────────────────────────────────────────────────────────────── */
const AboutCard = React.forwardRef(function AboutCard(props, ref) {
  return (
    <div className="mb-flip-page " ref={ref}>
      <div className="mb-flip-inner text-xl!">
        {/* Header */}
        <div className="mb-about-header">
          <span className="mb-card-subtitle">Our Story</span>
          <h1 className="mb-about-title">About PURLS</h1>
          <Divider />
        </div>

        <p className="mb-about-intro text-lg">
          I am a fully qualified and insured mobile Massage Therapist, Personal Trainer, and
          Beautician, offering bespoke services in the privacy of your own space — home, office,
          hotel, or care residence.
        </p>

        <div className="mb-about-pillars">
          <div className="mb-about-pillar">
            <span className="mb-about-pillar-icon">💆</span>
            <h3 className="text-md!">Massage Therapy</h3>
            <p className="text-sm!">From remedial to palliative care — tailored for every need.</p>
          </div>
          <div className="mb-about-pillar">
            <span className="mb-about-pillar-icon">🏋️</span>
            <h3 className="text-md!">Personal Training</h3>
            <p className="text-sm!">Bespoke fitness programmes around your goals.</p>
          </div>
          <div className="mb-about-pillar ">
            <span className="mb-about-pillar-icon">✨</span>
            <h3 className="text-md!">Beauty Services</h3>
            <p className="text-sm!">Premium treatments that come to you.</p>
          </div>
        </div>

        <Divider />

        <p className="mb-body-text text-lg!" style={{ textAlign: "center" }}>
          With over a decade of experience in Australia, I return home with advanced skill, deep
          empathy, and a commitment to excellence and integrity in every treatment.
        </p>

        <div className="mb-card-footer">
          <span>PURLS Mobile Wellness</span>
          <span>About Us</span>
        </div>
      </div>
    </div>
  );
});

/* ── Pricing ─────────────────────────────────────────────────────────────────── */
const PricingCard = React.forwardRef(function PricingCard(props, ref) {
  return (
    <div className="mb-flip-page " ref={ref}>
      <div className="mb-flip-inner">

        <div className="mb-about-header">
          <span className="mb-card-subtitle">Massage Therapy</span>
          <h1 className="mb-about-title">Service Pricing</h1>
          <Divider />
        </div>

        <div className="mb-pricing-cards">
          <div className="mb-price-tile">
            <span className="duration">60 Minutes</span>
            <span className="amount"><span className="currency">£</span>80</span>
          </div>
          <div className="mb-price-tile featured">
            <span className="duration">90 Minutes</span>
            <span className="amount"><span className="currency">£</span>110</span>
          </div>
          <div className="mb-price-tile">
            <span className="duration">120 Minutes</span>
            <span className="amount"><span className="currency">£</span>130</span>
          </div>
        </div>

        <p className="mb-pricing-note">
          All prices include travel, professional equipment &amp; consultation.
        </p>

        <Divider />

        <ul className="mb-service-list">
          {[
            ["Remedial Massage", "£80 / £110 / £130"],
            ["Deep Tissue", "£80 / £110 / £130"],
            ["Sports Specific", "£80 / £110 / £130"],
            ["Pregnancy Massage", "£80 / £110 / £130"],
            ["Lymphatic Drainage", "£80 / £110 / £130"],
            ["Aromatherapy & Hot Stones", "£80 / £110 / £130"],
            ["Indian Head Massage", "£80 / £110 / £130"],
            ["Thai Massage", "£80 / £110 / £130"],
            ["Palliative & Bereavement", "By arrangement"],
          ].map(([name, price]) => (
            <li key={name}>
              <span className="svc-name ">{name}</span>
              <span className="svc-price">{price}</span>
            </li>
          ))}
        </ul>

        <div className="mb-card-footer">
          <span>PURLS Mobile Wellness</span>
          <span>Massage — Pricing</span>
        </div>
      </div>
    </div>
  );
});



/* ── Massage (one massage per card) ─────────────────────────────────────────── */
const MassageCard = React.forwardRef(function MassageCard({ data }, ref) {
  const { subtitle, title, image, paragraphs, note, pageLabel } = data;
  return (
    <div className="mb-flip-page" ref={ref}>
      <div className="mb-flip-inner">



        <div className="mb-about-header">
          <span className="mb-card-subtitle">Massage Therapy</span>
          <h1 className="mb-about-title">Service Pricing</h1>
          <Divider />
        </div>



        {/* Image */}
        <div className="mb-card-image">
          <img src={image} alt={title} loading="lazy" />
        </div>



        <div className="mb-card-paragraphs text-xl">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {note && <p className="mb-card-note">{note}</p>}

        <div className="mb-card-footer">
          <span>PURLS Mobile Wellness</span>
          {pageLabel && <span>{pageLabel}</span>}
        </div>
      </div>
    </div>
  );
});

/* ── Contact ─────────────────────────────────────────────────────────────────── */
const ContactCard = React.forwardRef(function ContactCard(props, ref) {
  return (
    <div className="mb-flip-page" ref={ref}>
      <div className="mb-flip-inner">
        <div className="mb-about-header">
          <span className="mb-card-subtitle">Get in Touch</span>
          <h1 className="mb-about-title">Contact Us</h1>
          <Divider />
        </div>

        <div className="mb-contact-body">
          <div className="mb-contact-block">
            <h3>Book an Appointment</h3>
            <div className="mb-contact-item"><span className="ci-icon">📞</span><span>+44 (0) 7XXX XXX XXX</span></div>
            <div className="mb-contact-item"><span className="ci-icon">✉️</span><span>hello@purls.co.uk</span></div>
            <div className="mb-contact-item"><span className="ci-icon">🌐</span><span>www.purls.co.uk</span></div>
          </div>
          <div className="mb-contact-block">
            <h3>Coverage Area</h3>
            <div className="mb-contact-item"><span className="ci-icon">📍</span><span>We travel to your home, office, care facility, or venue across the UK.</span></div>
            <div className="mb-contact-item"><span className="ci-icon">🚗</span><span>Mobile service — no travel required on your part.</span></div>
          </div>
          <div className="mb-contact-block">
            <h3>Social Media</h3>
            <div className="mb-contact-item"><span className="ci-icon">📸</span><span>@purls_wellness</span></div>
            <div className="mb-contact-item"><span className="ci-icon">👍</span><span>facebook.com/purlswellness</span></div>
          </div>
          <div className="mb-contact-block">
            <h3>Enquiries</h3>
            <p className="mb-body-text">
              For all bookings, availability, and general enquiries please reach out via phone or email.
              We endeavour to respond within 24 hours.
            </p>
          </div>
        </div>

        <div className="mb-card-footer">
          <span>PURLS Mobile Wellness</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
});

/* ── Hours ───────────────────────────────────────────────────────────────────── */
const HoursCard = React.forwardRef(function HoursCard(props, ref) {
  const today = new Date().getDay();
  const schedule = [
    { day: "Monday", hours: "9:00 am – 7:00 pm", dayNum: 1 },
    { day: "Tuesday", hours: "9:00 am – 7:00 pm", dayNum: 2 },
    { day: "Wednesday", hours: "9:00 am – 7:00 pm", dayNum: 3 },
    { day: "Thursday", hours: "9:00 am – 7:00 pm", dayNum: 4 },
    { day: "Friday", hours: "9:00 am – 6:00 pm", dayNum: 5 },
    { day: "Saturday", hours: "10:00 am – 5:00 pm", dayNum: 6 },
    { day: "Sunday", hours: "By appointment only", dayNum: 0 },
  ];

  return (
    <div className="mb-flip-page" ref={ref}>
      <div className="mb-flip-inner">
        <div className="mb-about-header">
          <span className="mb-card-subtitle">Availability</span>
          <h1 className="mb-about-title">Opening Hours</h1>
          <Divider />
        </div>

        <table className="mb-hours-table">
          <tbody>
            {schedule.map(({ day, hours, dayNum }) => (
              <tr key={day} className={dayNum === today ? "today" : ""}>
                <td>{day}</td>
                <td>{dayNum === today ? `${hours} ← Today` : hours}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-hours-note">
          All times are subject to availability. We recommend booking at least 48 hours in advance.
          Same-day bookings may be available — please call to enquire.
        </div>

        <p className="mb-body-text" style={{ marginTop: "10px", fontStyle: "italic" }}>
          Bank holidays may affect availability. Gift vouchers are available for all services.
        </p>

        <div className="mb-card-footer">
          <span>PURLS Mobile Wellness</span>
          <span>Opening Hours</span>
        </div>
      </div>
    </div>
  );
});

/* ── Default export: picks the right card by data.type ──────────────────────── */
const MobileMassageCard = React.forwardRef(function MobileMassageCard({ data }, ref) {
  switch (data.type) {
    case "cover": return <CoverCard ref={ref} />;
    case "about": return <AboutCard ref={ref} />;
    case "pricing": return <PricingCard ref={ref} />;
    case "contact": return <ContactCard ref={ref} />;
    case "hours": return <HoursCard ref={ref} />;
    case "massage": return <MassageCard ref={ref} data={data} />;
    default: return <div ref={ref} className="mb-flip-page" />;
  }
});

export default MobileMassageCard;
