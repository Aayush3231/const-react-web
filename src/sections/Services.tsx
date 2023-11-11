
import { sideleft1 } from "../assets/images"
import  {motion,} from "framer-motion"
const Services = () => {

  return (
    <div className="grid gap-5 lg:flex lg:gap-20 lg:px-20 justify-center">
      <div className="image-container">
        <motion.div
          className="imagelefttside"
          initial={{y: 100}}
          whileInView={{ y: 50,
            rotate: 10,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1
            }}}
          viewport={{ once: false, amount: 0.6}}
          >
          <img className=" w-72" src={sideleft1} alt="Side Left 1" />
        </motion.div>
      </div>
        <motion.div 
        className="pt-16 sm:w-2/6 w-full "
        whileHover={{ scale: [ null, 1.2] }}
        transition={{
          type: 'spring',
          bounce: 0.1,
          duration:0.5
        }}
        >
            <div className="contents">
                <h3 className="font-starlight font-semibold text-5xl text-blue-500 pb-3 mb-8">Services</h3>
                <p className="pb-2 text-lg font-spacegrotesk text-gray-600">Selecting us as a partner does not require your project to be bound by a specific geography, size or design aesthetic.</p>
                <p className="pb-2 text-lg font-spacegrotesk text-gray-600"> Without Exception the latest, An exploration of our business and the exotic world that is luxury architecture and interior design. Featuring beautiful imagery and illustrations of our work.</p>
            </div>
        </motion.div>
    </div>
  )
}

export default Services