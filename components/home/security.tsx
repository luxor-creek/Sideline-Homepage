import Link from "next/link"
import { ShieldCheck, Lock, ServerCog } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Security() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-16 md:px-14">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-14">
            {/* Icon cluster */}
            <div className="flex shrink-0 items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <ShieldCheck className="h-7 w-7 text-primary" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                <Lock className="h-5 w-5 text-primary/70" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                <ServerCog className="h-5 w-5 text-primary/70" />
              </div>
            </div>

            {/* Copy */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Security & Privacy
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground text-balance md:text-3xl">
                Your data stays yours.
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                Security and privacy are built into Sideline from the ground up,
                with strict role-based access controls so admins, coaches, and
                parents only see what they are authorized to see. Jock AI
                operates within your club's secure environment, querying live
                data without sending sensitive player information or financial
                records to foreign-controlled LLMs, ensuring your club and your
                families stay protected.
              </p>
              <div className="mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link href="/techies">For Techies</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
