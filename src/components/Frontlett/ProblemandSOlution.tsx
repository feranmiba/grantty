
import { motion } from "framer-motion";
import { AlertTriangle, Check } from "lucide-react";
import { FaUser } from "react-icons/fa";

const problems = {
  companies: [
    {
      problem: "Limited hiring power due to budget constraints.",
      solution: "Budget-aligned hiring through affordable time slots.",
    },
    {
      problem: "Incomplete teams due to high costs of full-time staff.",
      solution: "Complete team access within budget limitations.",
    },
    {
      problem: "Reliance on freelancers who may lack long-term commitment.",
      solution: "Opportunity to hire long-term talent over freelancers.",
    },
    {
      problem: "Inability to access top talent within financial reach.",
      solution: "Access to skilled talent without budget constraints.",
    },
  ],
  resources: [
    {
      problem: "Limited job opportunities.",
      solution: "Increased job engagement.",
    },
    {
      problem: "Low compensation due to limited job availability.",
      solution: "Competitive compensation through multiple engagements.",
    },
    {
      problem: "Lack of flexibility and adaptable work arrangements.",
      solution: "Flexible work structure.",
    },
    {
      problem: "Minimal benefits such as health and life insurance.",
      solution: "Enhanced benefits, regardless of company size.",
    },
  ],
};

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 px-4 md:px-14 xl:px-24 bg-white">
      <div className="md:max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Problem & Solution</h2>
         
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-blue-50 rounded-xl p-6"
          >
            <h3 className="text-3xl font-bold text-blue-800 mb-6">For Companies</h3>
            
            <div className="space-y-6">
              {problems.companies.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                  className="bg-white py-5 px-5 rounded-2xl"
                >
                  <div className="flex mb-2 gap-5">
                  <p className="bg-gray-50 flex justify-center items-center w-[30px] h-[30px] rounded-full">

                    <AlertTriangle className="text-blue-950  h-3 w-4 mt-0.5 flex-shrink-0" />
                    </p>
                    <p className="font-medium text-slate-700">{item.problem}</p>
                  </div>
                  <div className="pl-7 ">
                    <div className="flex items-center text-blue-700 bg-blue-50 py-5 px-5 rounded-xl text-sm">
                      <Check className="mr-2 h-4 w-4 text-blue-600" />
                      <span>{item.solution}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-rose-50 rounded-xl p-6"
          >
            <h3 className="text-3xl font-bold text-[#FF7A50] mb-6">For Resources</h3>
            
            <div className="space-y-6">
              {problems.resources.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                  className="bg-white py-5 px-5 rounded-2xl"

                >
                  <div className="flex mb-2 gap-5">
                    <p className="bg-gray-50 flex justify-center items-center w-[30px] h-[30px] rounded-full">
                    <FaUser className="text-amber-500 h-3 w-4 mt-0.5 flex-shrink-0" />

                    </p>
                    <p className="font-medium text-slate-700">{item.problem}</p>
                  </div>
                  <div className="pl-7 ">
                    <div className="flex items-center text-rose-700 text-sm bg-blue-50 py-5 px-5 rounded-xl">
                      <Check className="mr-2 h-4 w-4 text-rose-600" />
                      <span>{item.solution}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;