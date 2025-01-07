{/*import React from 'react';
import { useParams } from 'react-router-dom'; // To get the dynamic ID from the URL
import { getProducts } from '../../data/projects-completed';
import { getImageURL } from '../../utils/image-util';

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const products = getProducts();
  const project = products.find((product) => product.id === id);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="container mt-20">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <p className="text-lg text-gray-500 mb-8">{project.description}</p>

      {/* Display Project Images */}
{/*      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.additionalImages.map((image, index) => (
          <img
            key={index}
            src={getImageURL(image)}
            alt={`Project ${project.title} - Image ${index + 1}`}
            className="w-full rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
*/}