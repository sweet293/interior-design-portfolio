import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../data/projects-completed.js'; 
import { getImageURL } from '../../utils/image-util';

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const ProjectDetail = () => {
    const { id } = useParams();  // Extract project ID from URL
    const project = getProducts().find((p) => p.id === id); // Find project by ID
    const scrollContainerRef = useRef(null);
    
    useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
      
      const handleWheel = (evt) => {
        evt.preventDefault();
        if (scrollContainer) {
          scrollContainer.scrollLeft += evt.deltaY;
        }
      };
      
      // Add wheel event listener
      if (scrollContainer) {
        scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
      }
      
      // Cleanup
      return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener('wheel', handleWheel);
        }
      };
    }, []);
  
    const scrollLeft = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft -= 900;
      }
    };
  
    const scrollRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += 900;
      }
    };

    if (!project) {
      return <h2 className="text-center text-red-500">Project not found!</h2>;
    }
  
    return (
      <div className=" container mx-auto p-6">
        <h1 className="mt-32 text-3xl font-bold">{project.title}</h1>
        <p className="text-gray-300">{project.dimension}</p>
        <p className="text-gray-400">{project.description}</p>
        
        {project.additionalImages && project.additionalImages.length > 0 && (
          <div className="relative mt-8">
            <div ref={scrollContainerRef} className="flex gap-2 overflow-x-auto mt-8 mx-auto w-full scroll-smooth [&::-webkit-scrollbar]:hidden">
              {project.additionalImages.map((img, index) => (
                <img key={index} src={getImageURL(img)} alt={'Additional ${index + 1}'} className="h-[400px] w-auto object-cover ml-2" />
              ))}
          </div>
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
          >
            <ChevronLeft/>
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
          >
            <ChevronRight/>
          </button>
          </div>
        )}
      </div>
    );
  };
  
  export default ProjectDetail;