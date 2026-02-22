import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2 } from 'lucide-react'

const features = [
  'Advanced filtration technology',
  'User-friendly interface',
  'Real-time monitoring',
  'Energy efficient operation',
]

const support = [
  'Technical troubleshooting',
  'Remote diagnostics',
  'Maintenance services',
  'Operator training',
]

export function FeaturedProduct() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <Badge className="bg-primary/10 text-primary border-0 mb-4">
            Featured Product
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            TORAY Dialysis <span className="text-primary">Systems</span>
          </h2>
          <p className="text-base md:text-2xl font-bold text-primary mb-4">
            Authorised Importer and Distributor for India and Nepal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex items-center justify-center bg-gradient-to-br from-blue-100/40 to-blue-50/30 rounded-lg h-96 border border-blue-200/50 overflow-hidden shadow-lg shadow-blue-100/50">
            <img 
              src="/dialysistoray.avif" 
              alt="TORAY Dialysis Machine"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <Card className="border border-blue-200/50 bg-gradient-to-br from-white to-blue-50/20 mb-6 shadow-md shadow-blue-100/30">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Product Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-foreground/70 leading-relaxed">
                  The TORAY Dialysis System represents the pinnacle of medical equipment engineering, offering state-of-the-art filtration technology combined with user-friendly operation. Designed for maximum efficiency and patient safety, it's the trusted choice of healthcare facilities worldwide.
                </CardDescription>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Key Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Technical Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {support.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-100/40 to-blue-50/30 rounded-lg p-8 border border-blue-200/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Experience the TORAY Difference
              </h3>
              <p className="text-foreground/70">
                Request a demo or consultation with our specialists today.
              </p>
            </div>
            <Link href="/products" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap inline-block">
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
