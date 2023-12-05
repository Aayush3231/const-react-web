import { sideright1 } from "../assets/images"
import ReactWOW from 'react-wow';
// import 'animate.css';
const AboutUs = () =>  {
  return (
    <ReactWOW animation="fadeInLeft" duration="5s" delay="0.5s" scroll >
    <div className="grid gap-5 md:flex md:gap-20 lg:px-20 justify-center pt-4 ">
        <div className="pt-16 sm:w-2/6 w-full">
            <div className="contents">
                <h3 className="font-starlight font-semibold text-5xl text-blue-500 pb-3 mb-8 sm:text-left text-center">About Us</h3>
                <p className="pb-2 text-lg font-spacegrotesk text-gray-600">Selecting us as a partner does not require your project to be bound by a specific geography, size or design aesthetic.</p>
                <p className="pb-2 text-lg font-spacegrotesk text-gray-600">The galleries feature a selection of our completed works; from classical Oxfordshire houses set in the English countryside, to Mediterranean villas, chic apartments and contemporary mews houses in the heart of prime central London.</p>
            </div>
        </div>
        <div className="imagerightside sm:w-1/4 w-full">
            <img className="object-cover" src={ sideright1 }/>
        </div>
    </div>
    </ReactWOW>
  );
}
export default AboutUs