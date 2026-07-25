import React from "react";

const Contact = React.forwardRef(function Contact(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <header className="page-header">
          <span className="brand-label">Get in Touch</span>
          <h1>Contact Us</h1>
        </header>

        <div className="ornament-divider"><span>✦</span></div>

        <div className="contact-grid">
          <div className="contact-block">
            <h3>Book an Appointment</h3>
            <div className="contact-item">
              <span className="ci-icon">📞</span>
              <span>+44 (0) 7XXX XXX XXX</span>
            </div>
            <div className="contact-item">
              <span className="ci-icon">✉️</span>
              <span>hello@purls.co.uk</span>
            </div>
            <div className="contact-item">
              <span className="ci-icon">🌐</span>
              <span>www.purls.co.uk</span>
            </div>
          </div>

          <div className="contact-block">
            <h3>Coverage Area</h3>
            <div className="contact-item">
              <span className="ci-icon">📍</span>
              <span>We travel to your home, office, care facility, or chosen venue across the UK.</span>
            </div>
            <div className="contact-item">
              <span className="ci-icon">🚗</span>
              <span>Mobile service — no travel required on your part.</span>
            </div>
          </div>

          <div className="contact-block">
            <h3>Social Media</h3>
            <div className="contact-item">
              <span className="ci-icon">📸</span>
              <span>@purls_wellness</span>
            </div>
            <div className="contact-item">
              <span className="ci-icon">👍</span>
              <span>facebook.com/purlswellness</span>
            </div>
          </div>

          <div className="contact-block">
            <h3>Enquiries</h3>
            <p style={{ fontSize: "0.75rem", lineHeight: 1.6, color: "var(--ink-light)", marginTop: "0.25rem" }}>
              For all bookings, availability, and general enquiries please reach out via phone or email.
              We endeavour to respond to all messages within 24 hours.
            </p>
          </div>
        </div>

        <div className="page-footer">
          <span>PURLS Mobile Wellness</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
});

export default Contact;
