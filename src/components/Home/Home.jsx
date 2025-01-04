import React from 'react'
import front_image from "../../assets/website/front_image.png"

const Home = () => {
  return (
    <div >
      {/* Hero Section */}
      <div className="relative">
        <img
          src={front_image}
          alt="front_image"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Hero Text */}
          <h1 className="text-white text-4xl font-bold">Welcome to My Website</h1>
        </div>
      </div>

      
    </div>
  )
}

export default Home
