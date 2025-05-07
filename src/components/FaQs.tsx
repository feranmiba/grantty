import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "Who is eligible to apply for a Grantty grant?",
    answer: "Anyone meeting the criteria specified in our guidelines can apply, including individuals, non-profits, and community organizations.",
  },
  {
    question: "How much funding can I receive?",
    answer: "The amount of funding varies based on the grant type and project scope. Please refer to our grant guidelines for specific amounts.",
  },
  {
    question: "Do I need to repay the grant?",
    answer: "No, Grantty grants do not require repayment, but you may be required to report on how the funds are used.",
  },
  {
    question: "How long does the application process take?",
    answer: "The application process typically takes 4-6 weeks from submission to approval.",
  },
  {
    question: "Can I apply if I have already received funding elsewhere?",
    answer: "Yes, you can apply even if you have received funding from other sources, provided it does not conflict with the grant requirements.",
  },
];

function FaQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto">
      <h2 className="text-4xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
      <p className="text-center mb-6 font-medium text-xl">
        Everything you need to know about Grantty
      </p>
      <div className="space-y-2">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-3">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center py-3 text-left focus:outline-none"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <span className="text-gray-500">{activeIndex === index ? "-" : "+"}</span>
            </button>
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
    </div>
  );
}

export default FaQs;

