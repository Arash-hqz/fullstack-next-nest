import hero from "../../public/image/hero.jpg"
import install from "../../public/image/instalition.jpg";
import design from "../../public/image/tarh.png";
import maintenance from "../../public/image/maintenance.png";
export const IMAGES = {
  hero: hero,
  logo: "/images/logo.png",
  services: {
    design: design,
    install: install,
    maintenance: maintenance,
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
