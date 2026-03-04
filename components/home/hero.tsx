import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Users,
  BarChart3,
  Calendar,
  MessageSquare,
} from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-primary)/0.05,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl">
            The AI-powered command centre for youth sports clubs.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Run registration, evaluations, facilities, scheduling, and parent
            communication from one connected platform. Jock AI is built in,
            using your live club data.
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

        {/* Dashboard Preview */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-xl border border-border bg-card p-4 shadow-lg md:p-6">
            <div className="grid gap-4 md:grid-cols-3">
              {/* KPI Cards */}
              <div className="flex flex-col gap-2 rounded-lg border border-border bg-background p-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-muted-foreground">
                    Registered Players
                  </span>
                </div>
                <span className="text-2xl font-bold text-foreground">248</span>
                <span className="text-xs text-primary">+12% vs last season</span>
              </div>
              <div className="flex flex-col gap-2 rounded-lg border border-border bg-background p-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-muted-foreground">
                    Active Teams
                  </span>
                </div>
                <span className="text-2xl font-bold text-foreground">12</span>
                <span className="text-xs text-muted-foreground">
                  U8 through U18
                </span>
              </div>
              <div className="flex flex-col gap-2 rounded-lg border border-border bg-background p-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-muted-foreground">
                    Upcoming Events
                  </span>
                </div>
                <span className="text-2xl font-bold text-foreground">8</span>
                <span className="text-xs text-muted-foreground">
                  This week
                </span>
              </div>
            </div>

            {/* Team List + Jock AI Bubble */}
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="col-span-2 rounded-lg border border-border bg-background p-4">
                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  Recent Teams
                </h3>
                <div className="flex flex-col gap-2">
                  {["U12 Boys Premier", "U14 Girls Select", "U10 Co-Ed Dev"].map(
                    (team) => (
                      <div
                        key={team}
                        className="flex items-center justify-between rounded-md border border-border/60 px-3 py-2"
                      >
                        <span className="text-sm text-foreground">{team}</span>
                        <span className="text-xs text-muted-foreground">
                          16 players
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Jock AI Mini Chat */}
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold text-primary">
                    Jock AI
                  </span>
                </div>
                <div className="rounded-md bg-card p-2">
                  <p className="text-xs text-muted-foreground">
                    {"\""}3 evaluations pending review. U12 Boys have 2 open roster
                    spots.{"\""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
