import { sideimages2 } from "../assets/images"

const OurStory = () => {
  return (
    <div className="grid gap-5 lg:flex lg:gap-20 lg:px-20 justify-center">
        <div className="imagelefttside">
            <img className="w-96" src={sideimages2}/>
        </div>
        <div className="pt-16 sm:w-2/6 w-full ">
            <div className="contents">
                <h3 className="font-starlight font-semibold text-4xl text-blue-500 pb-3 mb-8">Our Story</h3>
                <p className="pb-2 text-lg font-spacegrotesk text-gray-600">We started as a company dedicated to designing the most exquisite and luxury interiors. Today we have grown in to a multi-disciplinary practice with a team of professionals drawn from architecture, interior design, construction and project management.</p>
                <p className="pb-2 text-lg font-spacegrotesk text-gray-600">Over the past thirty years we have established an enviable reputation for creating exquisitely crafted homes and interiors, to meet and exceed the expectations of the most discerning clients.</p>
            </div>
        </div>
    </div>
  )
}

export default OurStory