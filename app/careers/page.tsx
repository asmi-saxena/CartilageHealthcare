import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Careers - Cartilage Healthcare',
  description: 'Careers at Cartilage Healthcare. We\'re always looking for talented individuals to join our team.',
}

export default function Careers() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-gradient-to-br from-blue-50 via-background to-background py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          

          <section className="px-2 md:px-0">
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Open positions</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground">Currently hiring</h2>
            </div>

            <div className="space-y-6">
              <Card className="border border-slate-200/80 bg-white/95 shadow-lg shadow-slate-950/5">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl">Biomedical Engineer</CardTitle>
                      <CardDescription className="text-foreground/70 mt-2">Experience: 2 - 5 years</CardDescription>
                    </div>
                    <Badge className="bg-primary/10 text-primary border-0 whitespace-nowrap">Open</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground/80">
                    We are seeking a motivated Biomedical Engineer with 2 to 5 years of experience in medical devices or clinical equipment. The role involves supporting product maintenance, commissioning, and technical support activities, working closely with our service and clinical teams.
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Key Requirements</h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span className="text-foreground/80">Minimum 2 years and up to 5 years experience with medical devices</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span className="text-foreground/80">Hands-on experience with diagnostics, troubleshooting and maintenance</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span className="text-foreground/80">Good communication skills and willingness to travel for installations and service</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span className="text-foreground/80">Bachelor/Diploma degree in Biomedical Engineering, Electronics or related field</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                      <a href="mailto:cartilagehealthcare@gmail.com?subject=Application%20-%20Biomedical%20Engineer">Apply via Email</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/contact">Contact Us</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}
