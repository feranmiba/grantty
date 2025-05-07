
import { useState, useEffect } from 'react';

const EligibilitySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(document.querySelector('#eligibility-section')!);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="eligibility" 
      className="section-padding bg-white"
    >
      <div id="eligibility-section" className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Who Can Apply?</h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Our grants are specifically designed to support Nigerian founders at the earliest stages.
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10 bg-grantty-navy text-white">
              <h3 className="text-2xl font-semibold mb-6">Eligibility Criteria</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-grantty-blue/30 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Nigerian Founders</h4>
                    <p className="text-white/80 text-sm">At least one co-founder must be a Nigerian citizen or permanent resident.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-grantty-blue/30 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Co-founder Requirement</h4>
                    <p className="text-white/80 text-sm">You must have at least one co-founder with complementary skills.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-grantty-blue/30 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">One-time Access</h4>
                    <p className="text-white/80 text-sm">Each founding team can receive the Grantty grant only once.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-semibold text-secondary mb-6">What We Look For</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-grantty-green/20 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-grantty-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary mb-1">Innovative Solution</h4>
                    <p className="text-secondary/70 text-sm">A unique approach to solving a meaningful problem in your market.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-grantty-green/20 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-grantty-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary mb-1">Committed Team</h4>
                    <p className="text-secondary/70 text-sm">Co-founders who demonstrate passion, commitment, and complementary skills.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-grantty-green/20 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-grantty-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary mb-1">Clear Use of Funds</h4>
                    <p className="text-secondary/70 text-sm">A specific plan for how the grant will help you build and launch your MVP.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
