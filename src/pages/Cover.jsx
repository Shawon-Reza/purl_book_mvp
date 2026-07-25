import React from "react";

const Cover = React.forwardRef(function Cover(props, ref) {
  return (
    <div className="page cover-page" ref={ref}>
      <div className="page-content">
        <div className="cover-brand">
          <span className="brand-tag">Mobile Wellness &amp; Beauty</span>

          <h1>PURLS</h1>

          <div className="cover-gold-line" />

          <p className="tagline">
            Bringing the spa experience to your door
          </p>

          <div className="cover-services">
            <span>Massage Therapy</span>
            <span>Personal Training</span>
            <span>Beauty Services</span>
          </div>
        </div>

        <p className="cover-footer-text">Est. in the United Kingdom &bull; PURLS Mobile Services</p>
      </div>
    </div>
  );
});

export default Cover;
