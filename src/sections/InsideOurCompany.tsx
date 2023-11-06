import { sideleft1 } from "../assets/images"

const InsideOurCompany = () => {
  return (
    <div className="grid gap-5 lg:flex lg:gap-20 lg:px-20 justify-center">
        <div className="imagelefttside">
            <img className="w-96" src={sideleft1}/>
        </div>
        <div className="pt-16 sm:w-2/6 w-full ">
            <div className="contents">
                <h3 className="font-starlight font-semibold text-4xl text-blue-500 pb-3 mb-8">Inside The World Of Our Company</h3>
                <p className="pb-2 text-lg font-spacegrotesk text-gray-600">Selecting us as a partner does not require your project to be bound by a specific geography, size or design aesthetic.</p>
                <p className="pb-2 text-lg font-spacegrotesk text-gray-600"> Without Exception the latest, An exploration of our business and the exotic world that is luxury architecture and interior design. Featuring beautiful imagery and illustrations of our work.</p>
            </div>
        </div>
    </div>
  )
}

export default InsideOurCompany