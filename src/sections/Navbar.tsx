import { logonobackground } from "../assets/images"
import { navLinks,infos } from "../constants"; //for easy adding and removing navbar links
import { GiHamburgerMenu } from 'react-icons/gi';
import {RxCross1} from 'react-icons/rx';
import { IconContext } from "react-icons";
import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="w-full px-4 pt-4">
    <nav className="flex items-center px-2 gap-1 h-1/6 justify-between border-b border-slate-200 mx-6 py-3 sm:mx-10  sm:py-12">
      {/* hamburger button  start*/}
      <div className="flex justify-start items-center w-24 xl:w-0 lg:hidden">
      <div className="hidden max-lg:flex max-lg:flex-col">
      <button className="flex justify-between gap-1 items-center" 
      onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <IconContext.Provider value={{ size: '0.8rem', }}>
                <RxCross1 />
              </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{size:'0.8rem',}}>
            <GiHamburgerMenu />
            </IconContext.Provider>
          )}
      <span className="text-sm">Menu</span>
      </button>
      </div>
      </div>
      {/* hamburger button  ends*/}
      <div className="flex">
      <ul className="flex  flex-inital  items-center max-lg:hidden px-2 ">
    {navLinks.map((item:any)=>(
      <li className="flex text-sm font-normal items-center max-lg:hidden px-4 transition duration-300 border-r-2 h-5 border-blue-700 last:border-0" key={item.label}>
      <a className="font-spacegrotesk" href={item.href}>
      {item.label}
      </a>
     </li>
    ))}
      </ul>
      </div>
      <div className="flex">
      <a href="/"  ><img className="w-32 h-24"  src={ logonobackground}  alt="logo" /></a>
      </div>
      <div className="hidden text-xs items-bottom md:flex ">
        <div className="text-sm leading-5 ">
          {infos.map((item:any)=>(
            <p className="text-blue-500 font-semibold font-spacegrotesk">{item.title}<a className="text-black font-normal font-spacegrotesk" href={item.href}>{item.label}</a>
            </p>
          ))}
        </div>
      </div>
    </nav>
    <nav>
    <div className="flex flex-col" >
      {isOpen? (
      <ul className="hidden justify-center font-spacegrotesk  items-center max-lg:flex max-lg:flex-col ">
    {navLinks.map((item:any)=>(
      <li key={item.label}>
      <a 
      href={item.href}
      className="text-md font-normal max-lg:flex hidden px-3 py-3 transition duration-300"
      >
        {item.label}
      </a>
     </li>
    ))}
        </ul>
    ):(<></>)}
    </div>
    </nav>
    </header>

  )
}

export default Navbar