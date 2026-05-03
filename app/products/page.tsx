import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Products - Cartilage Healthcare',
  description: 'Our comprehensive range of medical equipment including dialysis machines, monitors, ventilators, and laboratory equipment.',
}

const products = [
  {
    name: 'Dialysis Machines',
    manufacturer: 'TORAY MEDICAL CO. JAPAN',
    category: 'Dialysis',
    image: '/dialysistoray.avif',
  },
  {
    name: 'Patient Monitors',
    manufacturer: 'COMEN Medicals',
    category: 'Monitoring',
    image: '/patient-monitor.jpg',
  },
  {
    name: 'OT Lights',
    manufacturer: 'Medifa',
    category: 'Surgical',
    image: '/medifaotlight.jpg',
  },
  {
    name: 'OT Tables Medifa 6000',
    manufacturer: 'Medifa',
    category: 'Surgical',
    image: '/medifa6000OTtable.jpg',
  },
  {
    name: 'OT Tables Medifa 7000',
    manufacturer: 'Medifa',
    category: 'Surgical',
    image: '/medifa7000OTtable.jpg',
  },
  {
    name: 'Mobile imaging OT table with lying surface made of carbon Medifa 8000',
    manufacturer: 'Medifa',
    category: 'Surgical',
    image: '/medifa8000OTtable.jpg',
  },
  {
    name: 'Examination Chair for Gynaecology, Urology, and Proctology',
    manufacturer: 'Medifa',
    category: 'Surgical',
    image: '/medifaExaminationchair.jpg',
  },
  {
    name: 'Defibrillators',
    manufacturer: 'COMEN Medicals',
    category: 'Critical Care',
    image: '/placeholder.jpg',
  },
  {
    name: 'ECG Machines',
    manufacturer: 'COMEN Medicals',
    category: 'Diagnostics',
    image: '/placeholder.jpg',
  },
  {
    name: 'Ventilators',
    manufacturer: 'COMEN Medicals',
    category: 'Critical Care',
    image: '/placeholder.jpg',
  },
  {
    name: 'Fetal Monitors',
    manufacturer: 'COMEN Medicals',
    category: 'Monitoring',
    image: '/placeholder.jpg',
  },
  {
    name: 'Syringe Pumps',
    manufacturer: 'COMEN Medicals',
    category: 'Infusion',
    image: '/placeholder.jpg',
  },
  {
    name: 'Volumetric Infusion Pumps',
    manufacturer: 'COMEN Medicals',
    category: 'Infusion',
    image: '/placeholder.jpg',
  },
  {
    name: 'Anesthesia Machines',
    manufacturer: 'COMEN Medicals',
    category: 'Critical Care',
    image: '/placeholder.jpg',
  },
  {
    name: 'Warmers',
    manufacturer: 'COMEN Medicals',
    category: 'Support',
    image: '/placeholder.jpg',
  },
  {
    name: 'Photo Therapy Units',
    manufacturer: 'COMEN Medicals',
    category: 'Therapy',
    image: '/placeholder.jpg',
  },
  {
    name: 'Neonatal CPAP Systems',
    manufacturer: 'COMEN Medicals',
    category: 'Neonatal Care',
    image: '/placeholder.jpg',
  },
  {
    name: 'Tissue Processors',
    manufacturer: 'Laboratory Equipment',
    category: 'Lab',
    image: '/lab-equipment.jpg',
  },
  {
    name: 'Microtomes',
    manufacturer: 'Laboratory Equipment',
    category: 'Lab',
    image: '/lab-equipment.jpg',
  },
  {
    name: 'Embedding Machines',
    manufacturer: 'Laboratory Equipment',
    category: 'Lab',
    image: '/lab-equipment.jpg',
  },
  {
    name: 'Slide Warming Tables',
    manufacturer: 'Laboratory Equipment',
    category: 'Lab',
    image: '/lab-equipment.jpg',
  },
  {
    name: 'Floating Baths',
    manufacturer: 'Laboratory Equipment',
    category: 'Lab',
    image: '/lab-equipment.jpg',
  },
  {
    name: 'VDRL Rotators',
    manufacturer: 'Laboratory Equipment',
    category: 'Lab',
    image: '/lab-equipment.jpg',
  },
  {
    name: 'Colony Counters',
    manufacturer: 'Laboratory Equipment',
    category: 'Lab',
    image: '/lab-equipment.jpg',
  },
  {
    name: 'Blood Cell Counters',
    manufacturer: 'Laboratory Equipment',
    category: 'Lab',
    image: '/lab-equipment.jpg',
  },
  {
    name: 'Micro Slide Cabinets',
    manufacturer: 'Laboratory Equipment',
    category: 'Lab',
    image: '/lab-equipment.jpg',
  },
  {
    name: 'Block Cabinets',
    manufacturer: 'Laboratory Equipment',
    category: 'Lab',
    image: '/lab-equipment.jpg',
  },
  {
    name: 'Laminar Flow Benches',
    manufacturer: 'Clean Air Equipment',
    category: 'Clean Air',
    image: '/placeholder.jpg',
  },
  {
    name: 'Biological Safety Cabinets',
    manufacturer: 'Clean Air Equipment',
    category: 'Clean Air',
    image: '/placeholder.jpg',
  },
  {
    name: 'Sterilizers',
    manufacturer: 'Clean Air Equipment',
    category: 'Clean Air',
    image: '/placeholder.jpg',
  },
  {
    name: 'Autoclaves',
    manufacturer: 'Clean Air Equipment',
    category: 'Clean Air',
    image: '/placeholder.jpg',
  },
]

const categories = Array.from(
  products.reduce((map, product) => {
    const group = map.get(product.category) ?? []
    group.push(product)
    map.set(product.category, group)
    return map
  }, new Map<string, typeof products>())
)

export default function Products() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Featured products</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground">Explore our most popular medical equipment</h2>
            </div>
            <p className="text-sm text-foreground/70"></p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <Card key={product.name} className="overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={500}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="px-6 pt-5">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-sm text-foreground/70">{product.manufacturer}</CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-2">
                  <Badge className="bg-primary/10 text-primary">{product.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Complete catalogue</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground">Products by category</h2>
          </div>

          <div className="space-y-14">
            {categories.map(([category, items]) => (
              <section key={category} className="rounded-[32px] border border-slate-200/80 bg-white/95 p-6 shadow-xl shadow-slate-950/5">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-foreground">{category}</h3>
                  <p className="text-sm text-foreground/70">{items.length} products</p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((product) => (
                    <Card key={product.name} className="overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl">
                      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                        <Image 
                          src={product.image} 
                          alt={product.name} 
                          width={400}
                          height={224}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="px-6 pt-5">
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <CardDescription className="text-sm text-foreground/70">{product.manufacturer}</CardDescription>
                      </CardHeader>
                      <CardContent className="px-6 pb-6 pt-2">
                        <Badge className="bg-primary/10 text-primary">{product.category}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
