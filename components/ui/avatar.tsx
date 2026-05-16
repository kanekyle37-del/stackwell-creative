'use client'

import * as React from 'react'

export function Avatar({ className, style, children }: { className?: string; style?: React.CSSProperties; children: React.ReactNode }) {
  return (
    <div className={`relative flex shrink-0 overflow-hidden rounded-full ${className ?? ''}`} style={style}>
      {children}
    </div>
  )
}

export function AvatarImage({ src, alt }: { src?: string; alt?: string }) {
  if (!src) return null
  return <img src={src} alt={alt} className="aspect-square h-full w-full object-cover" />
}

export function AvatarFallback({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      {children}
    </div>
  )
}
