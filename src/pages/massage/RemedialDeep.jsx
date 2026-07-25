import React from "react";

import MassagePageLayout from "./MassagePageLayout";

const MassageRemedialDeep = React.forwardRef(function MassageRemedialDeep(props, ref) {
  return (
    <MassagePageLayout
      ref={ref}
      title="Remedial &amp; Deep Tissue"
      footerRight="Massage — Page 1 of 7"
      details={[
        {
          title: "Remedial Massage",
          paragraphs: [
            "Focuses on addressing underlying issues, whether they are related to muscle injuries, postural imbalances, or chronic pain. Offering long-term benefits that improve recovery and mobility, reduced pain and restore proper function and range of motion.",
            "Suitable for those recovering from injury, managing ongoing musculoskeletal conditions, or seeking to correct postural patterns developed over time.",
          ],
          note: "✦ Recommended: 90 or 120 minutes",
        },
        {
          title: "Deep Tissue",
          paragraphs: [
            "Uses slow, intense pressure to focus on fascia, knots, and adhesions, designed  to target the deeper layers of muscle and connective tissue. Highly effective for releasing chronic tension and stubborn areas of tightness.",
            "Particularly beneficial for individuals with persistent muscle tension, limited mobility, or those who engage in regular physical activity and require thorough recovery work.",
          ],
          note: "✦ Recommended: 60 or 90 minutes",
        },
      ]}
    />
  );
});

export default MassageRemedialDeep;
