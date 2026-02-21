import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'About Us - Cartilage Healthcare',
  description: 'Learn about Cartilage Healthcare\'s CEO and leadership team with 25+ years of experience in medical equipment solutions.',
}

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">About Cartilage Healthcare</h1>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our CEO</h2>
          
          <p className="text-foreground/80 leading-relaxed mb-6">
            With more than 25 years of experience as a Head of Service Operation (Bio Medical Engineering Department), our CEO has been instrumental in planning, implementing, and establishing new hospitals across the region.
          </p>
          
          <p className="text-foreground/80 leading-relaxed mb-8">
            Their expertise spans across various medical specialties, including:
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex gap-4">
              <span className="text-primary font-bold flex-shrink-0">•</span>
              <span className="text-foreground/80">Emergency Departments</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold flex-shrink-0">•</span>
              <span className="text-foreground/80">Operating Theaters</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold flex-shrink-0">•</span>
              <span className="text-foreground/80">ICUs and CCUs</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold flex-shrink-0">•</span>
              <span className="text-foreground/80">Cardiology</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold flex-shrink-0">•</span>
              <span className="text-foreground/80">Pathology Labs</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold flex-shrink-0">•</span>
              <span className="text-foreground/80">Radiology</span>
            </li>
          </ul>

          <p className="text-foreground/80 leading-relaxed">
            This wealth of experience ensures that Cartilage Healthcare remains at the forefront of medical equipment distribution and service, providing our clients with unparalleled expertise and support.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
