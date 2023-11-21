import { Gallery } from "react-grid-gallery";
import { galleryimage1,galleryimage2,galleryimage3,galleryimage4,galleryimage5,galleryimage6,galleryimage7,galleryimage8,galleryimage9 } from "../assets/images/gallerycontent";
import { useState } from "react";
const images = [
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

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(-1);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(-1);
  };

  const currentImage = images[selectedImage];
  const nextIndex = (selectedImage + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (selectedImage + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  return (
    <div className="">
      <div className="heading1">
        <h4 className="text-5xl font-starlight text-blue-500 font-semibold ">
          Image Gallery
        </h4>
      </div>
      <div className="w-full pt-4">
        <Gallery
          images={images}
          onClick={(i) => openLightbox(i)}
          enableImageSelection={false}
        />
          {selectedImage !== -1 && (
            <div className="custom-lightbox">
              <button onClick={closeLightbox} className=" bg-blue-600 rounded-md fixed top-0 sm:left-96 text-white p-2">Close</button>
              <div className="custom-lightbox-content">
                <img
                  src={currentImage.original}
                  alt={currentImage.caption}
                />
                <div className="lightbox-caption bg-black">{currentImage.caption}</div>
              </div>
              <div className="custom-lightbox-controls text-white">
                <button onClick={() => setSelectedImage(prevIndex)} className=" bg-blue-600 rounded-md ">
                  Previous
                </button>
                <button onClick={() => setSelectedImage(nextIndex)} className=" bg-blue-600 rounded-md ">Next</button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default ImageGallery;