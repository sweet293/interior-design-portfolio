import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
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
            <p className="mt-4 text-gray-300">
              From groundbreaking ideas to tangible solutions, 
            these projects showcase the expertise and creativity that drive us forward. 
            Dive in and discover how we turn visions into reality.</p>
        </div>



        {/* Project List */}
        <ul className="mt-20 space-y-16">
        {
            products.map(product => (
              <li
              data-aos="fade-up"
              data-aos-delay={product.aosDelay}
              key={product.id}
              className="my-20 first:mt-0 last:mb-0"
              >
                <div className="flex flex-col lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} gap-12">
                  <div className="w-full lg:w-1/2 ">
                  <Link to={`/products/${product.id}`}>
                    <img
                        src={getImageURL(product.cover)}
                        alt={product.title}
                        className="w-full object-cover rounded-lg cursor-pointer"
                    />
                  </Link>
                    
                  </div>

                  {/* Project Details */}
                  <div className="w-full space-y-4">
                      
                      
                      {/* Clickable Button */}

                      <Link to={`/products/${product.id}`}>
                        <h2 className="group-hover:text-primary text-3xl font-semibold cursor-pointer hover:underline">
                        {product.title} 

                        </h2>
                      </Link>
                      <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>
                      <h3 className='text-white'>{product.dimension}</h3>

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
