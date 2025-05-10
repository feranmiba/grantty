
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Globe, Mail } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Daniel Oratokhai",
      role: "Director of Growth",
      subRole: "Founder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      highlighted: true,
    },
    {
      id: 2,
      name: "Victor Adams",
      role: "Chief Marketing Officer",
      subRole: "Key Team",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      name: "David Omoiqui",
      role: "Investment Advisor",
      subRole: "Advisory Team",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 4,
      name: "Bar Akin Sanda",
      role: "Legal Advisor",
      subRole: "Advisory Team",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 md:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-800">Team</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">The experts behind Frontlett Virtualizing</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold mb-10 text-slate-700">Key Teams & Advisors</h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className={`relative w-40 h-40 mb-4 ${member.highlighted ? "border-4 border-blue-500 rounded-full p-1" : ""}`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h4 className="text-xl font-bold text-slate-800">{member.name}</h4>
              <p className="text-blue-600 mb-1">{member.role}</p>
              <p className="text-slate-500 text-sm mb-3">{member.subRole}</p>
              <div className="flex space-x-3 mt-2">
                <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                  <Mail size={18} />
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                  <Globe size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TeamSection;