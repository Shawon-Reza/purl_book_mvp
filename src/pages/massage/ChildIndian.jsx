import React from "react";

import MassagePageLayout from "./MassagePageLayout";

const MassageChildIndian = React.forwardRef(function MassageChildIndian(props, ref) {
  return (
    <MassagePageLayout
      ref={ref}
      title="Infant, Child &amp; Indian Head"
      footerRight="Massage — Page 4 of 7"
      details={[
        {
          title: "Infant / Toddler / Child Massage",
          paragraphs: [
            "Gentle, nurturing massage designed for babies, toddlers, and children. Techniques are adapted to each age group, promoting bonding, relaxation, and overall wellbeing for young ones at every stage of development.",
            "Can support infants experiencing colic or digestive discomfort, improve sleep patterns, and strengthen the parent-child connection. Sessions include guidance so parents can continue the practice at home.",
          ],
          note: "✦ Parent or guardian must be present throughout the session",
        },
        {
          title: "Indian Head Massage",
          paragraphs: [
            "A traditional Ayurvedic treatment focusing on the scalp, face, neck, and shoulders — areas that commonly hold tension and stress. Based on techniques developed over centuries in India, this treatment promotes circulation and relieves tension headaches.",
            "Performed seated with no oils required (oils are optional upon request). An excellent choice for those short on time who still wish to experience a deeply calming treatment with immediate results.",
          ],
          note: "✦ Typically 30–45 minutes — ask about combined session rates",
        },
      ]}
    />
  );
});

export default MassageChildIndian;
