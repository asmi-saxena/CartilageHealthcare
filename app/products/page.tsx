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
      image: '/dialysistoray.avif',
    },
    {
      name: 'Patient Monitors',
      manufacturer: 'COMEN Medicals',
      image: '/patient-monitor.jpg',
    },{
      name: 'OT Lights',
      manufacturer: 'Medifa ',
      image: '/medifaotlight.jpg',
    },
    {
      name: 'OT Tables Medifa 6000',
      manufacturer: 'Medifa ',
      image: '/medifa6000OTtable.jpg',
    },
    {
      name: 'OT Tables Medifa 7000',
      manufacturer: 'Medifa ',
      image: '/medifa7000OTtable.jpg',
    },
    {
      name: 'Mobile imaging OT table with lying surface made of carbon Medifa 8000',
      manufacturer: 'Medifa ',
      image: '/medifa8000OTtable.jpg',
    },

    {
      name: 'Examination Chair for Gynaecology, Urology, and Proctology',
      manufacturer: 'Medifa ',
      image: '/medifaExaminationchair.jpg',
    },
    {
      name: 'Defibrillators',
      manufacturer: 'COMEN Medicals',
      image: '/placeholder.jpg',
    },
    {
      name: 'ECG Machines',
      manufacturer: 'COMEN Medicals',
      image: '/placeholder.jpg',
    },
    {
      name: 'Ventilators',
      manufacturer: 'COMEN Medicals',
      image: '/placeholder.jpg',
    },
    {
      name: 'Fetal Monitors',
      manufacturer: 'COMEN Medicals',
      image: '/placeholder.jpg',
    },
    {
      name: 'Syringe Pumps',
      manufacturer: 'COMEN Medicals',
      image: '/placeholder.jpg',
    },
    {
      name: 'Volumetric Infusion Pumps',
      manufacturer: 'COMEN Medicals',
      image: '/placeholder.jpg',
    },
    {
      name: 'Anesthesia Machines',
      manufacturer: 'COMEN Medicals',
      image: '/placeholder.jpg',
    },
    {
      name: 'Warmers',
      manufacturer: 'COMEN Medicals',
      image: '/placeholder.jpg',
    },
    {
      name: 'Photo Therapy Units',
      manufacturer: 'COMEN Medicals',
      image: '/placeholder.jpg',
    },
    {
      name: 'Neonatal CPAP Systems',
      manufacturer: 'COMEN Medicals',
      image: '/placeholder.jpg',
    },
    
    {
      name: 'Tissue Processors',
      manufacturer: 'Laboratory Equipment',
      image: '/lab-equipment.jpg',
    },
    {
      name: 'Microtomes',
      manufacturer: 'Laboratory Equipment',
      image: '/lab-equipment.jpg',
    },
    {
      name: 'Embedding Machines',
      manufacturer: 'Laboratory Equipment',
      image: '/lab-equipment.jpg',
    },
    {
      name: 'Slide Warming Tables',
      manufacturer: 'Laboratory Equipment',
      image: '/lab-equipment.jpg',
    },
    {
      name: 'Floating Baths',
      manufacturer: 'Laboratory Equipment',
      image: '/lab-equipment.jpg',
    },
    {
      name: 'VDRL Rotators',
      manufacturer: 'Laboratory Equipment',
      image: '/lab-equipment.jpg',
    },
    {
      name: 'Colony Counters',
      manufacturer: 'Laboratory Equipment',
      image: '/lab-equipment.jpg',
    },
    {
      name: 'Blood Cell Counters',
      manufacturer: 'Laboratory Equipment',
      image: '/lab-equipment.jpg',
    },
    {
      name: 'Micro Slide Cabinets',
      manufacturer: 'Laboratory Equipment',
      image: '/lab-equipment.jpg',
    },
    {
      name: 'Block Cabinets',
      manufacturer: 'Laboratory Equipment',
      image: '/lab-equipment.jpg',
    },
    {
      name: 'Laminar Flow Benches',
      manufacturer: 'Clean Air Equipment',
      image: '/placeholder.jpg',
    },
    {
      name: 'Biological Safety Cabinets',
      manufacturer: 'Clean Air Equipment',
      image: '/placeholder.jpg',
    },
    {
      name: 'Sterilizers',
      manufacturer: 'Clean Air Equipment',
      image: '/placeholder.jpg',
    },
    {
      name: 'Autoclaves',
      manufacturer: 'Clean Air Equipment',
      image: '/placeholder.jpg',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Our Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden flex flex-col">
              {product.image && (
                <div className="w-full h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardHeader className="flex-grow">
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
