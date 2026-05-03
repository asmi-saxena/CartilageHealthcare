import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ServiceSlider from '@/components/ServiceSlider'
import { CheckCircle, Wrench, HeartHandshake, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Services - Cartilage Healthcare',
  description: 'Our comprehensive services including maintenance, installation, training, technical support, calibration, and equipment upgrades.',
}

const slides = [
  {
    title: 'Equipment Maintenance',
    subtitle: 'Reliable Care',
    description:
      'Keep your healthcare systems running smoothly with scheduled maintenance, preventive checks, and expert repairs.',
    image: '/patient-monitor.jpg',
  },
  {
    title: 'Installation & Setup',
    subtitle: 'Professional Setup',
    description:
      'Seamless installation and on-site commissioning of medical equipment for hospitals, clinics, and labs.',
    image: '/dialysis-machine.jpg',
  },
  {
    title: 'Training & Education',
    subtitle: 'Empowered Teams',
    description:
      'Hands-on training programs that help staff operate and maintain equipment safely and confidently.',
    image: '/lab-equipment.jpg',
  },
  {
    title: 'Technical Support',
    subtitle: 'Rapid Response',
    description:
      '24/7 support coverage for troubleshooting, diagnostics, and emergency assistance across all devices.',
    image: '/consumables.jpg',
  },
]

const services = [
  {
    title: 'Equipment Maintenance',
    description:
      'Regular maintenance and servicing of all medical equipment to ensure optimal performance and longevity.',
    icon: CheckCircle,
  },
  {
    title: 'Installation and Setup',
    description:
      'Professional installation and setup of new medical equipment in healthcare facilities.',
    icon: Wrench,
  },
  {
    title: 'Training and Education',
    description:
      'Comprehensive training programs for healthcare professionals on the proper use and maintenance of equipment.',
    icon: HeartHandshake,
  },
  {
    title: 'Technical Support',
    description:
      '24/7 technical support for all our products to ensure minimal downtime in critical healthcare environments.',
    icon: TrendingUp,
  },
  {
    title: 'Calibration Services',
    description:
      'Regular calibration of medical equipment to maintain accuracy and compliance with regulatory standards.',
    icon: CheckCircle,
  },
  {
    title: 'Equipment Upgrades',
    description:
      'Upgrading existing equipment with the latest software and hardware improvements.',
    icon: Wrench,
  },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 max-w-3xl space-y-4 text-center mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Explore our solutions</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Services that power healthcare facilities</h1>
          </div>

          <ServiceSlider slides={slides} />

          <section className="mt-20 px-2 md:px-0">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary">All services</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Complete service coverage for your equipment</h2>
              </div>
              <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact our team
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Card key={service.title} className="overflow-hidden border border-slate-200/80 bg-white/95 shadow-lg shadow-slate-950/5 transition hover:-translate-y-1 hover:shadow-2xl">
                    <CardHeader className="flex items-center gap-4 px-6 pt-6">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-sm">
                        <Icon className="h-6 w-6" />
                      </span>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 pt-2">
                      <p className="text-foreground/70 leading-7">{service.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}
