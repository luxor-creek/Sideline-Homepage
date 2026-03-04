import {
  ShieldCheck,
  BarChart3,
  MessageSquare,
  Database,
  Shield,
  Brain,
  BookOpen,
  Lock,
} from "lucide-react"

const roles = [
  {
    icon: ShieldCheck,
    title: "Admin",
    description:
      "Full club analytics, registration trends, financial summaries, and operational oversight. Jock surfaces club-wide patterns and highlights areas needing attention.",
    query: "\"Show me registration numbers compared to last season.\"",
    accent: "bg-[oklch(0.55_0.10_240)]/10 text-[oklch(0.55_0.10_240)]",
    iconAccent: "text-[oklch(0.55_0.10_240)]",
  },
  {
    icon: BarChart3,
    title: "Coach",
    description:
      "Team-level performance data, player evaluation summaries, and development insights. Jock helps coaches make data-driven decisions about lineups and training focus.",
    query: "\"Who showed the most improvement in our last 3 evaluations?\"",
    accent: "bg-primary/10 text-primary",
    iconAccent: "text-primary",
  },
  {
    icon: MessageSquare,
    title: "Parent",
    description:
      "Secure, child-specific information including schedules, fee status, and coach contact details. Jock provides clarity without exposing club-wide data.",
    query: "\"When is my son's next practice?\"",
    accent: "bg-[oklch(0.50_0.03_250)]/10 text-[oklch(0.50_0.03_250)]",
    iconAccent: "text-[oklch(0.50_0.03_250)]",
  },
]

const techCapabilities = [
  { icon: Database, label: "18 live data sources queried per interaction" },
  { icon: Shield, label: "Role-based access control" },
  { icon: Brain, label: "Semantic memory across conversations" },
  { icon: BookOpen, label: "Knowledge base integration" },
  { icon: Lock, label: "Secure, club-scoped permissions" },
]

export function JockAIFeature() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Jock AI
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground text-balance md:text-4xl">
            Intelligence for Admins. Insight for Coaches. Clarity for Parents.
          </h2>
        </div>

        {/* Three Role Columns */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${role.accent}`}
              >
                <role.icon className={`h-5 w-5 ${role.iconAccent}`} />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                {role.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {role.description}
              </p>

              {/* Example Query */}
              <div className="mt-4 rounded-lg border border-border bg-background p-3">
                <div className="mb-2 flex items-center gap-2">
                  <MessageSquare className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-semibold text-primary">
                    Example Query
                  </span>
                </div>
                <p className="text-sm italic text-muted-foreground">
                  {role.query}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Strip */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {techCapabilities.map((cap) => (
            <div
              key={cap.label}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
            >
              <cap.icon className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-xs leading-snug text-muted-foreground">
                {cap.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
