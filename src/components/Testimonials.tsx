import React from 'react';
import { IoStar } from 'react-icons/io5';


interface Testimonial {
  name: string;
  picture: string;
  testimony: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Deborah, Founders of Bag&co",
    picture:
      "https://plus.unsplash.com/premium_photo-1723629670116-244c1830a565?q=80&w=1698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimony: "Grantty has transformed our community projects. Funding is now easily accessible and transparent.",
  },
  {
    name: "Aisha, Founder of Eco",
    picture:
      "https://images.unsplash.com/photo-1632303648216-95b4b700f254?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMG5pZ2VyaWFufGVufDB8fDB8fHww",
    testimony: "The application process was simple, and the support from the Grantty team was fantastic.",
  },
  {
    name: "Alex Johnson",
    picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimony: "Receiving funding through Grantty helped me start my non-profit and make a real impact.",
  },
];

function Testimonials() {
  return (
    <section className="section-padding">
      <h1 className="text-[#1D1D1D] text-3xl font-semibold mb-4 text-center">Testimonials</h1>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-center w-full sm:w-[300px] lg:w-[350px]"
          >
            {/* Stars */}
            <div className="flex justify-center mb-2 text-yellow-500">
              {Array(5).fill('').map((_, idx) => (
                <IoStar key={idx} className="w-5 h-5" />
              ))}
            </div>
            <div className="flex flex-col items-center gap-4">
              <img
                src={testimonial.picture}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-2 object-cover"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.testimony}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;


