import React from 'react'
import { useState } from 'react';
import { getBlogsData } from '../../data/BlogDetails'
import { getImageURL } from '../../utils/image-util';
import BlogCard from "./BlogCard"

const Blog = () => {
  const allBlogs = getBlogsData(); // Fetch all blog posts
  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const [expanded, setExpanded] = useState(false);

  const handleToggleBlogs = () => {
    if (expanded) {
      setVisibleBlogs(3); // Collapse back to 3 posts
    } else {
      setVisibleBlogs(allBlogs.length); // Expand to show all posts
    }
    setExpanded(!expanded);
  };

  return (
  <>
  <span id="myblog"></span>
    <div className=' dark:bg-gray-900 dark:text-white py-10 pb-14'>
      <div className='container '>
        <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold'>My Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/*Blogs*/}
        {allBlogs.slice(0, visibleBlogs).map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="primary-btn" onClick={handleToggleBlogs}>
              {expanded ? "Show Less" : "View All Posts"}
            </button>
            </div>
      </div>
    </div>
    </>
    )
}




export default Blog
