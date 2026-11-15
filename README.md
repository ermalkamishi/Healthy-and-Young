# Healthy and Young (Erasmus+ Project 2024–2026)

> **Official Web Platform for Erasmus+ KA220-SCH Cooperation Partnership in School Education**  
> **Project Reference:** `2024-1-TR01-KA220-SCH-000244381`  
> **National Agency:** The Center for European Union Education and Youth Programmes (Turkish National Agency)

---

## 📌 About the Project

**Healthy and Young** is a 24-month Erasmus+ Cooperation Partnership connecting secondary school students, teachers, and youth across five European countries. The project promotes balanced nutrition, active citizenship, sustainable agriculture, zero food waste, and holistic adolescent well-being.

### Consortium Partners

| Country | Institution | Role |
| :--- | :--- | :--- |
| 🇹🇷 **Türkiye** | **Adile Mermerci Anadolu Lisesi** (Istanbul) | Project Coordinator |
| 🇮🇹 **Italy** | **Istituto d'Istruzione Superiore Patini-Liberatore** (Castel di Sangro) | Partner Institution |
| 🇵🇱 **Poland** | **Zespół Szkół Ogólnokształcących im. S. Żeromskiego** (Bielsko-Biała) | Partner Institution |
| 🇭🇷 **Croatia** | **Gimnazija Metković** (Metković) | Partner Institution |
| 🇲🇰 **North Macedonia** | **Association for Sustainable Development ARS PUBLIKA** (Skopje) | Partner Organisation |

---

## 🌐 Platform Architecture & Modules

The platform is built as a modern, high-performance web application featuring:

- **Home & Overview (`/` & `/about`):** Objectives, European dimensions, core work packages, and consortium metrics.
- **Partner Profiles (`/partners` & `/partners/[slug]`):** Dedicated institution profiles with institutional demographics, facilities, key staff, and direct portal links.
- **Mobilities & Transnational Meetings (`/mobilities` & `/mobilities/[slug]`):** Comprehensive documentation for all 5 LTTAs (Learning, Teaching, Training Activities) and 3 TPM meetings, including agendas, participant counts, and photo reports.
- **Project Activities (`/activities`):**
  - **School Gardens (`/activities/school-gardens`):** Organic hobby gardens and school greenhouse cultivation.
  - **Expert Seminars (`/activities/expert-seminars`):** Health literacy symposia led by registered clinical dietitians and nutritionists.
  - **Cooking Workshops (`/activities/cooking-workshops`):** Vocational gastronomy and healthy culinary masterclasses.
- **Results & Publications (`/results`):** Open-access student brochures (PDF) and the upcoming comprehensive educational E-Book.
- **Media Gallery (`/gallery`):** 180+ high-resolution photographic archives organized by activity category with an interactive full-screen lightbox viewer.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **UI & Styling:** [React](https://react.dev/) 19, [Tailwind CSS](https://tailwindcss.com/) v4, [Lucide React](https://lucide.dev/)
- **Components:** [Radix UI](https://www.radix-ui.com/) primitives & [Shadcn UI](https://ui.shadcn.com/)
- **Language:** TypeScript 5

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/healthyandyoung.git
   cd healthyandyoung
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 🇪🇺 Disclaimer

Co-funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the Turkish National Agency (TR01). Neither the European Union nor the granting authority can be held responsible for them.
