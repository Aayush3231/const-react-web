import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel-react'
import imageByIndex from '../assets/images'
import { BsChevronLeft, BsChevronRight }from 'react-icons/bs'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef,emblaApi] = useEmblaCarousel(options)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const [scrollProgress, setScrollProgress] = useState(0)

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    emblaApi.on('reInit', onScroll)
    emblaApi.on('scroll', onScroll)
  }, [emblaApi, onScroll])


  return (
    <div className="embla flex items-center justify-center">
      <div className='px-2  justify-center hidden sm:flex'>
      <button className="embla__prev hover:text-cyan-600 text-xl" onClick={scrollPrev}>
      <BsChevronLeft/>
      </button></div>
      <div className='em'>
      <div className="embla__viewport  sm:h-[--slide-height] h-40" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <img
                className="embla__slide__img sm:h-[--slide-height] h-56"
                src={imageByIndex(index)}
                alt="carouselslider"
              />
            </div>
          ))}
        </div>
      </div>
        <div className="embla__progress hidden sm:flex">
        <div
          className="embla__progress__bar"
          style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
        />
      </div>
      </div>
      <div className='px-2 justify-center hidden sm:flex'> 
      <button className="embla__next hover:text-cyan-600 text-xl" onClick={scrollNext}>
        <BsChevronRight/>
      </button></div>
    </div>
  )
}

export default EmblaCarousel