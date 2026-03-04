import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Globe,
  Brain,
  ShieldCheck,
  EyeOff,
  UserCheck,
  Wrench,
  Zap,
  Server,
  Lock,
  Database,
  FileSearch,
  Calendar,
  Users,
  ClipboardList,
  Building2,
  CalendarDays,
  Briefcase,
  BookOpen,
} from "lucide-react"

export const metadata: Metadata = {
  title: "For Techies - Sideline",
  description:
    "Technical deep-dive into Sideline's architecture, security model, and AI infrastructure.",
}

const infraStats = [
  { label: "Faster response times", value: "30-50%" },
  { label: "Global POP distribution", value: "Global" },
  { label: "Uptime SLA", value: "99.99%" },
  { label: "DDoS mitigation", value: "Enterprise" },
  { label: "Standard bandwidth", value: "6x" },
]

const dataSources = [
  { icon: Users, label: "Rosters" },
  { icon: CalendarDays, label: "Schedules" },
  { icon: ClipboardList, label: "Registration records" },
  { icon: FileSearch, label: "Evaluation history" },
  { icon: Building2, label: "Facility bookings" },
  { icon: Calendar, label: "Events" },
  { icon: Briefcase, label: "Staff assignments" },
  { icon: BookOpen, label: "Knowledge base documents" },
]

const accessControls = [
  "Role-based access control",
  "Parent-level data isolation",
  "Coach-scoped team access",
  "Admin-wide visibility",
  "Tokenized external evaluator links",
]

const zeroTrainingPoints = [
  "Not aggregated",
  "Not resold",
  "Not shared",
  "Not repurposed",
]

const engineeringDomains = [
  "Software architecture",
  "Enterprise scaling",
  "High-availability systems",
  "Digital media infrastructure",
  "Secure data environments",
]

export default function TechiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                For Techies
              </p>
              <h1 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground text-balance md:text-5xl">
                Under the Hood
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
                How Sideline is built, how Jock AI reasons, and why your club
                data stays yours.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Infrastructure */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="grid items-start gap-12 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">
                    Built Like Infrastructure. Not an App.
                  </h2>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Sideline runs on a high-performance edge network built for
                  production workloads.
                </p>
                <p className="mt-6 text-sm font-medium text-foreground">
                  Peak registration nights. Evaluation weekends. Parent traffic
                  surges.
                </p>
                <p className="text-sm font-semibold text-primary">
                  Sideline stays responsive.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {infraStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-card p-4 text-center"
                  >
                    <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Jock AI */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="grid items-start gap-12 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">
                    Jock AI. Structured. Not Generic.
                  </h2>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Jock AI is proprietary to Sideline and its partner clubs. It
                  is not a thin interface layered on top of a public chatbot. It
                  is a club-scoped AI workspace engineered around live
                  operational data.
                </p>
                <p className="mt-6 text-sm font-medium text-foreground">
                  Responses are generated from live club data. Not canned
                  replies.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Jock is also engineered to answer relevant questions from the
                  club from third party websites or datasets.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="leading-relaxed text-muted-foreground">
                  Each interaction queries up to{" "}
                  <span className="font-semibold text-foreground">
                    24 live data sources
                  </span>{" "}
                  at the club in parallel. For example:
                </p>
                <div className="grid grid-cols-2 gap-3">
                {dataSources.map((source) => (
                  <div
                    key={source.label}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
                  >
                    <source.icon className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">
                      {source.label}
                    </span>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Club-Scoped Security */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="grid items-start gap-12 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">
                    Club-Scoped by Design
                  </h2>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Security is enforced at the database level.
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-primary">
                    No cross-club pooling.
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    No shared datasets.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {accessControls.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <Lock className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Zero-Training Mandate */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="grid items-start gap-12 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <EyeOff className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">
                    Zero-Training Mandate
                  </h2>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Your data is not used to train public models.
                </p>
                <p className="mt-4 text-sm font-medium text-foreground">
                  Every club operates in its own siloed environment.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {zeroTrainingPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-xl border border-destructive/20 bg-destructive/5 p-4"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/10">
                      <span className="text-xs font-bold text-destructive">
                        {"X"}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Human-in-the-Loop */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <UserCheck className="h-5 w-5 text-primary" />
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">
                Human-in-the-Loop
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Sideline augments authority.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {[
                  {
                    role: "Coaches",
                    action: "evaluate",
                    icon: ClipboardList,
                  },
                  { role: "Admins", action: "decide", icon: ShieldCheck },
                  { role: "AI", action: "surfaces intelligence", icon: Zap },
                ].map((item) => (
                  <div
                    key={item.role}
                    className="rounded-xl border border-border bg-card p-6 text-center"
                  >
                    <item.icon className="mx-auto h-6 w-6 text-primary" />
                    <p className="mt-3 font-[family-name:var(--font-heading)] text-lg font-bold text-foreground">
                      {item.role}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.action}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm font-medium text-primary">
                Technology that supports real operators.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Engineered by Operators */}
        <section className="bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="grid items-start gap-12 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Wrench className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">
                    Engineered by Operators
                  </h2>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Our engineering team brings{" "}
                  <span className="font-semibold text-foreground">
                    25 years of pattern recognition
                  </span>
                  :
                </p>
                <p className="mt-6 text-sm text-muted-foreground">
                  Sideline was not built as a marketing layer first. It was
                  built as a structured operational system.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {engineeringDomains.map((domain) => (
                  <div
                    key={domain}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <Server className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {domain}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
