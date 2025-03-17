import React from 'react'
import woman from "../../assets/website/woman.png"

const About = () => {
  return (
    <>
    
    <div>
      <div className='min-h-screen container flex justify-center items-center'>
        <div className=' flex-col space-x-4 grid grid-cols-1 md:flex-row  sm:grid-cols-2 gap-8 max-w-6xl mx-auto items-centerp-6 '>
            <div className="bg-red-400 p-6 rounded-2xl shadow-lg">
                <img 
                src={woman} 
                alt="Professional woman in business attire" 
                className='w-[300px] rounded-xl shadow-md'/>

            </div>

            {/* text*/}
            <div className='space-y-8 md:text-left' >
                <h1 className='text-4xl font-bold'>
                    Anna Delvey
                </h1>
                <p className=''>
                From bold concepts to refined solutions, my work is a reflection of my passion 
                for design and dedication to bringing visions to life. Dive into my portfolio and 
                see how creativity transforms ideas into impactful experiences.
                </p>
                <div className='space-x-2'>
                    <input 
                    placeholder='Enter your email' 
                    type="email" 
                    name="" 
                    id=""
                    className='bg-gray-200 p-2 rounded-md w-[140px] text-black'
                    />
                    <button
                    className='bg-blue-200 text-black p-2 rounded-md'
                    >Notify Me</button>
                </div>
            </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default About
