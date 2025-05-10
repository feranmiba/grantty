
import { motion } from "framer-motion";
import { Share, DollarSign, Briefcase, Code } from "lucide-react";

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
  },
  {
    title: "AI Resume Builder",
    description: "Intelligent resume creation and professional resumes using intelligent algorithms",
    delay: 0.2,
  },
  {
    title: "AI Work-Life Balance Analyzer",
    description: "Analysis schedules to optimize healthy productivity and personal time",
    delay: 0.3,
  },
  {
    title: "AI HR Agent",
    description: "Automates hiring, onboarding, and support with human-like AI assistants",
    delay: 0.4,
  },
];

const milestones = [
  {
    title: "Phase 1 development done",
    description: "Fully operational foundation for phase 1 alpha and beta releases",
    completed: true,
  },
  {
    title: "Initial customer acquisition in progress",
    description: "First wave of early adopters onboarded to the platform",
    completed: true,
  },
  {
    title: "75% UI/UX design done",
    description: "User interface and experience design nearing completion",
    completed: true,
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Product Overview</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our platform provides a comprehensive solution for staff sharing and resource management.
          </p>
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

      <section className="bg-slate-800 p-8  mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 rounded-xl mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Proprietary Technology</h3>
          <p className="text-slate-300 text-center mb-8">Some key proprietary technology we are building</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: tech.delay }}
                className="bg-slate-700 p-6 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <div className="p-1 rounded-full bg-green-500 mr-2 flex items-center justify-center">
                    <Code className="h-4 w-4 text-white" />
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
            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="font-bold text-slate-800 mb-4">Milestones</h4>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex">
                    <div className="mr-3 mt-1">
                      <div className="h-5 w-5 rounded-full border-2 border-blue-500 flex items-center justify-center bg-white">
                        {milestone.completed && (
                          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-800">{milestone.title}</h5>
                      <p className="text-sm text-slate-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-slate-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-slate-800 mb-4">Regulatory Readiness</h4>
                <div className="space-y-6">
                  {regulatoryItems.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="mr-3 mt-1">
                        <div className="h-5 w-5 rounded-full border-2 border-blue-500 flex items-center justify-center bg-white">
                          {item.completed && (
                            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                          )}
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

              <div className="bg-slate-50 p-6 rounded-lg">
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