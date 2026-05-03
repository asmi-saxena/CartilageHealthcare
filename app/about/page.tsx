import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PhotoGallery } from '@/components/photo-gallery'

export const metadata = {
  title: 'About Us - Cartilage Healthcare',
  description: 'Learn about Cartilage Healthcare\'s CEO and leadership team with 25+ years of experience in medical equipment solutions.',
}

export default function About() {
  const specialties = [
    'Emergency Departments',
    'Operating Theaters',
    'ICUs and CCUs',
    'Cardiology',
    'Pathology Labs',
    'Radiology',
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-gradient-to-br from-blue-50 via-background to-background py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <Card className="border border-slate-200/80 bg-white/95 shadow-lg shadow-slate-950/5">
                <CardHeader>
                  <CardTitle>Our Leadership</CardTitle>
                  <CardDescription>Driven by Expertise and Excellence</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-foreground/90 leading-relaxed">
                      With more than 25 years of experience as a Head of Service Operation (Bio Medical Engineering Department), our CEO has been instrumental in planning, implementing, and establishing new hospitals across the region.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Areas of Expertise</h3>
                    <ul className="space-y-2">
                      {specialties.map((specialty, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-0.5">•</span>
                          <span className="text-foreground/80">{specialty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-foreground/90 leading-relaxed">
                      This wealth of experience ensures that Cartilage Healthcare remains at the forefront of medical equipment distribution and service, providing our clients with unparalleled expertise and support.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-primary mb-2">Gallery</p>
                  <h3 className="text-2xl font-semibold text-foreground">Healthcare in action</h3>
                </div>
                <PhotoGallery />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
