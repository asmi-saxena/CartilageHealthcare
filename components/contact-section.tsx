import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Have questions? Our team is here to help and answer any question you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="border border-border">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg text-foreground">Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-foreground/70">
                123 Medical Plaza<br />
                Healthcare City, HC 12345<br />
                United States
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg text-foreground">Phone</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-2">Main: <a href="tel:+12345678901" className="text-primary hover:underline">+1 (234) 567-8901</a></p>
                <p className="text-foreground/70">Support: <a href="tel:+12345678902" className="text-primary hover:underline">+1 (234) 567-8902</a></p>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg text-foreground">Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-2">Sales: <a href="mailto:sales@cartilagehealthcare.com" className="text-primary hover:underline">sales@cartilagehealthcare.com</a></p>
                <p className="text-foreground/70">Support: <a href="mailto:support@cartilagehealthcare.com" className="text-primary hover:underline">support@cartilagehealthcare.com</a></p>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg text-foreground">Business Hours</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-foreground/70">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 3:00 PM</p>
                <p className="text-primary font-semibold mt-2">24/7 Emergency Support Available</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-6">
            <Card className="border border-border h-96 overflow-hidden flex items-center justify-center bg-muted">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary/50 mx-auto mb-4" />
                <p className="text-foreground/60 font-medium">Interactive Map</p>
                <p className="text-sm text-foreground/40">Cartilage Healthcare Office Locations</p>
              </div>
            </Card>

            <Card className="border border-border p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Quick Contact Form</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-semibold transition-colors">
                  Send Message
                </button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
