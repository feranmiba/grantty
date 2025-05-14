
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';

const options = [
  {
    id: 1,
    title: "Apply for a Grant",
    description: "Have a great startup idea with a co-founder? Apply for the Grantty microgrant today.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    buttonText: "Start Application",
    buttonVariant: "default",
    bgColor: "bg-grantty-blue"
  },
  {
    id: 2,
    title: "Join as a Funder",
    description: "Support Nigerian startups with as little as $1 and be part of their success story.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    buttonText: "Fund a Startup",
    buttonVariant: "outline",
    bgColor: "bg-grantty-green"
  },
  {
    id: 3,
    title: "Become a Vendor",
    description: "Offer your services to Grantty startups and get paid directly through our platform.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    buttonText: "Register as Vendor",
    buttonVariant: "outline",
    bgColor: "bg-grantty-navy"
  }
];

const CTASection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'));
            setVisibleItems((prev) => [...prev, id]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.cta-item').forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-grantty-lightBlue/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Join the Grantty Community</h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Whether you're a founder, funder, or service provider, there's a place for you in our ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option) => (
            <div 
              key={option.id}
              data-id={option.id}
              className={`cta-item rounded-xl overflow-hidden shadow-lg transition-all duration-500 ${
                visibleItems.includes(option.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(option.id - 1) * 150}ms` }}
            >
              <div className={`${option.bgColor} p-16 flex justify-center`}>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  {option.icon}
                </div>
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-secondary mb-3">{option.title}</h3>
                <p className="text-secondary/70 mb-6">{option.description}</p>
                
                <Button 
                  variant={option.buttonVariant === "default" ? "default" : "outline"} 
                  className={`w-full  ${option.buttonVariant === "default" ? "" : "border-2 border-secondary hover:bg-secondary hover:text-white"}`}
                >
                  {option.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
