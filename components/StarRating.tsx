'use client'

import { useId } from 'react'

interface StarRatingProps {
  rating: number
  size?: number
}

export default function StarRating({ rating, size = 14 }: StarRatingProps) {
  const uid = useId()

  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} stars`}>
      {[1, 2, 3, 4, 5].map(i => {
        const gradId = `${uid}-star-${i}`
        const isFull = rating >= i
        const isHalf = !isFull && rating >= i - 0.5

        return (
          <svg key={i} width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {isHalf && (
              <defs>
                <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="0">
                  <stop offset="50%" stopColor="#c8a04e" />
                  <stop offset="50%" stopColor="rgba(200,160,78,0.15)" />
                </linearGradient>
              </defs>
            )}
            <path
              d="M9 1.5l2.163 4.38 4.837.703-3.5 3.412.826 4.817L9 12.553l-4.326 2.259.826-4.817L2 6.583l4.837-.703L9 1.5z"
              fill={isFull ? '#c8a04e' : isHalf ? `url(#${gradId})` : 'rgba(200,160,78,0.15)'}
              stroke="#c8a04e"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />
          </svg>
        )
      })}
    </div>
  )
}
