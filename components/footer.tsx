'use client'

'use client'

import { Logo } from '@/components/logo'

export function Footer() {
  return (
    <footer className="border-t border-blue-200/50 bg-gradient-to-b from-blue-50/40 to-blue-100/20">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo className="h-8 w-auto" />
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Advanced medical equipment solutions for healthcare facilities worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Dialysis Equipment
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Patient Monitors
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Laboratory Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Consumables
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-foreground/60 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-foreground/60 hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-foreground/60 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/services" className="text-foreground/60 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+919871592864" className="text-foreground/60 hover:text-primary transition-colors">
                  +91-9871592864
                </a>
              </li>
              <li>
                <a href="mailto:cartilagehealthcare@gmail.com" className="text-foreground/60 hover:text-primary transition-colors">
                  cartilagehealthcare@gmail.com
                </a>
              </li>
              <li className="text-foreground/60">
                C 215 Block, ITHUM Tower, Sector 62, Noida, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-200/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © 2024 Cartilage Healthcare. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
