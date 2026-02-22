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
      
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">About Cartilage Healthcare</h1>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* CEO Information */}
          <div>
            <Card className="border border-border">
              <CardHeader>
                <CardTitle>Our Leadership</CardTitle>
                <CardDescription>Driven by Expertise and Excellence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-foreground/90 leading-relaxed mb-4">
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

          {/* Photo Gallery */}
          <div>
            <div className="sticky top-20">
              <h3 className="text-lg font-semibold text-foreground mb-4">Gallery</h3>
              <PhotoGallery />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
