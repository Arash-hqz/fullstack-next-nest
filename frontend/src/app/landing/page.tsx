import { Hero } from "@/components/landing/Hero"
import { Services } from "@/components/landing/Services"
import  PricePanel  from "@/components/landing/PricePanel"
import { Projects } from "@/components/landing/Project"
import { Articles } from "@/components/landing/Articles"
import { FinalCTA } from "@/components/landing/finalCTA"
import Prouduct from "@/components/landing/Prouduct"

export default function LandingPage() {
  return (
    <>
      <Hero />
      <PricePanel />
      <Services />
      <Prouduct />
      {/* <Projects /> */}
      <Articles />
      <FinalCTA />
    </>
  )

}   