import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 via-background to-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-300/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <div className="mb-6 inline-block">
          <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Advanced Healthcare Solutions
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
          Advanced Medical Equipment <span className="text-primary">Solutions</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 text-balance mb-8 max-w-2xl mx-auto leading-relaxed">
          Specialized in dialysis machines and comprehensive healthcare equipment. We deliver quality assurance and technical support for healthcare infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
            View Products
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 md:gap-12 max-w-2xl mx-auto">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">500+</div>
            <p className="text-sm text-foreground/60">Installations</p>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">20+</div>
            <p className="text-sm text-foreground/60">Years Experience</p>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">98%</div>
            <p className="text-sm text-foreground/60">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
