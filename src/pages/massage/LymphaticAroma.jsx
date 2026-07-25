import React from "react";

import MassagePageLayout from "./MassagePageLayout";

const MassageLymphaticAroma = React.forwardRef(function MassageLymphaticAroma(props, ref) {
  return (
    <MassagePageLayout
      ref={ref}
      title="Lymphatic Drainage &amp; Aromatherapy"
      footerRight="Massage — Page 3 of 7"
      details={[
        {
          title: "Lymphatic Drainage",
          paragraphs: [
            "A gentle, rhythmic massage technique that stimulates the lymphatic system to encourage the natural drainage of lymph fluid from tissues throughout the body. Particularly effective for reducing oedema (swelling) and supporting the immune system.",
            "Recommended following surgery, for those with lymphoedema, or for clients seeking detoxification and reduced water retention. The light touch promotes deep relaxation alongside its therapeutic benefits.",
          ],
          note: "✦ Particularly beneficial post-surgery or for oedema management",
        },
        {
          title: "Aromatherapy &amp; Hot Stones",
          paragraphs: [
            "A deeply relaxing full-body massage combining the therapeutic properties of essential oils with the warmth of smooth, heated basalt stones. The heat penetrates muscle tissue more deeply than standard massage alone.",
            "Essential oils are selected specifically for your needs — whether calming, energising, or balancing — and are blended into a carrier oil for use throughout the treatment.",
          ],
          note: "✦ Ideal for stress relief and deep muscular relaxation",
        },
      ]}
    />
  );
});

export default MassageLymphaticAroma;
