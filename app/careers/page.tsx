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
      
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Careers at Cartilage Healthcare</h1>

        <p className="text-lg text-foreground/80 leading-relaxed mb-8">
          We're always looking for talented individuals to join our team. Below is an open position we are currently hiring for.
        </p>

        <div className="max-w-3xl mx-auto">
          <Card className="border border-border">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">Biomedical Engineer</CardTitle>
                  <CardDescription className="text-foreground/70">Experience: 2 - 5 years</CardDescription>
                </div>
                <Badge className="bg-primary/10 text-primary border-0">Open</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">
                We are seeking a motivated Biomedical Engineer with 2 to 5 years of experience in medical devices or clinical equipment. The role involves supporting product maintenance, commissioning, and technical support activities, working closely with our service and clinical teams.
              </p>

              <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-6">
                <li>Minimum 2 years and up to 5 years experience with medical devices.</li>
                <li>Hands-on experience with diagnostics, troubleshooting and maintenance.</li>
                <li>Good communication skills and willingness to travel for installations and service.</li>
                <li>Bachelor/ Diploma degree in Biomedical Engineering , Electronics or related field.</li>
              </ul>

              <div className="flex items-center gap-4">
                <Button asChild>
                  <a href="mailto:cartilagehealthcare@gmail.com?subject=Application%20-%20Biomedical%20Engineer">Apply via Email</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
