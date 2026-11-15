export type ActivityCategory =
  | "school-garden"
  | "expert-seminar"
  | "cooking-workshop"

export interface ActivityTypeMeta {
  slug: string
  category: ActivityCategory
  title: string
  href: string
  description: string
  count: number
  badge: string
  color: string
}

export const activityTypesMeta: ActivityTypeMeta[] = [
  {
    slug: "school-gardens",
    category: "school-garden",
    title: "School Gardens",
    href: "/activities/school-gardens",
    description: "Organic hobby gardens & school greenhouses",
    count: 4,
    badge: "4 Initiatives",
    color: "text-emerald-700 bg-emerald-100",
  },
  {
    slug: "expert-seminars",
    category: "expert-seminar",
    title: "Expert Seminars",
    href: "/activities/expert-seminars",
    description: "Symposia with clinical dietitians & nutritionists",
    count: 4,
    badge: "4 Seminars",
    color: "text-blue-700 bg-blue-100",
  },
  {
    slug: "cooking-workshops",
    category: "cooking-workshop",
    title: "Cooking Workshops",
    href: "/activities/cooking-workshops",
    description: "Vocational gastronomy & culinary masterclasses",
    count: 3,
    badge: "3 Masterclasses",
    color: "text-amber-700 bg-amber-100",
  },
]

export interface Activity {
  id: string
  title: string
  subtitle: string
  category: ActivityCategory
  categoryLabel: string
  categoryBadgeColor: string
  country: string
  countryCode: string // 'hr' | 'it' | 'pl' | 'tr'
  hostSchool: string
  hostPartnerSlug: string
  partnerEmblem: string
  dateOrPeriod: string
  location: string
  speakerOrLead?: string
  targetGroup?: string
  featuredImage: string
  featuredImageCaption: string
  gallery: string[]
  paragraphs: string[]
  disseminationLinks?: { label: string; url: string }[]
  keyHighlights: string[]
}

