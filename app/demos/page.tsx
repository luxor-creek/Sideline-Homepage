import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Watch Demos - Sideline",
  description:
    "See Sideline in action. Watch demos of registration, evaluations, scheduling, payments, and Jock AI.",
}

export default function DemosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-foreground md:text-5xl">
              Watch Demos
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Content coming soon.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
