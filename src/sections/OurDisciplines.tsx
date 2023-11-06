import { sideimages1 } from "../assets/images"


const OurDisciplines = () => {
  return (
    <div className="grid gap-5 lg:flex lg:gap-20 lg:px-20 justify-center">
    <div className="pt-16 sm:w-2/6 w-full ">
        <div className="contents">
            <h3 className="font-starlight font-semibold text-4xl text-blue-500 pb-3 mb-8">Our Disciplines</h3>
            <p className="pb-2 text-lg font-spacegrotesk text-gray-600">The creation of beautiful, bespoke, homes requires the coordination of talent and resources across all the disciplines of; architecture, interior design and construction management. We have a wealth of expertise in-house that sets our services apart in the world of exquisite, luxury homes and interiors.</p>
        </div>
    </div>
    <div className="imagerightside">
        <img className="w-96" src={sideimages1}/>
    </div>
</div>
  )
}

export default OurDisciplines