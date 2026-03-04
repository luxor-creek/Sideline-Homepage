import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Check,
  DollarSign,
  Zap,
  Box,
  HeadphonesIcon,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing - Sideline",
  description:
    "Lower operating costs. Fewer disconnected tools. A platform your club can run confidently year after year.",
}

const benefits = [
  {
    icon: DollarSign,
    text: "No per-team software fees",
  },
  {
    icon: Zap,
    text: "Fast setup with minimal training required",
  },
  {
    icon: Box,
    text: "Core features built in, not sold as expensive add-ons",
  },
  {
    icon: HeadphonesIcon,
    text: "Reliable, responsive support when you need it",
  },
  {
    icon: Users,
    text: "Designed to reduce administrative workload, not shift it to volunteers",
  },
]

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary/40 py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-primary)/0.06,transparent_70%)]" />
          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Pricing
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Lower operating costs. Fewer disconnected tools.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A platform your club can run confidently year after year.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* Left column - benefits list */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Everything your club needs. Nothing it doesn&apos;t.
              </h2>
              <ul className="mt-10 flex flex-col gap-6">
                {benefits.map((benefit) => (
                  <li key={benefit.text} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-base leading-relaxed text-foreground">
                      {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column - differentiator card */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
                One platform. No surprises.
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Unlike traditional youth sports club management software that
                layers on add-ons and complex pricing tiers, Sideline connects
                registration, evaluations, facilities, communication, and AI
                intelligence in one unified system built specifically for clubs.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/getstarted" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Get Started Risk-Free
                  </Button>
                </Link>
                <Link href="/demos" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full">
                    Watch Demos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
