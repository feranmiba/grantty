
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyGranttySection from "@/components/WhyGranttySection";
import EligibilitySection from "@/components/EligibilitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <WhyGranttySection />
        <EligibilitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
