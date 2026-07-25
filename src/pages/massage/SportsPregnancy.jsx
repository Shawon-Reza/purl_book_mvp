import React from "react";

import MassagePageLayout from "./MassagePageLayout";

const MassageSportsPregnancy = React.forwardRef(function MassageSportsPregnancy(props, ref) {
  return (
    <MassagePageLayout
      ref={ref}
      title="Sports Specific &amp; Pregnancy"
      footerRight="Massage — Page 2 of 7"
      details={[
        {
          title: "Sports Specific",
          paragraphs: [
            "Tailored for athletes and active individuals, sports massage addresses the specific demands placed on the body through physical activity. It can be used as part of a warm-up, cool-down, or recovery programme.",
            "Techniques include deep tissue work, stretching, and neuromuscular therapy to improve performance, prevent injury, and accelerate recovery after training or competition.",
          ],
          note: "✦ Suitable for all fitness levels and sporting disciplines",
        },
        {
          title: "Pregnancy Massage",
          paragraphs: [
            "Specially adapted massage designed to support expectant mothers throughout all trimesters of pregnancy. Our therapists use safe positioning and gentle techniques to relieve common discomforts such as back pain, swollen ankles, and fatigue.",
            "Promotes relaxation, reduces stress hormones, and can improve sleep quality. Always carried out with appropriate support cushions in the comfort of your own home.",
          ],
          note: "✦ Available from 12 weeks onwards — please advise at booking",
        },
      ]}
    />
  );
});

export default MassageSportsPregnancy;
