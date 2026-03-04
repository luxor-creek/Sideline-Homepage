import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About - Sideline",
  description: "Learn about the team and mission behind Sideline.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            About Sideline
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Content coming soon.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
