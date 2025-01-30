import React from "react";
import TestimonialCard from "./TestimonialCard";
import testim1 from "../../assets/website/testim1.jpg"
import testim2 from "../../assets/website/testim2.jpg"
import testim3 from "../../assets/website/testim3.jpg"


const Testimonials = () => {
  const testimonials = [
    {
      name: "Thomas",
      image: testim1, // Replace with the actual image URL
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isHighlighted: false,
    },
    {
      name: "Julia",
      image: testim2, // Replace with the actual image URL
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isHighlighted: true,
    },
    {
      name: "Jane",
      image: testim3, // Replace with the actual image URL
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isHighlighted: false,
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Testimonials</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;