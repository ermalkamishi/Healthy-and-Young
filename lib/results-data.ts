export interface EbookChapter {
  number: number
  title: string
  pages: string
  startPage: number
  description: string
  colorClass: string
}

export interface EbookItem {
  title: string
  subtitle: string
  filename: string
  pdfUrl: string
  coverUrl: string
  producer: string
  description: string
  chapters: EbookChapter[]
}

export const ebookData: EbookItem = {
  title: "Healthy and Young — Official Project E-Book",
  subtitle:
    "Healthy nutrition, organic farming and food waste with traditional recipes and menus from our partner countries",
  filename: "HEALTHY_AND_YOUNG_E-book.pdf",
  pdfUrl: "/ebook/HEALTHY_AND_YOUNG_E-book.pdf",
  coverUrl: "/images/ebook-cover.jpg",
  producer: "ARS PUBLIKA, North Macedonia",
  description:
    "The flagship 109-page educational publication of the Erasmus+ KA220-SCH Healthy and Young project, bringing together teacher-authored lessons, student research, and traditional healthy recipes from Türkiye, Poland, Croatia, Italy, and North Macedonia.",
  chapters: [
    {
      number: 1,
      title: "Part 1 – Healthy Nutrition",
      pages: "pp. 5–40",
      startPage: 5,
      description:
        "Diseases caused by unhealthy nutrition, fast food impact, balanced diets, food additives & nutrition labels.",
      colorClass: "bg-blue-100 text-blue-800",
    },
    {
      number: 2,
      title: "Part 2 – From Farm to Fork & Organic Farming",
      pages: "pp. 41–67",
      startPage: 41,
      description:
        "Organic agriculture, EU Green Deal, the Farm to Fork strategy, and genetically modified foods.",
      colorClass: "bg-emerald-100 text-emerald-800",
    },
    {
      number: 3,
      title: "Part 3 – Food Waste",
      pages: "pp. 68–87",
      startPage: 68,
      description:
        "Preventing food waste, fighting hunger, global causes of food waste, and practical home prevention.",
      colorClass: "bg-amber-100 text-amber-800",
    },
    {
      number: 4,
      title: "Part 4 – Recipes and Menus",
      pages: "pp. 88–107",
      startPage: 88,
      description:
        "Traditional healthy menus and authentic recipes from Türkiye, Poland, Croatia, and Italy.",
      colorClass: "bg-rose-100 text-rose-800",
    },
  ],
}

export interface BrochureItem {
  id: string
  title: string
  filename: string
  pdfUrl: string
  thumbnailUrl: string
  pages: number
  fileSize: string
  description: string
  topics: string[]
}

export const brochuresList: BrochureItem[] = [
  {
    id: "brochure-cro-balanced-diet",
    title: "Brochure_CRO_BalancedDiet",
    filename: "Brochure_CRO_BalancedDiet.pdf",
    pdfUrl: "/brochures/Brochure_CRO_BalancedDiet.pdf",
    thumbnailUrl: "/images/brochures/Brochure_CRO_BalancedDiet.jpg",
    pages: 2,
    fileSize: "2.86 MB",
    description:
      "Comprehensive educational guide on balanced daily nutrition, macro & micronutrient breakdown, physical activity, and student health habits created by Gimnazija Metković.",
    topics: ["Balanced Diet", "Nutrition", "Healthy Lifestyle", "Daily Habits"],
  },
  {
    id: "food-additives",
    title: "Food additives",
    filename: "Food additives.pdf",
    pdfUrl: "/brochures/Food additives.pdf",
    thumbnailUrl: "/images/brochures/Food additives.jpg",
    pages: 2,
    fileSize: "4.75 MB",
    description:
      "Educational analysis of natural vs synthetic food additives, preservatives, E-numbers, and their physiological impacts on young people.",
    topics: ["Food Science", "Additives", "Preservatives", "Label Literacy"],
  },
  {
    id: "harmful-additives",
    title: "Harmful additives",
    filename: "Harmful additives.pdf",
    pdfUrl: "/brochures/Harmful additives.pdf",
    thumbnailUrl: "/images/brochures/Harmful additives.jpg",
    pages: 2,
    fileSize: "0.72 MB",
    description:
      "Essential guide to identifying and avoiding high-risk artificial sweeteners, chemical preservatives, flavor enhancers, and harmful ultra-processed ingredients.",
    topics: ["Health Risks", "Hidden Sugars", "Ultra-Processed Foods", "Safety"],
  },
  {
    id: "the-perfect-farm",
    title: "The perfect farm",
    filename: "The perfect farm.pdf",
    pdfUrl: "/brochures/The perfect farm.pdf",
    thumbnailUrl: "/images/brochures/The perfect farm.jpg",
    pages: 1,
    fileSize: "2.56 MB",
    description:
      "Visual roadmap to sustainable agro-ecology, organic farming methods, soil health, and chemical-free crop rotation from farm to table.",
    topics: ["Organic Farming", "Agro-Ecology", "Sustainable Agriculture", "Farm to Fork"],
  },
  {
    id: "what-is-a-food-additive",
    title: "What is a food additive",
    filename: "What is a food additive.pdf",
    pdfUrl: "/brochures/What is a food additive.pdf",
    thumbnailUrl: "/images/brochures/What is a food additive.jpg",
    pages: 1,
    fileSize: "6.20 MB",
    description:
      "Fundamental educational brochure explaining the classification, legal regulations, and roles of antioxidants, colorants, and emulsifiers in commercial foods.",
    topics: ["Food Chemistry", "E-Numbers", "Consumer Awareness", "Food Processing"],
  },
]

