"use client"
import { ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserStore } from '@/store/useUserStore';
import { FaUser } from 'react-icons/fa';
import Logo from '@/assests/Main Logo.png';


const DashboardHeader = () => {
    const { user } = useUserStore();

    return (
        <header className="flex items-center justify-between px-24 py-5 bg-white border-b border-gray-100 rounded-t-xl">
            <div className="flex items-center gap-2">
              
          <img src={Logo} alt="Grantty Logo" className="h-8 md:h-10" />
                </div>
            <div className="flex items-center gap-3">
                <div className=' px-2 gap-5 flex items-center py-1 text-primary text-xl font-semibold'>
                    <p>
                    <FaUser className='inline-block mr-2 text-xl' />
                    </p>
                    {user?.full_name || 'User'}
                </div>

                <div className="btn-primary bg-[#9ED219] hover:bg-[#477d1b] text-white rounded-2xl" >
                   Grantor
          </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
