import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - Cartilage Healthcare',
  description: 'Contact Cartilage Healthcare. Get in touch with us for inquiries, support, and business opportunities.',
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary h-32"
                  placeholder="Your message"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Phone
                </h3>
                <p className="text-foreground/80">+91-9871592864</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Email
                </h3>
                <p className="text-foreground/80">cartilagehealthcare@gmail.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Address
                </h3>
                <p className="text-foreground/80">C 215 Block, ITHUM Tower, Sector 62, Noida, India</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Business Hours
                </h3>
                <p className="text-foreground/80">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-foreground/80">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-96 bg-muted rounded-lg border border-border overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.5234567891234!2d77.36!3d28.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce477c0b42cbd%3A0x5b5b0b0b0b0b0b0b!2sITHUM%20Tower%2C%20C%20215%20Block%2C%20Sector%2062%2C%20Noida!5e0!3m2!1sen!2sin!4v1640000000000" 
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
