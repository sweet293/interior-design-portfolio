import React from 'react'
import woman from "../../assets/website/woman.png"

function Contact() {
    return (
        <div className="bg-gray-200 flex justify-center items-center min-h-screen">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto p-6">
            {/* Image Section */}
            <div className="bg-green-100 p-6 rounded-2xl shadow-lg">
              <img
                src={woman} // Replace with your image URL
                alt="Placeholder"
                className="rounded-xl shadow-md"
              />
            </div>
    
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900">
                Elizabeth Chantel{" "}
                <span className="text-red-500">🧡</span>
              </h1>
              <p className=''>
                From bold concepts to refined solutions, my work is a reflection of my passion 
                for design and dedication to bringing visions to life.
                </p>
              <p className="text-gray-600 mt-2">→ Shopify Fall 2021</p>
            </div>
          </div>
        </div>
      );
}

export default Contact
