import React from 'react'
import front_image from "../../assets/website/front_image.png"
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <div className="relative">
      <Navbar  />
      {/* Hero Section */}
      <div className="relative">
        <img
          src={front_image}
          alt="front_image"
          className="w-full h-[650px] object-cover"
        />
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black s-10" 
          style={{background: "radial-gradient(circle, rgba(0,0,0,0.3) 50%, rgba(11,11,13,0.5) 70%, rgba(11,11,13,0.9) 90%)",}}
          ></div>
        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-7xl font-merriweather animate-slideUp">
            Welcome To KAISER
          </h1>
        </div>
      </div>

      
    </div>
  )
}

export default Home
