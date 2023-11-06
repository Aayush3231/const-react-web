import { sideright1 } from "../assets/images"

const OurWork = () => {
  return (
    <div className="grid gap-5 lg:flex lg:gap-20 lg:px-20 justify-center">
        <div className="pt-16 sm:w-2/6 w-full ">
            <div className="contents">
                <h3 className="font-starlight font-semibold text-4xl text-blue-500 pb-3 mb-8">Our Work</h3>
                <p className="pb-2 text-lg font-spacegrotesk text-gray-600">Selecting us as a partner does not require your project to be bound by a specific geography, size or design aesthetic.</p>
                <p className="pb-2 text-lg font-spacegrotesk text-gray-600">The galleries feature a selection of our completed works; from classical Oxfordshire houses set in the English countryside, to Mediterranean villas, chic apartments and contemporary mews houses in the heart of prime central London.</p>
            </div>
        </div>
        <div className="imagerightside">
            <img className="w-96" src={sideright1}/>
        </div>
    </div>
  )
}

export default OurWork