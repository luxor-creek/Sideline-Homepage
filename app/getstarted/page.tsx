"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft, Check, Users, Calendar, Globe, ChevronDown } from "lucide-react"

const STEPS = ["Account", "Your Role", "Organization", "Insights", "Invite Team", "Get Started"]

const SPORTS = [
  "Baseball", "Basketball", "Football", "Hockey", "Lacrosse", "Soccer",
  "Softball", "Volleyball", "Archery", "Australian Football", "Badminton",
  "Ball Hockey", "Beach Volleyball", "Bocce", "Bowling", "Boxing",
  "Broomball", "Cheerleading", "Chess", "Cricket", "Cross Country Running",
  "Curling", "Cycling", "Dance", "Disc Golf", "Dodgeball", "Fastpitch",
  "Field Hockey", "Flag Football", "Golf", "Gymnastics", "Handball",
  "Inline Hockey", "Martial Arts", "Pickleball", "Ringette", "Rugby",
  "Skating", "Skiing", "Swimming", "Tennis", "Track & Field",
  "Ultimate Frisbee", "Water Polo", "Wrestling", "Other",
]

const ORG_TYPES = ["Club", "League", "Association", "School", "Civic", "Other"]
const ROLES = ["President", "Webmaster", "Scheduler", "Board Member", "Secretary", "Director", "Treasurer", "Registrar", "Coordinator", "Commissioner", "Vice President", "Other"]

