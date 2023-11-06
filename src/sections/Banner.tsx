import { banner } from "../assets/images"

const Banner = () => {
  return (
    <div className="w-3/5 h-1/6 justify-center flex">
      <img className="w-full h-32" src={banner}/>
    </div>
  )
}

export default Banner