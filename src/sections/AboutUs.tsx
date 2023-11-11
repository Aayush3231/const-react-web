import { sideright1 } from "../assets/images"
import { motion } from "framer-motion"
const AboutUs = () => {
  return (
    <div className="grid gap-5 lg:flex lg:gap-20 lg:px-20 justify-center">
        <div className="pt-16 sm:w-2/6 w-full ">
            <div className="contents">
                <h3 className="font-starlight font-semibold text-4xl text-blue-500 pb-3 mb-8">About Us</h3>
                <p className="pb-2 text-lg font-spacegrotesk text-gray-600">Selecting us as a partner does not require your project to be bound by a specific geography, size or design aesthetic.</p>
                <p className="pb-2 text-lg font-spacegrotesk text-gray-600">The galleries feature a selection of our completed works; from classical Oxfordshire houses set in the English countryside, to Mediterranean villas, chic apartments and contemporary mews houses in the heart of prime central London.</p>
            </div>
        </div>
        <div className="image-container">
        <motion.div
        className="imagerightside"
        initial={{y: 100}}
        whileInView={{ y: 50,
          rotate: -10,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.5
          }}}
        viewport={{ once: false, amount: "all" }}
        >
            <img className="w-60" src={ sideright1 }/>
        </motion.div>
        </div>
    </div>
  );
}
export default AboutUs