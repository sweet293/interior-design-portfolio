import React from 'react'
import { getBlogsData } from '../../data/BlogDetails'
import { getImageURL } from '../../utils/image-util';
import BlogCard from "./BlogCard"

const Blog = () => {

  return (
  <>
  <span id="blog"></span>
    <div className=' dark:bg-gray-900 dark:text-white py-10 pb-14'>
      <div className='container '>
        <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold'>My Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/*Blogs*/}
        {
          getBlogsData().map((blog) =>(
            <BlogCard 
            key={blog.id} {... blog}/>
          ))

        }
        </div>
        <div className="text-center">
            <button className="primary-btn">View All Posts</button>
          </div>
      </div>
    </div>
    </>
    )
}




export default Blog
