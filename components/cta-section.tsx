export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-primary/20">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Ready to Transform Your Healthcare Facility?
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of healthcare facilities worldwide that trust Cartilage Healthcare for their medical equipment needs. Our team is ready to help you find the perfect solution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
            Schedule Consultation
          </button>
          <button className="border border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-semibold transition-colors">
            Download Brochure
          </button>
        </div>

        <p className="text-sm text-foreground/50 mt-8">
          Available 24/7 for emergency support • Free consultation • No commitment
        </p>
      </div>
    </section>
  )
}
