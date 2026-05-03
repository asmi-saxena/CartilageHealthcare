"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'

type Slide = {
  title: string
  subtitle: string
  description: string
  image: string
}

export default function ServiceSlider({ slides }: { slides: Slide[] }) {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = sliderRef.current
    if (!container) return

    const interval = window.setInterval(() => {
      const slide = container.querySelector<HTMLElement>('article')
      if (!slide) return

      const scrollAmount = slide.offsetWidth + 24
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }, 4500)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="rounded-[32px] border border-slate-200/80 bg-white/95 p-4 shadow-xl shadow-slate-950/5">
      <div className="mb-5 flex flex-col gap-3 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Featured services</p>
          <h2 className="text-2xl font-semibold text-foreground">Swipe through the expert services we offer</h2>
        </div>
        <p className="text-sm text-foreground/70">Service highlights</p>
      </div>

      <div
        ref={sliderRef}
        className="-mx-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100 sm:-mx-6"
        style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
      >
        <div className="flex gap-6 px-4 sm:px-6" style={{ minWidth: 'max-content' }}>
          {slides.map((slide) => (
            <article
              key={slide.title}
              className="relative min-w-[80vw] sm:min-w-[43vw] md:min-w-[36vw] shrink-0 snap-start overflow-hidden rounded-[28px] border border-slate-200/80 bg-slate-950 shadow-2xl shadow-slate-950/10"
            >
              <div className="relative h-72 w-full">
                <Image src={slide.image} alt={slide.title} fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-950">
                  {slide.subtitle}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-white">{slide.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-100/90">{slide.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
