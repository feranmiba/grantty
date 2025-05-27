"use client"
import { ChevronDown } from "lucide-react";
import { useUserStore } from '@/store/useUserStore';
import { FaUser } from 'react-icons/fa';
import Logo from '@/assests/Main Logo.png';

const DashboardHeader = () => {
    const { user } = useUserStore();

    return (
        <header className="flex items-center justify-between px-5 md:px-12 lg:px-24 py-4 bg-white border-b border-gray-100 rounded-t-xl">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src={Logo} alt="Grantty Logo" className="h-5 md:h-10" />
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3">
                <div className="px-2 gap-3 flex items-center py-1 text-primary text-sm md:text-base font-semibold max-w-[150px] md:max-w-none overflow-hidden">
                    <p className="border-r-2 pr-3">
                        <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M15.6271 12.9622C14.7801 11.0992 14.8021 10.3982 14.8411 9.12423C14.8511 8.82323 14.8611 8.49623 14.8611 8.12123C14.8611 5.14423 12.7321 0.951233 8.00012 0.951233C3.26812 0.951233 1.13912 5.14423 1.13912 8.12123C1.13912 8.49523 1.14912 8.82323 1.15912 9.12423C1.19812 10.3982 1.21912 11.0992 0.363117 12.9872C-0.00288332 13.9312 0.0411167 14.7462 0.496117 15.4102C1.58812 17.0082 4.74812 17.2282 8.00012 17.2282C11.2521 17.2282 14.4121 17.0082 15.5041 15.4102C15.9601 14.7462 16.0041 13.9312 15.6271 12.9622Z" fill="#060E22"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.6971 18.2408C9.06614 18.4218 7.29814 18.4208 5.28814 18.2388C4.98714 18.2148 4.68914 18.3738 4.55114 18.6488C4.41214 18.9248 4.45614 19.2558 4.66114 19.4858C5.56114 20.4928 6.74514 21.0488 7.99514 21.0488H7.99714C9.25014 21.0488 10.4371 20.4938 11.3391 19.4858C11.5461 19.2548 11.5891 18.9188 11.4471 18.6418C11.3041 18.3668 11.0101 18.2128 10.6971 18.2408Z" fill="#060E22"/>
                        </svg>
                    </p>
                    <p className="truncate max-w-[80px] md:max-w-xs">
                        <FaUser className="inline-block mr-1 text-base" />
                        {user?.full_name || 'User'}
                    </p>
                </div>

                {/* Hide Grantor Button on small screens */}
                <div className="hidden md:block bg-[#9ED219] hover:bg-[#477d1b] text-white rounded-2xl px-4 py-1 text-sm">
                    Grantor
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;

