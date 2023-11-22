import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import{images} from "../assets/images/gallerycontent/index"
import "yet-another-react-lightbox/styles.css"

const slides = images.map(({ original }) => ({
  src: original,
}));

const ImageGallery = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number,_GalleryImage) => setIndex(index);

  return (
    <div className="grid">
      <div className="galleryheading pb-6 pl-1">
      <h4 className=" text-5xl text-left font-starlight text-blue-600 font-semibold">
      Image Gallery
      </h4>
      </div>
      <div className="galleryshowcase">
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      </div>
      <Lightbox
        className="yet-lightbox"
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
};

export default ImageGallery;