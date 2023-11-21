import { FaXTwitter,FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex px-6 justify-center items-center gap-52">
    <div className="copyright">Copy right @2023</div>
    <div className="flex socials">
    <FaFacebookF />
    <FaXTwitter />
    <FaInstagram />
    </div>
    </div>
  )
}

export default Footer