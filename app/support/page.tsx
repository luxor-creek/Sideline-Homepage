import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Support - Sideline",
  description: "Get help with Sideline. Reach our support team for assistance with your youth sports club management platform.",
}

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Support
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Content coming soon.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
