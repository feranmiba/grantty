import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "Can I apply without a co-founder? ",
    answer: "Yes, You can submit your application without a co-founder. However, a co-founder must be added and verified before funds can be disbursed",
  },
  {
    question: "Can I apply more than once for a grant?",
    answer: "No, Each entrepreneur is allowed to receive a grant only once in a lifetime. identified by their national ID (e.g NIN in Nigeria)",
  },
  {
    question: "How much funding can I receive",
    answer: "Each approved application can receive up to ₦5,000,000 0r $3,000, depending on the total amount raised from grantors",
  },
  {
    question: "How will I receive the funds?",
    answer: "Funds are escrowed and disbursed based on your aproval spending Plan - directly to vendors, salaries, or designated costs",
  },
  {
    question: "What is required to get started?",
    answer: " You need a viable business idea, nationa ID, and a clear spending plan, and a willingness to partner with a co-founder before disbursement.",
  },
];

const Grantors = [
  {
    question: "How much can I contribute as a grantor?",
    answer: "You can give from as little as ₦1,000 or $1. There is no maximum limit",
  },
  {
    question: "Where does my money go?",
    answer: "Your funds go into an escrow account and are realeased to vetted entrepenuers according to their approved spending plan",
  },
  {
    question: "Can I choose which entrepreneur or category to support?",
    answer: "Yes. You can fund specific entrepenuers or select categories like women led, agriculure, tech etc",
  },
  {
    question: "Is there a reporting system for how my grant is used?",
    answer: "Yes, Grantty ensures transparency by tracking disbursement and giving grantors periodic updates",
  },
  {
    question: "Can organizations use Grantty for their CSR initiatives?",
    answer: "Absolutely, Companies can use Grantty as their CSR grant Platform and even recurring or targeted grant campaigns",
  },
]

function FaQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeIndexs, setActiveIndexs] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const toggleFaqs = (index: number) => {
    setActiveIndexs(activeIndexs === index ? null : index);
  };

  return (
    <section id='faq' className='section-padding bg-[#E9EEFB]'>
    <div className="p-6 md:p-12 max-w-4xl mx-auto ">
      <h2 className="text-4xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
    
      <div className="space-y-2">
      <h1 className='text-center my-5 mt-10 mb-14 text-lg'>FAQs for Granttees (Entrepreneurs)</h1>
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-3">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center py-3 text-left focus:outline-none"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <span className="text-gray-500">
  {activeIndex === index ? (
    // Minus icon in circle
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#69696C" strokeWidth="2" fill="none" />
    <rect x="7" y="11" width="10" height="2" fill="#69696C" />
  </svg>
  
  ) : (
    // Plus icon in circle
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 7C11 6.44772 10.5523 6 10 6C9.44772 6 9 6.44772 9 7V9H7C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H9V13C9 13.5523 9.44772 14 10 14C10.5523 14 11 13.5523 11 13V11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H11V7Z" fill="#69696C"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="#69696C"/>
    </svg>
    
  )}
</span>            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="pl-4 pr-2 text-gray-700 overflow-hidden"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>


      <div className="space-y-2">
        <h1 className='text-center my-5 mt-10 mb-14 text-lg'>FAQs for Granttors (Funders)</h1>
        {Grantors.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-3">
            <button
              onClick={() => toggleFaqs(index)}
              className="w-full flex justify-between items-center py-3 text-left focus:outline-none"
            >
              <span className="font-medium text-sm md:text-lg">{faq.question}</span>
              <span className="text-gray-500 text-xs">
  {activeIndexs === index ? (
    // Minus icon in circle
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#69696C" strokeWidth="2" fill="none" />
    <rect x="7" y="11" width="10" height="2" fill="#69696C" />
  </svg>
  
  ) : (
    // Plus icon in circle
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 7C11 6.44772 10.5523 6 10 6C9.44772 6 9 6.44772 9 7V9H7C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H9V13C9 13.5523 9.44772 14 10 14C10.5523 14 11 13.5523 11 13V11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H11V7Z" fill="#69696C"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="#69696C"/>
    </svg>
    
  )}
</span>


            </button>
            <AnimatePresence>
              {activeIndexs === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="pl-4 pr-2 text-gray-700 overflow-hidden"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default FaQs;

