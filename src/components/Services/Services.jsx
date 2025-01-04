import React from 'react'
import { getProducts } from '../../data/projects-completed'
import { getImageURL } from '../../utils/image-util';

const Services = () => {
    const products = getProducts();

    return (
    <div>
      {/* Content Below Hero */}
        <div className="container mx-auto mt-8">
            {/* Services Section */}
            <h1 className="text-2xl font-bold">Services</h1>
            <p className="mt-4 text-gray-600">Here are the amazing services we provide!</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8"/>
        </div>

        <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-2">
        {
            products.map(product => (
            <li
                key={product.id}
                className="flex flex-col mx-10 my-10 p-4 border border-black/10 shadow-sm rounded-xl" 
                >
                <img 
                src={getImageURL(product.cover)} 
                alt={product.name} 
                className="w-full object-cover" />
                <h2 className="text-3xl my-3">{product.title}</h2>
                <p>{product.description}</p>
            </li> 
            ))
        }
        </ul>
    </div>

  )
}

export default Services
