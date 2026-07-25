import React from "react";

import MassagePageLayout from "./MassagePageLayout";

const MassageThaiAged = React.forwardRef(function MassageThaiAged(props, ref) {
  return (
    <MassagePageLayout
      ref={ref}
      title="Thai Massage &amp; Aged Care"
      footerRight="Massage — Page 5 of 7"
      details={[
        {
          title: "Thai Massage",
          paragraphs: [
            "An ancient healing system combining gentle pressure along energy lines (Sen lines) with assisted yoga-like stretching. Performed fully clothed on a comfortable mat, it improves flexibility, relieves tension, and restores energy flow throughout the body.",
            "Thai massage is both invigorating and deeply relaxing — often described as \"passive yoga.\" It is particularly effective for individuals who feel energetically depleted, physically stiff, or in need of a thorough full-body release.",
          ],
          note: "✦ Performed fully clothed — loose, comfortable attire recommended",
        },
        {
          title: "Aged Care Massage",
          paragraphs: [
            "Specially designed for older adults, this gentle massage addresses the unique physical and emotional needs associated with ageing. Techniques are modified to accommodate reduced mobility, sensitive skin, and medical conditions common in later life.",
            "Regular massage can significantly improve quality of life for elderly clients by reducing isolation, alleviating aches and joint stiffness, improving circulation, and promoting a greater sense of wellbeing and dignity.",
          ],
          note: "✦ Available in residential homes, care facilities, and private homes",
        },
      ]}
    />
  );
});

export default MassageThaiAged;
