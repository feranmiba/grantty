import React from 'react'
import Miva from '../../assests/miva.png'
import Zoho from '../../assests/zoho.png'
import Wigwe from '../../assests/wigwe.png'
import Sturent from '../../assests/stutern.png'
import Initial from '../../assests/initial.png'
import Hardware from '../../assests/hardware.png'
import Banking from '../../assests/banking.png'
import BNPL from '../../assests/bnp.png'
import Training from '../../assests/training.png'


function StrategicPartners() {
    const proposed = [
        {
            img: Miva, 
            text: "Access to emerging talent"
        }, 
        {
            img: Zoho,
            text: "HR and operations software solutions"
        }, 
        {
            img: Wigwe,
            text: "Skilled graduate partnerships"
        }, 
        {
            img: Sturent, 
            text: "Upskilling and career services"
        }
    ]

    const Partners = [
        {
            icon: Initial,
            text: "HR Partners",
            small: "Talent acquisition and HR compliance"
        },
        {
            icon: Hardware,
            text: "Hardware Partners",
            small: "Device and software support"
        },
        {
            icon: Banking,
            text: "Banking & Fintech Partners",
            small: "Financial services and payroll"
        },
        {
            icon: BNPL,
            text: "BNPL Partners",
            small: "Payment options for employers"
        },
        {
            icon: Training,
            text: "Training & University Partners",
            small: "Access to trained resources"
        }
    ]
  return (
    <>
    <section className='bg-slate-50 py-10 px-5 lg:px-5'>
    <section className='md:max-w-7xl mx-auto '>

    <div className='mt-10 text-2xl md:text-3xl font-bold text-center'>
        <h1>Proposed Strategic Partners</h1>
    </div>

    <div className='flex lg:justify-between gap-5 mt-10 lg:flex-nowrap flex-wrap'>
        {proposed.map((propose, index) => (
            <div key={index} className='border-2 space-y-5 bg-white flex flex-col items-center md:items-start justify-center px-5 py-5 w-full md:w-[30%]'>
                <img src={propose.img} alt='' />

                <p className='text-xl font-semibold'>{propose.text}</p>

            </div>
        ))}
    </div>


    <div className='mt-10 text-2xl md:text-3xl font-bold text-center'>
        <h1>Other Strategic Partners</h1>
    </div>

    <div className='flex lg:justify-between  gap-5 mt-10 lg:flex-nowrap flex-wrap'>
        {Partners.map((propose, index) => (
            <div key={index} className='border-2 space-y-5 bg-white flex flex-col items-start justify-center px-5 py-5 w-[45%] rounded-lg md:rounded-none md:w-[30%]'>
               <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#5D9CEC1A]">
                        <img src={propose.icon} alt="" />
                        </div>

                <p className='text-base md:text-xl font-semibold'>{propose.text}</p>
                <p className='text-sm md:text-base'>{propose.small}</p>

            </div>
        ))}
    </div>
    </section>
    </section>

    
    </>
  )
}

export default StrategicPartners