import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 px-6 py-16 text-center md:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-primary)/0.08,transparent_70%)]" />
          <div className="relative">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground text-balance md:text-4xl">
              One Platform. AI-Powered. Built for Youth Sports.
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Join clubs that have unified their operations with Sideline and
              Jock AI. Get started risk-free today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
            <p className="mt-3 text-sm text-muted-foreground">
              No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
