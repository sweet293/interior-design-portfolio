import React from 'react'
import woman from "../../assets/website/woman.png"

const About = () => {
  return (
    <div>
      <div className='min-h-[600px] container flex place-items-center'>
        <div className='space-x-4 grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center'>
            <div>
                <img src={woman} alt="Professional woman in business attire" className='w-[300px]'/>

            </div>

            {/* text*/}
            <div className='space-y-8' >
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
  )
}

export default About
