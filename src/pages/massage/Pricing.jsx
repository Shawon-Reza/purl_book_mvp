import React from "react";

const MassagePricing = React.forwardRef(function MassagePricing(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <header className="page-header">
          <span className="brand-label">Massage Therapy</span>
          <h1>Service Pricing</h1>
        </header>

        <div className="ornament-divider"><span>✦</span></div>

        <div className="pricing-grid">
          <div className="price-card">
            <span className="duration">60 Minutes</span>
            <span className="amount"><span className="currency">£</span>80</span>
          </div>
          <div className="price-card featured">
            <span className="duration">90 Minutes</span>
            <span className="amount"><span className="currency">£</span>110</span>
          </div>
          <div className="price-card">
            <span className="duration">120 Minutes</span>
            <span className="amount"><span className="currency">£</span>130</span>
          </div>
        </div>

        <p className="pricing-note">
          All prices include travel, professional equipment, and consultation.
          Prices are the same for all massage types listed in our brochure.
        </p>

        <div className="ornament-divider"><span>✦</span></div>

        <ul className="service-list">
          <li>
            <span className="service-name">Remedial Massage</span>
            <span className="service-price">£80 / £110 / £130</span>
          </li>
          <li>
            <span className="service-name">Deep Tissue</span>
            <span className="service-price">£80 / £110 / £130</span>
          </li>
          <li>
            <span className="service-name">Sports Specific</span>
            <span className="service-price">£80 / £110 / £130</span>
          </li>
          <li>
            <span className="service-name">Pregnancy Massage</span>
            <span className="service-price">£80 / £110 / £130</span>
          </li>
          <li>
            <span className="service-name">Lymphatic Drainage</span>
            <span className="service-price">£80 / £110 / £130</span>
          </li>
          <li>
            <span className="service-name">Aromatherapy &amp; Hot Stones</span>
            <span className="service-price">£80 / £110 / £130</span>
          </li>
          <li>
            <span className="service-name">Indian Head Massage</span>
            <span className="service-price">£80 / £110 / £130</span>
          </li>
          <li>
            <span className="service-name">Thai Massage</span>
            <span className="service-price">£80 / £110 / £130</span>
          </li>
          <li>
            <span className="service-name">Palliative &amp; Bereavement</span>
            <span className="service-price">By arrangement</span>
          </li>
        </ul>

        <div className="page-footer">
          <span>PURLS Mobile Wellness</span>
          <span>Massage — Pricing</span>
        </div>
      </div>
    </div>
  );
});

export default MassagePricing;
