import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Wrench, HeartHandshake, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Services - Cartilage Healthcare',
  description: 'Our comprehensive services including maintenance, installation, training, technical support, calibration, and equipment upgrades.',
}

export default function Services() {
  const services = [
    {
      title: 'Equipment Maintenance',
      description: 'Regular maintenance and servicing of all medical equipment to ensure optimal performance and longevity.',
    },
    {
      title: 'Installation and Setup',
      description: 'Professional installation and setup of new medical equipment in healthcare facilities.',
    },
    {
      title: 'Training and Education',
      description: 'Comprehensive training programs for healthcare professionals on the proper use and maintenance of equipment.',
    },
    {
      title: 'Technical Support',
      description: '24/7 technical support for all our products to ensure minimal downtime in critical healthcare environments.',
    },
    {
      title: 'Calibration Services',
      description: 'Regular calibration of medical equipment to maintain accuracy and compliance with regulatory standards.',
    },
    {
      title: 'Equipment Upgrades',
      description: 'Upgrading existing equipment with the latest software and hardware improvements.',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
