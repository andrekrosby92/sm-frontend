import { default as NextImage } from 'next/image'
import React, { useState, useEffect, useCallback } from 'react'

interface ImageAttributes {
  src: string
  alt: string
}

interface ImageCarouselProps {
  images?: ImageAttributes[]
}

const placeholderImages = [
  {
    src: '/images/bildekor-to-hvite-elektriske-varebiler.jpg',
    alt: 'To hvite varebilder med blå firmadekor',
  },
  {
    src: '/images/bildekor-hvite-biler.jpg',
    alt: 'Hvite biler med firmadekor',
  },
  {
    src: '/images/bildekor-hvit-bil.jpg',
    alt: 'Hvit bil med bildekor',
  },
]

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images = placeholderImages }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false)

  // Preload all images when component mounts
  useEffect(() => {
    const preloadImages = async (): Promise<void> => {
      await Promise.all(
        images.map((image) => {
          return new Promise<boolean>((resolve) => {
            const img = new Image()
            img.src = image.src
            img.onload = () => resolve(true)
            img.onerror = () => resolve(false)
          })
        }),
      )
    }

    preloadImages()
  }, [images])

  const goToPrevious = (): void => {
    if (isTransitioning) {
      return
    }

    setIsTransitioning(true)
    setCurrentIndex((prev) => prev - 1)

    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 175)
  }

  const goToNext = useCallback((): void => {
    if (isTransitioning) {
      return
    }

    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)

    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 175)
  }, [isTransitioning])

  const goToSlide = (slideIndex: number): void => {
    if (isTransitioning || slideIndex === currentIndex) {
      return
    }

    setIsTransitioning(true)
    setCurrentIndex(slideIndex)

    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 175)
  }

  return (
    <div className="w-full mx-auto">
      <div className="relative w-full pb-[56.25%] overflow-hidden">
        {images.map((image, index) => (
          <NextImage
            alt={image.alt}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[175ms] ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            key={image.src}
            layout="fill"
            src={image.src}
            style={{ transform: 'translate3d(0,0,0)' }} // Hardware acceleration
          />
        ))}
      </div>

      {/* Navigation arrows and dots */}
      <div className="w-full py-1">
        <div className="w-min mx-auto flex justify-between items-center">
          <button
            aria-label="Go to previous image"
            className={`w-8 h-8 rounded-full ${
              currentIndex === 0 ? 'text-gray-200' : 'hover:text-[#231F20]'
            } transition-colors text-[20px] `}
            disabled={isTransitioning}
            onClick={() => currentIndex !== 0 && goToPrevious()}
          >
            &larr;
          </button>

          {/* Dots navigation */}
          <div className="mx-0.5 flex justify-center items-center space-x-1.5">
            {images.map((img, index) => (
              <button
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-colors ${
                  currentIndex === index ? 'w-4 bg-[#231F20]' : 'w-1.5 bg-gray-200'
                } `}
                disabled={isTransitioning}
                key={img.src}
                onClick={() => goToSlide(index)}
              >
                <span className="sr-only">{`Slide ${index + 1}`}</span>
              </button>
            ))}
          </div>

          <button
            aria-label="Go to next image"
            className={`w-8 h-8 rounded-full ${
              currentIndex === images.length - 1 ? 'text-gray-200' : 'hover:text-[#231F20]'
            } transition-colors text-[20px]`}
            disabled={isTransitioning}
            onClick={() => currentIndex !== images.length - 1 && goToNext()}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel
