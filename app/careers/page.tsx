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

        <p className="text-lg text-foreground/80 leading-relaxed">
          We're always looking for talented individuals to join our team. Check back soon for open positions.
        </p>
      </section>

      <Footer />
    </main>
  )
}
