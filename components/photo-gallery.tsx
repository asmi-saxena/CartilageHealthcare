'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const SAMPLE_PHOTOS = [
  'https://images.unsplash.com/photo-1631217314831-4b4b248e5745?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1576091160699-112413f8342d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1579154204601-01d430248e23?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1631217314831-a8f2c3d25b9e?w=800&h=600&fit=crop',
]

export function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SAMPLE_PHOTOS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full aspect-video relative rounded-xl overflow-hidden shadow-lg bg-muted">
      <Image
        src={SAMPLE_PHOTOS[currentIndex]}
        alt={`Gallery image ${currentIndex + 1}`}
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
        {SAMPLE_PHOTOS.map((_, index) => (
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
        {currentIndex + 1} / {SAMPLE_PHOTOS.length}
      </div>
    </div>
  )
}
