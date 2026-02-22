import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    title: 'Medical Equipment',
    description: 'Comprehensive range of advanced medical equipment including dialysis machines, critical care equipments and laboratory solutions.',
    icon: '🏥',
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing and certification processes ensuring all equipment meets international healthcare standards and regulations.',
    icon: '✓',
  },
  {
    title: 'Laboratory Solutions',
    description: 'Complete laboratory equipment packages with technical support and maintenance programs for healthcare facilities.',
    icon: '🔬',
  },
  {
    title: 'Healthcare Infrastructure',
    description: 'End-to-end infrastructure solutions including installation, maintenance, training, and 24/7 technical support.',
    icon: '⚙️',
  },
]

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            We provide comprehensive medical equipment solutions and services to healthcare facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-blue-200/50 bg-gradient-to-br from-white to-blue-50/30 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 group">
              <CardHeader>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/60 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
