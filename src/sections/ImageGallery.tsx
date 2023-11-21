import { Gallery } from "react-grid-gallery";

const images = [
  {
  src: "/src/assets/images/gallerycontent/gallery-image-1.jpg",
  original: "/src/assets/images/gallerycontent/gallery-image-1.jpg",
  width: 320,
  height: 170,
  caption: "High Rise Skyscrapers in Blue Tint",
},
{
  src: "/src/assets/images/gallerycontent/gallery-image-2.jpg",
  original: "/src/assets/images/gallerycontent/gallery-image-2.jpg",
  width: 320,
  height: 174,
  tags: [
    { value: "Skyscrapers", title: "buildings" },
    { value: "london", title: "city" },
  ],
  caption: "High Rise Skyscrapers from bottom prespective",
},
{
  src: "/src/assets/images/gallerycontent/gallery-image-3.jpg",
  original: "/src/assets/images/gallerycontent/gallery-image-3.jpg",
  width: 320,
  height: 154,
  tags: [
    { value: "Apartment", title: "buildings" }
  ],
  caption: "Apartments Balcony with Roses",
},
{
  src: "/src/assets/images/gallerycontent/gallery-image-4.jpg",
  original: "/src/assets/images/gallerycontent/gallery-image-4.jpg",
  width: 268,
  height: 130,
  caption: "An Apartment with grey and orange paint",
},
{
  src: "/src/assets/images/gallerycontent/gallery-image-5.jpg",
  original: "/src/assets/images/gallerycontent/gallery-image-5.jpg",
  width: 350,
  height: 190,
  tags: [
    { value: "Brick House", title: "buildings" }
  ],
  caption: "A House Made up of red bricks made in a british style",
},{
  src: "/src/assets/images/gallerycontent/gallery-image-6.jpg",
  original: "/src/assets/images/gallerycontent/gallery-image-6.jpg",
  width: 320,
  height: 160,
  caption: "An Commercial Complex Building",
},
{
  src: "/src/assets/images/gallerycontent/gallery-image-7.jpg",
  original: "/src/assets/images/gallerycontent/gallery-image-7.jpg",
  width: 320,
  height: 160,
  caption: "An Apartment Complex Building",
},
{
  src: "/src/assets/images/gallerycontent/gallery-image-8.jpg",
  original: "/src/assets/images/gallerycontent/gallery-image-8.jpg",
  width: 330,
  height: 160,
  caption: "A fireplace with classy look",
},
{
  src: "/src/assets/images/gallerycontent/gallery-image-9.jpg",
  original: "/src/assets/images/gallerycontent/gallery-image-9.jpg",
  width: 300,
  height: 160,
  caption: "An Commercial Complex Building",
},
];
const ImageGallery = () => {
  return (
    <div>
        <div className="heading1">
         <h4 className="text-5xl font-starlight text-blue-500 font-semibold ">Image Gallery</h4>
        </div>
        <div className="w-full pt-4 ">
        <Gallery
        images={images}
        // onClick={handleClick}
        enableImageSelection={false}
      />
        </div>
    </div>
   
  )
}

export default ImageGallery