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

