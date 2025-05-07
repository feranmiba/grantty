
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyGranttySection from "@/components/WhyGranttySection";
import EligibilitySection from "@/components/EligibilitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FaQs from "@/components/FaQs";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <WhyGranttySection />
        <EligibilitySection />
        <Testimonials />
        <CTASection />
        <FaQs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
