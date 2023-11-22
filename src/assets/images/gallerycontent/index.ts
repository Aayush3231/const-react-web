import {Image} from "react-grid-gallery"
import galleryimage1 from './gallery-image-1.jpg'
import galleryimage2 from './gallery-image-2.jpg'
import galleryimage3 from './gallery-image-3.jpg'
import galleryimage4 from './gallery-image-4.jpg'
import galleryimage5 from './gallery-image-5.jpg'
import galleryimage6 from './gallery-image-6.jpg'
import galleryimage7 from './gallery-image-7.jpg'
import galleryimage8 from './gallery-image-8.jpg'
import galleryimage9 from './gallery-image-9.jpg'

export interface GalleryImage extends Image {
    original: string;
  }

export const images: GalleryImage[]= [
    {
    src: galleryimage1,
    original: galleryimage1,
    width: 320,
    height: 170,
    caption: "High Rise Skyscrapers in Blue Tint",
  },
  {
    src: galleryimage2,
    original: galleryimage2,
    width: 320,
    height: 174,
    tags: [
      { value: "Skyscrapers", title: "buildings" },
      { value: "london", title: "city" },
    ],
    caption: "High Rise Skyscrapers from bottom prespective",
  },
  {
    src: galleryimage3,
    original: galleryimage3,
    width: 320,
    height: 154,
    tags: [
      { value: "Apartment", title: "buildings" }
    ],
    caption: "Apartments Balcony with Roses",
  },
  {
    src: galleryimage4,
    original: galleryimage4,
    width: 268,
    height: 130,
    caption: "An Apartment with grey and orange paint",
  },
  {
    src: galleryimage5,
    original: galleryimage5,
    width: 350,
    height: 190,
    tags: [
      { value: "Brick House", title: "buildings" }
    ],
    caption: "A House Made up of red bricks made in a british style",
  },{
    src: galleryimage6,
    original: galleryimage6,
    width: 320,
    height: 160,
    caption: "An Commercial Complex Building",
  },
  {
    src: galleryimage7,
    original: galleryimage7,
    width: 320,
    height: 160,
    caption: "An Apartment Complex Building",
  },
  {
    src: galleryimage8,
    original: galleryimage8,
    width: 330,
    height: 160,
    caption: "A fireplace with classy look",
  },
  {
    src: galleryimage9,
    original: galleryimage9,
    width: 300,
    height: 160,
    caption: "An Commercial Complex Building",
  },
  ];