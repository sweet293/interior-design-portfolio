import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { getBlogsData } from '../../data/BlogDetails'
import { getImageURL } from '../../utils/image-util';
import { Link } from 'react-router-dom';
import Blog from "./Blog";

const BlogCard = ({id, cover, title, shortdescription}) => {
  return (
  <>
    <div className='dark:text-white group'>
        <div className='overflow-hidden'>
            <img 
            src={getImageURL(cover)} 
            alt="" 
            className='mx-auto w-full object-cover 
            group-hover:scale-105 duration-300 sm:max-h-[400px] sm:object-contain'
            />
            <div  className="space-y-2 p-4 ml-6 bg-white dark:bg-slate-950 -translate-y-16">
            <Link to={`/blog/${id}`} className="text-blue-500 hover:underline mt-2 inline-block">
              <h1  className="line-clamp-1 text-2xl text-black font-semibold">{title}</h1>
            </Link>
              <p className="line-clamp-4 text-gray-500 text-sm">{shortdescription}</p>
              <div className="flex justify-end pr-4 text-gray-500">
                <FaArrowRight className="group-hover:text-primary group-hover:translate-x-2 duration-300"/>
              </div>
            </div>

            
        </div>
      
    </div>
    </>
  )
}

export default BlogCard