export const activitiesList: Activity[] = [
  // =========================================================================
  // 1. SCHOOL GARDENS & ORGANIC HOBBY FARMING
  // =========================================================================
  {
    id: "hobby-garden-croatia",
    title:
      'The "Green Revolution" at Gimnazija Metković: Creating Our First Organic Hobby Garden',
    subtitle:
      "Transforming the school lawn into a productive organic brassica and herb mini-garden.",
    category: "school-garden",
    categoryLabel: "School Garden",
    categoryBadgeColor: "bg-emerald-600 text-white",
    country: "Croatia",
    countryCode: "hr",
    hostSchool: "Gimnazija Metković",
    hostPartnerSlug: "gimnazija-metkovic",
    partnerEmblem: "/images/partners/croatia.jpeg",
    dateOrPeriod: "March 2026 – Autumn 2026",
    location: "Metković, Dubrovnik-Neretva County, Croatia",
    targetGroup: "Secondary school students, biology teachers & eco-club members",
    featuredImage:
      "/images/activities/hobby-garden-croatia/hobby-garden-croatia_1.jpg",
    featuredImageCaption:
      "Students actively preparing soil and planting seedlings in the school garden plot framed by olive trees.",
    gallery: [
      "/images/activities/hobby-garden-croatia/hobby-garden-croatia_1.jpg",
      "/images/activities/hobby-garden-croatia/hobby-garden-croatia_2.jpg",
      "/images/activities/hobby-garden-croatia/hobby-garden-croatia_3.jpg",
      "/images/activities/hobby-garden-croatia/hobby-garden-croatia_4.jpg",
      "/images/activities/hobby-garden-croatia/hobby-garden-croatia_5.jpg",
      "/images/activities/hobby-garden-croatia/hobby-garden-croatia_6.jpg",
      "/images/activities/hobby-garden-croatia/hobby-garden-croatia_7.jpg",
    ],
    paragraphs: [
      'As a key part of our project, we were tasked with creating a mini-garden where students could put the principles of organic farming into practice. We selected a sunny plot on the school lawn, beautifully framed by olive trees (Olea europaea). Since the school had never grown edible plants before, this initiative felt like a "small green revolution" for our entire community.',
      "The process began in March 2026 with hard work and enthusiasm. Students rolled up their sleeves to measure the site, dig up the soil, and clear away the grass. To ensure the best possible start for our plants, we enriched the soil with organic humus and compost. We initially planted seedlings of collard greens (Brassica oleracea var. acephala) and cauliflower (Brassica oleracea var. botrytis).",
      'Maintaining an organic garden proved to be a valuable lesson in commitment. Students took turns visiting the garden almost every day to water the seedlings and pull weeds. We even organized "hand-picking" sessions to protect our crops from snails (Gastropoda) without using chemicals. We also experimented with sustainable fertilizers, such as natural liquid feed made from banana peels (Musa sapientum). By June, our efforts paid off. We harvested the first leaves of collard greens and cauliflower, which students took home to prepare using traditional local recipes. By the start of the summer holidays, the first cycle was complete, and we were already planning our autumn revival.',
      "On the first day of autumn, we took advantage of the lingering sunny weather to kick off a new growing season. Our goal was to expand the variety and structure of our mini school garden.",
      'After clearing the previous season\'s remains and removing old stems, we decided to keep the kale (Brassica oleracea var. acephala), which remained remarkably green and productive. In the newly cleared sections, we introduced more structure by preparing raised beds. This time, we focused on a variety of brassicas, planting young seedlings of: red cabbage (Brassica oleracea var. capitata f. rubra), curly leaf kale (Brassica oleracea var. sabellica) and savoy cabbage (Brassica oleracea var. sabauda). To provide a natural barrier and maximize our space, we planted leeks (Allium ampeloprasum var. porrum) along the garden\'s edge to serve as a "living fence" for our crops. We have then left the garden tidy and peaceful, awaiting the first autumn rains to gently awaken the soil and nourish the new life we’ve planted.',
      "This project has taught us that while organic farming requires daily care and patience, the reward of seeing a seed turn into a meal—and the knowledge gained along the way—is absolutely worth it.",
    ],
    keyHighlights: [
      "Planted collard greens, cauliflower, red cabbage, curly leaf kale, and savoy cabbage.",
      "Introduced organic banana-peel liquid fertilizer and chemical-free snail management.",
      "Built raised beds and a natural 'living fence' of leeks along the garden border.",
      "Connected garden harvests directly to traditional Dalmatian recipes prepared at home.",
    ],
  },
  {
    id: "school-garden-italy",
    title:
      "Educational Greenhouse & Botanical School Garden: Sustainable Plant Management",
    subtitle:
      "Inaugurating the school greenhouse and cultivating aromatic herbs and seasonal vegetables in Castel di Sangro.",
    category: "school-garden",
    categoryLabel: "School Garden",
    categoryBadgeColor: "bg-emerald-600 text-white",
    country: "Italy",
    countryCode: "it",
    hostSchool: "Istituto d'Istruzione Superiore Patini-Liberatore",
    hostPartnerSlug: "patini-liberatore-de-panfilis",
    partnerEmblem: "/images/partners/italy.jpeg",
    dateOrPeriod: "Spring 2025 – Ongoing",
    location: "Castel di Sangro, Abruzzo, Italy",
    targetGroup: "High school students, biology faculty, and visiting Erasmus+ delegations",
    featuredImage:
      "/images/activities/school-garden-italy/school-garden-italy_2.jpg",
    featuredImageCaption:
      "Student and teacher delegations celebrating the inauguration of the school greenhouse at IIS Liberatore.",
    gallery: [
      "/images/activities/school-garden-italy/school-garden-italy_1.jpg",
      "/images/activities/school-garden-italy/school-garden-italy_2.jpg",
      "/images/activities/school-garden-italy/school-garden-italy_3.jpg",
      "/images/activities/school-garden-italy/school-garden-italy_4.jpg",
      "/images/activities/school-garden-italy/school-garden-italy_5.jpg",
      "/images/activities/school-garden-italy/school-garden-italy_6.jpg",
      "/images/activities/school-garden-italy/school-garden-italy_7.jpg",
      "/images/activities/school-garden-italy/school-garden-italy_8.jpg",
      "/images/activities/school-garden-italy/school-garden-italy_9.jpg",
      "/images/activities/school-garden-italy/school-garden-italy_10.jpg",
      "/images/activities/school-garden-italy/school-garden-italy_11.jpg",
      "/images/activities/school-garden-italy/school-garden-italy_12.jpg",
      "/images/activities/school-garden-italy/school-garden-italy_13.jpg",
      "/images/activities/school-garden-italy/school-garden-italy_14.jpg",
    ],
    paragraphs: [
      "Within the framework of the Erasmus+ 'Healthy and Young' partnership, students and faculty at IIS Patini-Liberatore in Castel di Sangro established an educational school greenhouse and botanical potted plant garden. The project began with the official inauguration of the newly constructed greenhouse facility, accompanied by hands-on workshops on greenhouse cultivation, organic soil fertilization, and microclimate management.",
      "Students actively participated in planting and nurturing aromatic culinary herbs including basil, rosemary, and mint, as well as seasonal vegetable crops in sustainable containers. The initiative provided learners with practical botany competencies, demonstrating the ecological benefits of zero-kilometer agricultural cultivation and the vital link between soil health and nutritious gastronomy.",
      "Throughout the season, students worked collaboratively to maintain the plants, monitor moisture and sunlight, and apply natural plant-care techniques without synthetic chemicals. The greenhouse and botanical garden stand as an enduring living laboratory for environmental stewardship and healthy lifestyle education across the school community.",
    ],
    keyHighlights: [
      "Official inauguration of the modern school greenhouse facility at IIS Liberatore.",
      "Cultivation of aromatic Mediterranean herbs: basil, rosemary, mint, and potted greens.",
      "Hands-on student training in chemical-free plant management and organic soil enrichment.",
      "Integrated with vocational culinary education and nutritional science coursework.",
    ],
  },
  {
    id: "school-garden-poland",
    title: "School Garden - Growing Together!",
    subtitle:
      "Transforming school spaces into a vibrant potted plant garden with herbs, blueberries, and quince trees.",
    category: "school-garden",
    categoryLabel: "School Garden",
    categoryBadgeColor: "bg-emerald-600 text-white",
    country: "Poland",
    countryCode: "pl",
    hostSchool:
      "Zespół Szkół Ogólnokształcących im. Stefana Żeromskiego w Bielsku-Białej",
    hostPartnerSlug: "zso-im-stefana-zeromskiego",
    partnerEmblem: "/images/partners/poland.jpeg",
    dateOrPeriod: "October 2026 – Ongoing",
    location: "Bielsko-Biała, Silesian Voivodeship, Poland",
    targetGroup: "Students, eco-club members, and school community",
    featuredImage:
      "/images/activities/school-garden-poland/school-garden-poland_1.jpg",
    featuredImageCaption:
      "The indoor and patio potted garden featuring blueberries, 'Fire Dance' quince trees, fresh basil, and botanical study posters.",
    gallery: [
      "/images/activities/school-garden-poland/school-garden-poland_1.jpg",
      "/images/activities/school-garden-poland/school-garden-poland_2.jpg",
      "/images/activities/school-garden-poland/school-garden-poland_3.jpg",
      "/images/activities/school-garden-poland/school-garden-poland_4.jpg",
      "/images/activities/school-garden-poland/school-garden-poland_5.jpg",
      "/images/activities/school-garden-poland/school-garden-poland_6.jpg",
      "/images/activities/school-garden-poland/school-garden-poland_7.jpg",
      "/images/activities/school-garden-poland/school-garden-poland_8.jpg",
      "/images/activities/school-garden-poland/school-garden-poland_9.jpg",
      "/images/activities/school-garden-poland/school-garden-poland_10.jpg",
      "/images/activities/school-garden-poland/school-garden-poland_11.jpg",
    ],
    paragraphs: [
      "As part of our Erasmus+ project “Healthy and Young”, our students were involved in a school garden activity that brought them closer to nature and at the same time to one another. Together, they planted a variety of herbs, blueberries, quince trees, and other plants, transforming the school space into a potted plant garden.",
      "Not only did the students learn to plant but this activity was a meaningful opportunity for students to work as a team, share responsibilities, and strengthen their friendships while learning about the importance of environmental protection and sustainability. Through this hands-on experience, they discovered how small actions, such as planting and caring for plants, can contribute to a greener and healthier future.",
      "The school garden became more than just a place to grow plants – it became a symbol of cooperation, friendship, and shared responsibility. By working together and nurturing nature, our students learned that, just like plants, strong relationships grow with care, patience, and teamwork.",
      "This activity perfectly reflected the spirit of our Erasmus+ project, promoting environmental awareness, sustainable practices, intercultural cooperation, and the importance of growing together towards a more sustainable future.",
    ],
    keyHighlights: [
      "Planted a variety of culinary herbs, blueberries, and ornamental 'Fire Dance' quince trees.",
      "Transformed school common areas into a multi-tiered wooden planter and potted botanical haven.",
      "Fostered student teamwork, environmental awareness, and sustainable living habits.",
      "Created student-researched educational posters on the nutritional value of berries and herbs.",
    ],
  },
  {
    id: "school-garden-turkey",
    title:
      "School garden - Learning Through Nature: Our Organic Gardening Experience 🌱",
    subtitle:
      "Raising awareness of organic farming, seasonal vegetable cultivation, and natural growing processes in Istanbul.",
    category: "school-garden",
    categoryLabel: "School Garden",
    categoryBadgeColor: "bg-emerald-600 text-white",
    country: "Türkiye",
    countryCode: "tr",
    hostSchool: "Adile Mermerci Anadolu Lisesi",
    hostPartnerSlug: "adile-mermerci-anatolian-high-school",
    partnerEmblem: "/images/partners/turkey.jpeg",
    dateOrPeriod: "Spring – Summer Growing Season",
    location: "Zeytinburnu, Istanbul, Türkiye",
    targetGroup: "High school students and science & eco-club participants",
    featuredImage:
      "/images/activities/school-garden-turkey/school-garden-turkey_1.jpg",
    featuredImageCaption:
      "Outdoor organic school garden plot in Istanbul with ripening tomato crops and bamboo vine trellises.",
    gallery: [
      "/images/activities/school-garden-turkey/school-garden-turkey_1.jpg",
      "/images/activities/school-garden-turkey/school-garden-turkey_2.jpg",
      "/images/activities/school-garden-turkey/school-garden-turkey_3.jpg",
      "/images/activities/school-garden-turkey/school-garden-turkey_4.jpg",
      "/images/activities/school-garden-turkey/school-garden-turkey_5.jpg",
      "/images/activities/school-garden-turkey/school-garden-turkey_6.jpg",
      "/images/activities/school-garden-turkey/school-garden-turkey_7.jpg",
      "/images/activities/school-garden-turkey/school-garden-turkey_8.jpg",
      "/images/activities/school-garden-turkey/school-garden-turkey_9.jpg",
    ],
    paragraphs: [
      "As part of our project activities, we aim to raise students’ awareness of organic farming, sustainable agriculture, and the importance of protecting the environment.",
      "Through hands-on gardening experiences, students have the opportunity to explore the principles of organic farming, identify different types of seedlings, and understand which fruits and vegetables grow best in each season.",
      "By observing the growth of plants from seedlings to harvest, students gain practical knowledge about natural growing processes, seasonal cultivation, and environmentally friendly agricultural practices.",
      "These activities not only encourage students to develop a deeper appreciation for nature but also promote environmental responsibility, healthy living, and sustainable habits.",
      "By bringing learning beyond the classroom, we hope to inspire our students to become more environmentally conscious individuals who understand the value of growing their own food and protecting our planet.",
    ],
    keyHighlights: [
      "Hands-on exploration of organic farming principles and seasonal seed selection.",
      "Cultivated heirloom tomatoes, peppers, and garden greens from seedling to harvest.",
      "Observed natural growth cycles and chemical-free soil nourishment in urban school grounds.",
      "Deepened student appreciation for sustainable agriculture and farm-to-table nutrition.",
    ],
  },

  // =========================================================================
  // 2. EXPERT SEMINARS
  // =========================================================================
  {
    id: "expert-seminar-croatia",
    title:
      "Expert Seminar - Interactive Lecture on Balanced Nutrition: Empowering Students for a Healthier Future",
    subtitle:
      "Welcoming alumna Maja Zovko, M.Sc. in Nutrition, for an interactive seminar, nutrition quiz, and smoothie workshop.",
    category: "expert-seminar",
    categoryLabel: "Expert Seminar",
    categoryBadgeColor: "bg-blue-600 text-white",
    country: "Croatia",
    countryCode: "hr",
    hostSchool: "Gimnazija Metković",
    hostPartnerSlug: "gimnazija-metkovic",
    partnerEmblem: "/images/partners/croatia.jpeg",
    dateOrPeriod: "14 April 2025",
    location: "Gimnazija Metković Main Hall, Metković, Croatia",
    speakerOrLead:
      "Maja Zovko, M.Sc. in Nutrition (Specialized Nutrition Counseling Center in Zagreb)",
    targetGroup: "Second-year students, Erasmus+ project participants & STEM faculty",
    featuredImage:
      "/images/activities/expert-seminar-croatia/expert-seminar-croatia_1.jpg",
    featuredImageCaption:
      "Maja Zovko presenting the interactive 'Balanced Nutrition' lecture to a packed auditorium of students and teachers.",
    gallery: [
      "/images/activities/expert-seminar-croatia/expert-seminar-croatia_1.jpg",
      "/images/activities/expert-seminar-croatia/expert-seminar-croatia_2.jpg",
      "/images/activities/expert-seminar-croatia/expert-seminar-croatia_3.jpg",
      "/images/activities/expert-seminar-croatia/expert-seminar-croatia_4.jpg",
      "/images/activities/expert-seminar-croatia/expert-seminar-croatia_5.jpg",
    ],
    paragraphs: [
      'Within the framework of the Erasmus+ project "Healthy and Young," our school organized a key project activity on April 14, 2025—a guest lecture by a nutrition expert. We were especially proud to welcome back our former student, Maja Zovko, who now holds a Master’s degree in Nutrition and works at a specialized nutrition counseling center in Zagreb.',
      'Maja delivered an engaging, interactive presentation titled "Balanced Nutrition," specifically tailored for our second-year students. The event saw a fantastic turnout, with students and teachers involved in the Erasmus+ project filling the hall. Through her dynamic presentation, Maja provided deep insights into why proper nutrition is the foundation of a healthy life. Students learned the art of building a balanced plate and discovered how much their food choices directly affect their energy levels, focus, and long-term well-being.',
      "The lecture went beyond just calories and macros; it emphasized a holistic approach to health. Maja highlighted that quality sleep and consistent physical activity are just as essential as what we eat.",
      "To make the session practical, students were given brochures packed with useful advice and simple, quick recipes for healthy snacks they can make at home. The atmosphere was lively, especially during the knowledge quiz that followed the talk. The highlight of the day was the tasting session, where students sampled healthy desserts before getting behind the blender to prepare their own nutrient-packed smoothies.",
      "These activities have laid a solid foundation for our students to start adopting better eating habits and a more mindful lifestyle.",
      "We would like to extend a heartfelt thank you to Maja Zovko for her inspiring words and for giving back to her old school. It is truly rewarding to see our alumni succeed and to witness how the enthusiasm of our STEM teachers continues to motivate and guide the younger generations toward a brighter, healthier future.",
    ],
    disseminationLinks: [
      {
        label: "Facebook Report (Gimnazija Metković Kemija)",
        url: "https://web.facebook.com/gm.kemija/posts/645176111605976",
      },
      {
        label: "Facebook Community Announcement",
        url: "https://web.facebook.com/permalink.php?story_fbid=pfbid02EtrtPX6Vz6TBviarq4iYuPhNGcCvgakSz4d1MZsTeaywg9oKyoD36rJm72BueKS1l&id=100091761844228",
      },
      {
        label: "Instagram Visual Recap",
        url: "https://www.instagram.com/p/DIgywh-oB0U/?utm_source=ig_web_copy_link",
      },
    ],
    keyHighlights: [
      "Guest lecture by distinguished school alumna and registered nutritionist Maja Zovko.",
      "The 'Balanced Plate' concept: understanding macros, micros, energy, and mental focus.",
      "Interactive knowledge quiz and distribution of healthy recipe brochures for youth.",
      "Live healthy dessert tasting and interactive nutrient-rich smoothie blending workshop.",
    ],
  },
  {
    id: "expert-seminar-italy",
    title:
      "Expert Seminar - Hosting Dietitian Dr. Alisia D’Angelo at Our School: Promoting Healthy Eating Habits Among Young People",
    subtitle:
      "Comprehensive 'Health and Nutritional Well-being' seminar exploring WHO health pillars, the Mediterranean diet, and nutrition labels.",
    category: "expert-seminar",
    categoryLabel: "Expert Seminar",
    categoryBadgeColor: "bg-blue-600 text-white",
    country: "Italy",
    countryCode: "it",
    hostSchool: "Istituto d'Istruzione Superiore Patini-Liberatore",
    hostPartnerSlug: "patini-liberatore-de-panfilis",
    partnerEmblem: "/images/partners/italy.jpeg",
    dateOrPeriod: "13 March 2025",
    location: "Castel di Sangro, Abruzzo, Italy",
    speakerOrLead:
      "Dr. Alisia D’Angelo (Specialist in Dietetics, Human Nutrition Sciences & Translational Medicine)",
    targetGroup:
      "Secondary school students, teachers, and Erasmus+ partner representatives",
    featuredImage:
      "/images/activities/expert-seminar-italy/expert-seminar-italy_1.jpg",
    featuredImageCaption:
      "Dr. Alisia D’Angelo guiding students through 'The Healthy Dish' visual breakdown and dietary balance pillars.",
    gallery: [
      "/images/activities/expert-seminar-italy/expert-seminar-italy_1.jpg",
      "/images/activities/expert-seminar-italy/expert-seminar-italy_2.jpg",
      "/images/activities/expert-seminar-italy/expert-seminar-italy_3.jpg",
      "/images/activities/expert-seminar-italy/expert-seminar-italy_4.jpg",
    ],
    paragraphs: [
      "The \"Health and Nutritional Well-being\" seminar took place in Castel di Sangro on March 13, 2025, as a key initiative within the European Erasmus+ \"Healthy and Young\" project spanning from 2023 to 2026. Co-funded by the European Union, this international educational cooperation brings together partner institutions from several countries, including Italy, Turkey, Poland, and Croatia. The seminar was led by Dr. Alisia D'Angelo—a specialist with a background in Dietetics, Human Nutrition Sciences, and Translational Medicine—who conducted engaging interactive sessions with students to promote lifelong well-being.",
      "The seminar grounded its message in the World Health Organization's official definition, framing health as a complete state of physical, mental, and social well-being rather than merely the absence of disease or infirmity. To achieve this balance, individuals must focus on all three pillars. Physical health relies on regular exercise, balanced nutrition, and the avoidance of harmful substances, while mental health requires effective stress management, seeking support when needed, and maintaining strong personal connections. Social health, meanwhile, is fostered through positive relationships and active community involvement. Adopting such a lifestyle not only enhances overall quality of life and extends life expectancy, but it also plays a critical role in preventing chronic conditions like diabetes, heart disease, and obesity. Furthermore, proper nutrition supports cognitive development in young people, reduces the risk of anxiety and depression, and promotes environmental sustainability by favoring balanced diets—such as the Mediterranean diet—that protect biodiversity and lower environmental impact.",
      "Central to the educational content was the concept of \"The Healthy Dish,\" which visually breaks down daily intake into essential components: dietary fiber, carbohydrates, proteins, healthy fats, and vital micronutrients. Participants learned that carbohydrates serve as the primary energy source, proteins drive muscle growth and recovery, fats support hormone production and energy storage, and vitamins and minerals bolster immunity and bone health. Practical guidance was provided on reading nutrition labels, encouraging students to focus on serving sizes, limit hidden sugars and trans fats, and select foods high in fiber and low in sodium. This nutritional foundation aligns closely with the Mediterranean Diet, which emphasizes food variety, seasonality, and personal taste.",
      "To complement nutritional education, the seminar outlined physical activity recommendations tailored to different age groups. Children and adolescents are advised to engage in at least 60 minutes of moderate-to-vigorous physical activity daily, including muscle- and bone-strengthening exercises three days a week. Adults should aim for 150 to 300 minutes of moderate aerobic activity weekly alongside regular strength training, while older adults benefit from tailored routines incorporating balance and flexibility exercises to prevent fall risks. Ultimately, the event reinforced that maintaining health is a continuous, lifelong commitment benefiting both the individual and society as a whole. This mission is reflected in the inspiring words of Michelle Obama cited during the sessions: 'All children should have the basic nutrition they need to learn and grow and to pursue their dreams, because, in the end, nothing is more important than the health and well-being of our children.'",
    ],
    keyHighlights: [
      "In-depth analysis of WHO 3-pillar health model: physical, mental, and social wellness.",
      "Hands-on mastery of 'The Healthy Dish' visual breakdown and nutrition label reading.",
      "Explored the Mediterranean Diet's benefits for adolescent brain development and sustainability.",
      "Age-tailored physical exercise benchmarks (60+ minutes daily for adolescents).",
    ],
  },
  {
    id: "expert-seminar-poland",
    title:
      "Expert seminar – Poland 28th April 2025: NUTRITION FOR THE MIND AND THE BODY",
    subtitle:
      "A 3-part symposium on psychodietetics, nutritional neuroscience, and supermarket marketing psychology.",
    category: "expert-seminar",
    categoryLabel: "Expert Seminar",
    categoryBadgeColor: "bg-blue-600 text-white",
    country: "Poland",
    countryCode: "pl",
    hostSchool:
      "Zespół Szkół Ogólnokształcących im. Stefana Żeromskiego w Bielsku-Białej",
    hostPartnerSlug: "zso-im-stefana-zeromskiego",
    partnerEmblem: "/images/partners/poland.jpeg",
    dateOrPeriod: "28 April 2025",
    location:
      "Zespół Szkół Gastronomicznych i Handlowych, Bielsko-Biała, Poland",
    speakerOrLead:
      "mgr Dominika Gorowska-Stasica (Psychodietetician) & prof. Halina Świerczak",
    targetGroup: "Students of ZSO im. S. Żeromskiego w Bielsku-Białej",
    featuredImage:
      "/images/activities/expert-seminar-poland/expert-seminar-poland_1.jpg",
    featuredImageCaption:
      "Lecture session at ZSGiH with students exploring the link between emotional regulation and healthy eating patterns.",
    gallery: [
      "/images/activities/expert-seminar-poland/expert-seminar-poland_1.jpg",
      "/images/activities/expert-seminar-poland/expert-seminar-poland_2.jpg",
      "/images/activities/expert-seminar-poland/expert-seminar-poland_3.jpg",
      "/images/activities/expert-seminar-poland/expert-seminar-poland_4.jpg",
      "/images/activities/expert-seminar-poland/expert-seminar-poland_5.jpg",
      "/images/activities/expert-seminar-poland/expert-seminar-poland_6.jpg",
      "/images/activities/expert-seminar-poland/expert-seminar-poland_7.jpg",
      "/images/activities/expert-seminar-poland/expert-seminar-poland_8.jpg",
      "/images/activities/expert-seminar-poland/expert-seminar-poland_9.jpg",
      "/images/activities/expert-seminar-poland/expert-seminar-poland_10.jpg",
      "/images/activities/expert-seminar-poland/expert-seminar-poland_11.jpg",
      "/images/activities/expert-seminar-poland/expert-seminar-poland_12.jpg",
      "/images/activities/expert-seminar-poland/expert-seminar-poland_13.jpg",
      "/images/activities/expert-seminar-poland/expert-seminar-poland_14.jpg",
      "/images/activities/expert-seminar-poland/expert-seminar-poland_15.jpg",
    ],
    paragraphs: [
      "The students from ZSO im. S. Żeromskiego w Bielsku-Białej had the pleasure to participate in a lecture about how to nourish our minds and bodies, which took place on 28th April 2025. This event was a part of a project promoting the healthy aspects of living.",
      "The students gathered early in the morning and made our way to Zespół Szkół Gastronomicznych i Handlowych, where the workshop was held. It was split up into 3 sections, each one ran by a different specialist in that field.",
      "The first part of the workshop was given by a psychodietetician, mgr Dominika Gorowska-Stasica on our emotions, where they were compared to a color wheel, which meant that all emotions are equal, none are \"better\" or \"worse\". We learnt that it's best not to suppress them and just let them be because it could lead to potential panic attacks in the future.",
      "During the break between the lectures, the students had the opportunity to try some healthy snacks kindly prepared for us beforehand. Ones chose a chia pudding with berries, others, hummus on bread with cherry tomatoes.",
      "After a quick break the second lecture began. The students were introduced to the science point of viewing food. For example did you know how beneficial legumes are for our gut? Unfortunately though, the demand for these types of foods is decreasing, most people don't know how to incorporate them to their daily meals, which is the result of this occurrence. Such things like buckwheat, pumpkin seeds and ect. are very easily found in stores, yet many of us tend to skip these products in search for various supplements that the market tries to convince us to buy. The media is telling us that a product will \"change our life\", but then again, if you take that into consideration, no supplement can outgrow a healthy and well-balanced diet. Different elements like magnesium, selenium, zinc and iron are almost non-negotiable in our daily food intake, since they give the human brain a perfect space to help develop its cognitive functions. Another point worth mentioning is the influence of omega fatty acids, especially omega 3, on our well-being. Not only do they help with our memory but also reduce inflammation in our body, support cardiovascular health and reduce the risk of certain cancers. And that's all thanks to prof. Halina Świerczak, who we'd like to thank as a class for this practical piece of information.",
      "Last, but not least, the lecturer touched on the marketing of different brands and how they use psychology to trick our minds into buying different products. She mostly referred to big supermarkets, where you can smell the product sold in an aisle before you even step foot in it, this concerns mainly for e.g. coffee or chocolate. Apparently the staff leave small air fresheners, packed with essential oils, inside the aisles, from which the smell is released as someone walks in. To add to that, stores also have shorter shelves just by the cash register overflowing with a range of sweets and snacks. This too is another gimmick, that obviously catches small children's eyes when they walk past the colourful shelves, that automatically increases the store's selling rates and contributes to their profits. Who would've thought how the brain is hacked and manipulated even in the above-mentioned situations!",
      "The students are all incredibly grateful to have had the opportunity to be a part of such an exciting venture! Everyone learnt something new from this workshop and will try to use this information in practice.",
    ],
    keyHighlights: [
      "Psychodietetics seminar on emotional regulation and color-wheel emotional awareness.",
      "Nutritional neuroscience by prof. Halina Świerczak: gut microbiome, legumes, and Omega-3s.",
      "Critical breakdown of supplement marketing vs. nutrient-rich whole foods (buckwheat, zinc, iron).",
      "Analysis of supermarket sensory marketing gimmicks, checkout line temptations, and scent hacking.",
    ],
  },
  {
    id: "expert-seminar-turkey",
    title:
      "Expert Seminar - Hosting Dietitian Eda Metin at Our School: Promoting Healthy Eating Habits Among Young People",
    subtitle:
      "Addressing teenage nutrition, childhood obesity, and diabetes prevention with 120 attending students in Istanbul.",
    category: "expert-seminar",
    categoryLabel: "Expert Seminar",
    categoryBadgeColor: "bg-blue-600 text-white",
    country: "Türkiye",
    countryCode: "tr",
    hostSchool: "Adile Mermerci Anadolu Lisesi",
    hostPartnerSlug: "adile-mermerci-anatolian-high-school",
    partnerEmblem: "/images/partners/turkey.jpeg",
    dateOrPeriod: "5 May 2025",
    location: "Adile Mermerci Anadolu Lisesi Conference Hall, Istanbul, Türkiye",
    speakerOrLead: "Dietitian Eda Metin (Clinical & Adolescent Nutrition Specialist)",
    targetGroup: "Approximately 120 secondary school students and teachers",
    featuredImage:
      "/images/activities/expert-seminar-turkey/expert-seminar-turkey_1.jpg",
    featuredImageCaption:
      "Dietitian Eda Metin engaging 120 students in the school conference hall on healthy dietary habits and food label literacy.",
    gallery: [
      "/images/activities/expert-seminar-turkey/expert-seminar-turkey_1.jpg",
      "/images/activities/expert-seminar-turkey/expert-seminar-turkey_2.jpg",
      "/images/activities/expert-seminar-turkey/expert-seminar-turkey_3.jpg",
    ],
    paragraphs: [
      "On 5 May 2025, Adile Mermerci Anadolu Lisesi hosted Dietitian Eda Metin for an informative and engaging seminar attended by approximately 120 students. The seminar focused on the importance of healthy nutrition among young people, obesity, and diabetes, aiming to raise awareness and promote healthier lifestyle choices.",
      "During the session, students learned about the importance of balanced eating habits for both physical health and overall well-being. They also gained essential knowledge about how to read food labels correctly, an important skill that can help young people make more informed decisions about the food they consume.",
      "The seminar stood out for its interactive nature, as students actively participated in the discussion and took part in a lively question-and-answer session. This created a dynamic learning environment and encouraged students to reflect on their own nutritional habits.",
      "The activity contributed significantly to the development of students’ awareness of healthy living and responsible food choices. It was a highly effective and productive event, and students left the seminar motivated to improve their eating habits and adopt healthier lifestyles.",
      "We sincerely thank Dietitian Eda Metin for her valuable support and meaningful contribution to our students’ learning process.",
    ],
    keyHighlights: [
      "Attended by over 120 students in the school's central auditorium.",
      "Focused on preventing adolescent obesity, diabetes, and lifestyle illnesses.",
      "Interactive workshop on deciphering packaged food nutrition labels and hidden sugars.",
      "Active Q&A session empowering youth with daily actionable dietary choices.",
    ],
  },

  // =========================================================================
  // 3. COOKING & CUISINE WORKSHOPS
  // =========================================================================
  {
    id: "cuisine-workshop-italy",
    title:
      "Cuisine Workshop - Visit to Roccaraso De Panfilis Hotel Management School: A Hands-On Gastronomy Experience",
    subtitle:
      "Authentic Italian pizza making masterclass led by Chef Cacciola in professional kitchen facilities.",
    category: "cooking-workshop",
    categoryLabel: "Cooking Workshop",
    categoryBadgeColor: "bg-amber-600 text-white",
    country: "Italy",
    countryCode: "it",
    hostSchool: "Istituto d'Istruzione Superiore Patini-Liberatore",
    hostPartnerSlug: "patini-liberatore-de-panfilis",
    partnerEmblem: "/images/partners/italy.jpeg",
    dateOrPeriod: "21 May 2025",
    location:
      "De Panfilis Hotel Management School, Roccaraso, Abruzzo, Italy",
    speakerOrLead: "Mr. Cacciola (Culinary Arts Instructor & Master Pizzaiolo)",
    targetGroup:
      "Visiting Erasmus+ student and teacher delegations & local culinary students",
    featuredImage:
      "/images/activities/cuisine-workshop-italy/cuisine-workshop-italy_1.jpg",
    featuredImageCaption:
      "Students in professional chef attire observing Mr. Cacciola's dough hydration and shaping demonstrations.",
    gallery: [
      "/images/activities/cuisine-workshop-italy/cuisine-workshop-italy_1.jpg",
      "/images/activities/cuisine-workshop-italy/cuisine-workshop-italy_2.jpg",
      "/images/activities/cuisine-workshop-italy/cuisine-workshop-italy_3.jpg",
      "/images/activities/cuisine-workshop-italy/cuisine-workshop-italy_4.jpg",
      "/images/activities/cuisine-workshop-italy/cuisine-workshop-italy_5.jpg",
      "/images/activities/cuisine-workshop-italy/cuisine-workshop-italy_6.jpg",
      "/images/activities/cuisine-workshop-italy/cuisine-workshop-italy_7.jpg",
      "/images/activities/cuisine-workshop-italy/cuisine-workshop-italy_8.jpg",
      "/images/activities/cuisine-workshop-italy/cuisine-workshop-italy_9.jpg",
    ],
    paragraphs: [
      "On May 21, 2025, as part of the international mobility program, the delegation traveled to the renowned De Panfilis Hotel Management School in Roccaraso for an immersive, hands-on culinary session hosted in the school’s professional kitchen facilities.",
      "The highlight of the morning was a masterclass led by Mr. Cacciola, who shared his expertise with both students and visiting teachers by demonstrating the authentic, traditional process of Italian pizza making. Wearing full kitchen protective attire, including aprons and hairnets, the participants gathered around the spacious prep stations to closely observe every stage of the craft. Mr. Cacciola expertly explained the crucial elements of pizza preparation, from understanding flour quality and hydration levels to the delicate art of dough kneading, fermentation, and shaping on flour-dusted tables.",
      "The atmosphere in the kitchen was energetic and highly collaborative. Students stood alongside local culinary students and staff, observing every step with high interest, asking questions, and capturing photos and videos on their phones to record the masterclass techniques. The session not only highlighted the technical aspects—such as handling professional ovens and traditional baking tools like the long wooden pizza peel—but also emphasized the cultural significance of pizza as a staple of Italian culinary heritage. This hands-on experience offered everyone an unforgettable combination of practical vocational training, cultural immersion, and shared enjoyment.",
    ],
    keyHighlights: [
      "Masterclass by culinary chef Mr. Cacciola in vocational professional kitchens.",
      "Hands-on practice: flour protein types, hydration ratios, kneading, and natural yeast fermentation.",
      "Traditional baking technique utilizing commercial stone ovens and wooden peels.",
      "Celebrated Italian gastronomy as a bridge for intercultural learning and food science.",
    ],
  },
  {
    id: "cooking-workshop-poland",
    title:
      "Cooking workshops and expert seminar - Poland 26th March 2026: Healthy eating alternatives",
    subtitle:
      "Sous-vide poultry, sugar-free crumbles, spinach-banana smoothies, and professional culinary kitchens in Bielsko-Biała.",
    category: "cooking-workshop",
    categoryLabel: "Cooking Workshop",
    categoryBadgeColor: "bg-amber-600 text-white",
    country: "Poland",
    countryCode: "pl",
    hostSchool:
      "Zespół Szkół Ogólnokształcących im. Stefana Żeromskiego w Bielsku-Białej",
    hostPartnerSlug: "zso-im-stefana-zeromskiego",
    partnerEmblem: "/images/partners/poland.jpeg",
    dateOrPeriod: "26 March 2026",
    location: "Gastronomy School Complex, Bielsko-Biała, Poland",
    targetGroup: "Class 1D students and culinary instructors",
    featuredImage:
      "/images/activities/cooking-workshop-poland/cooking-workshop-poland_1.jpg",
    featuredImageCaption:
      "Class 1D students participating in the healthy culinary workshop and kitchen tour at the Gastronomy School Complex.",
    gallery: [
      "/images/activities/cooking-workshop-poland/cooking-workshop-poland_1.jpg",
      "/images/activities/cooking-workshop-poland/cooking-workshop-poland_2.jpg",
      "/images/activities/cooking-workshop-poland/cooking-workshop-poland_3.jpg",
      "/images/activities/cooking-workshop-poland/cooking-workshop-poland_4.jpg",
      "/images/activities/cooking-workshop-poland/cooking-workshop-poland_5.jpg",
      "/images/activities/cooking-workshop-poland/cooking-workshop-poland_6.jpg",
      "/images/activities/cooking-workshop-poland/cooking-workshop-poland_7.jpg",
      "/images/activities/cooking-workshop-poland/cooking-workshop-poland_8.jpg",
      "/images/activities/cooking-workshop-poland/cooking-workshop-poland_9.jpg",
      "/images/activities/cooking-workshop-poland/cooking-workshop-poland_10.jpg",
      "/images/activities/cooking-workshop-poland/cooking-workshop-poland_11.jpg",
      "/images/activities/cooking-workshop-poland/cooking-workshop-poland_12.jpg",
      "/images/activities/cooking-workshop-poland/cooking-workshop-poland_13.jpg",
      "/images/activities/cooking-workshop-poland/cooking-workshop-poland_14.jpg",
      "/images/activities/cooking-workshop-poland/cooking-workshop-poland_15.jpg",
    ],
    paragraphs: [
      "On March 26th 2026, Class 1D from Zespół Szkół Ogólnokształcących im. S. Żeromskiego w Bielsku-Białej took part in a workshop organized by the Gastronomy School Complex in Bielsko-Biała as part of the Erasmus+ Project Healthy and Young. The initiative aims to promote a healthy lifestyle, including healthy eating, physical wellbeing, and mental health.",
      "During the workshop, the students had the opportunity not only to taste several creative - and of course healthy - dishes, but also to watch the process of preparing them.",
      "The main course was chicken breast sous vide stuffed with curd cheese, onion, and chives, served with dill pesto and new potatoes roasted with thyme and garlic. After this delicious meal, it was time for dessert: a spinach and banana smoothie and a fruit crumble, both prepared with no added sugar!",
      "After the tasting, a teacher from the Gastronomy School Complex showed us around the school, including modern, professionally equipped kitchens. Another attraction was the chance to try nonalcoholic drinks prepared by the students.",
      "The workshop was not only an enjoyable experience but also showed the students that healthy meals can be both delicious and easy to prepare - even sweet desserts can be made in a nutritious way.",
    ],
    keyHighlights: [
      "Preparation of sous-vide stuffed chicken breast with curd cheese, chives, and fresh dill pesto.",
      "Roasted new potatoes seasoned with aromatic garlic and garden thyme.",
      "100% natural, no-added-sugar dessert course: spinach-banana smoothies and fruit crumble.",
      "Tour of modern commercial kitchens and tasting of artisan non-alcoholic student mocktails.",
    ],
  },
  {
    id: "cusines-workshop-turkey",
    title:
      "Visit to Istanbul Rumeli University: A Hands-On Gastronomy Experience",
    subtitle:
      "Theoretical training on additive-free food storage followed by an international culinary workshop.",
    category: "cooking-workshop",
    categoryLabel: "Cooking Workshop",
    categoryBadgeColor: "bg-amber-600 text-white",
    country: "Türkiye",
    countryCode: "tr",
    hostSchool: "Adile Mermerci Anadolu Lisesi",
    hostPartnerSlug: "adile-mermerci-anatolian-high-school",
    partnerEmblem: "/images/partners/turkey.jpeg",
    dateOrPeriod: "26 March 2026",
    location:
      "Istanbul Rumeli University Department of Gastronomy and Culinary Arts, Istanbul, Türkiye",
    targetGroup: "20 high school students and accompanying project teachers",
    featuredImage:
      "/images/activities/cusines-workshop-turkey/cusines-workshop-turkey_1.jpg",
    featuredImageCaption:
      "Students preparing international recipes in Istanbul Rumeli University's professional gastronomy workstations.",
    gallery: [
      "/images/activities/cusines-workshop-turkey/cusines-workshop-turkey_1.jpg",
      "/images/activities/cusines-workshop-turkey/cusines-workshop-turkey_2.jpg",
      "/images/activities/cusines-workshop-turkey/cusines-workshop-turkey_3.jpg",
      "/images/activities/cusines-workshop-turkey/cusines-workshop-turkey_4.jpg",
      "/images/activities/cusines-workshop-turkey/cusines-workshop-turkey_5.jpg",
      "/images/activities/cusines-workshop-turkey/cusines-workshop-turkey_6.jpg",
      "/images/activities/cusines-workshop-turkey/cusines-workshop-turkey_7.jpg",
      "/images/activities/cusines-workshop-turkey/cusines-workshop-turkey_8.jpg",
      "/images/activities/cusines-workshop-turkey/cusines-workshop-turkey_9.jpg",
      "/images/activities/cusines-workshop-turkey/cusines-workshop-turkey_10.jpg",
      "/images/activities/cusines-workshop-turkey/cusines-workshop-turkey_11.jpg",
    ],
    paragraphs: [
      "On 26 March 2026, 20 students from Adile Mermerci Anadolu Lisesi visited Istanbul Rumeli University within the framework of our cooperation with the Department of Gastronomy and Culinary Arts. The visit provided students with a valuable opportunity to take part in both theoretical and practical training in the field of gastronomy.",
      "The programme began with an informative presentation on healthy and additive-free food and food preservation methods. During this session, students gained useful knowledge about healthy nutrition, natural ingredients, and the importance of proper food storage in everyday life.",
      "Following the theoretical session, students participated in a World Cuisines Workshop, where they had the opportunity to apply their knowledge in practice. As part of the workshop, they prepared a selection of dishes from different culinary traditions, including crispy chicken from Asian cuisine, pizza from Italian cuisine, and brownies from American cuisine.",
      "This hands-on learning experience not only helped students improve their culinary skills, but also supported the development of teamwork, cultural awareness, and active participation. At the end of the workshop, students enjoyed tasting the dishes they had prepared together, which made the experience both educational and memorable.",
      "The visit made an important contribution to students’ learning process by combining academic knowledge with practical application in a motivating environment. We would like to express our sincere thanks to Istanbul Rumeli University and the Department of Gastronomy and Culinary Arts for their warm hospitality and valuable contribution to this meaningful activity.",
    ],
    keyHighlights: [
      "Academic lecture on additive-free nutrition and scientific food preservation methods.",
      "World Cuisines Workshop preparing Asian crispy chicken, authentic Italian pizza, and American brownies.",
      "Hands-on professional culinary workstations at Istanbul Rumeli University Gastronomy Department.",
      "Celebrated shared culinary traditions, teamwork, and intercultural hospitality.",
    ],
  },
]

export function getActivityById(id: string): Activity | undefined {
  return activitiesList.find((a) => a.id === id)
}

