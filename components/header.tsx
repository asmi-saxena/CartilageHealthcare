'use client'

import { Button } from '@/components/ui/button'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { Logo } from '@/components/logo'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-20 md:h-24 items-center justify-between px-6 md:px-8 lg:px-12">
        <a href="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
          <Logo className="h-20 w-auto md:h-24 lg:h-28" />
        </a>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-8">
            <a href="/about" className="text-lg md:text-xl font-semibold text-foreground/90 hover:text-foreground transition-colors">
              About
            </a>
            <a href="/products" className="text-lg md:text-xl font-medium text-foreground/80 hover:text-foreground transition-colors">
              Products
            </a>
            <a href="/services" className="text-lg md:text-xl font-medium text-foreground/80 hover:text-foreground transition-colors">
              Services
            </a>
            <a href="/careers" className="text-lg md:text-xl font-medium text-foreground/80 hover:text-foreground transition-colors">
              Careers
            </a>
            <a href="/contact" className="text-lg md:text-xl font-medium text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
