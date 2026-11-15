import type { StaticImageData } from "next/image"
import {
  BookOpen,
  CalendarDays,
  ClipboardList,
  CookingPot,
  Images,
  Lightbulb,
  Megaphone,
  Play,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react"

import overviewImg from "@/assets/images/tiles/overview.jpg"
import partnersImg from "@/assets/images/tiles/partners.jpg"
import meetingsImg from "@/assets/images/tiles/meetings.jpg"
import activitiesImg from "@/assets/images/tiles/activities.jpg"
import ebookImg from "@/assets/images/tiles/ebook.jpg"
import competitionsImg from "@/assets/images/tiles/competitions.jpg"
import gardensImg from "@/assets/images/tiles/gardens.jpg"
import cookingImg from "@/assets/images/tiles/cooking.jpg"
import nationalImg from "@/assets/images/tiles/national.jpg"
import galleryImg from "@/assets/images/tiles/gallery.jpg"

export const site = {
  name: "Healthy and Young",
  tagline: "Erasmus+ Project",
  period: "2024 – 2026",
  projectNumber: "2024-1-TR01-KA220-SCH-000244381",
  acronym: "HAY",
  grantTotal: "€120,000.00",
  nationalAgency:
    "TR01 - The Center for European Union Education and Youth Programmes (Turkish National Agency)",
  description:
    "Promoting healthy lifestyles, active citizenship and well-being among young people through cooperation, creativity and European values.",
  erasmusUrl: "https://erasmus-plus.ec.europa.eu/",
} as const

/** Section ids used as in-page anchors. */
export type SectionId =
  | "overview"
  | "partners"
  | "mobilities"
  | "activities"
  | "results"
  | "competitions"
  | "gardens"
  | "cooking"
  | "national"
  | "gallery"
  | "disclaimer"

export type NavItem = {
  label: string
  href: string
  /** Sections that should highlight this item while scrolled into view on the homepage. */
  sections: string[]
  isDropdown?: boolean
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/#top", sections: ["top"] },
  { label: "About", href: "/#overview", sections: ["overview"] },
  {
    label: "Partners",
    href: "/#partners",
    sections: ["partners"],
    isDropdown: true,
  },
  { label: "Mobilities", href: "/#mobilities", sections: ["mobilities"] },
  {
    label: "Activities",
    href: "/#activities",
    sections: ["activities", "competitions", "gardens", "cooking"],
  },
  { label: "Results", href: "/#results", sections: ["results"] },
  { label: "Gallery", href: "/#gallery", sections: ["gallery"] },
  { label: "News", href: "/#national", sections: ["national"] },
  { label: "Contact", href: "/#contact", sections: ["disclaimer", "contact"] },
]

export type KeyPerson = {
  name: string
  role: string
  bio: string
}

export type MobilityHighlight = {
  title: string
  type: string
  dates: string
  venue: string
  focus: string
  programSummary: string[]
}

export type Partner = {
  slug: string
  country: string
  code: "tr" | "it" | "pl" | "hr" | "mk"
  school: string
  navLabel: string
  legalName: string
  role: "Project Coordinator" | "Project Partner"
  oid: string
  city: string
  region: string
  website: string
  type: string
  estDate?: string
  studentCount?: string
  teacherCount?: string
  image?: string
  grantAllocated: string
  summary: string
  about: string[]
  facilities: string[]
  projectResponsibilities: string[]
  hostedMobility?: MobilityHighlight
  keyPersons: KeyPerson[]
  previousExperience: string[]
}

export const partners: Partner[] = [
  {
    slug: "adile-mermerci-anatolian-high-school",
    country: "Türkiye",
    code: "tr",
    school: "Adile Mermerci Anatolian High School",
    navLabel: "Adile Mermerci Anatolian High School",
    legalName: "ADILE MERMERCI ANATOLIAN HIGH SCHOOL",
    role: "Project Coordinator",
    oid: "E10072306",
    city: "Istanbul",
    region: "Zeytinburnu (European side), Istanbul",
    website: "https://www.amal.meb.k12.tr",
    type: "School/Institute/Educational center – General secondary education",
    estDate: "01/09/1990",
    studentCount: "548 students (ages 14–18, 5-year curriculum)",
    teacherCount: "40 teachers",
    grantAllocated: "€28,480.00",
    image: "/images/partners/turkey.jpeg",
    summary:
      "Leading state Anatolian high school in Istanbul and the Project Coordinator for the Healthy and Young Erasmus+ project, managing cross-country cooperation, organic farm-to-fork practices, and youth well-being initiatives.",
    about: [
      "Adile Mermerci Anatolian High School is a prestigious state high school located in the Zeytinburnu district on the European side of Istanbul. As an exam-admitted 'Project School', it belongs to the top 6% academic segment in Türkiye and has a proud tradition of university success.",
      "In 2021, the school introduced a comprehensive 1-year intensive English preparatory program, enabling all students to attain high foreign language fluency and actively participate in international exchanges and conferences.",
      "The institution holds the national 'Nutrition Friendly School' and 'Green School' titles, with active canteen food safety committees and student health monitoring programs. Its alumni include prominent university rectors, TÜBİTAK science award recipients, and industry leaders.",
    ],
    facilities: [
      "Biology & Chemistry laboratory",
      "Dedicated Physics laboratory",
      "Indoor gymnasium with basketball, volleyball, gymnastics and pilates areas",
      "Active school hobby garden for seasonal vegetable cultivation",
      "Music studio and fine arts workshops",
      "Full guidance and psychological counseling service",
    ],
    projectResponsibilities: [
      "Overall project coordination, budget monitoring, and partner communication (WP1)",
      "Hosting the 1st Transnational Project Meeting (TPM) in Istanbul (Dec 2024)",
      "Hosting the LTTA-3 Student Mobility on the EU 'Farm to Fork' Strategy (Oct 2025)",
      "Writing Chapter 2 content on organic agriculture, soil health, and balanced nutrition",
      "Organizing the final Dissemination Conference in Istanbul (Oct 2026)",
    ],
    hostedMobility: {
      title: "LTTA-3 Student Mobility: From Farm to Fork",
      type: "Student Learning & Teaching Mobility (5 days + 2 travel days)",
      dates: "13/10/2025 – 17/10/2025",
      venue: "Istanbul, Türkiye (Adile Mermerci Anatolian High School)",
      focus:
        "The EU Green Deal 'Farm to Fork' strategy, organic farming methods, and seasonal harvest.",
      programSummary: [
        "Day 1: Student research presentations on 'Farm to Fork' & school garden workshop.",
        "Day 2: Keynote lecture by guest academician and cultural heritage study visit.",
        "Day 3: Istanbul University field visit & healthy traditional lunch workshop.",
        "Day 4: Field trip to Narköy Organic Farm in Kocaeli (agricultural workshops & forest trail).",
        "Day 5: Medicinal plant workshop at Zeytinburnu Medicinal Plants Garden (ZTBB).",
      ],
    },
    keyPersons: [
      {
        name: "Özlem Çakır",
        role: "Project Author & Biology Teacher",
        bio: "Biologist and STEAM educator with specialized training in educational web tools and European projects. Experienced in environmental mobilities, including the Be Green Erasmus+ project and the nationally recognized Together for Nature eTwinning project.",
      },
      {
        name: "Mustafa Tunç",
        role: "Project Author & Guidance Specialist",
        bio: "Senior counselor and educational researcher. Former coordinator of the 'Counselling at Schools' Erasmus+ project and contact person for 'Be Green' and 'My Future in Europa'. Author of published works on educational reform and equity in schooling.",
      },
    ],
    previousExperience: [
      "Be Green Erasmus+ KA220 Cooperation Partnership (2021–2023)",
      "Counselling at Schools Erasmus+ KA229 (Project Coordinator, 2018–2020)",
      "My Future in Europa Erasmus+ KA201 (Strategic Partnership)",
      "National eTwinning School Label recipient (2023–2024)",
      "Together for Nature eTwinning project — Top 30 projects nationwide",
    ],
  },
  {
    slug: "patini-liberatore-de-panfilis",
    country: "Italy",
    code: "it",
    school: "IISS “Patini-Liberatore-De Panfilis”",
    navLabel: "IISS “Patini-Liberatore-De Panfilis”",
    legalName: "Istituto d'Istruzione Superiore Patini Liberatore",
    role: "Project Partner",
    oid: "E10096431",
    city: "Castel Di Sangro",
    region: "Abruzzo, Central Italy",
    website: "https://www.patiniliberatore.edu.it/",
    type: "Secondary School – Scientific, Technical & Vocational Education",
    studentCount: "~600 students",
    teacherCount: "~100 teachers",
    grantAllocated: "€23,580.00",
    image: "/images/partners/italy.jpeg",
    summary:
      "Dynamic upper secondary institute in the mountain region of Abruzzo, Italy, featuring a sports-scientific high school, culinary collaborations, and technical-vocational diplomas.",
    about: [
      "Istituto d'Istruzione Superiore Patini Liberatore is located in the scenic mountain town of Castel Di Sangro in the Abruzzo region. The school brings together three educational pathways: a Scientific High School (Liceo Scientifico), a Technical Institute, and a Vocational Institute.",
      "A flagship sector of the scientific track is focused on sport, wellness, and human physiology. Students study biology, exercise science, sports medicine fundamentals, nutrition, and physiotherapy preparation.",
      "The technical and vocational wings offer diplomas in business, finance, tourism, architecture, robotics, and electronics, giving students a balanced blend of academic university preparation and vocational craftsmanship.",
    ],
    facilities: [
      "Modern science and physiology laboratories",
      "Sports facilities, track, and athletic training grounds",
      "Robotics and computer-aided design classrooms",
      "Culinary collaboration partnerships with regional hotel management schools",
    ],
    projectResponsibilities: [
      "Lead partner for project Quality Assurance and Evaluation (WP1 / WP2)",
      "Hosting the LTTA-2 Student Mobility on Healthy Nutrition & Culinary Traditions (May 2025)",
      "Researching food additives, ultra-processed items, and their long-term health risks",
      "Contributing 3 traditional Italian healthy menus for the final project publication",
    ],
    hostedMobility: {
      title: "LTTA-2 Student Mobility: Healthy Nutrition & Culinary Art",
      type: "Student Learning & Teaching Mobility (5 days + 2 travel days)",
      dates: "19/05/2025 – 23/05/2025",
      venue: "Castel Di Sangro, Abruzzo, Italy",
      focus:
        "Nutritional science, balanced diets, traditional Italian culinary techniques, and food additive awareness.",
      programSummary: [
        "Day 1: Student presentations on Healthy Food & dietary habits.",
        "Day 2: Culinary workshop on 'Balanced & Delicious Cooking' at the regional hotel management school.",
        "Day 3: Pelino Museum cultural visit & traditional Italian confectionery heritage.",
        "Day 4: Masterclass visit to the world-renowned Niko Romito Culinary Academy.",
        "Day 5: Balanced weekly nutrition planning workshop, social media campaign, and evaluation survey.",
      ],
    },
    keyPersons: [
      {
        name: "Department of Sports & Natural Sciences",
        role: "Biology, Nutrition & Physical Education Faculty",
        bio: "Specialized team of educators with extensive experience in sports physiology, youth wellness, and preventative nutrition education. Experienced coordinators of the eTwinning project 'Mens sana in corpore sano'.",
      },
      {
        name: "Project Technical Team",
        role: "Graphic Design & Digital Tools Instructors",
        bio: "Technical school faculty and students who support multi-media design, posters, video production, and digital materials dissemination.",
      },
    ],
    previousExperience: [
      "3 Strategic Partnerships for School Education (KA201)",
      "6 Strategic Partnerships for Schools Only (KA219)",
      "7 School Exchange Partnerships (KA229)",
      "4 Cooperation Partnerships (KA220-SCH)",
      "eTwinning project 'Mens sana in corpore sano' (Healthy mind in a healthy body)",
    ],
  },
  {
    slug: "zespol-szkol-zeromskiego",
    country: "Poland",
    code: "pl",
    school: "Zespol Szkol Ogolnoksztalcacych im. Stefana Zeromskiego w Bielsku-Bialej",
    navLabel: "Zespol Szkol Ogolnoksztalcacych im. Stefana Zeromskiego w Bielsku-Bialej",
    legalName:
      "Zespol Szkol Ogolnoksztalcacych im. Stefana Zeromskiego w Bielsku-Bialej",
    role: "Project Partner",
    oid: "E10044897",
    city: "Bielsko-Biała",
    region: "Śląskie (Silesia), Southern Poland",
    website: "https://www.zeromski3lo.edu.pl",
    type: "School/Institute/Educational center – General secondary education",
    studentCount: "750 secondary students (ages 14–19)",
    teacherCount: "80 teachers, psychologists & counselors",
    grantAllocated: "€24,455.00",
    image: "/images/partners/poland.jpeg",
    summary:
      "Renowned Polish secondary school located near Kraków and the Beskidy mountains, celebrated for its high academic standards, active youth initiatives against food waste, and strong environmental awareness.",
    about: [
      "Liceum Ogólnokształcące im. Stefana Żeromskiego is located in Bielsko-Biała in southern Poland, approximately 80 km from Kraków and 30 km from the Czech border. The school is renowned for rigorous academic preparation, with high acceptance rates at top universities.",
      "The secondary curriculum features specialized profiles in mathematics-physics-IT, biology-chemistry, and humanities-social sciences. The school employs 80 teachers, full-time psychologists, guidance counselors, and health staff.",
      "The school is widely recognized for concrete civic initiatives: it operates a community sharing refrigerator to eliminate canteen food waste, holds healthy breakfast fairs, and collaborates with regional agricultural cooperatives and food banks.",
    ],
    facilities: [
      "Advanced biology and chemistry laboratories",
      "Computer labs and multi-media learning suites",
      "Community food-sharing hub and sustainable kitchen station",
      "School library with extensive academic research archives",
      "Multi-purpose indoor sports hall and fitness studios",
    ],
    projectResponsibilities: [
      "Lead partner for the Planning of International Mobilities (WP1 / WP4)",
      "Organizing the project-wide Logo Selection Competition and survey",
      "Hosting the LTTA-5 Student Mobility on Food Waste Prevention (Sept 2026)",
      "Conducting research on fast-food habits, eating disorders, and global hunger",
      "Providing English language revision and editorial review for project publications",
    ],
    hostedMobility: {
      title: "LTTA-5 Student Mobility: Food Waste Prevention",
      type: "Student Learning & Teaching Mobility (5 days + 2 travel days)",
      dates: "21/09/2026 – 25/09/2026",
      venue: "Bielsko-Biała & Kraków, Poland",
      focus:
        "Innovative food preservation, circular food economics, waste reduction technologies, and community solidarity.",
      programSummary: [
        "Day 1: Study visit to BOSCO catering facility & leftover management culinary workshop.",
        "Day 2: Interactive workshop with REBREAD (innovative NGO upcycling stale bakery products).",
        "Day 3: Lectures and practical classes at the Agricultural University of Kraków on food waste processing.",
        "Day 4: Field excursion to the municipal waste management and composting plant in Bielsko-Biała.",
        "Day 5: Collaborative school workshop creating the 'Stop Food Waste' digital youth e-magazine.",
      ],
    },
    keyPersons: [
      {
        name: "Science & Ecology Department",
        role: "Biology, Chemistry & Geography Faculty",
        bio: "Experienced educators who integrate sustainable agriculture and adolescent dietary health into cross-curricular lesson plans, partnering with Polish food charity networks.",
      },
      {
        name: "Languages & Humanities Faculty",
        role: "English Language & International Projects Team",
        bio: "Specialists in European educational exchange, academic writing, and bilingual text editing who oversee project dissemination in English.",
      },
    ],
    previousExperience: [
      "Strategic Partnerships for School Education (KA201)",
      "School Exchange Partnerships (KA229)",
      "Active participant in regional Polish eco-farming initiatives and food distribution campaigns",
      "Over a decade of international student exchange programs",
    ],
  },
  {
    slug: "ars-publika",
    country: "North Macedonia",
    code: "mk",
    school: "ARS PUBLICA",
    navLabel: "ARS PUBLICA",
    legalName: "Association for Sustainable Development ARS PUBLICA",
    role: "Project Partner",
    oid: "E10243348",
    city: "Skopje",
    region: "Skopski Region, The Republic of North Macedonia",
    website: "https://www.arspublika.mk/",
    type: "Non-Governmental Organization / Sustainable Development Association",
    estDate: "11/11/2019",
    grantAllocated: "€20,125.00",
    image: "/images/partners/ars-publika.png",
    summary:
      "Progressive non-governmental association based in Skopje, focusing on sustainable youth education, circular economy, biodiversity preservation, and digital project outcomes.",
    about: [
      "Association for Sustainable Development ARS PUBLICA was founded on November 11, 2019, in Skopje, North Macedonia. The organization brings together educators, biologists, environmentalists, and youth workers dedicated to civic empowerment and ecological innovation.",
      "ARS PUBLICA uses interactive two-sided learning methodologies, role-play workshops, and critical thinking debates (such as their signature 'What would I do if instead of GREEN we have GREY?' simulation) to engage young people in environmental responsibility.",
      "The association is very active in national ecological campaigns, including the annual March 12 'Day of the Tree' reforestation drive, and has successfully coordinated Erasmus+ youth projects across Southeastern Europe.",
    ],
    facilities: [
      "Youth innovation hub and digital workshop space in Skopje",
      "Network of eco-educational field centers across North Macedonia (including Berovo)",
      "Web design, desktop publishing, and digital media production lab",
    ],
    projectResponsibilities: [
      "Technical leadership for the official project website and digital portal",
      "Editorial compilation and digital layout of the 3-part Healthy and Young e-Book",
      "Hosting the LTTA-1 Teacher Training Mobility on Healthy Foods & Living (March 2025)",
      "Hosting the Final Transnational Planning Meeting in North Macedonia (Oct 2026)",
      "Leading social media campaigns, educational video production, and dissemination",
    ],
    hostedMobility: {
      title: "LTTA-1 Teacher Training: Healthy Foods, Healthy Living",
      type: "Teacher Training Mobility (5 days + 2 travel days)",
      dates: "10/03/2025 – 14/03/2025",
      venue: "Skopje & Berovo, North Macedonia",
      focus:
        "Curriculum design for healthy living, source scanning, research methodologies, and collaborative e-book drafting.",
      programSummary: [
        "Day 1: Pedagogical frameworks on healthy eating as a sustainable lifestyle.",
        "Day 2: Study visit to the national healthy life center and wellness workshops.",
        "Day 3: Interactive curriculum drafting: designing the 12 lesson plans for the project guide.",
        "Day 4: Field visit to Old Town Skopje — culinary heritage and plant-based Balkan recipes.",
        "Day 5: Digital publication training, editorial review standards, and brochure preparation.",
      ],
    },
    keyPersons: [
      {
        name: "Mrs. Ajshe Bekirovska",
        role: "M.Sc. in Special Education & Project Manager",
        bio: "Specialist in inclusive pedagogy and multicultural youth work. Multilingual communicator (Macedonian, Albanian, Turkish, English) with extensive management experience in Erasmus+ autism and youth volunteer programs across Turkey, Croatia, and the Balkans.",
      },
      {
        name: "Mr. Ramadan Sali",
        role: "B.Sc. in Biology & Environmental Educator",
        bio: "Senior biology instructor at 'Zef Lush Marku' with over a decade of NGO leadership. Contributor to the Regional Ecological Center's 'Green Pack' educational program, specialized in biodiversity and youth environmental training.",
      },
    ],
    previousExperience: [
      "Coordinator of Erasmus+ 'Next Green Generation' (2021-1-MK01-KA152-YOU-000006856 in Berovo)",
      "Partner in 'Volunteerism in service of AUTISM — Volume 2'",
      "Active participant in Erasmus+ KA1 and KA2 adult & youth educational initiatives",
      "National coordinator for youth circular economy training seminars",
    ],
  },
  {
    slug: "gimnazija-metkovic",
    country: "Croatia",
    code: "hr",
    school: "Gimnazija Metkovic",
    navLabel: "Gimnazija Metkovic",
    legalName: "Gimnazija Metkovic",
    role: "Project Partner",
    oid: "E10146522",
    city: "Metković",
    region: "Dubrovačko-neretvanska županija, Southern Croatia",
    website: "https://gimnazija-metkovic.skole.hr/",
    type: "School/Institute/Educational center – General secondary education (Gymnasium)",
    studentCount: "330 students (ages 14–19)",
    teacherCount: "50 teachers",
    grantAllocated: "€23,360.00",
    image: "/images/partners/croatia.jpeg",
    summary:
      "Prestigious state gymnasium situated in the fertile Neretva agricultural valley near Dubrovnik, distinguished by high STEM performance, Erasmus accreditation, and active environmental research.",
    about: [
      "Gimnazija Metković is a leading secondary school located in the town of Metković, in Croatia's southern Dubrovnik-Neretva county. It offers three rigorous academic streams: language-oriented, STEM-oriented, and comprehensive gymnasium.",
      "The school enjoys a virtually zero dropout rate, with students consistently ranking near the top of Croatian national matriculation exams and advancing to universities across Europe.",
      "Situated in the fertile citrus and agricultural valley of the Neretva Delta near the Adriatic Sea, the school has a strong focus on sustainable agriculture, local biodiversity, and organic farming. It holds the official Erasmus Accreditation, the eTwinning School Label, and EPAS certification.",
    ],
    facilities: [
      "State-of-the-art STEM workspace with 3D printers and smartboards",
      "Dedicated robotics workshop and computing suites",
      "Fully equipped biology, chemistry, and physics laboratories",
      "Well-stocked library, reading rooms, and indoor/outdoor athletics arenas",
      "Proximity to the Neretva Delta agricultural research station and nature reserves",
    ],
    projectResponsibilities: [
      "Lead partner for Project Dissemination and Social Media management (WP1 / WP3)",
      "Hosting the LTTA-4 Student Mobility on Organic Agriculture & Delta Biodiversity (May 2026)",
      "Coordinating the Virtual Mid-term TPM Planning Meeting (Sept 2025)",
      "Organizing the International Student Competition on Creative Food Waste Solutions (2026)",
      "Investigating the Farm to Fork Strategy in Mediterranean agriculture",
    ],
    hostedMobility: {
      title: "LTTA-4 Student Mobility: Organic Agriculture & Delta Biodiversity",
      type: "Student Learning & Teaching Mobility (5 days + 2 travel days)",
      dates: "18/05/2026 – 22/05/2026",
      venue: "Metković & Dubrovnik, Croatia",
      focus:
        "Organic farming in delta ecosystems, pesticide alternatives, natural composting, and Mediterranean sustainable agriculture.",
      programSummary: [
        "Day 1: Student presentations on 'Organic Farming in My Region' & botanical workshops.",
        "Day 2: Field research in the Neretva Delta nature reserves and citrus orchards.",
        "Day 3: Scientific conference & workshop on the hazards of agricultural pesticides.",
        "Day 4: Eco-sustainability field visit to Dubrovnik (UNESCO World Heritage Site), Trsteno Arboretum, and Ston historic salt pans.",
        "Day 5: Practical masterclass on creating organic fertilizers and natural soil enhancements.",
      ],
    },
    keyPersons: [
      {
        name: "Science Didactics Lead",
        role: "Chemistry & Biology Department Head (M.A. in Science Didactics)",
        bio: "Senior science educator with vast experience across Erasmus+, eTwinning, and regional STEM initiatives. Coordinates an interdisciplinary team bridging biology, geography, and humanities.",
      },
      {
        name: "Interdisciplinary Project Team",
        role: "Geography, Languages & Social Sciences Teachers",
        bio: "Team of educators holding leadership roles in regional teachers' associations, specialized in field research, multilingual communication, and digital learning.",
      },
    ],
    previousExperience: [
      "Erasmus+ Accredited Institution in School Education",
      "Official eTwinning School Label holder",
      "European Parliament Ambassador School (EPAS)",
      "PASCH German language network partner with the Goethe-Institut",
      "Over 9 years of active participation in European Erasmus partnerships",
    ],
  },
]

export type Tile = {
  title: string
  description: string
  href: string
  image: StaticImageData
  icon: LucideIcon
}

export const tiles: Tile[] = [
  {
    title: "Project Overview",
    description: "Goals, theme and expected results of our Erasmus+ project.",
    href: "/#overview",
    image: overviewImg,
    icon: ClipboardList,
  },
  {
    title: "Project Partners",
    description: "Meet our schools and partner countries.",
    href: "/#partners",
    image: partnersImg,
    icon: Users,
  },
  {
    title: "LTTA & TPM Meetings",
    description: "Transnational meetings and learning activities.",
    href: "/#mobilities",
    image: meetingsImg,
    icon: CalendarDays,
  },
  {
    title: "Activities",
    description: "All project activities, initiatives and events.",
    href: "/#activities",
    image: activitiesImg,
    icon: Lightbulb,
  },
  {
    title: "E-Book",
    description: "Our educational e-book on healthy living.",
    href: "/#results",
    image: ebookImg,
    icon: BookOpen,
  },
  {
    title: "Competition Videos",
    description: "Creative videos by our students on healthy living.",
    href: "/#competitions",
    image: competitionsImg,
    icon: Play,
  },
  {
    title: "School Gardens",
    description: "Growing a greener and healthier future.",
    href: "/#gardens",
    image: gardensImg,
    icon: Sprout,
  },
  {
    title: "Cooking Workshops",
    description: "Healthy recipes for a better life.",
    href: "/#cooking",
    image: cookingImg,
    icon: CookingPot,
  },
  {
    title: "National Activities",
    description: "Local events in partner countries.",
    href: "/#national",
    image: nationalImg,
    icon: Megaphone,
  },
  {
    title: "Gallery",
    description: "Photos from our project journey.",
    href: "/#gallery",
    image: galleryImg,
    icon: Images,
  },
]

export type DetailSection = {
  id: SectionId
  title: string
  description: string
}

export const detailSections: DetailSection[] = [
  {
    id: "overview",
    title: "Project Overview",
    description:
      "An introduction to Healthy and Young, its educational goals, target groups and two-year cooperation.",
  },
  {
    id: "partners",
    title: "Our Project Partners",
    description:
      "Partner school and organisation profiles for Türkiye, Italy, Poland, Croatia and North Macedonia.",
  },
  {
    id: "mobilities",
    title: "LTTA & TPM Meetings",
    description:
      "Meeting programmes, reports, workshop outcomes, photographs and presentations arranged chronologically.",
  },
  {
    id: "activities",
    title: "Project Activities",
    description:
      "An overview of learning initiatives, student participation and events in all partner countries.",
  },
  {
    id: "results",
    title: "Project E-Book & Results",
    description:
      "A dedicated space for the final e-book, educational materials and two-year PowerPoint presentation.",
  },
  {
    id: "competitions",
    title: "Competition Videos",
    description:
      "Watch and discover student-created competition videos and highlights.",
  },
  {
    id: "gardens",
    title: "School Gardens",
    description:
      "Photographs and reports from seasonal planting, organic agriculture and green school spaces.",
  },
  {
    id: "cooking",
    title: "Cooking Workshops",
    description:
      "Photographs, recipes and learning outcomes from healthy cooking workshops.",
  },
  {
    id: "national",
    title: "National Activities",
    description:
      "Activities carried out locally by the participating schools and organisations.",
  },
  {
    id: "gallery",
    title: "Project Gallery",
    description:
      "A visual archive of photographs and videos from our two-year journey.",
  },
]

export const placeholderNotice =
  "Project-specific photographs, reports, links and downloadable files will be added here."

export const legal = [
  {
    label: "Medical disclaimer",
    text: "All health and nutrition content is provided for educational purposes only and is not a substitute for professional medical advice.",
  },
  {
    label: "Copyright",
    text: "Original project content remains subject to its authors’ rights and any licence attached to that resource. Educational resources created with Erasmus+ funding are intended for open access under their indicated licences. Third-party materials and identifiable photographs require appropriate rights and permissions.",
  },
  {
    label: "EU funding",
    text: "Funded by the European Union. Views and opinions expressed are those of the author(s) only and do not necessarily reflect those of the European Union or the granting authority. Neither the European Union nor the granting authority can be held responsible for them.",
  },
] as const
