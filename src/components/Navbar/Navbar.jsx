import React from 'react'
import logo_main from "../../assets/website/logo_main.png"
import {FaCoffee} from "react-icons/fa"
import {useRef} from 'react';

const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Projects",
    link: "/#projects",
  },
  {
    id: 3,
    name: "My Blog",
    link: "/#blog",
  },
]

const Navbar = () => {
  const gamesRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className=' text-white bg-gradient-to-b from-black/80 to-transparent fixed top-0 left-0 right-0 z-10'>
      <div className="container py-2">
          <div className="flex justify-between items-center gap-4">
            <div data-aos="fade-down" data-aos-once="true">
              <a 
                href="#" 
                className='font-bold text-2xl sm:text-3xl flex 
                justify-center items-center gap-2 tracking-wider 
                font-cursive'
              >
                <img src={logo_main} alt="logo" className='w-20'/>
                
              </a>
            </div>

            <div 
              data-aos="fade-down" 
              data-aos-once="true"
              data-aos-delay="200">
              <div className='flex justify-between items-center gap-4'>
                <ul className='hidden sm:flex items-center gap-4'>
                  {
                    Menus.map((data, index) => (
                      <li key={index}>
                        <a
                          href={data.link}
                          className='inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200'
                        >
                          {data.name}
                        </a>
                      </li>
                    ))
                  }
                </ul>
                <button className='bg-primary/40 px-4 py-2 rounded-full hover:scale-105 duration-200 flex 
                items-center gap-3'>
                  Admin
                  <FaCoffee className='text-xl cursor-pointer'/>
                </button>
              </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar
