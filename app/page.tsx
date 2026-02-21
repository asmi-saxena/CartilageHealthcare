import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { StatsSection } from '@/components/stats-section'
import { ServicesGrid } from '@/components/services-grid'
import { ProductsSection } from '@/components/products-section'
import { FeaturedProduct } from '@/components/featured-product'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Cartilage Healthcare - Medical Equipment Specialists',
  description: 'Advanced medical equipment solutions including dialysis machines, patient monitors, ventilators, and laboratory equipment. Quality assurance and technical support for healthcare infrastructure.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesGrid />
      <ProductsSection />
      <FeaturedProduct />
      <Footer />
    </main>
  )
}
