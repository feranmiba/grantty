
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Code, Users, LineChart, Scale } from "lucide-react";

const FundingSection = () => {
  const fundAllocation = [
    {
      title: "MVP Development",
      amount: "30% (N1.5m) ($900)",
      icon: <Code className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Salaries & Operations",
      amount: "30% (N1.5m) ($900)",
      icon: <DollarSign className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Sales & Marketing",
      amount: "20% (N1m) ($600)",
      icon: <LineChart className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Regulatory Compliance",
      amount: "20% (N1m) ($600)",
      icon: <Scale className="h-5 w-5 text-blue-500" />,
    },
  ];

  const whyNowReasons = [
    {
      title: "Global Inflation",
      description: "Economic pressures are driving businesses to seek flexible and cost-effective workforce solutions.",
    },
    {
      title: "Global Change in Work Behavior",
      description: "The shift to remote and hybrid work models has accelerated the need for virtual workforce platforms.",
    },
    {
      title: "Need for Work-Life Balance",
      description: "Professionals increasingly prioritize flexibility and balance in their career choices.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 md:px-8 bg-slate-50"
    >
      <div className="md:max-w-7xl mx-auto md:px-14 xl:px-24">
      <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 mt-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 text-center">Use of Funds</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
            {fundAllocation.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-md bg-blue-50 hidden md:inline-block">{item.icon}</div>
                      <CardTitle className="text-base md:text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-600 font-medium text-sm md:text-base">{item.amount}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 text-center">Why Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyNowReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className=" p-5 rounded-xl border-[#EEEEEE] border-2  bg-[#FFFFFFB2]"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-3">{reason.title}</h3>
                <p className="text-slate-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

    

      
      </div>
    </motion.section>
  );
};

export default FundingSection;