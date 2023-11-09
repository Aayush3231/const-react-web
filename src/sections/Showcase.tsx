
import { EmblaOptionsType } from 'embla-carousel-react'
import EmblaCarousel from "../components/EmblaCarousel"

const OPTIONS: EmblaOptionsType = { containScroll: 'trimSnaps' }
    const SLIDE_COUNT = 4
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const Showcase = () => {
  return (
    <div className="w-full px-6 pb-5">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}

export default Showcase