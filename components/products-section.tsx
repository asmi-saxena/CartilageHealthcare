import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const productCategories = [
  {
    name: 'Dialysis Equipment',
    description: 'Advanced hemodialysis and peritoneal dialysis machines',
    count: '12+ Models',
    color: 'bg-primary',
    image: '/dialysis-machine.jpg',
    link: '/products',
  },
  {
    name: 'Patient Monitors',
    description: 'Multi-parameter patient monitoring systems',
    count: '8+ Models',
    color: 'bg-secondary',
    image: '/patient-monitor.jpg',
    link: '/products',
  },
  {
    name: 'Laboratory Equipment',
    description: 'Complete lab analysis and testing systems',
    count: '15+ Products',
    color: 'bg-accent',
    image: '/lab-equipment.jpg',
    link: '/products',
  },
  {
    name: 'Consumables',
    description: 'High-quality medical consumables and supplies',
    count: 'Full Range',
    color: 'bg-primary/60',
    image: '/consumables.jpg',
    link: '/products',
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive range of medical equipment and supplies for healthcare facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <a key={index} href={category.link} className="block">
              <Card className="border border-blue-200/50 bg-gradient-to-br from-white to-blue-50/20 hover:border-blue-400 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-200/50 group overflow-hidden h-full">
                <CardHeader className="pb-3">
                  <div className="relative h-32 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100/40 to-blue-50/30 flex items-center justify-center">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <Badge className="w-fit mb-2 bg-blue-100 text-blue-700 border-0">
                    {category.count}
                  </Badge>
                  <CardTitle className="text-lg text-foreground">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/60 text-sm">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-100/40 to-blue-50/30 rounded-lg p-8 md:p-12 text-center border border-blue-200/50">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Looking for specific equipment?
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Browse our complete catalog of medical equipment and find the perfect solution for your facility.
          </p>
          <Link href="/products" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
            View Product Catalog
          </Link>
        </div>
      </div>
    </section>
  )
}
