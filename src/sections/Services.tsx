
import { brickbuilding, buildingconst1, buildingconst2, buildingconst3, buildingconst4, digger } from "../assets/icons"
import { sideleft1 } from "../assets/images"
import  {motion,} from "framer-motion"
const Services = () => {

  return (
    <div className="grid gap-2 sm:gap-20 sm:flex justify-center sm:px-5">
      <img className="w-72 order-2 sm:order-none pt-2" src={sideleft1} alt="Side Left 1" />
      <div className="flex flex-col sm:w-1/2 sm:pt-10 pt-2 pb-4">
        <div className="text-center">
            <h3 className="font-starlight font-semibold text-5xl text-blue-500 pb-4">Services</h3>
        </div>
        <div className="grid grid-cols-2 gap-6 pt-4">
              <motion.div 
              className="flex justify-center items-center gap-1 sm:gap-5"
              whileHover={{ scale: [ null, 1.2] }}
              transition={{
              type: 'spring',
              bounce: 0.1,
              duration:0.5
              }}
              >
              <img src={brickbuilding} className="w-16 sm:w-20"/>
              <p className="text-md sm:text-2xl font-burford">Repairs</p>
              </motion.div>
              <motion.div 
              className="flex justify-center items-center gap-1 sm:gap-5"
              whileHover={{ scale: [ null, 1.2] }}
              transition={{
              type: 'spring',
              bounce: 0.1,
              duration:0.5
              }}
              >
              <img src={buildingconst1} className="w-16 sm:w-20"/>
              <p className="text-md sm:text-2xl font-burford">Repairs</p>
              </motion.div>
              <motion.div 
              className="flex justify-center items-center gap-1 sm:gap-5" 
              whileHover={{ scale: [ null, 1.2] }}
              transition={{
              type: 'spring',
              bounce: 0.1,
              duration:0.5
              }}
              >
              <img src={buildingconst2} className="w-16 sm:w-20"/>
              <p className="text-md sm:text-2xl font-burford">Contracts</p>
              </motion.div>
              <motion.div 
              className="flex justify-center items-center gap-1 sm:gap-5"
              whileHover={{ scale: [ null, 1.2] }}
              transition={{
              type: 'spring',
              bounce: 0.1,
              duration:0.5
              }}
              >
              <img src={buildingconst3} className="w-16 sm:w-20"/>
              <p className="text-md sm:text-2xl font-burford">Repairs</p>
              </motion.div>
              <motion.div 
              className="flex justify-center items-center gap-1 sm:gap-5"
              whileHover={{ scale: [ null, 1.2] }}
              transition={{
              type: 'spring',
              bounce: 0.1,
              duration:0.5
              }}
              >
              <img src={buildingconst4} className="w-16 sm:w-20"/>
              <p className="text-md sm:text-2xl font-burford">Repairs</p>
              </motion.div>
              <motion.div 
              className="flex justify-center items-center gap-1 sm:gap-5"
              whileHover={{ scale: [ null, 1.2] }}
              transition={{
              type: 'spring',
              bounce: 0.1,
              duration:0.5
              }}
              >
              <img src={digger} className="w-16 sm:w-20"/>
              <p className="text-md sm:text-2xl font-burford">Repairs</p>
              </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services