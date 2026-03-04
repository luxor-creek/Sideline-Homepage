"use client"

import { useState } from "react"
import {
  Database,
  Shield,
  Brain,
  BookOpen,
  Lock,
  TrendingUp,
  Trophy,
  Calendar,
  DollarSign,
  Phone,
  Users,
  BarChart3,
  Star,
  MessageSquare,
} from "lucide-react"

type Role = "admin" | "coach" | "parent"

interface ChatMessage {
  role: "user" | "ai"
  text: string
}

interface RoleData {
  label: string
  chatMessages: ChatMessage[]
  widgets: React.ReactNode
  colorAccent: string
  bgAccent: string
}

function AdminWidgets() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-lg border border-border bg-background p-3">
        <div className="mb-2 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-[oklch(0.55_0.10_240)]" />
          <span className="text-xs font-medium text-muted-foreground">
            Registration Trend
          </span>
        </div>
        <div className="flex items-end gap-1">
          {[40, 55, 45, 60, 70, 65, 80].map((h, i) => (
            <div
              key={i}
              className="w-full rounded-sm bg-[oklch(0.55_0.10_240)]/20"
              style={{ height: `${h}%`, minHeight: `${h * 0.5}px` }}
            />
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-border bg-background p-3">
        <div className="mb-2 flex items-center gap-2">
          <Users className="h-4 w-4 text-[oklch(0.55_0.10_240)]" />
          <span className="text-xs font-medium text-muted-foreground">
            Team Distribution
          </span>
        </div>
        <div className="flex flex-col gap-1.5">
          {[
            { label: "U12", count: 48 },
            { label: "U14", count: 36 },
            { label: "U16", count: 28 },
          ].map((t) => (
            <div key={t.label} className="flex items-center justify-between">
              <span className="text-xs text-foreground">{t.label}</span>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-[oklch(0.55_0.10_240)]"
                    style={{ width: `${(t.count / 48) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{t.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-full rounded-lg border border-border bg-background p-3">
        <div className="mb-2 flex items-center gap-2">
          <Calendar className="h-4 w-4 text-[oklch(0.55_0.10_240)]" />
          <span className="text-xs font-medium text-muted-foreground">
            Upcoming Events
          </span>
        </div>
        <div className="flex flex-col gap-1.5">
          {[
            "U12 Boys Training - Mon 5pm",
            "Board Meeting - Wed 7pm",
            "U14 Girls Match - Sat 10am",
          ].map((ev) => (
            <div
              key={ev}
              className="rounded-md border border-border/60 px-2.5 py-1.5 text-xs text-foreground"
            >
              {ev}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CoachWidgets() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="col-span-full rounded-lg border border-border bg-background p-3">
        <div className="mb-2 flex items-center gap-2">
          <Trophy className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium text-muted-foreground">
            Top Player Rankings
          </span>
        </div>
        <div className="flex flex-col gap-1.5">
          {[
            { name: "Liam D.", score: 92, trend: "+4" },
            { name: "Maya R.", score: 88, trend: "+8" },
            { name: "Ethan K.", score: 85, trend: "+2" },
          ].map((p, i) => (
            <div
              key={p.name}
              className="flex items-center justify-between rounded-md border border-border/60 px-2.5 py-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-primary">
                  #{i + 1}
                </span>
                <span className="text-xs text-foreground">{p.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-foreground">
                  {p.score}
                </span>
                <span className="text-xs text-primary">{p.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-border bg-background p-3">
        <div className="mb-2 flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium text-muted-foreground">
            Progress Trend
          </span>
        </div>
        <div className="flex items-end gap-1">
          {[30, 45, 50, 55, 65, 70, 78].map((h, i) => (
            <div
              key={i}
              className="w-full rounded-sm bg-primary/20"
              style={{ height: `${h}%`, minHeight: `${h * 0.5}px` }}
            />
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-border bg-background p-3">
        <div className="mb-2 flex items-center gap-2">
          <Star className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium text-muted-foreground">
            Evaluation Breakdown
          </span>
        </div>
        <div className="flex flex-col gap-1.5">
          {[
            { label: "Technical", score: 8.4 },
            { label: "Tactical", score: 7.8 },
            { label: "Physical", score: 8.1 },
          ].map((e) => (
            <div key={e.label} className="flex items-center justify-between">
              <span className="text-xs text-foreground">{e.label}</span>
              <span className="text-xs font-semibold text-foreground">
                {e.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ParentWidgets() {
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-lg border border-border bg-background p-4">
        <div className="mb-2 flex items-center gap-2">
          <Calendar className="h-4 w-4 text-[oklch(0.50_0.03_250)]" />
          <span className="text-xs font-medium text-muted-foreground">
            Next Game
          </span>
        </div>
        <div className="rounded-md bg-muted/50 p-3">
          <p className="text-sm font-medium text-foreground">
            Saturday, 10:00 AM
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Shouldice Athletic Park, Field 3
          </p>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-background p-4">
        <div className="mb-2 flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-[oklch(0.50_0.03_250)]" />
          <span className="text-xs font-medium text-muted-foreground">
            Fee Status
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground">Season Fee</span>
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            Paid
          </span>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-background p-4">
        <div className="mb-2 flex items-center gap-2">
          <Phone className="h-4 w-4 text-[oklch(0.50_0.03_250)]" />
          <span className="text-xs font-medium text-muted-foreground">
            Coach Contact
          </span>
        </div>
        <button className="w-full rounded-md border border-primary/30 bg-primary/5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10">
          Contact Coach Smith
        </button>
      </div>
    </div>
  )
}

const capabilities = [
  { icon: Database, label: "18 live data sources queried per interaction" },
  { icon: Shield, label: "Role-based access control" },
  { icon: Brain, label: "Semantic memory across conversations" },
  { icon: BookOpen, label: "Knowledge base integration" },
  { icon: Lock, label: "Secure, club-scoped permissions" },
]

export function JockAISpotlight() {
  const [activeRole, setActiveRole] = useState<Role>("admin")

  const roleData: Record<Role, RoleData> = {
    admin: {
      label: "Admin",
      colorAccent: "text-[oklch(0.55_0.10_240)]",
      bgAccent: "bg-[oklch(0.55_0.10_240)]",
      chatMessages: [
        {
          role: "user",
          text: "How many U12 players are registered this season?",
        },
        {
          role: "ai",
          text: "48 players across 3 teams. Registration is up 12% compared to last season.",
        },
      ],
      widgets: <AdminWidgets />,
    },
    coach: {
      label: "Coach",
      colorAccent: "text-primary",
      bgAccent: "bg-primary",
      chatMessages: [
        {
          role: "user",
          text: "Show me top player rankings from the last evaluation.",
        },
        {
          role: "ai",
          text: "Liam D. leads overall composite score. Maya R. shows highest improvement week over week.",
        },
      ],
      widgets: <CoachWidgets />,
    },
    parent: {
      label: "Parent",
      colorAccent: "text-[oklch(0.50_0.03_250)]",
      bgAccent: "bg-[oklch(0.50_0.03_250)]",
      chatMessages: [
        {
          role: "user",
          text: "When is my daughter's next game?",
        },
        {
          role: "ai",
          text: "Saturday at 10:00 AM, Shouldice Athletic Park, Field 3.",
        },
      ],
      widgets: <ParentWidgets />,
    },
  }

  const current = roleData[activeRole]

  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left Copy */}
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Jock AI
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground text-balance md:text-4xl">
              The Intelligence Layer Behind Your Club
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Jock AI helps your club run smarter. It adapts to each role and
              surfaces insights from your live data.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Jock interacts differently depending on who is using it.
              Administrators see full club analytics. Coaches see team and player
              insights. Parents see secure, child-specific information.
            </p>
          </div>

          {/* Right Interactive Panel */}
          <div>
            {/* Role Switcher */}
            <div className="mb-6 flex rounded-lg border border-border bg-background p-1">
              {(["admin", "coach", "parent"] as Role[]).map((role) => (
                <button
                  key={role}
                  onClick={() => setActiveRole(role)}
                  className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-all ${
                    activeRole === role
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {roleData[role].label}
                </button>
              ))}
            </div>

            {/* Chat Interface */}
            <div className="rounded-xl border border-border bg-background p-4">
              <div className="mb-4 flex items-center gap-2 border-b border-border pb-3">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  Jock AI
                </span>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                  {current.label} View
                </span>
              </div>

              <div className="mb-4 flex flex-col gap-3">
                {current.chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`rounded-lg px-3 py-2.5 text-sm ${
                      msg.role === "user"
                        ? "ml-8 bg-muted text-foreground"
                        : "mr-8 border border-primary/20 bg-primary/5 text-foreground"
                    }`}
                  >
                    {msg.role === "ai" && (
                      <span className="mb-1 block text-xs font-semibold text-primary">
                        Jock
                      </span>
                    )}
                    {msg.text}
                  </div>
                ))}
              </div>

              {/* Widgets */}
              {current.widgets}
            </div>
          </div>
        </div>

        {/* Capability Strip */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {capabilities.map((cap) => (
            <div
              key={cap.label}
              className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3"
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