export default function GetStartedPage() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", password: "",
    role: "",
    orgName: "", orgType: "", sport: "", phone: "",
    city: "", country: "", yourRole: "",
    participantType: "", memberCount: "", revenue: "",
    adminFirstName: "", adminLastName: "", adminEmail: "", adminRole: "",
    admins: [] as { name: string; email: string; role: string }[],
    startWith: "",
  })

  const set = (key: string, value: any) => setForm(f => ({ ...f, [key]: value }))

  const addAdmin = () => {
    if (!form.adminEmail) return
    set("admins", [...form.admins, {
      name: `${form.adminFirstName} ${form.adminLastName}`.trim(),
      email: form.adminEmail,
      role: form.adminRole,
    }])
    set("adminFirstName", ""); set("adminLastName", ""); set("adminEmail", ""); set("adminRole", "")
  }

  const next = () => setStep(s => Math.min(s + 1, STEPS.length - 1))
  const prev = () => setStep(s => Math.max(s - 1, 0))

  const finish = () => {
    setDone(true)
    setTimeout(() => { window.location.href = "https://sideline.page" }, 2000)
  }

  const inp = "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"

  if (done) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-heading)]">You're all set!</h2>
        <p className="text-muted-foreground">Taking you to your dashboard…</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/images/sideline-logo-green.png" alt="Sideline" width={120} height={32} className="h-8 w-auto" />
        </Link>
        <span className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <a href="https://sideline.page/auth" className="text-primary font-medium hover:underline">Log in</a>
        </span>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 border-r border-border px-6 py-10 gap-1 bg-muted/20">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center gap-3 py-2.5">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 transition-all ${
                i < step ? "bg-primary text-primary-foreground" :
                i === step ? "bg-primary text-primary-foreground ring-4 ring-primary/20" :
                "bg-muted text-muted-foreground border border-border"
              }`}>
                {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
              </div>
              <span className={`text-sm font-medium ${i === step ? "text-foreground" : i < step ? "text-foreground/60" : "text-muted-foreground"}`}>{label}</span>
            </div>
          ))}
          <div className="mt-auto pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground leading-relaxed">Free to start. No credit card required.</p>
          </div>
        </aside>

        <main className="flex-1 flex items-start justify-center px-6 py-12">
          <div className="w-full max-w-lg">

            {/* Mobile progress */}
            <div className="flex lg:hidden gap-1 mb-8">
              {STEPS.map((_, i) => (
                <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-muted"}`} />
              ))}
            </div>

            {/* Step 0 */}
            {step === 0 && (
              <div className="space-y-5">
                <div>
                  <h1 className="text-3xl font-bold text-foreground font-[family-name:var(--font-heading)]">Create your free account</h1>
                  <p className="mt-2 text-muted-foreground">Get your club set up in minutes. No credit card required.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5"><label className="text-sm font-medium text-foreground">First name</label>
                    <input className={inp} placeholder="John" value={form.firstName} onChange={e => set("firstName", e.target.value)} /></div>
                  <div className="space-y-1.5"><label className="text-sm font-medium text-foreground">Last name</label>
                    <input className={inp} placeholder="Smith" value={form.lastName} onChange={e => set("lastName", e.target.value)} /></div>
                </div>
                <div className="space-y-1.5"><label className="text-sm font-medium text-foreground">Email</label>
                  <input className={inp} type="email" placeholder="john@yourclub.com" value={form.email} onChange={e => set("email", e.target.value)} /></div>
                <div className="space-y-1.5"><label className="text-sm font-medium text-foreground">Password</label>
                  <input className={inp} type="password" placeholder="Create a password" value={form.password} onChange={e => set("password", e.target.value)} /></div>
                <button onClick={next} disabled={!form.firstName || !form.email || !form.password}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-40 transition-colors">
                  Create account <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-muted-foreground">By continuing, you agree to our <Link href="/terms" className="text-primary hover:underline">Terms</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
              </div>
            )}

            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <h1 className="text-3xl font-bold text-foreground font-[family-name:var(--font-heading)]">What best describes you?</h1>
                  <p className="mt-2 text-muted-foreground">We'll tailor your setup based on your role.</p>
                </div>
                <div className="space-y-3">
                  {[
                    { v: "club_admin", l: "Club Administrator", d: "I manage a sports club or association." },
                    { v: "league_admin", l: "League Administrator", d: "I run a league with multiple teams." },
                    { v: "registrar", l: "Registrar", d: "I handle registrations and payments." },
                    { v: "coach", l: "Coach / Team Manager", d: "I coach or manage a team." },
                    { v: "facility", l: "Facility Manager", d: "I manage a sports facility or venue." },
                  ].map(o => (
                    <button key={o.v} onClick={() => set("role", o.v)}
                      className={`w-full text-left rounded-xl border p-4 transition-all ${form.role === o.v ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card hover:border-primary/50"}`}>
                      <div className="font-medium text-foreground">{o.l}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">{o.d}</div>
                    </button>
                  ))}
                </div>
                <Nav onBack={prev} onNext={next} disabled={!form.role} />
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <h1 className="text-3xl font-bold text-foreground font-[family-name:var(--font-heading)]">Tell us about your organization</h1>
                  <p className="mt-2 text-muted-foreground">This sets up your club's workspace.</p>
                </div>
                <div className="space-y-1.5"><label className="text-sm font-medium text-foreground">Organization name</label>
                  <input className={inp} placeholder="e.g. Eastside Soccer Club" value={form.orgName} onChange={e => set("orgName", e.target.value)} /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5"><label className="text-sm font-medium text-foreground">Organization type</label>
                    <Sel value={form.orgType} onChange={v => set("orgType", v)} opts={ORG_TYPES} ph="Select type" inp={inp} /></div>
                  <div className="space-y-1.5"><label className="text-sm font-medium text-foreground">Primary sport</label>
                    <Sel value={form.sport} onChange={v => set("sport", v)} opts={SPORTS} ph="Select sport" inp={inp} /></div>
                </div>
                <div className="space-y-1.5"><label className="text-sm font-medium text-foreground">Phone number</label>
                  <input className={inp} type="tel" placeholder="(000) 000-0000" value={form.phone} onChange={e => set("phone", e.target.value)} /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5"><label className="text-sm font-medium text-foreground">City</label>
                    <input className={inp} placeholder="City" value={form.city} onChange={e => set("city", e.target.value)} /></div>
                  <div className="space-y-1.5"><label className="text-sm font-medium text-foreground">Country</label>
                    <Sel value={form.country} onChange={v => set("country", v)} opts={["Canada", "United States", "United Kingdom", "Australia", "Other"]} ph="Select country" inp={inp} /></div>
                </div>
                <div className="space-y-1.5"><label className="text-sm font-medium text-foreground">Your role at this organization</label>
                  <Sel value={form.yourRole} onChange={v => set("yourRole", v)} opts={ROLES} ph="Select your role" inp={inp} /></div>
                <Nav onBack={prev} onNext={next} disabled={!form.orgName || !form.orgType} />
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-7">
                <div>
                  <h1 className="text-3xl font-bold text-foreground font-[family-name:var(--font-heading)]">Organization insights</h1>
                  <p className="mt-2 text-muted-foreground">Helps us set up the right features for you.</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Participant type</label>
                  <div className="flex gap-2">
                    {["Youth", "Adult", "Both"].map(v => (
                      <button key={v} onClick={() => set("participantType", v)}
                        className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${form.participantType === v ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/50"}`}>{v}</button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">How many members annually?</label>
                  <div className="flex flex-wrap gap-2">
                    {["Under 50", "50–100", "100–250", "250–500", "500–1000", "1000–2500", "2500–5000", "5000+"].map(v => (
                      <button key={v} onClick={() => set("memberCount", v)}
                        className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-all ${form.memberCount === v ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/50"}`}>{v}</button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Expected annual registration revenue</label>
                  <div className="flex flex-wrap gap-2">
                    {["No registrations", "$0–$25k", "$25k–$50k", "$50k–$100k", "$100k–$250k", "$250k–$500k", "$500k+"].map(v => (
                      <button key={v} onClick={() => set("revenue", v)}
                        className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-all ${form.revenue === v ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/50"}`}>{v}</button>
                    ))}
                  </div>
                </div>
                <Nav onBack={prev} onNext={next} />
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div className="space-y-5">
                <div>
                  <h1 className="text-3xl font-bold text-foreground font-[family-name:var(--font-heading)]">Add organization admins</h1>
                  <p className="mt-2 text-muted-foreground">Invite others to help manage your club. You can skip this for now.</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5"><label className="text-sm font-medium text-foreground">First name</label>
                      <input className={inp} placeholder="John" value={form.adminFirstName} onChange={e => set("adminFirstName", e.target.value)} /></div>
                    <div className="space-y-1.5"><label className="text-sm font-medium text-foreground">Last name</label>
                      <input className={inp} placeholder="Smith" value={form.adminLastName} onChange={e => set("adminLastName", e.target.value)} /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5"><label className="text-sm font-medium text-foreground">Email</label>
                      <input className={inp} type="email" placeholder="john@club.com" value={form.adminEmail} onChange={e => set("adminEmail", e.target.value)} /></div>
                    <div className="space-y-1.5"><label className="text-sm font-medium text-foreground">Role</label>
                      <Sel value={form.adminRole} onChange={v => set("adminRole", v)} opts={ROLES} ph="Select role" inp={inp} /></div>
                  </div>
                  <div className="flex justify-end">
                    <button onClick={addAdmin} disabled={!form.adminEmail}
                      className="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-40 transition-colors">Add</button>
                  </div>
                </div>
                {form.admins.length > 0 && (
                  <div className="rounded-xl border border-border divide-y divide-border overflow-hidden">
                    <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-muted/40">Administrators</div>
                    {[{ name: `${form.firstName} ${form.lastName}`, email: form.email, role: form.yourRole || "Admin", you: true }, ...form.admins.map(a => ({ ...a, you: false }))].map((a, i) => (
                      <div key={i} className="flex items-center justify-between px-4 py-3">
                        <div>
                          <div className="text-sm font-medium text-foreground">{a.name}{a.you && <span className="ml-1.5 text-xs text-muted-foreground">(You)</span>}</div>
                          <div className="text-xs text-muted-foreground">{a.email}</div>
                        </div>
                        <span className="text-xs text-muted-foreground">{a.role}</span>
                      </div>
                    ))}
                  </div>
                )}
                <Nav onBack={prev} onNext={next} nextLabel="Continue" />
              </div>
            )}

            {/* Step 5 */}
            {step === 5 && (
              <div className="space-y-5">
                <div>
                  <h1 className="text-3xl font-bold text-foreground font-[family-name:var(--font-heading)]">What would you like to start with?</h1>
                  <p className="mt-2 text-muted-foreground">You'll have access to everything — we'll just get you on the right track.</p>
                </div>
                <div className="space-y-3">
                  {[
                    { v: "registration", icon: <Check className="w-5 h-5" />, l: "Registration & Payments", d: "Create custom registration forms and collect online payments." },
                    { v: "scheduling", icon: <Calendar className="w-5 h-5" />, l: "Team & Season Management", d: "Manage teams, schedules, scores, standings, and communication." },
                    { v: "website", icon: <Globe className="w-5 h-5" />, l: "Club Website", d: "Build and manage your organization's public website." },
                    { v: "evaluations", icon: <Users className="w-5 h-5" />, l: "Evaluations & Tryouts", d: "Run player evaluations and automate team selection." },
                  ].map(o => (
                    <button key={o.v} onClick={() => set("startWith", o.v)}
                      className={`w-full text-left rounded-xl border p-4 flex items-start gap-4 transition-all ${form.startWith === o.v ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card hover:border-primary/50"}`}>
                      <div className={`mt-0.5 flex-shrink-0 ${form.startWith === o.v ? "text-primary" : "text-muted-foreground"}`}>{o.icon}</div>
                      <div>
                        <div className="font-medium text-foreground">{o.l}</div>
                        <div className="text-sm text-muted-foreground mt-0.5">{o.d}</div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <button onClick={prev} className="flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <button onClick={finish} className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                    Start now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  )
}

function Sel({ value, onChange, opts, ph, inp }: { value: string; onChange: (v: string) => void; opts: string[]; ph: string; inp: string }) {
  return (
    <div className="relative">
      <select value={value} onChange={e => onChange(e.target.value)} className={`${inp} appearance-none pr-8 cursor-pointer`}>
        <option value="">{ph}</option>
        {opts.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
    </div>
  )
}

function Nav({ onBack, onNext, disabled, nextLabel = "Continue" }: { onBack: () => void; onNext: () => void; disabled?: boolean; nextLabel?: string }) {
  return (
    <div className="flex gap-3 pt-2">
      <button onClick={onBack} className="flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back
      </button>
      <button onClick={onNext} disabled={disabled} className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-40 transition-colors">
        {nextLabel} <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}
