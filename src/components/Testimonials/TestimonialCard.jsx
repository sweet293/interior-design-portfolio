import React from "react";

const TestimonialCard = ({ name, image, rating, text, isHighlighted }) => {
  return (
    <div
      className={`flex flex-col items-center p-6 bg-black text-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-neon hover:scale-105`}
    >
      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-cyan-500">
        <img src={image} alt={`${name}'s avatar`} className="w-full h-full" />
      </div>
      <h3 className="mt-4 text-lg font-bold">{name}</h3>
      <div className="mt-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`${
              index < rating ? "text-yellow-400" : "text-gray-500"
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <p className="mt-4 text-center text-gray-300">{text}</p>
    </div>
  );
};

export default TestimonialCard;
