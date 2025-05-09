
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-grantty-lightBlue/30 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              Launch Your Startup With a <span className="text-primary">₦5M Grant</span> – No Equity Taken
            </h1>
            
            <p className="text-lg text-secondary/80 mb-8 leading-relaxed">
              Grantty is a one-time, co-founder-backed grant opportunity for Nigerian startups, 
              funded by everyday people who believe in your vision. Get the financial boost you 
              need without giving up ownership.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary" size="lg">
                Apply Now
              </Button>
              <Button variant="outline" className="btn-secondary" size="lg" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn How It Works
              </Button>
            </div>
            
            <div className="mt-10 flex items-center space-x-6">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-grantty-blue flex items-center justify-center text-white text-xs">
                  AO
                </div>
                <div className="w-8 h-8 rounded-full bg-grantty-green flex items-center justify-center text-white text-xs">
                  JB
                </div>
                <div className="w-8 h-8 rounded-full bg-grantty-navy flex items-center justify-center text-white text-xs">
                  MO
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                  +42
                </div>
              </div>
              <p className="text-sm text-secondary/70">
                Joined by <span className="font-semibold">45+ funders</span> this month
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-lg border border-grantty-lightBlue">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold text-secondary text-xl">TechVenture</h3>
                    <p className="text-sm text-secondary/70">Lagos, Nigeria</p>
                  </div>
                  <div className="bg-grantty-green/10 text-grantty-green font-medium px-3 py-1 rounded-full text-sm">
                    85% Funded
                  </div>
                </div>
                
                <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                  <div className="bg-grantty-green h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                
                <div className="flex justify-between text-sm mb-4">
                  <span className="font-medium">$2,550 raised</span>
                  <span className="text-secondary/70">Goal: $3,000</span>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-grantty-blue/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-grantty-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Co-founders</p>
                    <p className="text-xs text-secondary/70">Ade & Nneka</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button className="w-full btn-primary">Support This Startup</Button>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 md:bottom-12 md:-right-12 bg-white rounded-xl shadow-lg p-3 max-w-[150px] animate-float" style={{animationDelay: '2s'}}>
              <div className="text-center">
                <div className="text-2xl font-bold text-grantty-navy">42</div>
                <p className="text-xs text-secondary/70">Startups Funded</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
