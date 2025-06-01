import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import FrontLett from '../../assests/FrontlettHero.png'
import { useNavigate } from "react-router-dom";
import Frontlett from '../../assests/Frontlett.png'

const HeroSection = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const grants = () => {
    navigate("/grant/grant-frontlett");
  };

  return (
    <section className="md:pt-20 relative overflow-hidden">
      <div className="flex justify-center py-10 px-5 md:px-10 mt-14 md:mt-0">
        <Badge variant="outline" className="bg-[#FF7A500D] text-[#FF7A50] text-[12px] p-3 md:p-2 text-center md:text-base font-extralight lg:text-sm rounded-xl md:rounded-lg">
          Future of Work {">>"} We’re raising a ₦5m or $3k Grantt to build a new work model for the world. For as low as ₦1,000 or $1 you can help make this happen
        </Badge>
      </div>

      <div className="flex justify-center mb-10 mt-5 md:mt-0">
        <img src={Frontlett} alt="Frontlett" className="w-[60%] sm:w-[40%] md:w-[10%] md:hidden" />
      </div>

      <div className="md:mt-10">
        <div className="flex flex-col lg:flex-row gap-14 justify-between lg:gap-10">
          <section className="lg:bg-[#5D9CEC]/10 px-5 md:pl-28 lg:py-14 rounded-tr-[90px] lg:h-[65vh] w-full lg:w-[70%]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-start lg:text-left"
            >
              <h2 className="text-lg text-[#333333] mb-2 font-bold">The World 1st</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
                Staff Sharing Platform
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-[#6CBB2D] shadow-xl hover:bg-[#62a62a] hidden md:flex gap-1" onClick={grants}>
                  Grantt Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#6CBB2D] text-[#6CBB2D]"
                  onClick={() => setShowModal(true)}
                >
                  Watch Video
                </Button>
              </div>
            </motion.div>
          </section>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[100%] hidden md:block"
          >
            <img
              src={FrontLett}
              alt="Frontlett"
              className="w-full md:max-w-5xl md:h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center px-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-semibold mb-4 text-center">Frontlett Platform Walkthroughs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-md font-medium mb-2">Employer Walkthrough</h3>
                <iframe
                  className="w-full h-64 rounded-lg"
                  src="https://drive.google.com/file/d/1TpsStZBEwUXz8c59N-KfH5RzbZt_vSky/preview"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <h3 className="text-md font-medium mb-2">Employee Walkthrough</h3>
                <iframe
  className="w-full h-64 rounded-lg"
  src="https://drive.google.com/file/d/10M8kbEXnyNnfHWQg1MrLhHOGX1rNIhYV/preview"
  allow="autoplay"
  allowFullScreen
></iframe>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
