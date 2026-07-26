import React from "react";

const About = React.forwardRef(function About(props, ref) {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <header className="page-header">
          <span className="block text-[0.58rem] uppercase tracking-[0.32em] text-[color:var(--gold)] sm:text-[0.64rem]">
            Our Story
          </span>
          <h1 className="mt-1 text-[1.45rem] font-semibold leading-tight text-[color:var(--ink)] sm:text-[1.7rem] md:text-[1.9rem] lg:text-[2.05rem]">
            About PURLS
          </h1>
        </header>

        <p className="about-intro text-base! sm:text-xs! md:text-sm! lg:text-md! xl:text-lg! 2xl:text-xl! mt-6">
          I am a fully qualified and insured mobile Massage Therapist, Personal
          Trainer, and Beautician, offering bespoke services in the privacy of
          your own space — home, office, hotel, or care residence.
        </p>

        <p className="text-base! sm:text-xs! md:text-sm! lg:text-md! xl:text-lg! 2xl:text-xl! mt-4">
          I bring all professional equipment and premium products, delivering a
          seamless, personalised experience for clients who value excellence,
          privacy, and convenience.
        </p>

        <div className="about-pillars mt-8">
          <div className="pillar-card">
            <span className="pillar-icon text-3xl! sm:text-4xl!">💆</span>
            <h3 className="text-sm! sm:text-sm! md:text-md! lg:text-lg! xl:text-2l! 2xl:text-2xl! font-semibold mt-2">
              Massage Therapy
            </h3>
            <p className="text-sm! ssm:text-xs! md:text-sm! lg:text-md! xl:text-lg! 2xl:text-xl!">
              From remedial to palliative care — tailored treatments for every
              need and life stage.
            </p>
          </div>

          <div className="pillar-card">
            <span className="pillar-icon text-3xl! sm:text-4xl!">🏋️</span>
            <h3 className="text-lg! sm:text-xl! md:text-2xl! font-semibold mt-2">
              Personal Training
            </h3>
            <p className="text-sm! sm:text-xs! md:text-sm! lg:text-md! xl:text-lg! 2xl:text-xl!">
              Bespoke fitness programmes designed around your goals, ability,
              and lifestyle.
            </p>
          </div>

          <div className="pillar-card">
            <span className="pillar-icon text-3xl! sm:text-4xl!">✨</span>
            <h3 className="text-lg! sm:text-xl! md:text-2xl! font-semibold mt-2">
              Beauty Services
            </h3>
            <p className="text-sm! sm:text-xs! md:text-sm! lg:text-md! xl:text-lg! 2xl:text-xl!">
              Premium beauty treatments that come to you, at a time that suits
              your schedule.
            </p>
          </div>
        </div>

        <div className="ornament-divider my-8">
          <span className="text-xl! sm:text-2xl!">✦</span>
        </div>

        <p className="text-base! sm:text-xs! md:text-sm! lg:text-md! xl:text-lg! 2xl:text-xl!">
          With over a decade of experience in Australia, I return home with
          advanced skill, deep empathy, and a commitment to excellence and
          integrity in every treatment.
        </p>

        <footer className="shrink-0 border-t border-[color:var(--divider)] pt-2 text-[0.6rem] uppercase tracking-[0.18em] text-[color:var(--gold)] sm:text-[0.65rem]">
          <div className="flex items-center justify-between gap-3">
            <span>PURLS Mobile Wellness</span>
            <span>About Us</span>
          </div>
        </footer>
      </div>
    </div>
  );
});

export default About;