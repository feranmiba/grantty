import React from 'react'
import { Button } from './ui/button'
import Frontlettt from '@/assests/Frontlett.png'
import { useNavigate } from 'react-router-dom'

function Frontlett() {
  const navigate = useNavigate();

  const Frontlett = () => {
    navigate('/frontlett');
  }
  return (
    <section  className="section-padding bg-[#E9EEFB]">
        <section className='lg:max-w-7xl mx-auto px-5 md:px-20 xl:px-10'>
        <div className=" relative animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-lg  border-2 border-[#6CBB2D] px-8 py-8  md:px-20 md:py-12">
                <section className='flex flex-wrap gap-10 md:flex-nowrap md:gap-14 items-center'>
                <div className="md:w-[80%]">
                <p className="space-y-5">
                    <img src={Frontlettt} alt="Frontlett" className=" inline-block mr-2" />
                    </p>
                <div className='flex items-stretch gap-4 flex-col justify-center mt-10'>    
                    <h4>The World 1st</h4>
                    <p className="text-3xl text-[#1D1D1D] font-semibold">Staff & work share Platform</p>
                </div>
                </div>

                <div className='w-full'>

                    <div className="flex justify-between items-center mb-4">
                    <div>
                        <h3 className="font-bold text-secondary text-2xl">Frontlett</h3>
                        <p className="text-xl text-[#1D1D1D] mt-3 mb-3">Abuja, Nigeria</p>
                    </div>
                    <div className="bg-grantty-green/10 text-grantty-green font-medium px-3 py-1 rounded-full text-sm">
                        0% Funded
                    </div>
                    </div>

                    <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                    <div className="bg-grantty-green h-2 rounded-full" style={{ width: '0%' }}></div>
                    </div>

                    <div className="flex justify-between text-sm mb-5 mt-2">
                    <span className="font-medium">₦0 Raised</span>
                    <span className="text-[#1D1D1D]">Goal ₦7,500,000</span>
                    </div>

                <div className="text-center mt-5" >
                  <Button className="w-full btn-primary bg-[#6CBB2D] hover:bg-[#5d9d28]" onClick={Frontlett}>Grantt this Startup</Button>
                </div>      

                </div>

                </section>
              
              
                
           
              </div>
            </div>
          </div>
        </section>
       
        </section>
  )
}

export default Frontlett


  
