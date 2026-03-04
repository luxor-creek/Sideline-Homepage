import Link from "next/link"
import {
  UserPlus,
  ClipboardCheck,
  Building2,
  Calendar,
  MessageSquare,
  CreditCard,
  BarChart3,
  Shield,
  Users,
  Brain,
  FileText,
  Bell,
} from "lucide-react"

const features = [
  { icon: UserPlus, label: "Registration" },
  { icon: ClipboardCheck, label: "Evaluations" },
  { icon: Building2, label: "Facility Booking" },
  { icon: Calendar, label: "Scheduling" },
  { icon: MessageSquare, label: "Communication" },
  { icon: CreditCard, label: "Payments" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Shield, label: "Role Access" },
  { icon: Users, label: "Team Management" },
  { icon: Brain, label: "Jock AI" },
  { icon: FileText, label: "Reporting" },
  { icon: Bell, label: "Notifications" },
]

export function FeatureGrid() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Capabilities
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground text-balance md:text-4xl">
            Built for every part of club operations.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {features.map((f) => (
            <Link
              key={f.label}
              href="/features"
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {f.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
