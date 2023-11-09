import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel-react'
import imageByIndex from '../assets/images'
import { BsChevronLeft, BsChevronRight }from 'react-icons/bs'
import { flushSync } from 'react-dom'
import contentByIndex from '../constants'


const TWEEN_FACTOR = 1.2

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef,emblaApi] = useEmblaCarousel(options)
  const [tweenValues, setTweenValues] = useState<number[]>([])
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  const onScroll = useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      return diffToTarget * (-1 / TWEEN_FACTOR) * 100
    })
    setTweenValues(styles)
  }, [emblaApi, setTweenValues])


  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])
  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])
  useEffect(() => {
    if (!emblaApi) return
    onScroll()
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll())
    })
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])


  return (
    <div className="embla flex items-center justify-center">
      <div className='px-2  justify-center hidden sm:flex'>
      <button type='button' className="embla__prev hover:text-cyan-600 text-xl" onClick={scrollPrev} disabled={prevBtnDisabled}>
      <BsChevronLeft/>
      </button></div>
      <div className='em'>
      <div className="embla__viewport relative  sm:h-[--slide-height] h-40" ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((index:any) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__text">
                <span className='bg-teal-500 border-4 py-2 rounded-md border-cyan-800 text-sm sm:text-3xl text-slate-700 font-burford'>{contentByIndex(index)}</span>
              </div>
              <div className="embla__parallax">
                <div
                  className="embla__parallax__layer"
                  style={{
                    ...(tweenValues.length && {
                      transform: `translateX(${tweenValues[index]}%)`
                    })
                  }}
                >
                  <img
                    className="embla__slide__img embla__parallax__img sm:h-[--slide-height] h-40"
                    src={imageByIndex(index)}
                    alt="Carousel images"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <div className='px-2 justify-center hidden sm:flex'> 
      <button type='button' className="embla__next hover:text-cyan-600 text-xl" onClick={scrollNext} disabled={nextBtnDisabled} >
        <BsChevronRight/>
      </button></div>
    </div>
  )
}

export default EmblaCarousel