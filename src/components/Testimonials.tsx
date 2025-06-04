import React from 'react';
import { IoStar } from 'react-icons/io5';
import Avatar1 from '@/assests/reinhard.png'
import Avatar2 from '@/assests/david.png'
import Avatar3 from '@/assests/victor.png'


interface Testimonial {
  name: string;
  picture: string;
  testimony: string;
  company?: string; 
}



const testimonials: Testimonial[] = [
  {
    name: " Reinhard Igwe",
    picture: Avatar1,
    testimony: "Grantty is exactly what young entrepreneurs like me need—simple, fair, and built for real people with real ideas.",
    company: "Startup Founder"
  },
  {
    name: " David Ker",
    picture: Avatar2,
    testimony: "This is the kind of innovation that levels the playing field. I can’t wait to support small businesses through Grantty.",
    company: "Founder Creative Window"
  },
  {
    name: " Victor Adams",
    picture: Avatar3,
    testimony: "With Grantty, even N1,000 can help build someone’s dream. That’s why I’m in.",
    company: "Director DCSI Africa"
  },
];

function Testimonials() {
  return (
    <section className="section-padding px-5 md:px-14 xl:px-24">
      <h1 className="text-[#1D1D1D] text-3xl font-semibold mb-4 text-center">Testimonials</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:px-40">
      {testimonials.map((testimonial, index) => (
  <div
    key={index}
    className="border rounded-xl p-6 text-start w-full flex flex-col justify-between" // makes the card use full height
  >
    {/* Stars */}
    <div className="flex justify-start mb-2 text-yellow-500">
      {Array(5).fill('').map((_, idx) => (
        <IoStar key={idx} className="w-5 h-5" />
      ))}
    </div>

    {/* Main content area with space between text and author */}
    <div className="flex flex-col justify-between flex-grow">
      {/* Testimonial */}
      <p className="text-gray-600 mb-6">{testimonial.testimony}</p>

      {/* Author info at the bottom */}
      <div className="flex gap-5 items-center">
        <img
          src={testimonial.picture}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          <p className="text-base font-medium">{testimonial.company}</p>
        </div>
      </div>
    </div>
  </div>
))}

</div>

    </section>
  );
}

export default Testimonials;


