
import { motion } from "framer-motion";
import { Share, DollarSign, Briefcase, Code } from "lucide-react";
import Work from '../../assests/work.png'
import Agent from '../../assests/agent.png'
import WorkLife from '../../assests/worklife.png'
import Resuume from '../../assests/resume.png'
import Rediness from '../../assests/readiness.png'
import Phase1 from '../../assests/phse1.png'
import Initial from '../../assests/initial.png'
import Done from '../../assests/Done.png'
const productFeatures = [
  {
    title: "Collaborative Platform",
    description: "Real-time tools for affordable 2-hour slot management",
    icon: <Share className="text-blue-500" />,
    delay: 0.1,
  },
  {
    title: "Resource Sharing",
    description: "Cost sharing for high-quality talent",
    icon: <DollarSign className="text-green-500" />,
    delay: 0.2,
  },
  {
    title: "Management",
    description: "Scheduling, payments, and tracking handled by Frontlett",
    icon: <Briefcase className="text-purple-500" />,
    delay: 0.3,
  },
];

const technologies = [
  {
    title: "Work Data AI",
    description: "Data comprehension history and current data through unique digital ID",
    delay: 0.1,
    img: Work
  },
  {
    title: "AI Resume Builder",
    description: "Intelligent resume creation and professional resumes using intelligent algorithms",
    delay: 0.2,
    img: Resuume
  },
  {
    title: "AI Work-Life Balance Analyzer",
    description: "Analysis schedules to optimize healthy productivity and personal time",
    delay: 0.3,
    img: WorkLife
  },
  {
    title: "AI HR Agent",
    description: "Automates hiring, onboarding, and support with human-like AI assistants",
    delay: 0.4,
    img: Agent
  },
];

const milestones = [
  {
    title: "Phase 1 development done",
    description: "Core platform functionality for phase 1 done and tested",
    completed: Phase1,
  },
  {
    title: "Initial customer acquisition in progress",
    description: "Early adopters being onboarded to the platform",
    completed: Initial,
  },
  {
    title: "75% UI/UX design done",
    description: "User interface and experience design nearing completion",
    completed: Done,
  },
];

const regulatoryItems = [
  {
    title: "Compliance with local and global HR regulations",
    description: "Ensuring all operations meet regulatory requirements",
    completed: true,
  },
];

const nextSteps = [
  "Complete platform development",
  "Launch beta testing phase",
  "Expand market partnerships",
  "Full production rollout",
];

const ProductOverviewSection = () => {
  return (
    <section className="py-20   bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-start mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Product Overview</h2>
        
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {productFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="bg-slate-50 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-md bg-white mr-3">{feature.icon}</div>
                <h3 className="font-semibold text-slate-800">{feature.title}</h3>
              </div>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="bg-[#333333] p-8  mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 rounded-xl mb-16"
        >
          <div className="flex justify-center items-center flex-col gap-6">
          <h3 className="text-2xl font-bold text-white  text-center">Proprietary Technology</h3>
          <p className="w-20 h-1 bg-[#6CBB2D]"></p>
          <p className="text-slate-300 text-center mb-8">Some key proprietary technology we are building</p>
          </div>
         

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: tech.delay }}
                className="bg-[#FFFFFF1A] p-6 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <div className="p-3 rounded-full bg-[#5D9CEC33] mr-2 flex items-center justify-center">
                    <img src={tech.img} alt="" />
                  </div>
                  <h4 className="font-semibold text-white">{tech.title}</h4>
                </div>
                <p className="text-slate-300 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        </section>
    
    <section className="max-w-7xl mx-auto px-5 lg:px-0">
    <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Traction</h3>
          <p className="text-slate-600 text-center mb-8">Our progress and milestones</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-xl p-6 rounded-lg mb-6">
              <h4 className="font-bold text-slate-800 mb-4 text-2xl">Milestones</h4>
              <div className="space-y-10 mt-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex">
                    <div className="mr-3 mt-1">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#5D9CEC1A]">
                        <img src={milestone.completed} alt="" />
                        </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-800 text-xl">{milestone.title}</h5>
                      <p className="text-base text-[#333333B2]">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white shadow-xl p-6 rounded-lg mb-6">
              <div >
                <h4 className="font-bold text-slate-800 mb-4 text-2xl">Regulatory Readiness</h4>
                <div className="space-y-6">
                  {regulatoryItems.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="mr-3 mt-1">
                        <div className="h-8 w-8 rounded-full border-2 border-blue-500 flex items-center justify-center bg-[#5D9CEC1A]">
                        <img src={Rediness} alt="" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-800">{item.title}</h5>
                        <p className="text-sm text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg mt-5">
                <h4 className="font-bold text-slate-800 mb-4">Next Steps</h4>
                <ul className="space-y-2">
                  {nextSteps.map((step, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 text-blue-500">•</span>
                      <span className="text-sm text-slate-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
    </section>
      
    </section>
  );
};

export default ProductOverviewSection;