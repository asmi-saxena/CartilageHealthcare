import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Cartilage Healthcare provided exceptional service and top-quality equipment. Their technical support team is always available to assist us.",
    author: "Dr. Maria Rodriguez",
    role: "Medical Director",
    hospital: "City General Hospital",
    rating: 5,
  },
  {
    quote: "The TORAY systems have improved our efficiency significantly. The installation was seamless and the training was comprehensive.",
    author: "James Chen",
    role: "Hospital Administrator",
    hospital: "Metropolitan Medical Center",
    rating: 5,
  },
  {
    quote: "Outstanding professionalism and commitment to excellence. Cartilage Healthcare truly understands healthcare facility needs.",
    author: "Dr. Sarah Okonkwo",
    role: "Chief Medical Officer",
    hospital: "Advanced Healthcare Facility",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Healthcare <span className="text-primary">Professionals</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            See what healthcare facilities across the globe say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border p-6 hover:border-primary/50 transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
                <p className="text-sm text-primary font-medium">{testimonial.hospital}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
