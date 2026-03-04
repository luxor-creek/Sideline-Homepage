import { FileSpreadsheet, Mail, MessageCircle, CreditCard, CalendarDays, ArrowRight } from "lucide-react"

const fragmentedTools = [
  {
    icon: FileSpreadsheet,
    label: "Registration on one system",
  },
  {
    icon: FileSpreadsheet,
    label: "Evaluations in spreadsheets",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp for schedules",
  },
  {
    icon: Mail,
    label: "Email chains for billing",
  },
  {
    icon: CalendarDays,
    label: "Shared Google Sheets for facility bookings",
  },
  {
    icon: CreditCard,
    label: "Separate payment portals",
  },
]

export function Problem() {
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              The problem
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground text-balance md:text-4xl">
              Your club runs on 6 different tools. None of them talk to each
              other.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Sound familiar? Registration lives in one place, evaluations in
              another, and parent communication happens across email, text, and
              WhatsApp. It is time for a single source of truth.
            </p>
          </div>

          <div className="relative">
            <div className="flex flex-col gap-3">
              {fragmentedTools.map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 transition-all"
                  style={{ opacity: 1 - i * 0.08 }}
                >
                  <tool.icon className="h-5 w-5 shrink-0 text-muted-foreground" />
                  <span className="text-sm text-foreground">{tool.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <ArrowRight className="h-5 w-5 text-primary" />
              <div className="rounded-lg border-2 border-primary/30 bg-primary/5 px-4 py-2">
                <span className="text-sm font-semibold text-primary">
                  One unified platform
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
