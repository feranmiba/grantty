import React from 'react'
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

function Frontlett() {
  return (
   <main>
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


   </main>
  )
}

export default Frontlett