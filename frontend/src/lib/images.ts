import hero from "../../public/image/hero.jpg"
export const IMAGES = {
  hero: hero,
  logo: "/images/logo.png",
  services: {
    design: "/images/services/design.jpg",
    install: "/images/services/install.jpg",
    maintenance: "/images/services/maintenance.jpg",
  },
  projects: {
    project1: "/images/projects/project1.jpg",
    project2: "/images/projects/project2.jpg",
    project3: "/images/projects/project3.jpg",
  },
  articles: {
    article1: "/images/articles/article1.jpg",
    article2: "/images/articles/article2.jpg",
  },
} as const

// حالا IMAGES.hero همیشه یک string ثابت خواهد بود ✅
export type ImageKeys = keyof typeof IMAGES
