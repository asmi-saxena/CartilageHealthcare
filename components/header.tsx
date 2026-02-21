'use client'

import { Button } from '@/components/ui/button'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { Logo } from '@/components/logo'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6 md:px-8 lg:px-12">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Logo className="h-12 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/products" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Products
          </a>
          <a href="/services" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Services
          </a>
          <a href="/about" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            About
          </a>
          <a href="/careers" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Careers
          </a>
          <a href="/contact" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <ThemeSwitcher />
      </div>
    </header>
  )
}
