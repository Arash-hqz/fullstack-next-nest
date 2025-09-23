import { Hero } from "@/components/shared/Hero"
import { Services } from "@/components/landing/Services"
import { PricePanel } from "@/components/landing/PricePanel"
import { Projects } from "@/components/landing/Projects"
import { Articles } from "@/components/landing/Articles"
import { FinalCTA } from "@/components/landing/finalCTA"

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Services />
      <PricePanel />
      <Projects />
      <Articles />
      <FinalCTA />
    </>
  )

}   