import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Get Started Risk-Free - Sideline",
  description:
    "Start managing your youth sports club with Sideline. No credit card required.",
}

export default function GetStartedPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-foreground md:text-5xl">
              Get Started Risk-Free
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
