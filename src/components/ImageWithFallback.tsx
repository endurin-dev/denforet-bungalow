'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
  fallbackColor?: string;
  fallbackLabel?: string;
}

export default function ImageWithFallback({
  src,
  fallbackSrc,
  fallbackColor = '#1F3B2D',
  fallbackLabel = 'Denforet Bungalow',
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="w-full h-full flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${fallbackColor}, #2D5640)` }}
      >
        <div className="text-center px-4">
          <div className="text-white/20 text-6xl mb-2">🌿</div>
          <span className="font-serif text-white/40 text-sm">{fallbackLabel}</span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      {...props}
      onError={() => setError(true)}
    />
  );
}
