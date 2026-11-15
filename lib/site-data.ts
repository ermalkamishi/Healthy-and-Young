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
  href: `#${string}`
  /** Sections that should highlight this item while scrolled into view. */
  sections: string[]
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#top", sections: ["top"] },
  { label: "About", href: "#overview", sections: ["overview"] },
  { label: "Partners", href: "#partners", sections: ["partners", "mobilities"] },

  { label: "Mobilities", href: "#mobilities", sections: ["mobilities"] },
  {
    label: "Activities",
    href: "#activities",
    sections: ["activities", "competitions", "gardens", "cooking"],
  },
  { label: "Results", href: "#results", sections: ["results"] },
  { label: "Gallery", href: "#gallery", sections: ["gallery"] },
  { label: "News", href: "#national", sections: ["national"] },
  { label: "Contact", href: "#contact", sections: ["disclaimer", "contact"] },
]

export type Partner = {
  country: string
  code: "tr" | "it" | "pl" | "hr" | "mk"
  school: string
  role: "Project Coordinator" | "Project Partner"
}

export const partners: Partner[] = [
  {
    country: "Türkiye",
    code: "tr",
    school: "Adile Mermerci Anatolian High School",
    role: "Project Coordinator",
  },
  {
    country: "Italy",
    code: "it",
    school: "IISS “Patini-Liberatore-De Panfilis”",
    role: "Project Partner",
  },
  {
    country: "Poland",
    code: "pl",
    school: "Zespół Szkół Ogólnokształcących im. Stefana Żeromskiego w Bielsku-Białej",
    role: "Project Partner",
  },
  {
    country: "Croatia",
    code: "hr",
    school: "Gimnazija Metković",
    role: "Project Partner",
  },
  {
    country: "North Macedonia",
    code: "mk",
    school: "Association for Sustainable Development ARS PUBLICA",
    role: "Project Partner",
  },
]

export type Tile = {
  title: string
  description: string
  href: `#${SectionId}`
  image: StaticImageData
  icon: LucideIcon
}

export const tiles: Tile[] = [
  {
    title: "Project Overview",
    description: "Goals, theme and expected results of our Erasmus+ project.",
    href: "#overview",
    image: overviewImg,
    icon: ClipboardList,
  },
  {
    title: "Project Partners",
    description: "Meet our schools and partner countries.",
    href: "#partners",
    image: partnersImg,
    icon: Users,
  },
  {
    title: "LTTA & TPM Meetings",
    description: "Transnational meetings and learning activities.",
    href: "#mobilities",
    image: meetingsImg,
    icon: CalendarDays,
  },
  {
    title: "Activities",
    description: "All project activities, initiatives and events.",
    href: "#activities",
    image: activitiesImg,
    icon: Lightbulb,
  },
  {
    title: "E-Book",
    description: "Our educational e-book on healthy living.",
    href: "#results",
    image: ebookImg,
    icon: BookOpen,
  },
  {
    title: "Competition Videos",
    description: "Creative videos by our students on healthy living.",
    href: "#competitions",
    image: competitionsImg,
    icon: Play,
  },
  {
    title: "School Gardens",
    description: "Growing a greener and healthier future.",
    href: "#gardens",
    image: gardensImg,
    icon: Sprout,
  },
  {
    title: "Cooking Workshops",
    description: "Healthy recipes for a better life.",
    href: "#cooking",
    image: cookingImg,
    icon: CookingPot,
  },
  {
    title: "National Activities",
    description: "Local events in partner countries.",
    href: "#national",
    image: nationalImg,
    icon: Megaphone,
  },
  {
    title: "Gallery",
    description: "Photos from our project journey.",
    href: "#gallery",
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

