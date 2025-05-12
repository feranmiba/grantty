import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { DollarSign, PieChart as PieChartIcon } from "lucide-react";

const data = [
  { name: "HR Fee", value: 25, color: "#4285f4" },
  { name: "Platform Fees ", value: 45, color: "#ff7043" },
  { name: "Commission", value: 30, color: "#4db6ac" },
  { name: "Interest On Deposit", value: 10, color: "#9F7AEA" }
];

const RevenueModel = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 md:px-8 bg-[#333333] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Revenue Model</h2>
          <p className="text-slate-300">Multiple revenue streams for sustainable growth</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">  
          {/* Main chart */}
          <motion.div 
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="lg:col-span-4 mb-6 flex justify-center items-center"
>
  <Card className="bg-[#FFFFFF1A] border-slate-700 w-full lg:w-3/4">
    <CardHeader className="pb-2">
      <CardTitle className="text-center text-xl text-white">Revenue Model</CardTitle>
      <p className="text-slate-400 text-center text-sm">Q3 July 2023</p>
    </CardHeader>
    <CardContent>
      <div className="h-[300px] w-full flex justify-center">
        <ChartContainer config={{
          hr: { color: "#4285f4" },
          platform: { color: "#ff7043" },
          commission: { color: "#4db6ac" }
        }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3" style={{ backgroundColor: item.color }}></div>
            <span className="text-sm text-slate-300">{item.name}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
           </motion.div>
        </div>


        <section className="flex flex-wrap lg:flex-nowrap md:flex justify-between gap-10   mt-10">

            <section className="space-y-10 lg:w-1/2">
                                  {/* HR Fee Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <Card className="h-full bg-[#FFFFFF1A] border-slate-700">
              <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4">
                <CardTitle className="text-white text-lg font-medium">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 p-1.5 rounded-md">
                      <DollarSign className="h-4 w-4 text-white" />
                    </div>
                    <span>HR Fee</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 mt-5 mb-10">8% of the salary per slot</p>
                <p className="text-xs text-[#FFFFFFE5] mb-10 bg-[#FFFFFF1A] rounded-md px-3 py-4">
                Applied to each transaction between companies and
                resources, providing a consistent revenue stream. Base hourly fee for matching employees with companies and managing their slots
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Platform Fees Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <Card className="h-full bg-[#FFFFFF1A] border-slate-700 space-y-5">
              <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4">
                <CardTitle className="text-white text-lg font-medium">
                  <div className="flex items-center gap-2">
                    <div className="bg-orange-500 p-1.5 rounded-md">
                      <PieChartIcon className="h-4 w-4 text-white" />
                    </div>
                    <span>Platform Fees</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 mb-10">Tier Configuration</p>
                            <ul className="text-xs text-[#FFFFFFE5] mb-10 bg-[#FFFFFF1A] rounded-md p-2 list-disc list-inside space-y-5">
            <li>Interest from deposits</li>
            <li>Insurance commissions</li>
            <li>Product commissions</li>

            </ul>

               
              </CardContent>
            </Card>
          </motion.div>

            </section>

            <section className="space-y-10 lg:w-1/2 w-full">
                          {/* Additional Revenue Sources */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-1"
          >
            <Card className="h-full bg-[#FFFFFF1A] border-slate-700">
              <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4">
                <CardTitle className="text-white text-lg font-medium">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 p-1.5 rounded-md">
                      <DollarSign className="h-4 w-4 text-white" />
                    </div>
                    <span>Platform Fees</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 mb-5 mt-10">For Companies:</p>
                <p className="text-xs text-[#FFFFFFE5] mb-10 bg-[#FFFFFF1A] rounded-md px-3 py-4">
                Starting at ₦30,000/yr for local companies and $50/yr for
                foreign companies
               </p>

               <p className="text-sm text-slate-300 mb-5">For Resources:</p>
                <p className="text-xs text-[#FFFFFFE5] mb-10 bg-[#FFFFFF1A] rounded-md px-3 py-4">
                Starting at ₦5,000/yr for resources
               </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Projected Sales */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-1"
          >
            <Card className="h-full bg-[#FFFFFF1A] border-slate-700">
              <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4">
                <CardTitle className="text-white text-lg font-medium">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 p-1.5 rounded-md">
                      <DollarSign className="h-4 w-4 text-white" />
                    </div>
                    <span>Projected Sales</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-xs text-[#FFFFFFE5] mb-10 bg-[#FFFFFF1A] rounded-md px-3 py-4">
              300,000 targeted slots sales in 24 months               </p>              </CardContent>
            </Card>
          </motion.div>

            </section>
        </section>
      </div>
    </motion.section>
  );
};

export default RevenueModel;
