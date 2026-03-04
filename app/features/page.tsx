import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeaturesHero } from "@/components/features/features-hero"
import { FeatureBlocks } from "@/components/features/feature-blocks"
import { JockAIFeature } from "@/components/features/jock-ai-feature"
import { FinalCTA } from "@/components/home/final-cta"

export const metadata: Metadata = {
  title: "Features - Sideline",
  description:
    "Explore everything Sideline can do. From registration and evaluations to Jock AI intelligence.",
}

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <FeaturesHero />
        <FeatureBlocks />
        <JockAIFeature />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
