import React from 'react';
import type { Testimonial } from './testimonials';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-full h-full flex flex-col justify-between">
      <div>
        <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
        <p className="text-sm text-[#b28d52] font-medium">{testimonial.role}</p>
        <p className="text-sm mt-2 text-gray-700">{testimonial.content}</p>
      </div>
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-10 h-10 rounded-full mt-6"
      />
    </div>
  );
};

export default TestimonialCard;
