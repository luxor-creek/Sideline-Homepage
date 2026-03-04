export function FeaturesHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-primary)/0.05,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Features
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-5xl">
            Explore Everything Sideline Can Do
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            A unified platform purpose-built for youth sports clubs. Every
            feature works together, powered by Jock AI intelligence.
          </p>
        </div>
      </div>
    </section>
  )
}
