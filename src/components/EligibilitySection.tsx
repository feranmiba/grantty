import { useState, useEffect } from 'react';

const eligibilityCriteria = [
  {
    title: 'Residence & Identification',
    description: 'Be a Nigerian resident with a valid NIN (National Identification Number).'
  },
  {
    title: 'Application Structure',
    description: 'You may apply individually; however, you must add at least one verified co-founder before any funds are disbursed.'
  },
  {
    title: 'One-time Access',
    description: 'Have never received a grant on Grantty (only one grant is allowed per lifetime).'
  },
  {
    title: 'Road Map',
    description: 'Submit a clear, impact-driven project idea or startup concept.'
  },
  {
    title: 'Escrow Payment',
    description: 'Be willing to have your grant funds escrowed and disbursed based on milestones.'
  },
  {
    title: 'Expenditure',
    description: 'Provide a breakdown of your funding needs and expected usage.'
  },
  {
    title: 'Background Checks',
    description: 'Consent to basic KYC and identity verification checks.'
  },
  {
    title: 'Disbursement',
    description: 'Be able to onboard vendors or partners if required for fund disbursement.'
  }
];

const whatWeLookFor = [
  {
    title: 'Team Commitment',
    description: 'At least two co-founders actively involved in the project before fund disbursement.'
  },
  {
    title: 'Clarity of Idea',
    description: 'A well-defined problem and a practical, innovative solution.'
  },
  {
    title: 'Social or Economic Impact',
    description: 'Projects that improve livelihoods, solve real problems, or create opportunity.'
  },
  {
    title: 'Scalability & Execution Readiness',
    description: 'A feasible plan with potential for growth and scalability.'
  },
  {
    title: 'Responsible Budgeting',
    description: 'Transparent, realistic use of the ₦5M / $3,000 grant.'
  },
  {
    title: 'Vision & Value',
    description: 'Applicants genuinely aligned with the values of responsible entrepreneurship.'
  },
  {
    title: 'Integrity & Transparency',
    description: 'Founders must be open, truthful, and responsible in how they present their business and manage the funds.'
  },
  {
    title: 'Community Relevance',
    description: 'Projects that address local needs and have community significance.'
  }
];

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
    <section id="eligibility" className="section-padding bg-white">
      <div id="eligibility-section" className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Who Can Apply?</h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Our grants are specifically designed to support Nigerian founders at the earliest stages.
          </p>
        </div>

        <div className={`max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-8 bg-grantty-navy text-white">
              <h3 className="text-2xl font-semibold mb-6">Eligibility Criteria</h3>
              <ul className="space-y-6">
                {eligibilityCriteria.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-grantty-blue/30 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-white/80 text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-semibold text-secondary mb-6">What We Look For</h3>
              <ul className="space-y-6">
                {whatWeLookFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-grantty-green/20 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary mb-1">{item.title}</h4>
                      <p className="text-secondary/70 text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;

