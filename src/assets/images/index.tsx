import logoblack from './logo-black.svg'
import logonobackground from './logo-no-background.svg'
import logowhite from './logo-white.svg'

export{
    logoblack,
    logonobackground,
    logowhite,}

import image1 from './slide-1.jpg'
import image2 from './slide-2.jpg'
import image3 from './slide-3.jpg'
import image4 from './slide-4.jpg'
export const images: string[] = [image1, image2, image3, image4]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex