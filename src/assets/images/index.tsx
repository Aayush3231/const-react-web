import logoblack from './logo-black.svg'
import logonobackground from './logo-no-background.svg'
import logowhite from './logo-white.svg'
import banner from './banner.jpg'
import sideright1 from './side-right.jpg'
import sideleft1 from './side-left.jpg'
import sideimages1 from './side-images.jpg'
import sideimages2 from './side-images-2.jpg'
export{
    logoblack,
    logonobackground,
    logowhite,
    banner,
    sideright1,
    sideleft1,
    sideimages1,
    sideimages2,
}

import image1 from './slide-1.jpg'
import image2 from './slide-2.jpg'
import image3 from './slide-3.jpg'
import image4 from './slide-4.jpg'
export const images: string[] = [image1, image2, image3, image4]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex