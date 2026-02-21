'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function Logo({ className }: { className?: string }) {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={className} />
  }

  const currentTheme = theme === 'system' ? systemTheme : theme
  const logoSrc = currentTheme === 'dark' ? '/logodark.png' : '/logo.png'

  return (
    <img 
      src={logoSrc} 
      alt="Cartilage Healthcare" 
      className={className}
    />
  )
}
