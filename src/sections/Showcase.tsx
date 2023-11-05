
import { EmblaOptionsType } from 'embla-carousel-react'
import EmblaCarousel from "../components/EmblaCarousel"

const OPTIONS: EmblaOptionsType = { containScroll: 'trimSnaps' }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const Showcase = () => {
  return (
    <div className="w-4/5">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}

export default Showcase