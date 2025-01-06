import React from 'react'
import { getProducts } from '../../data/projects-completed'
import { getImageURL } from '../../utils/image-util';

const Services = () => {
    const products = getProducts();

    return (
    <>
    <span id="services"></span>
    <div className='container mt-40'>
      {/* Content Below Hero */}
        <div className="text-center md:max-w-[650px] mx-auto space-y-4">
            {/* Services Section */}
            <h1 className="text-3xl font-bold">Our Featured Projects</h1>
            <p className="mt-4 text-gray-600">From groundbreaking ideas to tangible solutions, 
            these projects showcase the expertise and creativity that drive us forward. 
            Dive in and discover how we turn visions into reality.</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8"/>
        </div>

        <ul className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
        {
            products.map(product => (
              <li
              data-aos="fade-up"
              data-aos-delay={product.aosDelay}
              key={product.id}
              className=" relative" 
              >
                <img 
                src={getImageURL(product.cover)} 
                alt={product.name} 
                className="w-full h-[250px] object-cover" />
                
                <div className='absolute w-full bottom-0 inset-0 bg-brandDark/15'>
                  <div className='h-full space-y-1 py-6 flex flex-col justify-end items-center'>
                    <h2 className="text-3xl font-semibold">{product.title}</h2>
                    <p className='uppercase'>{product.description}</p>
                  </div>
                </div>
              </li> 
            ))
        }
        </ul>
    </div>
    </>
  )
}

export default Services
