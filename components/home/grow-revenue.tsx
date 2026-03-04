import {
  DollarSign,
  Eye,
  TrendingUp,
  GraduationCap,
  UserCheck,
  Send,
  Handshake,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function GrowRevenue() {
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            Grow Club Revenue. Open Real Player Pathways.
          </Badge>
        </div>

        {/* Sponsor Management */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl text-balance">
              Turn Sponsors Into a Sustainable Revenue Stream.
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Sideline does more than display sponsor logos. Our sponsor
              management system places brand content directly inside the parent
              dashboard, where engagement is highest. Clubs share in the revenue
              generated through sponsor placements, creating a new funding
              channel tied directly to participation and visibility.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                {
                  icon: Eye,
                  text: "Sponsors get measurable exposure.",
                },
                {
                  icon: DollarSign,
                  text: "Clubs unlock recurring revenue.",
                },
                {
                  icon: TrendingUp,
                  text: "Families benefit from stronger programs.",
                },
              ].map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 text-foreground"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-border bg-muted/30 p-8 md:p-12">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
              <DollarSign className="h-10 w-10 text-primary" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 border-t border-border md:my-28" />

        {/* Pathway to Pro */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex items-center justify-center rounded-xl border border-border bg-muted/30 p-8 md:order-2 md:p-12">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
              <GraduationCap className="h-10 w-10 text-primary" />
            </div>
          </div>
          <div className="md:order-1">
            <Badge variant="secondary" className="mb-3">
              Pathway to Pro
            </Badge>
            <h3 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl text-balance">
              Built-In Recruitment Tools for Serious Families.
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              For parents who want to go further, Sideline includes Pathway to
              Pro, a professionally designed player profile system built to help
              your child get noticed.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                {
                  icon: UserCheck,
                  text: "Create recruitment-ready player profiles with verified stats, evaluation history, and performance highlights.",
                },
                {
                  icon: GraduationCap,
                  text: "Access a curated North American college coach database.",
                },
                {
                  icon: Send,
                  text: "Track outreach messages and responses inside the platform.",
                },
              ].map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-3 text-foreground"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-5">
              <div className="flex items-start gap-3">
                <Handshake className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-foreground">
                  Sideline has partnered with a talent agency that has already
                  placed hundreds of players into college and university programs
                  across North America. This pathway is only available through
                  Sideline.
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm font-medium text-muted-foreground">
              From grassroots to university programs. All within the same
              platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
