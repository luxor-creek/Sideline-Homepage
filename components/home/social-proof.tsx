import {
  UserPlus,
  ClipboardCheck,
  Building2,
  Calendar,
  CreditCard,
  BarChart3,
  Shield,
  Brain,
  FileText,
  Bell,
  Users,
  Whistle,
  Megaphone,
  HeartPulse,
  ListChecks,
  Shirt,
  MapPin,
  Clock,
  MessageSquare,
  Eye,
  CalendarDays,
  Receipt,
  Star,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface RoleSection {
  role: string
  description: string
  color: string
  iconBg: string
  features: { icon: LucideIcon; label: string; description: string }[]
}

const roles: RoleSection[] = [
  {
    role: "Club Administrators",
    description:
      "Run your entire club from a single command centre. No more spreadsheets, no more fragmented tools.",
    color: "text-primary",
    iconBg: "bg-primary/10",
    features: [
      {
        icon: UserPlus,
        label: "Registration",
        description: "Online registration with automated waitlists and approvals",
      },
      {
        icon: ClipboardCheck,
        label: "Evaluations",
        description: "Structured evaluation workflows with searchable history",
      },
      {
        icon: Building2,
        label: "Facility Booking",
        description: "Real-time facility management with conflict detection",
      },
      {
        icon: Calendar,
        label: "Scheduling",
        description: "Master scheduling across all teams, fields, and seasons",
      },
      {
        icon: CreditCard,
        label: "Payments",
        description: "Fee collection, instalment plans, and financial reporting",
      },
      {
        icon: BarChart3,
        label: "Analytics",
        description: "Club-wide dashboards for enrolment, finances, and operations",
      },
      {
        icon: Shield,
        label: "Role Access",
        description: "Granular permissions so every role sees only what they need",
      },
      {
        icon: Brain,
        label: "Jock AI",
        description: "AI assistant that queries live club data on your behalf",
      },
      {
        icon: FileText,
        label: "Reporting",
        description: "Automated reports for boards, leagues, and compliance",
      },
      {
        icon: Bell,
        label: "Notifications",
        description: "Smart alerts for deadlines, conflicts, and action items",
      },
    ],
  },
  {
    role: "Coaches",
    description:
      "Focus on developing players, not chasing paperwork. Everything you need is one click away.",
    color: "text-emerald-600",
    iconBg: "bg-emerald-600/10",
    features: [
      {
        icon: Users,
        label: "Roster Management",
        description: "View and manage your team roster with player details",
      },
      {
        icon: ClipboardCheck,
        label: "Evaluations",
        description: "Score players, add notes, and track progression over time",
      },
      {
        icon: Calendar,
        label: "Practice Scheduling",
        description: "See your schedule, request changes, and manage availability",
      },
      {
        icon: MessageSquare,
        label: "Team Messaging",
        description: "Communicate directly with players and parents",
      },
      {
        icon: ListChecks,
        label: "Attendance",
        description: "Track practice and game attendance in real time",
      },
      {
        icon: HeartPulse,
        label: "Player Development",
        description: "Monitor skill progression and evaluation history",
      },
      {
        icon: Brain,
        label: "Jock AI for Coaches",
        description: "Ask Jock for player stats, attendance trends, and practice suggestions tailored to your roster",
      },
    ],
  },
  {
    role: "Team Managers",
    description:
      "Keep your team organized and parents informed without the endless group-chat chaos.",
    color: "text-sky-600",
    iconBg: "bg-sky-600/10",
    features: [
      {
        icon: Megaphone,
        label: "Announcements",
        description: "Send targeted updates to your team's parent group",
      },
      {
        icon: Shirt,
        label: "Uniform & Equipment",
        description: "Track jersey assignments, equipment handouts, and returns",
      },
      {
        icon: MapPin,
        label: "Game Day Logistics",
        description: "Share locations, arrival times, and pre-game instructions",
      },
      {
        icon: Clock,
        label: "Volunteer Coordination",
        description: "Assign and track parent volunteer duties per event",
      },
      {
        icon: ListChecks,
        label: "Task Lists",
        description: "Create and assign to-dos for upcoming games and events",
      },
      {
        icon: FileText,
        label: "Document Sharing",
        description: "Share waivers, forms, and important documents with families",
      },
      {
        icon: Brain,
        label: "Jock AI for Managers",
        description: "Ask Jock to draft announcements, check volunteer gaps, and surface upcoming logistics at a glance",
      },
    ],
  },
  {
    role: "Parents",
    description:
      "Stay in the loop without the overwhelm. One place for schedules, payments, and updates.",
    color: "text-slate-600",
    iconBg: "bg-slate-600/10",
    features: [
      {
        icon: CalendarDays,
        label: "Family Calendar",
        description: "Unified schedule across all your children and their teams",
      },
      {
        icon: Receipt,
        label: "Payments & Receipts",
        description: "View balances, make payments, and download receipts",
      },
      {
        icon: Eye,
        label: "Player Progress",
        description: "See evaluation results and development feedback",
      },
      {
        icon: MessageSquare,
        label: "Direct Messaging",
        description: "Message coaches and managers without hunting for emails",
      },
      {
        icon: Bell,
        label: "Smart Notifications",
        description: "Get alerts for schedule changes, payment due dates, and more",
      },
      {
        icon: Star,
        label: "Season Highlights",
        description: "Access season summaries, stats, and memorable moments",
      },
      {
        icon: Brain,
        label: "Jock AI for Parents",
        description: "Ask Jock about upcoming schedules, payment balances, and your child's progress in plain language",
      },
    ],
  },
]

export function SocialProof() {
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Capabilities
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground text-balance md:text-4xl">
            Built for every role in your club.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From the board room to the bleachers, Sideline gives every
            stakeholder the tools they need and nothing they don't.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-20">
          {roles.map((section) => (
            <div key={section.role}>
              <div className="mb-8 flex flex-col items-center text-center md:items-start md:text-left">
                <h3
                  className={`font-[family-name:var(--font-heading)] text-2xl font-bold ${section.color}`}
                >
                  {section.role}
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.features.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-start gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/20 hover:shadow-sm"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${section.iconBg}`}
                    >
                      <f.icon className={`h-5 w-5 ${section.color}`} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{f.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {f.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
