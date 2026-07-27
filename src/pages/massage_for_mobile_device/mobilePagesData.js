/**
 * mobilePagesData.js
 * One card per "screen" for the mobile book experience.
 * Each massage that shares a desktop page is split into its own card here.
 */

export const mobilePagesData = [
  // ─── Cover ──────────────────────────────────────────────────────────────────
  {
    id: "cover",
    type: "cover",
    pageLabel: null,
  },

  // ─── About ──────────────────────────────────────────────────────────────────
  {
    id: "about",
    type: "about",
    pageLabel: "About Us",
  },

  // ─── Pricing ────────────────────────────────────────────────────────────────
  {
    id: "massage-pricing",
    type: "pricing",
    pageLabel: "Service Pricing",
  },

  // ─── Remedial Massage ───────────────────────────────────────────────────────
  {
    id: "massage-remedial",
    type: "massage",
    subtitle: "Massage Therapy",
    title: "Remedial Massage",
    image: "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1785056279/sportdoodle_r7gvok.png",
    paragraphs: [
      "Focuses on addressing underlying issues, whether they are related to muscle injuries, postural imbalances, or chronic pain. Offering long-term benefits that improve recovery and mobility, reduced pain and restore proper function and range of motion.",
      "Suitable for those recovering from injury, managing ongoing musculoskeletal conditions, or seeking to correct postural patterns developed over time.",
    ],
    note: "✦ Recommended: 90 or 120 minutes",
    pageLabel: "Massage · 1 of 12",
  },

  // ─── Deep Tissue ────────────────────────────────────────────────────────────
  {
    id: "massage-deep-tissue",
    type: "massage",
    subtitle: "Massage Therapy",
    title: "Deep Tissue",
    image: "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1785060063/download_1_xr2vn4.png",
    paragraphs: [
      "Uses slow, intense pressure to focus on fascia, knots, and adhesions, designed to target the deeper layers of muscle and connective tissue. Highly effective for releasing chronic tension and stubborn areas of tightness.",
      "Particularly beneficial for individuals with persistent muscle tension, limited mobility, or those who engage in regular physical activity and require thorough recovery work.",
    ],
    note: "✦ Recommended: 60 or 90 minutes",
    pageLabel: "Massage · 2 of 12",
  },

  // ─── Sports Specific ────────────────────────────────────────────────────────
  {
    id: "massage-sports",
    type: "massage",
    subtitle: "Massage Therapy",
    title: "Sports Specific",
    image: "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1785056279/sportdoodle_r7gvok.png",
    paragraphs: [
      "Tailored for athletes and active individuals, sports massage addresses the specific demands placed on the body through physical activity. It can be used as part of a warm-up, cool-down, or recovery programme.",
      "Techniques include deep tissue work, stretching, and neuromuscular therapy to improve performance, prevent injury, and accelerate recovery after training or competition.",
    ],
    note: "✦ Suitable for all fitness levels and sporting disciplines",
    pageLabel: "Massage · 3 of 12",
  },

  // ─── Pregnancy Massage ──────────────────────────────────────────────────────
  {
    id: "massage-pregnancy",
    type: "massage",
    subtitle: "Massage Therapy",
    title: "Pregnancy Massage",
    image: "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1785060465/download_2_q1g4oy.png",
    paragraphs: [
      "Specially adapted massage designed to support expectant mothers throughout all trimesters of pregnancy. Our therapists use safe positioning and gentle techniques to relieve common discomforts such as back pain, swollen ankles, and fatigue.",
      "Promotes relaxation, reduces stress hormones, and can improve sleep quality. Always carried out with appropriate support cushions in the comfort of your own home.",
    ],
    note: "✦ Available from 12 weeks onwards — please advise at booking",
    pageLabel: "Massage · 4 of 12",
  },

  // ─── Lymphatic Drainage ─────────────────────────────────────────────────────
  {
    id: "massage-lymphatic",
    type: "massage",
    subtitle: "Massage Therapy",
    title: "Lymphatic Drainage",
    image: "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1785056279/sportdoodle_r7gvok.png",
    paragraphs: [
      "Is a gentle, yet powerful technique aimed at stimulating the lymphatic system to encourage the removal of toxins, waste, and excess fluids from the body. It is particularly useful in boosting immune function, reducing swelling, and enhancing overall health.",
      "Great for people pre/post surgery and those living sedentary lifestyles.",
    ],
    note: "✦ Particularly beneficial post-surgery or for oedema management",
    pageLabel: "Massage · 5 of 12",
  },

  // ─── Aromatherapy & Hot Stones ──────────────────────────────────────────────
  {
    id: "massage-aromatherapy",
    type: "massage",
    subtitle: "Massage Therapy",
    title: "Aromatherapy & Hot Stones",
    image: "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1785060063/download_1_xr2vn4.png",
    paragraphs: [
      "Is a holistic therapy that blends the benefits of massage with the therapeutic properties of essential oils. Hot stones work to ease muscle tension and pain, while essential oils target specific physical or emotional concerns.",
      "The combination of aromatherapy and heat promotes a deep sense of relaxation, calming both the body and mind.",
    ],
    note: "✦ Ideal for stress relief and deep muscular relaxation",
    pageLabel: "Massage · 6 of 12",
  },

  // ─── Infant / Child Massage ─────────────────────────────────────────────────
  {
    id: "massage-child",
    type: "massage",
    subtitle: "Massage Therapy",
    title: "Infant, Toddler & Child Massage",
    image: "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1785056279/sportdoodle_r7gvok.png",
    paragraphs: [
      "Helps you incorporate nurturing touch into your daily routine. Techniques of soft, gentle strokes aim to strengthen the bond between child and parent by encouraging the release of oxytocin.",
      "A beautiful ritual to promote relaxation by reducing stress for both, whilst boosting the child's emotional security and trust. Stimulates sensory development, relieves discomfort from gas, colic, and constipation. (Recommended from 2 weeks, once umbilical stump has fallen off.)",
    ],
    note: "✦ Parent or guardian must be present throughout the session",
    pageLabel: "Massage · 7 of 12",
  },

  // ─── Indian Head Massage ────────────────────────────────────────────────────
  {
    id: "massage-indian-head",
    type: "massage",
    subtitle: "Massage Therapy",
    title: "Indian Head Massage",
    image: "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1785060063/download_1_xr2vn4.png",
    paragraphs: [
      "Is an ancient and powerful healing practice with deep roots in Ayurvedic tradition. By focusing on the head, neck, shoulders and upper back, it helps to relieve stress, improve circulation, support hair health, and boost overall well-being.",
      "The practice encourages relaxation and a sense of well-being, promoting mental clarity, emotional balance, and physical health.",
    ],
    note: "✦ Typically 30–45 minutes — ask about combined session rates",
    pageLabel: "Massage · 8 of 12",
  },

  // ─── Thai Massage ───────────────────────────────────────────────────────────
  {
    id: "massage-thai",
    type: "massage",
    subtitle: "Massage Therapy",
    title: "Thai Massage",
    image: "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1785056279/sportdoodle_r7gvok.png",
    paragraphs: [
      "Is an ancient healing technique that combines elements of stretching, gentle rhythmic pressure, and musculoskeletal manipulation to promote health and relaxation.",
      "Performed on a soft mattress on the floor, the yoga-like stretches increase flexibility, improve range of motion, and align posture. The calming nature of this massage lowers stress levels, balances energy, and encourages mental clarity.",
    ],
    note: "✦ Performed fully clothed — loose, comfortable attire recommended",
    pageLabel: "Massage · 9 of 12",
  },

  // ─── Aged Care ──────────────────────────────────────────────────────────────
  {
    id: "massage-aged-care",
    type: "massage",
    subtitle: "Massage Therapy",
    title: "Aged Care",
    image: "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1785060063/download_1_xr2vn4.png",
    paragraphs: [
      "Treatments improve the quality of life for elderly individuals, particularly those in nursing or aged care homes. Promoting a sense of calm by reducing stress and agitation and alleviating feelings of loneliness, depression, and anxiety.",
      "Not only physical comfort, but in providing mental and emotional peace for elderly residents.",
    ],
    note: "✦ Available in residential homes, care facilities, and private homes",
    pageLabel: "Massage · 10 of 12",
  },

  // ─── Palliative Care ────────────────────────────────────────────────────────
  {
    id: "massage-palliative",
    type: "massage",
    subtitle: "Massage Therapy",
    title: "Palliative Care",
    image: "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1785056279/sportdoodle_r7gvok.png",
    paragraphs: [
      "Treatments aimed at improving the quality of life for those with serious, chronic, or terminal conditions, focusing on comfort, symptom management, and emotional support.",
      "Eases pain and discomfort, especially for individuals with limited mobility or chronic conditions whilst maintaining a sense of dignity and independence.",
    ],
    note: "✦ Available at home, hospice, or hospital — please contact us to discuss",
    pageLabel: "Massage · 11 of 12",
  },

  // ─── Bereavement Massage ────────────────────────────────────────────────────
  {
    id: "massage-bereavement",
    type: "massage",
    subtitle: "Massage Therapy",
    title: "Bereavement Massage",
    image: "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1785060063/download_1_xr2vn4.png",
    paragraphs: [
      "Is a peaceful massage for people in their early days, weeks and months of grieving. This type of massage can be a powerful component of self-care.",
      "Meeting you right where you are during the stressful and sensitive time in your grief journey.",
    ],
    note: "✦ Offered on a flexible, needs-based basis — please enquire confidentially",
    pageLabel: "Massage · 12 of 12",
  },

  // ─── Contact ────────────────────────────────────────────────────────────────
  {
    id: "contact",
    type: "contact",
    pageLabel: "Get in Touch",
  },

  // ─── Hours ──────────────────────────────────────────────────────────────────
  {
    id: "hours",
    type: "hours",
    pageLabel: "Opening Hours",
  },
];
