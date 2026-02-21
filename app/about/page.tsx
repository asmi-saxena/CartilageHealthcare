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


      </section>

      <Footer />
    </main>
  )
}
