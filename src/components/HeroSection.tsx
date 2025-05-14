
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Frontlettt from '@/assests/Frontlett.png';


const HeroSection = () => {
    const [businessInfoList, setBusinessInfoList] = useState<any[]>([]);
    const navigate = useNavigate();


    const signUp = () => {
      navigate('/founder');
      console.log('Sign Up button clicked');
    }

    const Frontlett = () => {
      navigate('/frontlett');
    }
    
  
     useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://grantty-backend.onrender.com/startup', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
    
            if (!response.ok) {
              throw new Error(`Error: ${response.statusText}`);
            }
    
            const data = await response.json();
            setBusinessInfoList(data.data);
          } catch (error) {
            console.error('Error fetching business data:', error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-grantty-lightBlue/30 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary leading-tight mb-6">
            Support the next great startup - from as low as ₦1,000 or $1
              </h1>
            
            <p className="text-lg text-secondary/80 mb-8 leading-relaxed">
            Be part of real impact. Through Grantty, you can back Nigerian startups with micro grants-not loans, not equity-just meaningful support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary bg-[#6CBB2D] hover:bg-[#5d9d28]" size="lg" onClick={signUp}>
              Grantt Now
              </Button>
              <Button variant="outline" className="btn-secondary text-[#6CBB2D]" size="lg" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
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
                Joined by <span className="font-semibold">42 funders</span> this month
              </p>
            </div>
          </div>
          
          <div className="order-1  md:order-2 relative animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-lg  border-2 border-[#6CBB2D]">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold text-secondary text-2xl">FrontLett</h3>
                    <p className="text-xl text-[#1D1D1D] mt-3 mb-3">Abuja, Nigeria</p>
                  </div>
                  <div className="bg-grantty-green/10 text-grantty-green font-medium px-3 py-1 rounded-full text-sm">
                    85% Funded
                  </div>
                </div>
                
                <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                  <div className="bg-grantty-green h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                
                <div className="flex justify-between text-sm mb-5 mt-2">
                  <span className="font-medium">₦2,550,000 Raised</span>
                  <span className="text-[#1D1D1D]">Goal ₦5,000,000</span>
                </div>
                
                <div className="flex items-center space-x-2 mt-8 mb-4">
                <p className="w-[25%]">
                      <img src={Frontlettt} alt="Frontlett" className=" inline-block mr-2" />
                    </p>
                  <div className='flex items-stretch gap-4 flex-col justify-center'>    
                    <h4>The World 1st</h4>
                    <p className="text-2xl text-secondary/70">Staff Sharing Platform</p>
                  </div>
                </div>
                
                <div className="text-center mt-5">
                  <Button className="w-full btn-primary bg-[#6CBB2D] hover:bg-[#5d9d28]" onClick={Frontlett}>Grantt this Startup</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
