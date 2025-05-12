import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import FrontLett from '../../assests/FrontlettHero.png'

const HeroSection = () => {
  return (
<section className="md:py-20 relative overflow-hidden">
  <div className="flex justify-center py-10 md:px-10 mt-14 md:mt-0">
    <Badge  variant="outline" className=" bg-[#5D9CEC1A] text-[#163078] text-[10px] p-3 md:p-2 text-center md:text-base font-extralight lg:text-lg  ">Future of Work {">>"} We’re raising a ₦5m or $3k Grantt to build a new work model for the world. For as low as ₦1,000 or $1 you can help make this happen </Badge>
  </div>
  <div className="mt-10">
    <div className="flex flex-col-reverse lg:flex-row  justify-between lg:gap-10">
      
      {/* Text Section with Static Background */}
      <section className="lg:bg-[#5D9CEC]/10 px-10 md:pl-28 lg:py-14 rounded-tr-[90px] lg:h-[65vh] w-full lg:w-[70%]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-lg text-[#333333] mb-2 font-bold">The World 1st </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
           Staff Sharing Platform
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-[#6CBB2D] shadow-xl hover:bg-blue-700">
              Grantt Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#6CBB2D] text-[#6CBB2D]">
              Watch Video
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-[100%]"
      >
        <img
          src={FrontLett}
          alt="Frontlett"
          className="w-full max-w-5xl h-auto rounded-lg"
        />
      </motion.div>
      
    </div>
  </div>
</section>

  
  );
};

export default HeroSection;