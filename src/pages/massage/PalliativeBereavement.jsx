import React from "react";

import MassagePageLayout from "./MassagePageLayout";

const MassagePalliativeBereavement = React.forwardRef(function MassagePalliativeBereavement(props, ref) {
  return (
    <MassagePageLayout
      ref={ref}
      title="Palliative Care &amp; Bereavement"
      footerRight="Massage — Page 6 of 7"
      details={[
        {
          title: "Palliative Care Massage",
          paragraphs: [
            "A compassionate, gentle massage service offered to individuals living with life-limiting illness. Our specially trained practitioners understand the sensitivity required and adapt every aspect of the session to the client's current condition, comfort, and wishes.",
            "The primary goal is comfort — reducing pain, easing breathlessness, and providing a sense of peace and human connection during a deeply challenging time. We work alongside medical and care teams to ensure a holistic approach.",
          ],
          note: "✦ Available at home, hospice, or hospital — please contact us to discuss",
        },
        {
          title: "Bereavement Massage",
          paragraphs: [
            "Grief can manifest in the body as well as the mind. Bereavement massage offers a safe, nurturing space for those who have experienced loss — whether recent or ongoing — to receive gentle, healing touch and compassionate support.",
            "Touch, in its most caring form, can ease feelings of isolation, help regulate the nervous system, and provide profound comfort during the grieving process. No words are necessary — this treatment is simply about presence and care.",
          ],
          note: "✦ Offered on a flexible, needs-based basis — please enquire confidentially",
        },
      ]}
    />
  );
});

export default MassagePalliativeBereavement;
