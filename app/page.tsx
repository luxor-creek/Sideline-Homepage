import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { Problem } from "@/components/home/problem"
import { Pillars } from "@/components/home/pillars"
import { JockAISpotlight } from "@/components/home/jock-ai-spotlight"
import { SocialProof } from "@/components/home/social-proof"
import { GrowRevenue } from "@/components/home/grow-revenue"
import { Security } from "@/components/home/security"
import { FinalCTA } from "@/components/home/final-cta"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Pillars />
        <JockAISpotlight />
        <SocialProof />
        <GrowRevenue />
        <Security />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
