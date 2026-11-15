export type MobilityType = "TPM" | "LTTA" | "CONFERENCE"

export type AgendaDay = {
  day: string
  title: string
  description: string
}

export type EventArticle = {
  headline?: string
  paragraphs: string[]
  image?: string
  imageCaption?: string
  gallery?: string[]
}

export type MobilityEvent = {
  id: string
  code: string
  type: MobilityType
  title: string
  subtitle: string
  workPackage: string
  format: "Physical Mobility" | "Virtual Meeting" | "Hybrid Conference"
  dates: string
  duration: string
  country: string
  countryCode: "tr" | "it" | "pl" | "hr" | "mk"
  city: string
  venue: string
  hostPartnerSlug: string
  hostSchool: string
  partnerEmblem: string
  targetGroup: string
  participants: string
  participantBreakdown: string
  grant: string
  summary?: string
  article?: EventArticle
  objectives: string[]
  agenda: AgendaDay[]
  expectedOutcomes: string[]
}

export const mobilitiesList: MobilityEvent[] = [
  // ================= TPM 1 =================
  {
    id: "tpm-1",
    code: "TPM-1",
    type: "TPM",
    title: "First Transnational Project Meeting Held in Istanbul",
    subtitle: "Consortium Launch, Governance Setup & Partner Coordination",
    workPackage: "WP2: Healthy Nutrition & Planning (Activity 1)",
    format: "Physical Mobility",
    dates: "4–6 February 2025",
    duration: "3 meeting days (4–6 February 2025)",
    country: "Türkiye",
    countryCode: "tr",
    city: "Istanbul",
    venue: "Adile Mermerci Anadolu Lisesi, Zeytinburnu, Istanbul",
    hostPartnerSlug: "adile-mermerci-anatolian-high-school",
    hostSchool: "Adile Mermerci Anadolu Lisesi",
    partnerEmblem: "/images/partners/turkey.jpeg",
    targetGroup: "School leaders, project coordinators, and educators",
    participants: "12 teachers (Türkiye, Poland, Croatia, Italy, North Macedonia)",
    participantBreakdown: "12 teachers from TR, PL, HR, IT, and MK",
    grant: "€6,255.00",
    summary: "",
    article: {
      headline: "First Transnational Project Meeting Held in Istanbul",
      image: "/images/mobilities/tpm-1.jpg",
      imageCaption:
        "Participants of the 1st Transnational Project Meeting at Adile Mermerci Anadolu Lisesi in Istanbul (4–6 February 2025).",
      gallery: [
        "/images/mobilities/tpm-1.jpg",
        "/images/mobilities/tpm-1/tpm-1_1.jpg",
        "/images/mobilities/tpm-1/tpm-1_2.jpg",
        "/images/mobilities/tpm-1/tpm-1_3.jpg",
        "/images/mobilities/tpm-1/tpm-1_4.jpg",
      ],
      paragraphs: [
        "The 1st Transnational Project Meeting (TPM) of the project was held on 4–6 February 2025 at Adile Mermerci Anadolu Lisesi in Istanbul, Türkiye. The meeting brought together a total of 12 teachers from Türkiye, Poland, Croatia, Italy, and North Macedonia.",
        "During the meeting, participants discussed the main aims and objectives of the project and exchanged ideas on the overall implementation process. Important information was also shared about project management, including the structure of cooperation, partner responsibilities, and the steps to be followed throughout the project.",
        "As the coordinating institution, Adile Mermerci Anadolu Lisesi provided the partner schools with task lists and guidance for the upcoming stages of the project. This helped establish a clear framework for collaboration and ensured that all partners had a common understanding of their roles and responsibilities.",
        "The meeting played an important role in strengthening cooperation among the partner institutions and in laying a solid foundation for the successful implementation of the project. It also provided a valuable opportunity for the participants to get to know each other better, build mutual trust, and reinforce their shared commitment to the project goals.",
        "At the end of the meeting, certificates were presented to the participants, and the event concluded in a positive and friendly atmosphere, with all partners expressing their good wishes for a productive, successful, and inspiring cooperation throughout the project.",
      ],
    },
    objectives: [
      "Review the approved application, grant agreement rules, and budget breakdown across all 4 Work Packages.",
      "Establish the project Steering Committee, quality assurance indicators, and monthly online meeting cycle.",
      "Finalize the calendar for the upcoming Teacher Training in North Macedonia and student mobilities.",
      "Set up the project digital repository, shared workspace, and internal communication channels.",
      "Form dissemination teams in each partner school and launch the collaborative logo competition.",
    ],
    agenda: [
      {
        day: "Day 1",
        title: "Welcome & Partnership Agreement Review",
        description:
          "Official opening ceremony, presentation of partner delegations, review of the grant contract, budget allocations, and formal partnership bilateral agreements.",
      },
      {
        day: "Day 2",
        title: "Work Package Implementation & Risk Assessment",
        description:
          "Detailed breakdown of WP1–WP4 responsibilities, quality evaluation matrix led by Italy, risk mitigation protocols, and dissemination planning led by Croatia.",
      },
      {
        day: "Day 3",
        title: "Mobility Schedule, Logo Competition & Wrap-Up",
        description:
          "Adoption of the 24-month master project calendar, launch guidelines for the student logo competition, eTwinning space setup, and cultural study tour in Istanbul.",
      },
    ],
    expectedOutcomes: [
      "Signed internal partnership agreements and financial monitoring roadmap.",
      "Adopted 24-month master project calendar.",
      "Launch of the inter-school Logo Competition and eTwinning collaborative twinspace.",
      "Quality assurance and evaluation guidelines distributed by Italy.",
    ],
  },

  // ================= LTTA 1 =================
  {
    id: "ltta-1",
    code: "LTTA-1",
    type: "LTTA",
    title: "Educational and Cultural Mobility in North Macedonia: \"Healthy Foods, Healthy Living\"",
    subtitle: "Short-Term Joint Staff Training & Didactic Material Development",
    workPackage: "WP2: Healthy Nutrition (Activity 2)",
    format: "Physical Mobility",
    dates: "10–14 March 2025",
    duration: "5 training days + 2 travel days",
    country: "North Macedonia",
    countryCode: "mk",
    city: "Skopje",
    venue: "Association for Sustainable Development ARS PUBLIKA, Skopje",
    hostPartnerSlug: "ars-publika",
    hostSchool: "ARS PUBLIKA",
    partnerEmblem: "/images/partners/ars-publika.png",
    targetGroup: "Secondary educators, biology and science teachers, and IT instructors",
    participants: "16 visiting teachers + local pedagogical trainers",
    participantBreakdown: "4 teachers each from Türkiye, Italy, Poland, and Croatia",
    grant: "€15,220.00",
    summary: "",
    article: {
      headline: "Educational and Cultural Mobility in North Macedonia: \"Healthy Foods, Healthy Living\"",
      image: "/images/mobilities/ltta-1/ltta-1_1.jpg",
      imageCaption:
        "Participating teachers and trainers during the Erasmus+ LTTA mobility in Skopje, North Macedonia (March 2025).",
      gallery: [
        "/images/mobilities/ltta-1/ltta-1_1.jpg",
        "/images/mobilities/ltta-1/ltta-1_2.jpg",
        "/images/mobilities/ltta-1/ltta-1_3.jpg",
        "/images/mobilities/ltta-1/ltta-1_4.jpg",
      ],
      paragraphs: [
        "From March 10 to 14, 2025, participants gathered in North Macedonia for an international mobility event under the Erasmus+ project \"HEALTHY AND YOUNG,\" centered on the LTTA theme \"Healthy Foods, Healthy Living.\" The week-long program focused on promoting healthy living through education, practical engagement, and cultural immersion, blending theoretical learning, hands-on activities, and insightful discussions.",
        "The program began on Monday with a welcome speech and an introduction to the week's objectives. Following introductory sessions on the importance of healthy eating and lifestyle choices, participants dove into an in-depth analysis of nutritional values. The working portion of the day concluded with a reflection session and Q&A, setting a strong foundation for the collaborative days ahead.",
        "Tuesday was dedicated to exploring personal wellness and practical food habits. The group visited the Healthy Life Club for interactive sessions analyzing daily dietary habits and observing healthy meal preparation. The educational segment continued with an expert talk highlighting the vital role of physical activity in maintaining overall health, offering participants a well-rounded perspective on dynamic wellness.",
        "Wednesday was reserved for hands-on academic workshops and personalized planning. Participants engaged in focused sessions on research methods, habit-tracking techniques, and writing individualized healthy living plans. The afternoon concluded with final team presentations and a feedback session, encouraging collaborative learning and active idea sharing among all participants.",
        "On Thursday, the focus shifted to traditional gastronomy and local culture in the Old Town of Skopje. A highlight of the day was a guided exploration of a vibrant local market, emphasizing the importance of fresh, locally sourced ingredients in daily life. Accompanied by group reflections, participants enjoyed a traditional vegetable-based lunch, gaining deep insight into how cultural food traditions support a sustainable diet.",
        "The final day of the program, Friday, was dedicated to synthesizing and presenting project results. Working together, participants reviewed key learnings from the week and designed creative promotional brochures advocating for healthy eating habits. Following the final presentations showcasing their work, the gathering concluded with an official certificate award ceremony, rounding off a rich educational experience.",
        "This mobility once again confirmed the value of the Erasmus+ program in empowering participants through practical education and cultural exchange. In addition to acquiring practical tools for personal growth and wellness, participants built meaningful connections and broadened their perspectives on healthy living.",
      ],
    },
    objectives: [
      "Train 16 teachers on modern instructional designs relating adolescent nutrition to cognitive focus and physical well-being.",
      "Master collaborative digital publishing tools, citation standards, e-safety, and copyright regulations.",
      "Standardize lesson plan templates for the 12 project modules across partner countries.",
      "Draft the editorial framework and scientific research guidelines for Chapter 1: 'Healthy Nutrition'.",
      "Exchange good practices on organizing school nutrition weeks, breakfast initiatives, and student health monitoring.",
    ],
    agenda: [
      {
        day: "Monday",
        title: "Welcome & Nutritional Values Analysis",
        description:
          "Welcome speech, week's objectives, introductory sessions on healthy eating and lifestyle choices, in-depth nutritional values analysis, and reflection Q&A.",
      },
      {
        day: "Tuesday",
        title: "Healthy Life Club Visit & Physical Wellness",
        description:
          "Interactive visit to the Healthy Life Club, dietary habit analysis, healthy meal prep demonstration, and expert seminar on physical activity.",
      },
      {
        day: "Wednesday",
        title: "Research Methods & Personalized Planning",
        description:
          "Hands-on workshop on research methods, habit-tracking techniques, writing individualized healthy living plans, and collaborative team feedback.",
      },
      {
        day: "Thursday",
        title: "Old Town Skopje Market & Sustainable Gastronomy",
        description:
          "Guided exploration of Skopje's vibrant local market, discovering fresh seasonal produce, and traditional vegetable-based lunch in the historic quarter.",
      },
      {
        day: "Friday",
        title: "Promotional Brochure Design & Certification",
        description:
          "Synthesizing project results, designing creative promotional brochures, final presentations, and official certificate award ceremony.",
      },
    ],
    expectedOutcomes: [
      "16 fully certified secondary educators with European training documentation.",
      "Approved didactic template for all 12 educational modules.",
      "Editorial blueprint and research task allocation for Chapter 1 of the Project Book.",
      "Project promotional brochure text finalized in 5 partner languages and English.",
    ],
  },

  // ================= LTTA 2 =================
  {
    id: "ltta-2",
    code: "LTTA-2",
    type: "LTTA",
    title: "Youth Mobility in Abruzzo: Nutritional Science, Greenhouse Innovation & Alpine Heritage",
    subtitle: "First Student Exchange on Nutritional Science & Mediterranean Traditions",
    workPackage: "WP2: Healthy Nutrition (Activity 3)",
    format: "Physical Mobility",
    dates: "19–23 May 2025",
    duration: "5 exchange days + 2 travel days",
    country: "Italy",
    countryCode: "it",
    city: "Castel Di Sangro",
    venue: "IISS “Patini-Liberatore-De Panfilis”, Abruzzo",
    hostPartnerSlug: "patini-liberatore-de-panfilis",
    hostSchool: "IISS “Patini-Liberatore-De Panfilis”",
    partnerEmblem: "/images/partners/italy.jpeg",
    targetGroup: "Secondary students (ages 14–18) and accompanying science educators",
    participants: "18 international travelers + host Italian students & faculty",
    participantBreakdown:
      "3 students + 2 teachers each from TR, HR, PL; 3 representatives from MK",
    grant: "€14,550.00",
    summary: "",
    article: {
      headline: "Youth Mobility in Abruzzo: Nutritional Science, Greenhouse Innovation & Alpine Heritage",
      image: "/images/mobilities/ltta-2/ltta-2_1.jpg",
      imageCaption:
        "Students and teachers during the Erasmus+ mobility in Castel Di Sangro, Abruzzo, Italy (May 2025).",
      gallery: [
        "/images/mobilities/ltta-2/ltta-2_1.jpg",
        "/images/mobilities/ltta-2/ltta-2_2.jpg",
        "/images/mobilities/ltta-2/ltta-2_3.jpg",
        "/images/mobilities/ltta-2/ltta-2_4.jpg",
        "/images/mobilities/ltta-2/ltta-2_5.jpg",
        "/images/mobilities/ltta-2/ltta-2_6.jpg",
        "/images/mobilities/ltta-2/ltta-2_7.jpg",
        "/images/mobilities/ltta-2/ltta-2_8.jpg",
        "/images/mobilities/ltta-2/ltta-2_9.jpg",
        "/images/mobilities/ltta-2/ltta-2_10.jpg",
      ],
      paragraphs: [
        "From May 19 to 23, 2025, students and participating partner groups engaged in an immersive week of educational, cultural, and collaborative experiences focused on food science, environmental conservation, and local traditions.",
        "The program commenced with the arrival of the partner groups at the Liberatore school, where a welcoming ceremony set an engaging tone for the exchange. Participants watched country presentation videos and took part in ice-breaking activities to encourage cross-cultural integration. Following visits to the Liberatore and Patini school facilities, the group attended the inauguration of the new greenhouse, which was complemented by an interactive workshop on greenhouse plant management. In the afternoon, students gathered back at Liberatore to analyze nutrition labels and design informational posters exploring both natural and artificial food additives before spending their first evening with host families.",
        "Next, the activities moved outdoors for a full-day excursion into the heart of the Abruzzo, Lazio, and Molise National Park. Guided tours through the Camosciara region and a visit to a local dairy farm provided real-world context for an engaging group discussion regarding the role of feed additives in modern livestock farming. The group then returned to Castel di Sangro, allowing students to rest with their host families after an active day in nature.",
        "The mid-week schedule shifted toward culinary arts and cultural heritage. After meeting at Liberatore, the delegation traveled to the De Panfilis Hotel Management School in Roccaraso for a hands-on culinary session in the school kitchen. Later, students participated in a workshop dedicated to traditional gastronomy, researching and documenting the history of significant dishes from their respective home countries. The afternoon featured a guided exploration of the town before students enjoyed free time in the evening.",
        "The following day balanced local agricultural heritage with active student debate. The morning began with a visit to the Truffle Museum in San Pietro Avellana, followed by a specialized workshop on beekeeping led by Mr. Reticcioli back at Liberatore. Working in groups, students created presentations, posters, and brochures highlighting truffles, dairy products, and the ecological importance of bees. After lunch, the focus returned to food science through a lively debate on the daily consumption of food additives, after which students enjoyed a free afternoon with their hosts.",
        "The program concluded with a session dedicated to reflection and synthesis. Students prepared and completed a comprehensive survey on the exchange's core topics, analyzing the data to formulate practical strategies aimed at reducing junk food consumption. The official closing ceremony celebrated the achievements of the week.",
        "Combining practical workshops, environmental consciousness, and rich cultural sharing, the mobility offered a genuinely memorable and enriching journey for students and teachers alike. Sincere thanks go to all those who contributed to the planning and execution of this impactful event.",
      ],
    },
    objectives: [
      "Deliver peer-to-peer student research presentations on national eating habits, fast-food risks, and youth obesity.",
      "Acquire practical culinary skills preparing balanced traditional meals using fresh local ingredients.",
      "Examine the chemical properties, labeling regulations, and health hazards of artificial food additives.",
      "Inaugurate and manage greenhouse cultivation techniques and observe alpine ecosystems.",
      "Formulate 15 healthy traditional European menus to be integrated into Chapter 1 of the Project Book.",
    ],
    agenda: [
      {
        day: "Monday",
        title: "Welcome, Greenhouse Inauguration & Additives Analysis",
        description:
          "Arrival, icebreaking games, greenhouse opening ceremony and plant care workshop, nutrition label analysis, and additive poster design.",
      },
      {
        day: "Tuesday",
        title: "National Park Expedition & Dairy Farm Study",
        description:
          "Full-day excursion to Abruzzo National Park (Camosciara region), dairy farm visit, and discussion on feed additives in livestock farming.",
      },
      {
        day: "Wednesday",
        title: "Culinary Masterclass in Roccaraso & Gastronomy",
        description:
          "Hands-on cooking at De Panfilis Hotel Management School, documenting traditional recipes from all 5 partner homelands, and cultural town tour.",
      },
      {
        day: "Thursday",
        title: "Truffle Museum, Beekeeping Workshop & Additives Debate",
        description:
          "San Pietro Avellana Truffle Museum visit, beekeeping and pollination workshop with Mr. Reticcioli, and lively student debate on food additives.",
      },
      {
        day: "Friday",
        title: "Exchange Survey Analysis & Closing Ceremony",
        description:
          "Survey completion on reducing junk food consumption, data synthesis, official closing ceremony, and certificate awards.",
      },
    ],
    expectedOutcomes: [
      "Collection of 15 authentic, balanced traditional menus with nutritional facts.",
      "Student awareness videos on artificial additives and ultra-processed food hazards.",
      "Completion of 4 lessons for Chapter 1 ('Healthy Nutrition').",
      "Issuance of Europass Mobility certificates to 18 visiting participants.",
    ],
  },

  // ================= TPM 2 =================
  {
    id: "tpm-2",
    code: "TPM-2",
    type: "TPM",
    title: "Second Planning & Mid-Term Evaluation Meeting",
    subtitle: "First-Year Review, Survey Analysis & Interim Reporting",
    workPackage: "WP3: From Farm to Fork (Activity 1)",
    format: "Virtual Meeting",
    dates: "22–23 September 2025",
    duration: "2 meeting days (Virtual / Online)",
    country: "Croatia",
    countryCode: "hr",
    city: "Metković",
    venue: "Gimnazija Metković (Technical Online Host)",
    hostPartnerSlug: "gimnazija-metkovic",
    hostSchool: "Gimnazija Metković",
    partnerEmblem: "/images/partners/croatia.jpeg",
    targetGroup: "Project coordinators, evaluators, and Work Package leaders",
    participants: "10 core team representatives (2 per partner country)",
    participantBreakdown: "2 delegates each from TR, IT, PL, HR, and MK",
    grant: "€0.00 (Virtual Activity)",
    summary: "",
    objectives: [
      "Review the quantitative and qualitative outcomes of LTTA-1 and LTTA-2.",
      "Analyze first-year survey data collected from over 300 participating students, teachers, and parents.",
      "Verify progress on Chapter 1 translations and project website documentation.",
      "Finalize logistical, academic, and safety arrangements for LTTA-3 in Istanbul and LTTA-4 in Metković.",
      "Compile documentation and quality metrics for the Erasmus+ Interim Activity & Financial Report.",
    ],
    agenda: [
      {
        day: "Day 1",
        title: "Year 1 Audit, Survey Evaluation & Chapter 1 Review",
        description:
          "Coordinator presentation of Year 1 milestones, evaluation data analysis presented by Italy, review of website traffic, and validation of translated Chapter 1 lessons.",
      },
      {
        day: "Day 2",
        title: "Year 2 Operational Planning & Interim Report Consolidation",
        description:
          "Detailed agenda review for Istanbul and Metković student exchanges, school garden progress reports from all 4 schools, and assignment of interim reporting duties.",
      },
    ],
    expectedOutcomes: [
      "Approved Year 1 Evaluation and Monitoring Report.",
      "Consensus on the Erasmus+ Interim Progress Report for National Agency submission.",
      "Finalized dates, travel logistics, and workshop outlines for LTTA-3 in Türkiye.",
      "Updated project financial ledger and risk management registry.",
    ],
  },

  // ================= LTTA 3 =================
  {
    id: "ltta-3",
    code: "LTTA-3",
    type: "LTTA",
    title: "Learning, Teaching and Training Activity (LTTA) Held in Istanbul",
    subtitle: "Second Student Exchange on the EU Green Deal, Fermentation & Sustainable Harvest",
    workPackage: "WP3: From Farm to Fork (Activity 2)",
    format: "Physical Mobility",
    dates: "6–10 October 2025",
    duration: "5 exchange days + 2 travel days",
    country: "Türkiye",
    countryCode: "tr",
    city: "Istanbul & Silivri",
    venue: "Adile Mermerci Anatolian High School, Istanbul Rumeli University & Grandma's Wonderland",
    hostPartnerSlug: "adile-mermerci-anatolian-high-school",
    hostSchool: "Adile Mermerci Anatolian High School",
    partnerEmblem: "/images/partners/turkey.jpeg",
    targetGroup: "Secondary school students and biology/environmental science educators",
    participants: "15 students and 12 teachers (27 participants)",
    participantBreakdown: "Students and teachers from TR, IT, PL, HR, and MK",
    grant: "€16,950.00",
    summary: "",
    article: {
      headline: "Learning, Teaching and Training Activity (LTTA) Held in Istanbul",
      image: "/images/mobilities/ltta-3/ltta-3_1.jpg",
      imageCaption:
        "Students and teachers from Türkiye, Italy, Poland, Croatia, and North Macedonia in Istanbul (6–10 October 2025).",
      gallery: [
        "/images/mobilities/ltta-3/ltta-3_1.jpg",
        "/images/mobilities/ltta-3/ltta-3_2.jpg",
        "/images/mobilities/ltta-3/ltta-3_3.jpg",
        "/images/mobilities/ltta-3/ltta-3_4.jpg",
        "/images/mobilities/ltta-3/ltta-3_5.jpg",
        "/images/mobilities/ltta-3/ltta-3_6.jpg",
        "/images/mobilities/ltta-3/ltta-3_7.jpg",
        "/images/mobilities/ltta-3/ltta-3_8.jpg",
        "/images/mobilities/ltta-3/ltta-3_9.jpg",
        "/images/mobilities/ltta-3/ltta-3_10.jpg",
        "/images/mobilities/ltta-3/ltta-3_11.jpg",
      ],
      paragraphs: [
        "The Learning, Teaching and Training Activity (LTTA) in Istanbul was carried out on 6–10 October 2025 with the participation of 15 students and 12 teachers. Throughout the activity, participants took part in a rich and inspiring programme focused on Farm to Fork, the EU Green Deal, and sustainability.",
        "The LTTA began with presentations prepared by our students on the themes of Farm to Fork, the EU Green Deal, and sustainability. These presentations provided a meaningful start to the activity and gave students the opportunity to share their knowledge, raise awareness, and actively contribute to the learning process.",
        "As part of the programme, we were pleased to host Dr Büşra Yirmibeş from Boğaziçi University at our school. She delivered an inspiring presentation entitled “Growing the Future: From Tiny Seeds to Healthy Youth”, which offered valuable insights into healthy living, sustainability, and the importance of making conscious choices for the future.",
        "Another important part of the LTTA was our visit to the Department of Gastronomy and Culinary Arts at Istanbul Rumeli University, where participants joined a cooking workshop. During this workshop, students prepared three traditional dishes from three different regions of Türkiye: Yuvalama from Gaziantep, Hünkar Beğendi from Bursa, and Vişneli Ekmek Kadayıfı from Afyon. This hands-on experience allowed participants to discover the richness of Turkish culinary heritage while developing practical skills and teamwork.",
        "The programme also included a visit to The Barn Restaurant at Grandma’s Wonderland in Silivri, a Green Michelin Star venue that fully applies the Farm to Fork strategy. During this visit, Chef Buğra Özdemir warmly welcomed our group and shared valuable information about food fermentation. Thanks to his special attention and sincere engagement with each participant, the visit became even more meaningful and memorable. Students also had the opportunity to prepare their own fermented foods and take their jars home with them. In addition, participants visited the fields, observed the production process closely, and enjoyed pizzas prepared with fresh ingredients collected directly from the farm.",
        "The LTTA in Istanbul was a highly productive, informative, and enjoyable experience for all participants. It successfully combined academic learning, practical activities, cultural exchange, and environmental awareness, making it a truly memorable and inspiring mobility experience for both students and teachers.",
        "We would like to thank everyone who contributed to the organisation and success of this meaningful activity.",
      ],
    },
    objectives: [
      "Understand the key pillars of the European Green Deal and the 'Farm to Fork' sustainable agriculture strategy.",
      "Participate in hands-on cooking workshop preparing authentic Turkish regional gastronomy (Yuvalama, Hünkar Beğendi, Vişneli Ekmek Kadayıfı).",
      "Discover food fermentation principles at Green Michelin Star venue 'The Barn' in Silivri with Chef Buğra Özdemir.",
      "Attend academic lecture by Dr. Büşra Yirmibeş (Boğaziçi University) on sustainable lifestyles.",
      "Draft the initial sections and research assignments for Chapter 2 of the Project Book.",
    ],
    agenda: [
      {
        day: "Monday",
        title: "Student Presentations on Farm to Fork & EU Green Deal",
        description:
          "Opening assembly at Adile Mermerci Anatolian High School, icebreaking games, and student peer presentations on sustainable agriculture and the EU Green Deal.",
      },
      {
        day: "Tuesday",
        title: "Boğaziçi University Keynote: 'Growing the Future'",
        description:
          "Guest lecture by Dr. Büşra Yirmibeş (Boğaziçi University) on adolescent nutrition and sustainability, followed by cultural tour of Istanbul.",
      },
      {
        day: "Wednesday",
        title: "Rumeli University Culinary Masterclass",
        description:
          "Hands-on cooking workshop at Istanbul Rumeli University Gastronomy Department: preparing Yuvalama, Hünkar Beğendi, and Vişneli Ekmek Kadayıfı.",
      },
      {
        day: "Thursday",
        title: "Grandma’s Wonderland & Fermentation Workshop in Silivri",
        description:
          "Full-day immersion at Green Michelin Star venue 'The Barn': Chef Buğra Özdemir fermentation masterclass, farm field tour, and wood-fired pizza lunch.",
      },
      {
        day: "Friday",
        title: "Evaluation, Chapter 2 Synthesis & Certificate Ceremony",
        description:
          "Student reflection presentations, feedback evaluation survey, Chapter 2 content review, and formal certificate presentation ceremony.",
      },
    ],
    expectedOutcomes: [
      "Practical hobby garden maintenance guide compiled by students.",
      "Hands-on mastery of natural food fermentation techniques.",
      "Documentation of 3 traditional Turkish culinary heritage recipes.",
      "Europass Mobility documentation awarded to all 27 visiting participants.",
    ],
  },

  // ================= LTTA 4 =================
  {
    id: "ltta-4",
    code: "LTTA-4",
    type: "LTTA",
    title: "Gimnazija Metković Hosts Partners for Erasmus+ Project \"HEALTHY AND YOUNG\"",
    subtitle: "Third Student Exchange on Eco-Farming, Wetlands, Split & Dubrovnik UNESCO Heritage",
    workPackage: "WP3: From Farm to Fork (Activity 3)",
    format: "Physical Mobility",
    dates: "13–17 April 2026",
    duration: "5 exchange days + 2 travel days",
    country: "Croatia",
    countryCode: "hr",
    city: "Metković",
    venue: "Gimnazija Metković, Neretva Delta, Ston, Dubrovnik & Split",
    hostPartnerSlug: "gimnazija-metkovic",
    hostSchool: "Gimnazija Metković",
    partnerEmblem: "/images/partners/croatia.jpeg",
    targetGroup: "Secondary students, biology instructors, and eco-club representatives",
    participants: "17 students and 15 teachers (32 participants)",
    participantBreakdown: "Students and teachers from HR, TR, IT, PL, and MK",
    grant: "€13,290.00",
    summary: "",
    article: {
      headline: "Gimnazija Metković Hosts Partners for Erasmus+ Project \"HEALTHY AND YOUNG\"",
      image: "/images/mobilities/ltta-4/ltta-4_1.jpeg",
      imageCaption:
        "Student and teacher delegations during the mobility hosted by Gimnazija Metković in Croatia (April 2026).",
      gallery: [
        "/images/mobilities/ltta-4/ltta-4_1.jpeg",
        "/images/mobilities/ltta-4/ltta-4_2.jpeg",
        "/images/mobilities/ltta-4/ltta-4_3.jpeg",
        "/images/mobilities/ltta-4/ltta-4_4.jpeg",
        "/images/mobilities/ltta-4/ltta-4_5.jpeg",
        "/images/mobilities/ltta-4/ltta-4_6.jpeg",
        "/images/mobilities/ltta-4/ltta-4_7.jpeg",
        "/images/mobilities/ltta-4/ltta-4_8.jpeg",
        "/images/mobilities/ltta-4/ltta-4_9.jpeg",
        "/images/mobilities/ltta-4/ltta-4_10.jpeg",
        "/images/mobilities/ltta-4/ltta-4_11.jpeg",
        "/images/mobilities/ltta-4/ltta-4_12.jpeg",
        "/images/mobilities/ltta-4/ltta-4_13.jpeg",
        "/images/mobilities/ltta-4/ltta-4_14.jpeg",
        "/images/mobilities/ltta-4/ltta-4_15.jpeg",
        "/images/mobilities/ltta-4/ltta-4_16.jpeg",
      ],
      paragraphs: [
        "From April 13 to 17, 2026, Gimnazija Metković hosted an international mobility event for students and teachers. Seventeen students and fifteen teachers participated in the organization and implementation of the mobility. The focus of this exchange was organic farming, sustainable development, and cultural exchange.",
        "The program began on Monday with an opening welcome ceremony at the school. Following introductory remarks and ice-breaking activities, students delivered presentations on the specifics of organic farming in their respective regions. The working portion of the day continued with a visit to the Natural History Museum in Metković and a hands-on workshop on producing organic fertilizers, where students learned how to manage resources sustainably.",
        "Tuesday was dedicated to the intersection of heritage and sustainability. Field work began in Ston with a visit to the oldest salt pans in Europe and continued at the Trsteno Arboretum, where students studied Mediterranean flora. The day concluded with a tour of the old city of Dubrovnik (a UNESCO World Heritage site) and a workshop titled \"Sustainability in High-Frequency Tourist Areas,\" highlighting the importance of preserving UNESCO heritage for future generations.",
        "Wednesday was reserved for the authentic values of our region. At the \"Nera etno\" Agro-Ethno Park in the Neretva Delta, participants enjoyed a photo safari in traditional lađa boats, visited an animal farm and ethnographic collection, and tasted organic local delicacies. The educational segment continued at the school with a lecture on the harmful effects of pesticides and a workshop on the decline of amphibian populations, sparking a discussion on the critical state of wetlands.",
        "On Thursday, we visited the Split area. A highlight was the visit to \"Stella Croatica\" in Klis, where students, accompanied by guides, toured the Olive Museum, production facilities, and a Mediterranean garden. Along with a traditional lunch and a tour of the Klis Fortress, students gained insight into how traditional products can be successfully marketed to the modern world. The day ended with a tour of Diocletian's Palace in Split (a UNESCO World Heritage site).",
        "The final day of the program, Friday, was dedicated to presenting project results. Through videos and posters, students showcased everything they had learned during the week. Following evaluations and the formal certificate award ceremony, the gathering concluded with a visit to local historical sites, rounding off this rich educational story.",
        "This mobility once again confirmed the importance of the Erasmus+ program in empowering young people. In addition to gaining knowledge about healthy food and ecology, students developed their English communication skills and forged friendships that will last long after the project's conclusion.",
        "We thank all host families for their hospitality, the teachers for their organization, and our partners for their excellent cooperation.",
      ],
    },
    objectives: [
      "Study wetland agro-ecosystems and organic citrus cultivation along the Neretva River Delta.",
      "Conduct laboratory and field analyses on the hazards of synthetic chemical pesticides on soil and water.",
      "Explore sustainable tourism and heritage protection in Dubrovnik, Trsteno Arboretum, and Ston salt pans.",
      "Tour 'Stella Croatica' Olive Museum and Klis fortress examining modern eco-branding.",
      "Finalize the 4 lessons of Chapter 2: 'From Farm to Fork and Organic Agriculture'.",
    ],
    agenda: [
      {
        day: "Monday",
        title: "Welcome Ceremony, Organic Presentations & Fertilizer Workshop",
        description:
          "Opening ceremony at Gimnazija Metković, regional organic farming presentations, visit to the Natural History Museum, and hands-on organic fertilizer production.",
      },
      {
        day: "Tuesday",
        title: "Ston Salt Pans, Trsteno Arboretum & UNESCO Dubrovnik",
        description:
          "Field visit to medieval Ston solar salt pans, botanical research at Trsteno Arboretum, Dubrovnik UNESCO tour, and workshop on high-traffic tourism sustainability.",
      },
      {
        day: "Wednesday",
        title: "Neretva Delta Photo Safari & Pesticide Science Lecture",
        description:
          "Traditional lađa boat photo safari at 'Nera etno' park, tasting local delicacies, and afternoon school lecture on pesticide hazards and wetland ecology.",
      },
      {
        day: "Thursday",
        title: "Stella Croatica Olive Museum, Klis Fortress & Diocletian's Palace",
        description:
          "Full-day Split expedition: Stella Croatica olive museum and Mediterranean garden, historical Klis Fortress, traditional lunch, and Diocletian's Palace tour.",
      },
      {
        day: "Friday",
        title: "Student Videos, Posters, Evaluation & Certificate Gala",
        description:
          "Presentation of student video and poster outcomes, mobility evaluation surveys, certificate award ceremony, and local historical site walks.",
      },
    ],
    expectedOutcomes: [
      "Student Guide on 'Natural Composting & Organic Fertilizers for School Gardens'.",
      "Completion of all 4 lessons for Chapter 2 ('From Farm to Fork and Organic Agriculture').",
      "Student awareness videos on wetland conservation and pesticide reduction.",
      "Europass Mobility certificates issued to all visiting participants.",
    ],
  },

  // ================= LTTA 5 =================
  {
    id: "ltta-5",
    code: "LTTA-5",
    type: "LTTA",
    title: "Erasmus+ Mobility in Poland: Promoting Zero Waste and Healthy Living",
    subtitle: "Fourth Student Exchange on Zero-Waste, REBREAD Innovation & Circular Food Economy",
    workPackage: "WP4: Food Waste & Dissemination (Activity 1)",
    format: "Physical Mobility",
    dates: "28 September – 2 October 2026",
    duration: "5 exchange days + 2 travel days",
    country: "Poland",
    countryCode: "pl",
    city: "Bielsko-Biała & Kraków",
    venue: "ZSO im. Stefana Żeromskiego w Bielsku-Białej",
    hostPartnerSlug: "zespol-szkol-zeromskiego",
    hostSchool: "ZSO im. Stefana Żeromskiego",
    partnerEmblem: "/images/partners/poland.jpeg",
    targetGroup: "Secondary school students, environmental ambassadors, and language teachers",
    participants: "18 international travelers + Polish host students and faculty",
    participantBreakdown:
      "3 students + 2 teachers each from TR, IT, HR; 3 representatives from MK",
    grant: "€13,950.00",
    summary: "",
    article: {
      headline: "Erasmus+ Mobility in Poland: Promoting Zero Waste and Healthy Living",
      image: "/images/mobilities/ltta-5/ltta-5_1.jpg",
      imageCaption:
        "Students and educators during the Zero-Waste Erasmus+ mobility in Bielsko-Biała and Kraków, Poland (Autumn 2026).",
      gallery: [
        "/images/mobilities/ltta-5/ltta-5_1.jpg",
        "/images/mobilities/ltta-5/ltta-5_2.jpg",
        "/images/mobilities/ltta-5/ltta-5_3.jpg",
        "/images/mobilities/ltta-5/ltta-5_4.jpg",
        "/images/mobilities/ltta-5/ltta-5_5.jpg",
        "/images/mobilities/ltta-5/ltta-5_6.jpg",
        "/images/mobilities/ltta-5/ltta-5_7.jpg",
        "/images/mobilities/ltta-5/ltta-5_8.jpg",
        "/images/mobilities/ltta-5/ltta-5_9.jpg",
        "/images/mobilities/ltta-5/ltta-5_10.jpg",
        "/images/mobilities/ltta-5/ltta-5_11.jpg",
        "/images/mobilities/ltta-5/ltta-5_12.jpg",
        "/images/mobilities/ltta-5/ltta-5_13.jpg",
        "/images/mobilities/ltta-5/ltta-5_14.jpg",
        "/images/mobilities/ltta-5/ltta-5_15.jpg",
        "/images/mobilities/ltta-5/ltta-5_16.jpg",
      ],
      paragraphs: [
        "From September 28 to October 2, 2026, Zespół Szkół Ogólnokształcących im. Stefana Żeromskiego in Bielsko-Biała hosted an international mobility event for students and teachers under the Erasmus+ project \"HEALTHY AND YOUNG.\" The week-long program focused on food waste prevention, zero-waste practices, circular economy initiatives, and environmental education.",
        "The program began on Monday with a deep dive into waste management and resource recovery. Participants visited the Waste Management Facility, where guides Katarzyna Olek and Environmental Protection Director Piotr Prochot demonstrated technologies used for recovering recyclable materials and converting organic (BIO) waste into compost. The working portion of the day continued with a hands-on upcycling workshop led by teacher Katarzyna Matuszek, where students transformed discarded plastic bottles and wire into jewelry, keychains, and decorative items.",
        "Tuesday was dedicated to circular economy solutions for food waste, specifically addressing surplus bread production. Through the support of Bartłomiej Rak, CEO of REBREAD, participants attended the workshop \"Bread Processing – From Waste to Raw Material,\" led by quality controller and fungi expert Krzysztof Sikorski. Students examined the breakdown of starches and sugars using specialized laboratory equipment to understand industrial upcycling. The day concluded with a zero-waste lunch at restaurant Bosco, where every ingredient was fully utilized across the dishes served.",
        "Wednesday centered on sustainable culinary practices and conscious consumption at the Gastronomy School Complex (Zespół Szkół Gastronomicznych). Led by Barbara Ormaniec, students participated in a zero-waste cooking workshop focused on resource conservation and practical recipe adaptation. The afternoon featured an interactive lecture on the environmental impacts of fast fashion by Aleksandra Tarnawa from \"Punkt 11,\" sparking discussions on garment reuse, textile upcycling, and sustainable consumer choices.",
        "On Thursday, educational activities took place at the \"Ekosynteza\" (Ecosynthesis) Centre for Ecological Education. Under the guidance of health education teacher Patrycja Willmann, students analyzed the global drivers of food waste, explored practical prevention strategies, and created awareness posters advocating against global hunger. The afternoon provided an opportunity for environmental exploration during an excursion to Szyndzielnia Mountain in the Beskid range.",
        "The final day of the program, Friday, combined cultural heritage with environmental study in Kraków. Participants toured the city's historical landmarks and visited the Jagiellonian University Botanical Garden to examine local plant species and conservation efforts. Following final reflections and evaluation sessions, the gathering concluded after an enriching week of practical learning, sustainability workshops, and international collaboration.",
        "This mobility once again confirmed the value of the Erasmus+ program in fostering environmental responsibility and global awareness among youth. Beyond gaining technical knowledge on zero-waste strategies and ecological preservation, participants enhanced their intercultural collaboration skills and built lasting international friendships.",
      ],
    },
    objectives: [
      "Analyze municipal waste recycling and composting technologies at Bielsko-Biała Waste Management Facility.",
      "Explore industrial bakery upcycling and fermentation science in REBREAD circular economy workshop.",
      "Participate in zero-waste cooking masterclass at Gastronomy School Complex (Zespół Szkół Gastronomicznych).",
      "Examine textile fast-fashion impacts and ecological awareness at 'Ekosynteza' Centre.",
      "Co-produce the student digital e-magazine 'Stop Food Waste' and draft Chapter 3 of the Project Book.",
    ],
    agenda: [
      {
        day: "Monday",
        title: "Waste Facility Technical Visit & Plastic Upcycling",
        description:
          "Study visit to Bielsko-Biała Waste Management Facility (BIO composting), followed by hands-on creative plastic upcycling workshop with Katarzyna Matuszek.",
      },
      {
        day: "Tuesday",
        title: "REBREAD Circular Bakery Workshop & Zero-Waste Lunch",
        description:
          "Workshop on 'Bread Processing - From Waste to Raw Material' with REBREAD experts, lab starch breakdown tests, and zero-waste dining at restaurant Bosco.",
      },
      {
        day: "Wednesday",
        title: "Culinary School Zero-Waste Cooking & Fast Fashion Lecture",
        description:
          "Hands-on cooking at Gastronomy School Complex with Barbara Ormaniec, followed by Aleksandra Tarnawa's lecture on fast fashion ecological impacts.",
      },
      {
        day: "Thursday",
        title: "'Ekosynteza' Centre & Szyndzielnia Mountain Hike",
        description:
          "Food waste prevention workshop at 'Ekosynteza' with Patrycja Willmann, poster design, and afternoon environmental excursion to Szyndzielnia Mountain.",
      },
      {
        day: "Friday",
        title: "Kraków Heritage Tour, Jagiellonian Botanic Garden & Gala",
        description:
          "Historical study tour of Kraków, research visit to Jagiellonian University Botanical Garden, final evaluation session, and certificate awards.",
      },
    ],
    expectedOutcomes: [
      "Publication of the digital youth e-magazine 'Stop Food Waste'.",
      "Completion of 5 lessons for Chapter 3 ('Food Waste Prevention').",
      "Model blueprints for community food-sharing fridges in secondary schools.",
      "Europass Mobility certifications validated for all 18 visiting participants.",
    ],
  },

  // ================= TPM 3 =================
  {
    id: "tpm-3",
    code: "TPM-3",
    type: "TPM",
    title: "Final Transnational Project Meeting Held in Skopje",
    subtitle: "Project Book Validation, Dissemination Audit & Final Report Clearance",
    workPackage: "WP4: Food Waste & Dissemination (Activity 7)",
    format: "Physical Mobility",
    dates: "27–29 October 2026",
    duration: "3 meeting days (27–29 October 2026)",
    country: "North Macedonia",
    countryCode: "mk",
    city: "Skopje",
    venue: "Association for Sustainable Development ARS PUBLIKA, Skopje",
    hostPartnerSlug: "ars-publika",
    hostSchool: "ARS PUBLIKA",
    partnerEmblem: "/images/partners/ars-publika.png",
    targetGroup: "School principals, project coordinators, and financial administrators",
    participants: "10 participants (2 delegates per partner country)",
    participantBreakdown: "2 delegates each from TR, IT, PL, HR, and MK",
    grant: "€5,370.00",
    summary: "",
    article: {
      headline: "Final Transnational Project Meeting Held in Skopje",
      image: "/images/mobilities/tpm-3/tpm-3_1.jpg",
      imageCaption:
        "Coordinators and partner delegations during the final Erasmus+ Transnational Project Meeting in Skopje, North Macedonia (October 2026).",
      gallery: [
        "/images/mobilities/tpm-3/tpm-3_1.jpg",
        "/images/mobilities/tpm-3/tpm-3_2.jpg",
        "/images/mobilities/tpm-3/tpm-3_3.jpg",
        "/images/mobilities/tpm-3/tpm-3_4.jpg",
        "/images/mobilities/tpm-3/tpm-3_5.jpg",
        "/images/mobilities/tpm-3/tpm-3_6.jpg",
        "/images/mobilities/tpm-3/tpm-3_7.jpg",
        "/images/mobilities/tpm-3/tpm-3_8.jpg",
        "/images/mobilities/tpm-3/tpm-3_9.jpg",
        "/images/mobilities/tpm-3/tpm-3_10.jpg",
        "/images/mobilities/tpm-3/tpm-3_11.jpg",
        "/images/mobilities/tpm-3/tpm-3_12.jpg",
        "/images/mobilities/tpm-3/tpm-3_13.jpg",
        "/images/mobilities/tpm-3/tpm-3_14.jpg",
        "/images/mobilities/tpm-3/tpm-3_15.jpg",
        "/images/mobilities/tpm-3/tpm-3_16.jpg",
        "/images/mobilities/tpm-3/tpm-3_17.jpg",
        "/images/mobilities/tpm-3/tpm-3_18.jpg",
        "/images/mobilities/tpm-3/tpm-3_19.jpg",
        "/images/mobilities/tpm-3/tpm-3_20.jpg",
      ],
      paragraphs: [
        "The Final Transnational Project Meeting (TPM) of the \"Healthy and Young\" project was held on 27–29 October 2026 in Skopje, North Macedonia, hosted by the Association for Sustainable Development ARS PUBLIKA. The meeting brought together partner organizations including the project coordinator Adile Mermerci Anatolian High School (Türkiye), Gimnazija Metkovic (Croatia), Istituto d'Istruzione Superiore Patini Liberatore (Italy), and Zespół Szkół Ogólnokształcących im. Stefana Żeromskiego w Bielsku-Białej (Poland).",
        "During the three-day meeting, participants reviewed the overall implementation of the project, assessed results, and finalized project outputs while coordinating the remaining work required for the final report. The discussions covered key topics such as healthy nutrition, the \"From Farm to Fork\" approach, organic agriculture, food waste prevention, digital outputs, dissemination, impact assessment, and sustainability planning.",
        "Throughout the sessions, partner institutions evaluated learning materials, reviewed project websites and awareness videos, and established checklists for quality and safeguarding, including student privacy and e-safety. A detailed action plan was mapped out to assign outstanding tasks, final uploads, and deadlines to each respective partner, ensuring a clear framework for completing the project deliverables.",
        "The meeting played a crucial role in strengthening cooperation among the partner organizations, evaluating achievements, and laying a solid framework for the project’s final reporting and long-term sustainability. It provided a valuable collaborative environment for partners to align their efforts and reinforce their shared commitment to the project goals.",
        "At the conclusion of the meeting, final evaluations and administrative reviews were completed, wrapping up the event in a positive and productive atmosphere as partners established clear next steps for concluding the project successfully.",
      ],
    },
    objectives: [
      "Conduct the final evaluation of all 10 project deliverables, 5 LTTAs, and local school initiatives.",
      "Review the finalized 3-chapter 'Healthy Nutrition, Farm to Fork & Food Waste Guidebook' before publication.",
      "Audit all participant documentation, certificates, timesheets, and financial expenditure books.",
      "Review project dissemination metrics (website visitors, video competition entries, local seminar participants).",
      "Finalize the cooperation protocol and institutional commitment for long-term project sustainability.",
    ],
    agenda: [
      {
        day: "Day 1",
        title: "Deliverables Audit & Project Book Sign-Off",
        description:
          "Formal assembly, comprehensive review of the 3-chapter Guidebook, layout approval, digital dissemination plan, and website archival roadmap.",
      },
      {
        day: "Day 2",
        title: "Financial Auditing, Europass Ledger & Mobility Review",
        description:
          "Thorough audit of unit-cost expenditures across all 5 partners, verification of Europass dossiers, timesheets, invoices, and accounting compliance.",
      },
      {
        day: "Day 3",
        title: "Final Beneficiary Report Strategy & Sustainability Pact",
        description:
          "Drafting sections of the Erasmus+ Final Report, compiling the project impact assessment, signing the sustainability continuation pact, and closing dinner.",
      },
    ],
    expectedOutcomes: [
      "Finalized and approved 'Healthy and Young' educational guidebook.",
      "100% verified documentation and financial audit ledger for National Agency submission.",
      "Consolidated Erasmus+ Final Beneficiary Report draft.",
      "Long-term school partnership agreement extending past the grant lifecycle.",
    ],
  },

  // ================= FINAL DISSEMINATION CONFERENCE =================
  {
    id: "conf-1",
    code: "FINAL-CONF",
    type: "CONFERENCE",
    title: "International Final Dissemination Conference",
    subtitle: "Public Presentation of Project Results, Guidebook & Youth Competition Awards",
    workPackage: "WP4: Food Waste & Dissemination (Activity 5)",
    format: "Hybrid Conference",
    dates: "29–30 October 2026",
    duration: "2 conference days",
    country: "Türkiye",
    countryCode: "tr",
    city: "Istanbul",
    venue: "Adile Mermerci Anatolian High School Auditorium, Istanbul",
    hostPartnerSlug: "adile-mermerci-anatolian-high-school",
    hostSchool: "Adile Mermerci Anatolian High School",
    partnerEmblem: "/images/partners/turkey.jpeg",
    targetGroup: "Students, educators, university professors, municipality leaders, and general public",
    participants: "200 physical attendees + 10 virtual partner delegates",
    participantBreakdown: "Regional schools, education directors, parents, and international online audience",
    grant: "Project Dissemination Budget",
    summary: "",
    objectives: [
      "Present the final outputs of the 2-year Erasmus+ partnership to educational authorities and regional schools.",
      "Distribute printed copies and open-access digital downloads of the 12-lesson Healthy Living Guidebook.",
      "Award prizes to the winners of the International Student Video Competition on Food Waste Prevention.",
      "Demonstrate the impact of school gardens and youth-led nutrition campaigns on student well-being.",
      "Mobilize local governments and educational boards to adopt project recommendations.",
    ],
    agenda: [
      {
        day: "Day 1",
        title: "Grand Opening, Keynote Addresses & Book Launch",
        description:
          "Official opening by Turkish National Agency representatives and school principals, presentation of the final Guidebook, and keynote lectures by guest nutrition scientists.",
      },
      {
        day: "Day 2",
        title: "Video Competition Screenings, School Garden Expo & Awards",
        description:
          "Screening of winning student awareness films, exhibition of photographs and school garden harvest yields, award ceremony, and partner virtual farewell addresses.",
      },
    ],
    expectedOutcomes: [
      "Over 200 educational stakeholders directly engaged in Istanbul.",
      "Public distribution of the Healthy and Young educational publication.",
      "Broad media and social press coverage celebrating European school cooperation.",
      "Institutional adoption of project modules into regional secondary curricula.",
    ],
  },
]

export const lttasList = mobilitiesList.filter((m) => m.type === "LTTA")
export const tpmsList = mobilitiesList.filter((m) => m.type === "TPM")

export function getMobilityBySlug(slug: string): MobilityEvent | undefined {
  const normalized = slug.toLowerCase()
  return mobilitiesList.find(
    (m) => m.id.toLowerCase() === normalized || m.code.toLowerCase() === normalized
  )
}
