import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  picture: string;
  testimony: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Deborah, Founders of Bag&co",
    picture: "https://plus.unsplash.com/premium_photo-1723629670116-244c1830a565?q=80&w=1698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimony: "Grantty has transformed our community projects. Funding is now easily accessible and transparent.",
  },
  {
    name: "Aisha  Founders of Eco",
    picture: "https://images.unsplash.com/photo-1632303648216-95b4b700f254?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMG5pZ2VyaWFufGVufDB8fDB8fHww",
    testimony: "The application process was simple, and the support from the Grantty team was fantastic.",
  },
  {
    name: "Alex Johnson",
    picture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimony: "Receiving funding through Grantty helped me start my non-profit and make a real impact.",
  },
  {
    name: " Kunle",
    picture: "https://images.unsplash.com/photo-1533108344127-a586d2b02479?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimony: "Grantty made it possible to expand our educational programs. Highly recommended!",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-[#f3e6e6] to-grantty-lightBlue/20">

    <div className="flex justify-center items-center min-h-[300px] p-6">
      <div className="relative w-full max-w-2xl">
        {/* Wrapping in a single motion.div for opacity transitions */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="bg-white shadow-lg rounded-xl p-6 text-center"
        >
          <div className="flex flex-col items-center gap-6">
            <img
              src={testimonials[currentIndex].picture}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 rounded-full mb-3"
            />
            <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
            <p className="text-gray-600 mt-2">{testimonials[currentIndex].testimony}</p>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  );
}

export default Testimonials;


