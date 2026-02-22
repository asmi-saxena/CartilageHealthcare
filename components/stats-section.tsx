export function StatsSection() {
  const stats = [
    { value: '100+', label: 'Healthcare Facilities', icon: '🏥' },
    { value: '2,000+', label: 'Equipment Installed', icon: '⚙️' },
    { value: '20+', label: 'Years in Industry', icon: '📈' },
    
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 justify-items-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-3">
                {stat.value}
              </div>
              <p className="text-primary-foreground/90 font-medium text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
