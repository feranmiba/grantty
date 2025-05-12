
import { motion } from "framer-motion";
import { Wallet, Users, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const differentiators = [
  {
    title: "Budget-Based Hiring",
    description: "Companies can hire based on budget.",
    delay: 0.1,
  },
  {
    title: "Committed Teams",
    description: "Hire non-essential staff with company vision alignment.",
    delay: 0.2,
  },
  {
    title: "Ideal Salary",
    description: "Resources earn close to their desired pay.",
    delay: 0.3,
  },
  {
    title: "Complete Teams",
    description: "Assemble a full team affordably.",
    delay: 0.4,
  },
  {
    title: "Resource Engagement",
    description: "Multiple hiring options improve job security.",
    delay: 0.5,
  },
];

const WhyWeDifferSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-start mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Why We Differ</h2>
     
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <Card className="h-full bg-white border-slate-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-slate-800">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeDifferSection;