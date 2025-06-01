import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import Frontlett from '../../assests/Frontlett.png'

const AnimatedCard = ({ title, subtitle, content, badgeText }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white shadow-lg p-6 rounded-2xl mb-6 w-full lg:max-w-lg"
    >
      <Badge variant="outline" className="mb-2 bg-[#5D9CEC1A] text-[#163078]">{badgeText}</Badge>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <h4 className="text-lg text-gray-600 mb-2">{subtitle}</h4>
      <p className="text-gray-500">{content}</p>
    </motion.div>
  );
};

const FrontlettInfo = () => {
  return (
    <section className="px-5 md:px-14 xl:px-24">
           <div className="flex justify-center mb-10 mt-5 md:mt-0">
           <img src={Frontlett} alt="Frontlett" className="w-[60%] sm:w-[40%] md:w-[10%] hidden md:block" />
           </div>
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center md:max-w-7xl mx-auto">
            <div className="p-5 md:p-6  rounded-lg shadow-lg backdrop-blur-lg lg:w-[80%] lg:h-full md:py-10">
              <p className="text-[#0F1729] leading-8">
                Frontlett Virtualting is a staff share and resource share model that allows companies to share a staff with other companies while they split the cost of hiring the employee or resource. The model allows employees and resources to work for as much as 4 companies in slot times of 2hrs.
              </p>
              <p className="text-[#0F1729] leading-8 text-sm sm:text-base">
              The objective of the model is to allow companies to hire the right people they need irrespective of the cost, as they will need to take a slot portion they can afford as well as an opportunity to hire a full team needed for the company to succeed.
              </p>
            </div>

      <div className="space-y-6 w-full">
      <AnimatedCard
          title="Staff Sharing Model"
          subtitle="Companies share resources and split costs."
          content="Making premium talent accessible to businesses of all sizes."
          badgeText="Flexible Hiring"
        />
        <AnimatedCard
          title="2-Hour Slot System"
          subtitle="Resources work efficiently for multiple companies."
          content="Maximizing productivity and compensation with up to 4 different companies."
          badgeText="Time Optimization"
        />
        <AnimatedCard
          title="Cost Efficiency"
          subtitle="Affordable and flexible hiring options."
          content="Take only the time slots you need and can afford, while still accessing top-tier talent."
          badgeText="Budget Friendly"
        />
      </div>
    </div>
    </section>
  
  );
};

export default FrontlettInfo;
