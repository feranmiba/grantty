import React from 'react';
import { IoStar } from 'react-icons/io5';
import Avatar1 from '@/assests/Avatar1.png'
import Avatar2 from '@/assests/Avatar2.png'
import Avatar3 from '@/assests/Avatar3.png'


interface Testimonial {
  name: string;
  picture: string;
  testimony: string;
  company?: string; 
}

const testimonials: Testimonial[] = [
  {
    name: "Aisha & Kunle",
    picture: Avatar1,
    testimony: "Grantty made it possible to expand our educational programs. Highly recommended!",
    company: "Founders of EcoKart"
  },
  {
    name: "Aisha, Founder of Eco",
    picture: Avatar2,
    testimony: "Grantty made it possible to expand our educational programs. Highly recommended!",
    company: "Founders of EcoKart"
  },
  {
    name: "Alex Johnson",
    picture: Avatar3,
    testimony: "Grantty made it possible to expand our educational programs. Highly recommended!",
    company: "Founders of EcoKart"
  },
];

function Testimonials() {
  return (
    <section className="section-padding md:px-14 xl:px-24">
      <h1 className="text-[#1D1D1D] text-3xl font-semibold mb-4 text-center">Testimonials</h1>
      <div className="flex flex-wrap justify-center gap-10 p-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border  rounded-xl p-6 text-start w-full sm:w-[300px] lg:w-[400px]"
          >
            {/* Stars */}
            <div className="flex justify-start mb-2 text-yellow-500">
              {Array(5).fill('').map((_, idx) => (
                <IoStar key={idx} className="w-5 h-5" />
              ))}
            </div>
            <div className="flex flex-col items-start gap-4 mt-4">
            <p className="text-gray-600">{testimonial.testimony}</p>
            <div className='flex gap-5 justify-start mt-3'>
              <img
                src={testimonial.picture}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full mb-2 object-cover"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;


