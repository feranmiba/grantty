
import { useState, useEffect } from 'react';

const benefits = [
  {
    id: 1,
    title: "No equity taken",
    description: "Keep 100% ownership of your company. Our grants are non-dilutive and do not require any equity in return.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-grantty-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Encourages co-founder collaboration",
    description: "Build a stronger foundation with a complementary co-founder. We believe great teams create great companies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-grantty-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Transparent fund disbursement",
    description: "Your funds go directly to verified vendors, ensuring resources are used effectively to build your product.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-grantty-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Crowdfunded by a supportive community",
    description: "Connect with backers who believe in your vision and may become your first customers or advocates.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-grantty-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" />
      </svg>
    )
  }
];

const WhyGranttySection = () => {
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

    document.querySelectorAll('.benefit-item').forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-grantty" className="section-padding bg-grantty-lightBlue/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Why Choose Grantty?</h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Our unique approach to startup funding provides multiple advantages to early-stage founders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              data-id={benefit.id}
              className={`benefit-item bg-white rounded-xl shadow-sm p-6 border border-grantty-blue/10 transition-all duration-500 ${
                visibleItems.includes(benefit.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(benefit.id - 1) * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-grantty-green/10 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">{benefit.title}</h3>
                  <p className="text-secondary/70">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl shadow-md p-8 lg:p-10 border border-grantty-blue/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="text-center p-6 border-b lg:border-b-0 lg:border-r border-gray-100">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-secondary/80">Ownership Retained</p>
            </div>
            
            <div className="text-center p-6 border-b lg:border-b-0 lg:border-r border-gray-100">
              <div className="text-4xl font-bold text-primary mb-2">$3,000</div>
              <p className="text-secondary/80">Maximum Grant Size</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">42+</div>
              <p className="text-secondary/80">Startups Funded</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGranttySection;
