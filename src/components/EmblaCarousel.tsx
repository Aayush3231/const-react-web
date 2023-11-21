import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel-react'
import imageByIndex from '../assets/images'
import { BsChevronLeft, BsChevronRight }from 'react-icons/bs'
import { flushSync } from 'react-dom'
import contentByIndex, { contents } from '../constants'
import { motion} from 'framer-motion'
import { InView } from 'react-intersection-observer'



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
  const getContentIndex = (index:number) => index % contents.length;

  return (
    <div className="embla flex items-center justify-center">
      <div className='px-2  justify-center hidden sm:flex'>
      <button type='button' className="embla__prev hover:text-cyan-600 text-xl" onClick={scrollPrev} disabled={prevBtnDisabled}>
      <BsChevronLeft/>
      </button></div>
      <div className='em'>
      <div className="embla__viewport relative  sm:h-[--slide-height] h-full" ref={emblaRef}>
        <div className="embla__container first:text-zinc-700 ">
          {slides.map((index:number) => (
            <div className="embla__slide" key={index}>
               <div className="embla__slide__text top-[-5rem] sm:top-0">
               <InView>
                {({ ref, inView }) => (
                  <motion.div
                    className={`heading${getContentIndex(index) + 1}`}
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
                    transition={{
                      duration: 1.4,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                    ref={ref}
                  >
                    <h4 className='py-2 pt-5 text-lg sm:text-4xl text-slate-200 font-burford'>
                      {contentByIndex(index)[0].title}
                    </h4>
                  </motion.div>
                )}
              </InView>
                <motion.div className={`subtext${getContentIndex(index) + 1}`}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 4,
                  delay: 2.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}>
                  <p className='py-2 pt-6 text-sm sm:text-xl  text-slate-200 font-spacegrotesk absolute top-64 right-7 left-6'>
                    {contentByIndex(index)[0].subtext}
                  </p>
                </motion.div>
                <motion.div className='littletext'
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay:1,
                  ease: [0, 0.71, 0.2, 1.01]
                }}>
                  <span className='py-2 pt-5 text-xs sm:text-sm text-slate-200 font-spacegrotesk absolute top-44 right-6 left-6'>
                  {contentByIndex(index)[0].smaller}
                  </span>
                </motion.div>
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
                    className="embla__slide__img embla__parallax__img sm:h-[--slide-height] h-full brightness-50"
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