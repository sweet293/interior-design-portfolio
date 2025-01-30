import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogsData } from '../../data/BlogDetails.js'; 
import { getImageURL } from '../../utils/image-util';



const BlogDetailPage = () => {
    const { id } = useParams(); // Extract blog ID from URL
    const blog = getBlogsData().find((p) => String(p.id) === id); // Find blog by ID
  
    if (!blog) {
      return <h2 className="text-center text-red-500">Blog not found!</h2>;
    }
  
    return (
        <div className="container mx-auto p-6">
          <h1 className="mt-32 text-3xl font-bold">{blog.title}</h1>
    
          {blog.cover && (
            <div className="relative mt-8">
              <div className="flex justify-center mx-auto w-full">
                <img src={getImageURL(blog.cover)} alt="Cover Image" className="h-[400px] w-auto object-cover rounded-lg" />
              </div>
            </div>
          )}
    
          <p className="text-gray-400 mt-4">{blog.description}</p>
        </div>
      );
  };
  
  export default BlogDetailPage;