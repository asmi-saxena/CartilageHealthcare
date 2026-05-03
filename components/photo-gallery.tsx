'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const HEALTHCARE_PHOTOS = [
  'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1631217314831-4b4b248e5745?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1578496781514-66a84e0f3232?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1579154204601-01d430248e23?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1576091160699-112413f8342d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1579154204706-78ba9f389ff5?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1559033615-cd4628902d4a?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1576091160399-0ff71d0fbf5f?w=800&h=600&fit=crop',
]

export function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HEALTHCARE_PHOTOS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full aspect-video relative rounded-[28px] overflow-hidden shadow-lg shadow-slate-950/5 bg-muted border border-slate-200/80">
      <Image
        src={HEALTHCARE_PHOTOS[currentIndex]}
        alt={`Healthcare image ${currentIndex + 1}`}
        fill
        className="object-cover"
        onLoadingComplete={() => setIsLoading(false)}
        priority
      />

      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {HEALTHCARE_PHOTOS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {HEALTHCARE_PHOTOS.length}
      </div>
    </div>
  )
}
