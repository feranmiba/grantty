"use client";
import { useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import { useAuthStore } from "@/store/useAuthStore";
import { FaUser, FaChevronDown } from "react-icons/fa";
import Logo from "@/assests/Main Logo.png";
import { FiLogOut } from 'react-icons/fi'; 
import Alert from '@/assests/alert-WYQZ24EFz8.svg'

const DashboardHeader = () => {
  const { user, clearUser } = useUserStore();
  const { clearToken } = useAuthStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

const confirmLogout = () => {
  clearToken();
  clearUser();
  setDropdownOpen(false);
  setShowLogoutModal(false);
  window.location.href = "/";
};

const setGotoLandingPage = (value: boolean) => {
  if (value) {
    window.location.href = "/"; // Redirect to landing page
  }
}

  return (
    <header className="flex flex-wrap items-center justify-between px-6 py-4 md:px-24 bg-white border-b border-gray-100 rounded-t-xl relative">
      {/* Logo */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <img src={Logo} alt="Grantty Logo" className="h-6 md:h-10" />
      </div>

      {/* User Info & Button */}
      <div className="flex items-center gap-3 mt-3 md:mt-0 flex-grow justify-end relative">
        <div className="flex items-center gap-3 text-primary text-base md:text-xl font-semibold whitespace-nowrap">
          <p className="border-r-2 pr-4 flex items-center">
            <svg
              width="16"
              height="22"
              viewBox="0 0 16 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
            >
              <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.6271 12.9622C14.7801 11.0992 14.8021 10.3982 14.8411 9.12423C14.8511 8.82323 14.8611 8.49623 14.8611 8.12123C14.8611 5.14423 12.7321 0.951233 8.00012 0.951233C3.26812 0.951233 1.13912 5.14423 1.13912 8.12123C1.13912 8.49523 1.14912 8.82323 1.15912 9.12423C1.19812 10.3982 1.21912 11.0992 0.363117 12.9872C-0.00288332 13.9312 0.0411167 14.7462 0.496117 15.4102C1.58812 17.0082 4.74812 17.2282 8.00012 17.2282C11.2521 17.2282 14.4121 17.0082 15.5041 15.4102C15.9601 14.7462 16.0041 13.9312 15.6271 12.9622Z"
                fill="#060E22"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6971 18.2408C9.06614 18.4218 7.29814 18.4208 5.28814 18.2388C4.98714 18.2148 4.68914 18.3738 4.55114 18.6488C4.41214 18.9248 4.45614 19.2558 4.66114 19.4858C5.56114 20.4928 6.74514 21.0488 7.99514 21.0488H7.99714C9.25014 21.0488 10.4371 20.4938 11.3391 19.4858C11.5461 19.2548 11.5891 18.9188 11.4471 18.6418C11.3041 18.3668 11.0101 18.2128 10.6971 18.2408Z"
                fill="#060E22"
              />
            </svg>
          </p>
          <p>
            <FaUser className="inline-block mr-2 text-xl md:text-2xl" />
          </p>
          <span>{user?.full_name || "User"}</span>
        </div>

        {/* Grantee Button with Dropdown */}
        <div className="relative flex items-center">
          <button
            className="flex items-center gap-1 bg-[#9ED219] hover:bg-[#477d1b] text-white rounded-2xl px-4 py-2 text-sm md:text-base whitespace-nowrap"
          >
            Grantee 
          </button>
          <button onClick={() => setDropdownOpen((prev) => !prev)}>
          <FaChevronDown className="ml-1" />

          </button>

        {dropdownOpen && (
  <div className="absolute right-0 mt-28 bg-white border border-gray-200 rounded-md shadow-lg z-10 ">
      <button
     onClick={() => {
      setGotoLandingPage(true);
      setDropdownOpen(false);
    }}
      className="flex items-center gap-2 w-full px-2 py-2 text-left text-sm hover:bg-gray-100"
    >
      Landing Page
    </button>
    <button
     onClick={() => {
      setShowLogoutModal(true);
      setDropdownOpen(false);
    }}
      className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
    >
      <FiLogOut className="text-gray-600" />
      Logout
    </button>
  </div>
)}
        </div>

        {showLogoutModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
    <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-sm text-center">
      <img src={Alert} alt="Alert Icon" className="w-12 h-12 mb-4 mx-auto" />
      <h2 className="text-lg font-semibold text-[#1D1D1D] mb-4">Log out</h2>
      <p className="text-sm text-[#434343] mb-6">You are about to log out of your account, are you sure you want to continue this action?</p>
      <div className="flex justify-center gap-5">
        <button
          onClick={() => setShowLogoutModal(false)}
          className="px-4 py-2 w-full rounded-lg border text-gray-600 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={confirmLogout}
          className="px-4 py-2 w-full rounded-lg bg-[#6CBB2D] text-white hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
)}

      </div>
    </header>
  );
};

export default DashboardHeader;
