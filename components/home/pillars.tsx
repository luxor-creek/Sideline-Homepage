import { Layers, Brain, ClipboardCheck, Building2 } from "lucide-react"

const pillars = [
  {
    icon: Layers,
    title: "One Platform. Every Role.",
    description:
      "Admins, coaches, managers, and parents share one system with role-specific access and views.",
  },
  {
    icon: Brain,
    title: "AI That Knows Your Club.",
    description:
      "Jock AI surfaces insights from your live data. Ask questions in plain language and get structured answers.",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluations That Drive Decisions.",
    description:
      "Run structured player evaluations, track progress over time, and let data guide team selection.",
  },
  {
    icon: Building2,
    title: "Facilities, Booked and Managed.",
    description:
      "Manage fields, courts, and arenas with real-time availability and automated conflict resolution.",
  },
]

export function Pillars() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            How it works
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground text-balance md:text-4xl">
            Everything your club needs, unified.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <pillar.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
