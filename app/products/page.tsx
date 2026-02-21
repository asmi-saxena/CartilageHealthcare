import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Products - Cartilage Healthcare',
  description: 'Our comprehensive range of medical equipment including dialysis machines, monitors, ventilators, and laboratory equipment.',
}

export default function Products() {
  const products = [
    {
      name: 'Dialysis Machines',
      manufacturer: 'TORAY MEDICAL CO. JAPAN',
    },
    {
      name: 'Patient Monitors',
      manufacturer: 'COMEN Medicals',
    },
    {
      name: 'Defibrillators',
      manufacturer: 'COMEN Medicals',
    },
    {
      name: 'ECG Machines',
      manufacturer: 'COMEN Medicals',
    },
    {
      name: 'Ventilators',
      manufacturer: 'COMEN Medicals',
    },
    {
      name: 'Fetal Monitors',
      manufacturer: 'COMEN Medicals',
    },
    {
      name: 'Syringe Pumps',
      manufacturer: 'COMEN Medicals',
    },
    {
      name: 'Volumetric Infusion Pumps',
      manufacturer: 'COMEN Medicals',
    },
    {
      name: 'Anesthesia Machines',
      manufacturer: 'COMEN Medicals',
    },
    {
      name: 'Warmers',
      manufacturer: 'COMEN Medicals',
    },
    {
      name: 'Photo Therapy Units',
      manufacturer: 'COMEN Medicals',
    },
    {
      name: 'Neonatal CPAP Systems',
      manufacturer: 'COMEN Medicals',
    },
    {
      name: 'OT Lights',
      manufacturer: 'COMEN Medicals',
    },
    {
      name: 'OT Tables',
      manufacturer: 'COMEN Medicals',
    },
    {
      name: 'Tissue Processors',
      manufacturer: 'Laboratory Equipment',
    },
    {
      name: 'Microtomes',
      manufacturer: 'Laboratory Equipment',
    },
    {
      name: 'Embedding Machines',
      manufacturer: 'Laboratory Equipment',
    },
    {
      name: 'Slide Warming Tables',
      manufacturer: 'Laboratory Equipment',
    },
    {
      name: 'Floating Baths',
      manufacturer: 'Laboratory Equipment',
    },
    {
      name: 'VDRL Rotators',
      manufacturer: 'Laboratory Equipment',
    },
    {
      name: 'Colony Counters',
      manufacturer: 'Laboratory Equipment',
    },
    {
      name: 'Blood Cell Counters',
      manufacturer: 'Laboratory Equipment',
    },
    {
      name: 'Micro Slide Cabinets',
      manufacturer: 'Laboratory Equipment',
    },
    {
      name: 'Block Cabinets',
      manufacturer: 'Laboratory Equipment',
    },
    {
      name: 'Laminar Flow Benches',
      manufacturer: 'Clean Air Equipment',
    },
    {
      name: 'Biological Safety Cabinets',
      manufacturer: 'Clean Air Equipment',
    },
    {
      name: 'Sterilizers',
      manufacturer: 'Clean Air Equipment',
    },
    {
      name: 'Autoclaves',
      manufacturer: 'Clean Air Equipment',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Our Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription className="text-sm">{product.manufacturer}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
