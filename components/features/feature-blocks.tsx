"use client"

import { useState } from "react"
import {
  UserPlus,
  ClipboardCheck,
  Building2,
  Calendar,
  MessageSquare,
  CreditCard,
  BarChart3,
  Users,
  Bell,
  DollarSign,
  GraduationCap,
  Brain,
  ChevronRight,
  CheckCircle2,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

interface FeatureBlockData {
  icon: React.ElementType
  title: string
  replaces: string
  problem: string
  description: string
  capabilities: string[]
  roles: string[]
  detailTitle: string
  detailSubtitle: string
  detailBody: string[]
  detailBenefits: string[]
  detailClosing?: string
}

const featureBlocks: FeatureBlockData[] = [
  {
    icon: BarChart3,
    title: "Club Dashboard",
    replaces: "Replaces scattered spreadsheets, ad-hoc board reports, guesswork",
    problem:
      "Running a youth sports club means constantly switching between tools just to understand what is happening.",
    description:
      "The Club Dashboard brings everything into one structured view. Administrators can see total players, active teams, upcoming events, pending registrations, and evaluation activity without exporting a single spreadsheet.",
    capabilities: [
      "Club-wide operational dashboard",
      "Registration and retention analytics",
      "Evaluation outcome visualisation",
      "Custom report generation",
    ],
    roles: ["Admin"],
    detailTitle: "Club Dashboard",
    detailSubtitle: "A Real-Time Command Centre for Your Entire Club",
    detailBody: [
      "Running a youth sports club means constantly switching between tools just to understand what is happening. Registration numbers are in one place. Schedules in another. Evaluations somewhere else.",
      "The Club Dashboard brings everything into one structured view.",
      "Administrators can see total players, active teams, upcoming events, pending registrations, and evaluation activity without exporting a single spreadsheet. Instead of reacting to problems late, you see trends early.",
    ],
    detailBenefits: [
      "You make faster decisions with accurate, real-time information.",
      "You eliminate manual cross-checking across platforms.",
      "You reduce time spent answering \"quick\" questions that require digging.",
      "Your entire organization operates from the same source of truth.",
    ],
    detailClosing: "This is operational clarity at the top level.",
  },
  {
    icon: Users,
    title: "Team & Roster Management",
    replaces: "Replaces TeamSnap, TeamLinkt, scattered roster files",
    problem:
      "Rosters are often the first thing to fall out of sync. Coaches keep private lists. Managers update spreadsheets.",
    description:
      "Sideline centralizes roster control while keeping it flexible. Import full rosters from CSV, PDF, or Word. Assign coaches and managers. Track player movement across seasons.",
    capabilities: [
      "Central roster management",
      "Player-to-team assignments and transfers",
      "Coaching staff assignments",
      "Attendance and participation tracking",
      "Multi-team player support",
    ],
    roles: ["Admin", "Coach"],
    detailTitle: "Team & Roster Management",
    detailSubtitle: "Structured, Accurate Rosters Across Seasons",
    detailBody: [
      "Rosters are often the first thing to fall out of sync. Coaches keep private lists. Managers update spreadsheets. Admins try to reconcile them.",
      "Sideline centralizes roster control while keeping it flexible.",
      "Import full rosters from CSV, PDF, or Word. Assign coaches and managers. Track player movement across seasons. Every player receives a consistent Club Player ID and Sideline ID, ensuring continuity even as teams change.",
    ],
    detailBenefits: [
      "There is only one current roster.",
      "Guardian contact information is always accessible and accurate.",
      "Multi-team assignments are simple to manage.",
      "Historical records remain intact year over year.",
      "Player data does not get lost when volunteers change.",
    ],
    detailClosing: "This reduces administrative confusion and increases accountability.",
  },
  {
    icon: UserPlus,
    title: "Player Profiles & Development",
    replaces: "Replaces binders, disconnected evaluations, fragmented records",
    problem:
      "Most clubs cannot see long-term player progression because evaluation data lives in disconnected documents.",
    description:
      "Sideline consolidates everything into a structured, portable player profile. Coaches can review performance trends over time. Administrators can see development patterns across age groups.",
    capabilities: [
      "Registration history",
      "Evaluation scores across sessions",
      "Guardian and emergency contacts",
      "Medical and allergy notes",
      "Address and contact details",
    ],
    roles: ["Admin", "Coach", "Parent"],
    detailTitle: "Player Profiles & Development",
    detailSubtitle: "A Complete Development Record for Every Athlete",
    detailBody: [
      "Most clubs cannot see long-term player progression because evaluation data lives in disconnected documents.",
      "Sideline consolidates everything into a structured, portable player profile.",
      "Each profile includes registration history, evaluation scores across sessions, guardian and emergency contacts, medical and allergy notes, and address and contact details.",
      "Coaches can review performance trends over time. Administrators can see development patterns across age groups.",
    ],
    detailBenefits: [
      "Talent identification becomes evidence-based.",
      "Player progression is trackable year over year.",
      "Medical and safety information is always accessible.",
      "Development conversations are grounded in data, not memory.",
    ],
    detailClosing: "This turns scattered information into actionable insight.",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluations & Draft Board",
    replaces: "Replaces Ramp Interactive, Excel spreadsheets, paper forms",
    problem:
      "Evaluations often rely on inconsistent scoring systems and paper notes that cannot be compared across sessions.",
    description:
      "Sideline provides structured evaluation templates with customizable criteria. Evaluators score players using mobile-friendly scoring cards. Results feed directly into leaderboards and draft boards.",
    capabilities: [
      "Custom evaluation rubrics and scoring criteria",
      "Session-based evaluation workflows",
      "Historical player progress tracking",
      "Composite scoring and ranking",
      "AI-driven performance insights",
    ],
    roles: ["Admin", "Coach"],
    detailTitle: "Evaluations & Draft Board",
    detailSubtitle: "Consistent, Structured Player Assessment",
    detailBody: [
      "Evaluations often rely on inconsistent scoring systems and paper notes that cannot be compared across sessions.",
      "Sideline provides structured evaluation templates with customizable criteria. Evaluators score players using mobile-friendly scoring cards. Results feed directly into leaderboards and draft boards.",
    ],
    detailBenefits: [
      "Scores are standardized and comparable.",
      "Coaches can filter by season, age group, gender, or team.",
      "Draft decisions are transparent and defensible.",
      "Top-player reports can be generated instantly.",
      "External evaluators can participate securely without exposing internal systems.",
    ],
    detailClosing: "This removes bias driven by incomplete information and improves team formation decisions.",
  },
  {
    icon: Brain,
    title: "Jock AI",
    replaces: "Replaces manual reporting, repetitive admin questions, data silos",
    problem:
      "Jock AI is not a generic chatbot. It operates differently depending on who is using it.",
    description:
      "For Administrators, Jock acts as an operational intelligence tool. For Coaches, Jock surfaces player rankings and improvement trends. For Parents, Jock replaces fragmented portals with a cleaner, more capable experience.",
    capabilities: [
      "Queries 18 live data sources in parallel",
      "Role-based contextual responses",
      "Player ranking and trend insights",
      "Schedule and fee lookups for parents",
      "Secure, grounded answers only",
    ],
    roles: ["Admin", "Coach", "Parent"],
    detailTitle: "Jock AI",
    detailSubtitle: "Intelligence Embedded Into Club Operations",
    detailBody: [
      "Jock AI is not a generic chatbot. It operates differently depending on who is using it.",
      "For Administrators: Jock acts as an operational intelligence tool. Ask about registration growth, attendance gaps, evaluation outcomes, or scheduling conflicts. It queries 18 live data sources in parallel and provides grounded answers.",
      "For Coaches: Jock surfaces player rankings, improvement trends, and team-level insights. Coaches can understand how players compare, where development is accelerating, and where attention is needed.",
      "For Parents: Jock replaces fragmented portals with a cleaner, more capable parent portal. Parents can ask about schedules, fees, and updates without searching through email threads.",
    ],
    detailBenefits: [
      "Repetitive admin questions are reduced dramatically.",
      "Coaches gain insight without exporting reports.",
      "Parents receive immediate, accurate answers.",
      "Data remains secure with role-based access controls.",
    ],
    detailClosing: "This reduces workload while increasing clarity.",
  },
  {
    icon: Building2,
    title: "Facility Booking",
    replaces: "Replaces Skedda, Google Calendar, shared spreadsheets",
    problem:
      "Facility management is often handled manually, leading to double bookings and lost revenue.",
    description:
      "Sideline allows clubs to define spaces with operating hours, pricing, buffer times, booking windows, and quotas. All booking rules are validated at the database level, preventing workarounds.",
    capabilities: [
      "Real-time facility availability calendar",
      "Automated conflict detection and resolution",
      "Multi-venue and multi-field support",
      "Maintenance scheduling and tracking",
      "Check-in accountability",
    ],
    roles: ["Admin"],
    detailTitle: "Facility Booking",
    detailSubtitle: "Enforced Scheduling That Prevents Conflict",
    detailBody: [
      "Facility management is often handled manually, leading to double bookings and lost revenue.",
      "Sideline allows clubs to define spaces with operating hours, pricing, buffer times, booking windows, and quotas. All booking rules are validated at the database level, preventing workarounds.",
    ],
    detailBenefits: [
      "Double bookings are eliminated.",
      "Usage and revenue are tracked automatically.",
      "Booking policies are enforced consistently.",
      "Check-ins provide accountability.",
      "Timezone handling ensures consistent display across devices.",
    ],
    detailClosing: "Facility management becomes predictable and revenue-aware.",
  },
  {
    icon: Users,
    title: "Coach & Staff Management",
    replaces: "Replaces informal onboarding, shared passwords, manual revocation",
    problem:
      "Onboarding and offboarding coaches is often informal and risky.",
    description:
      "Sideline sends branded invitations with secure sign-up links. Coaches are automatically assigned to teams. If a coach leaves, their credentials and access are revoked instantly.",
    capabilities: [
      "Branded invitation workflows",
      "Automatic team assignments",
      "Instant credential revocation",
      "Multi-team coaching support",
      "Centralized access control",
    ],
    roles: ["Admin"],
    detailTitle: "Coach & Staff Management",
    detailSubtitle: "Controlled Access Without Administrative Headaches",
    detailBody: [
      "Onboarding and offboarding coaches is often informal and risky.",
      "Sideline sends branded invitations with secure sign-up links. Coaches are automatically assigned to teams. If a coach leaves, their credentials and access are revoked instantly.",
    ],
    detailBenefits: [
      "Access control is centralized.",
      "No lingering accounts remain active.",
      "Multi-team coaching assignments are managed easily.",
      "Volunteer transitions are smoother.",
    ],
    detailClosing: "This improves security and operational continuity.",
  },
  {
    icon: UserPlus,
    title: "Registration & Onboarding",
    replaces: "Replaces PowerUp Sports, Active Network, Google Forms",
    problem:
      "Paper forms and manual data entry create delays and errors.",
    description:
      "Sideline provides a mobile-friendly, six-step registration flow. Admins configure templates with custom fields, waivers, and fee structures. Players are auto-assigned to age and gender categories.",
    capabilities: [
      "Custom registration forms per season and age group",
      "Document upload and medical info collection",
      "Automatic waitlist management",
      "Parent self-service portal",
      "Real-time registration analytics",
    ],
    roles: ["Admin", "Parent"],
    detailTitle: "Registration & Onboarding",
    detailSubtitle: "Mobile-First, Structured Registration",
    detailBody: [
      "Paper forms and manual data entry create delays and errors.",
      "Sideline provides a mobile-friendly, six-step registration flow. Admins configure templates with custom fields, waivers, and fee structures. Players are auto-assigned to age and gender categories.",
    ],
    detailBenefits: [
      "Data entry errors decrease.",
      "Registration deadlines are enforced automatically.",
      "Waivers are digitally tracked.",
      "Age group placement is automated.",
      "Admin workload drops significantly during peak registration periods.",
    ],
    detailClosing: "Registration becomes scalable.",
  },
  {
    icon: Calendar,
    title: "Events & Scheduling",
    replaces: "Replaces TeamSnap, Google Calendar, WhatsApp coordination",
    problem:
      "When schedules are scattered, confusion increases.",
    description:
      "Sideline centralizes event creation with recurrence rules, home and away tagging, and location management. Events automatically populate across coach dashboards and parent portals.",
    capabilities: [
      "Drag-and-drop schedule builder",
      "Recurring event templates",
      "Role-based calendar views",
      "Automatic conflict alerts",
      "Integration with facility booking",
    ],
    roles: ["Admin", "Coach", "Parent"],
    detailTitle: "Events & Scheduling",
    detailSubtitle: "Clear Schedules Across the Entire Club",
    detailBody: [
      "When schedules are scattered, confusion increases.",
      "Sideline centralizes event creation with recurrence rules, home and away tagging, and location management. Events automatically populate across coach dashboards and parent portals.",
    ],
    detailBenefits: [
      "Everyone sees the same schedule.",
      "Location data is structured and searchable.",
      "Recurring practices require minimal setup.",
      "Communication gaps are reduced.",
    ],
    detailClosing: "Schedule management becomes transparent.",
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    replaces: "Replaces WhatsApp groups, Mailchimp, email chains",
    problem:
      "Parent communication spans WhatsApp, email, text, and verbal updates.",
    description:
      "Centralise all club communication in one platform. Send targeted messages by team, age group, or role. Parents receive notifications through their preferred channel while admins maintain a complete communication log.",
    capabilities: [
      "Targeted messaging by team, role, or group",
      "In-app and email notification delivery",
      "Announcement broadcasting",
      "Read receipts and delivery tracking",
    ],
    roles: ["Admin", "Coach", "Parent"],
    detailTitle: "Communication Hub",
    detailSubtitle: "Structured Communication Without the Noise",
    detailBody: [
      "Parent communication spans WhatsApp, email, text, and verbal updates.",
      "Centralise all club communication in one platform. Send targeted messages by team, age group, or role. Parents receive notifications through their preferred channel while admins maintain a complete communication log.",
    ],
    detailBenefits: [
      "Targeted messaging by team, role, or group.",
      "In-app and email notification delivery.",
      "Announcement broadcasting.",
      "Read receipts and delivery tracking.",
    ],
    detailClosing: "Communication becomes structured and accountable.",
  },
  {
    icon: CreditCard,
    title: "Payments and Billing",
    replaces: "Replaces e-transfers, PayPal, manual invoicing",
    problem:
      "Fees are tracked manually with no visibility into who has paid and who has not.",
    description:
      "Manage season fees, event costs, and ad-hoc charges with automated invoicing and payment tracking. Parents pay online and admins get real-time visibility into outstanding balances.",
    capabilities: [
      "Automated invoice generation",
      "Online payment processing",
      "Instalment plan support",
      "Outstanding balance tracking",
      "Financial reporting by season or team",
    ],
    roles: ["Admin", "Parent"],
    detailTitle: "Payments and Billing",
    detailSubtitle: "Transparent Financial Management",
    detailBody: [
      "Fees are tracked manually with no visibility into who has paid and who has not.",
      "Manage season fees, event costs, and ad-hoc charges with automated invoicing and payment tracking. Parents pay online and admins get real-time visibility into outstanding balances.",
    ],
    detailBenefits: [
      "Automated invoice generation.",
      "Online payment processing.",
      "Instalment plan support.",
      "Outstanding balance tracking.",
      "Financial reporting by season or team.",
    ],
    detailClosing: "Financial management becomes predictable and transparent.",
  },
  {
    icon: Bell,
    title: "Notifications and Alerts",
    replaces: "Replaces email blasts, group texts, verbal reminders",
    problem:
      "Critical updates get lost in email inboxes and chat threads.",
    description:
      "Smart notifications keep every stakeholder informed without overwhelming them. Role-based delivery ensures parents hear about their child, coaches hear about their team, and admins see the full picture.",
    capabilities: [
      "Role-based notification routing",
      "Customisable notification preferences",
      "Urgent alert escalation",
      "Digest and summary modes",
    ],
    roles: ["Admin", "Coach", "Parent"],
    detailTitle: "Notifications and Alerts",
    detailSubtitle: "The Right Update to the Right Person",
    detailBody: [
      "Critical updates get lost in email inboxes and chat threads.",
      "Smart notifications keep every stakeholder informed without overwhelming them. Role-based delivery ensures parents hear about their child, coaches hear about their team, and admins see the full picture.",
    ],
    detailBenefits: [
      "Role-based notification routing.",
      "Customisable notification preferences.",
      "Urgent alert escalation.",
      "Digest and summary modes.",
    ],
    detailClosing: "Information reaches the right people at the right time.",
  },
  {
    icon: DollarSign,
    title: "Sponsor Management & Revenue Sharing",
    replaces: "Replaces manual sponsor outreach, static logo walls, untracked deals",
    problem:
      "Sponsors want visibility. Clubs need funding. Traditional banner placements provide little measurable value.",
    description:
      "Sideline integrates sponsor placements directly into parent-facing dashboards, where engagement is highest. Clubs participate in revenue generated through sponsor activity within the platform.",
    capabilities: [
      "Sponsor creation wizard with asset upload",
      "Dashboard ad placements in parent portal",
      "Engagement visibility",
      "Revenue participation for clubs",
      "Reporting and tracking tools",
    ],
    roles: ["Admin"],
    detailTitle: "Sponsor Management & Revenue Sharing",
    detailSubtitle: "Turn Engagement Into Structured Revenue",
    detailBody: [
      "Sponsors want visibility. Clubs need funding. Traditional banner placements provide little measurable value.",
      "Sideline integrates sponsor placements directly into parent-facing dashboards, where engagement is highest. Clubs participate in revenue generated through sponsor activity within the platform.",
    ],
    detailBenefits: [
      "Sponsor exposure is consistent and trackable.",
      "Engagement occurs inside a trusted environment.",
      "A new revenue stream aligns with participation.",
      "Sponsor reporting improves renewal conversations.",
    ],
    detailClosing: "Sponsorship becomes sustainable, not symbolic.",
  },
  {
    icon: GraduationCap,
    title: "Pathway to Pro",
    replaces: "Replaces scattered recruiting tools, outdated databases, informal outreach",
    problem:
      "Families navigating recruitment often rely on scattered tools and informal outreach.",
    description:
      "Pathway to Pro provides professionally designed recruitment-ready player profiles that include verified evaluation history, rankings, and performance data. Parents gain access to a North American college coach contact database.",
    capabilities: [
      "Professionally designed recruitment-ready player profiles",
      "Verified evaluation history and performance data",
      "College coach contact database",
      "Outreach message tracking and status monitoring",
      "Exclusive agency partnership access",
    ],
    roles: ["Parent"],
    detailTitle: "Pathway to Pro",
    detailSubtitle: "Structured Recruitment Tools Inside the Club Platform",
    detailBody: [
      "Families navigating recruitment often rely on scattered tools and informal outreach.",
      "Pathway to Pro provides professionally designed recruitment-ready player profiles that include verified evaluation history, rankings, and performance data. Parents gain access to a North American college coach contact database and can track outreach messages within the platform.",
      "Through an exclusive partnership with a talent agency that has placed hundreds of players into college and university programs across North America, Sideline provides a structured progression pathway.",
    ],
    detailBenefits: [
      "Player development data feeds directly into recruitment profiles.",
      "Recruitment efforts become organized and trackable.",
      "Families remain engaged within the club ecosystem.",
      "Clubs elevate their reputation for producing college-level talent.",
    ],
    detailClosing: "This extends Sideline beyond administration into long-term athlete opportunity.",
  },
]

function FeaturePreview({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-border bg-muted/30 p-8 md:p-12">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
        <Icon className="h-10 w-10 text-primary" />
      </div>
    </div>
  )
}

function FeatureDetail({ feature }: { feature: FeatureBlockData }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
        <feature.icon className="h-6 w-6 text-primary" />
      </div>

      <div>
        <p className="text-sm font-semibold text-primary">
          {feature.replaces}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {feature.detailBody.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-foreground/80">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
        <p className="mb-3 text-sm font-semibold text-foreground">
          Clubs benefit because:
        </p>
        <ul className="flex flex-col gap-2.5">
          {feature.detailBenefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5 text-sm text-foreground/80">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {feature.detailClosing && (
        <p className="text-sm font-medium italic text-muted-foreground">
          {feature.detailClosing}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        {feature.roles.map((role) => (
          <Badge key={role} variant="secondary">
            {role}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export function FeatureBlocks() {
  const [openFeature, setOpenFeature] = useState<string | null>(null)

  const selectedFeature = featureBlocks.find((f) => f.title === openFeature)

  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-20 md:gap-28">
          {featureBlocks.map((feature, index) => {
            const isReversed = index % 2 === 1

            return (
              <div
                key={feature.title}
                className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  isReversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-primary">
                    {feature.replaces}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm italic text-muted-foreground">
                    {feature.problem}
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2">
                    {feature.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {feature.roles.map((role) => (
                      <Badge key={role} variant="secondary">
                        {role}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="mt-5 gap-1.5 px-0 text-primary hover:text-primary/80 hover:bg-transparent"
                    onClick={() => setOpenFeature(feature.title)}
                  >
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <FeaturePreview icon={feature.icon} />
              </div>
            )
          })}
        </div>
      </div>

      <Sheet open={!!openFeature} onOpenChange={(open) => !open && setOpenFeature(null)}>
        <SheetContent side="right" className="w-full sm:max-w-lg md:max-w-xl">
          <SheetHeader>
            <SheetTitle className="font-[family-name:var(--font-heading)] text-xl">
              {selectedFeature?.detailTitle}
            </SheetTitle>
            <SheetDescription className="text-base font-medium text-foreground/70">
              {selectedFeature?.detailSubtitle}
            </SheetDescription>
          </SheetHeader>
          <ScrollArea className="flex-1 px-4 pb-6">
            {selectedFeature && <FeatureDetail feature={selectedFeature} />}
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </section>
  )
}
