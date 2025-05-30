import { motion } from "framer-motion";
import { Users, Briefcase, MessageSquare, Handshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GoToMarketSection = () => {
  const strategies = [
    {
      id: 1,
      title: "Invite-Only Model",
      subtitle: "First year, invite-only for exclusivity",
      description: "Creating a sense of exclusivity and premium value with a controlled rollout to select clients and resources.",
      icon: <Users className="h-6 w-6 text-blue-500" />
    },
    {
      id: 2,
      title: "Strategic Partnerships",
      subtitle: "Universities, HR consultants, training providers",
      description: "Collaborating with educational institutions, HR professionals, and training organizations to expand our reach.",
      icon: <Handshake className="h-6 w-6 text-blue-500" />
    },
    {
      id: 3,
      title: "Digital Marketing",
      subtitle: "Social media, targeted campaigns",
      description: "Implementing strategic digital marketing initiatives to reach our target audience efficiently.",
      icon: <MessageSquare className="h-6 w-6 text-blue-500" />
    },
    {
      id: 4,
      title: "Community Building",
      subtitle: "Engaged network of users and partners",
      description: "Fostering a vibrant community of companies and resources to drive organic growth and referrals.",
      icon: <Users className="h-6 w-6 text-blue-500" />
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 md:px-14 xl:px-24 bg-white"
    >
      <div className="md:max-w-6xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-800">Go-To-Market Strategy</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">Our approach to market penetration and growth</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategies.map((strategy, index) => (
            <motion.div 
              key={strategy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full `}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-50">
                      {strategy.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-slate-800">{strategy.title}</CardTitle>
                      <p className="text-sm text-blue-600">{strategy.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{strategy.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default GoToMarketSection;