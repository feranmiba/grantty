import React, { useEffect } from 'react'
import HeroSection from '@/components/Frontlett/HeroSection'
import RevenueModel from '@/components/Frontlett/Revenue'
import TeamSection from '@/components/Frontlett/TeamSection'
import GoToMarketSection from '@/components/Frontlett/GoToSection'
import FundingSection from '@/components/Frontlett/Funding'
import ProductOverviewSection from '@/components/Frontlett/ProductOverview'
import WhyWeDifferSection from '@/components/Frontlett/Whywediffer'
import ProblemSolutionSection from '@/components/Frontlett/ProblemandSOlution'
import FrontlettInfo from '@/components/Frontlett/FrotelettHero'
import StrategicPartners from '@/components/Frontlett/StrategicPartners'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useNavigate } from 'react-router-dom'

function Frontlett() {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const grants = () => {
    navigate("/grant/grant-frontlett");
  }

  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <FrontlettInfo />
      <ProblemSolutionSection />
      <ProductOverviewSection />
      <WhyWeDifferSection />
      <StrategicPartners />
      <RevenueModel />
      <GoToMarketSection />
      <FundingSection />
      <TeamSection />
      <Footer />

      <button
        className="fixed right-0 top-1/2 md:hidden -rotate-90 bg-[#6CBB2D] hover:bg-[#62a62a] text-white font-medium py-2 px-4 rounded-xl z-50"
        onClick={() => alert('Grant Us clicked')}
      >
        Grant Us
      </button>
    </main>
  )
}

export default Frontlett

