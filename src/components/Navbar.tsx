'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserStore } from '@/store/useUserStore';
import { useAuthStore } from "@/store/useAuthStore";
import { FaUser } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import Logo from '../assests/Main Logo.png';
import { FiLogOut } from 'react-icons/fi';
import Alert from '@/assests/alert-WYQZ24EFz8.svg'

const Navbar = () => {
  const { clearToken, token } = useAuthStore();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);


  const confirmLogout = () => {
    clearToken();
    clearUser();
    setDropdownOpen(false);
    setShowLogoutModal(false);
    window.location.href = "/";
  };


  const { user, clearUser } = useUserStore();
  const isFrontlettRoute = location.pathname === '/frontlett';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const signIn = () => {
    navigate('/auth/signin');
  };


  const handleButtonClick = () => {
    if (isFrontlettRoute) {
      navigate('/grant/grant-frontlett');
    } else {
      navigate('/frontlett');
    }
  };

  // Helper function for navigating user dashboard based on localStorage user_type
  const handleUserClick = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        const userType = parsedUser?.user_type;
        if (userType === 'grantor') {
          navigate('/grantor-dashboard');
        } else if (userType === 'grantee') {
          navigate('/grantor-dashboard');
        } else {
          // fallback or default route if user_type is unknown
          navigate('/');
        }
      } catch (err) {
        console.error('Error parsing user from localStorage', err);
        navigate('/');
      }
    } else {
      navigate('/');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center xl:px-24">
        <a href="/" className="text-2xl font-bold text-secondary">
          <img src={Logo} alt="Grantty Logo" className="h-8 md:h-10" />
        </a>

        {/* Mobile Menu & User */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            className="py-2 font-semibold px-2 rounded-xl bg-[#549421] hover:bg-[#477d1b] text-white text-[12px]"
            onClick={handleButtonClick}
          >
            {isFrontlettRoute ? 'Grantt This Business' : 'Granttees'}
          </button>
          {user && user.full_name ? (
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border rounded-full px-2 py-1 bg-primary/10 text-primary text-xs font-semibold hover:underline flex items-center"
              aria-label="Go to dashboard"
            >
              <FaUser className="inline-block mr-2 text-xs" />
              {user.full_name.slice(0, 5)}
            </button>
          ) : null}


<section className="relative">
  {dropdownOpen && (
    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
      <button
        onClick={handleUserClick}
        className="w-full flex items-center px-4 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-150 rounded-t-lg"
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          setShowLogoutModal(true);
          setDropdownOpen(false);
        }}
        className="w-full flex items-center gap-2 px-4 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-150 rounded-b-lg"
      >
        <span>Logout</span>
        <FiLogOut className="text-gray-600" />
      </button>
    </div>
  )}
</section>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-secondary hover:text-primary"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {[
            { href: '#how-it-works', label: 'How It Works' },
            { href: '#why-grantty', label: 'Why Grantty' },
            { href: '#eligibility', label: 'Who Can Apply' },
            { href: '#faq', label: 'FAQ' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  navigate(`/${href}`);
                } else {
                  window.location.hash = href.slice(1);
                }
              }}
              className={`cursor-pointer text-secondary/80 hover:text-primary transition-colors ${
                activeHash === href ? 'border-b-2 border-blue-500' : ''
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Nav Dropdown */}
        <div
          className={`flex-col items-end space-y-4 text-center absolute top-14 left-0 right-0 bg-white p-4 md:hidden ${
            isOpen ? 'flex' : 'hidden'
          }`}
        >
          {[
            { href: '#how-it-works', label: 'How It Works' },
            { href: '#why-grantty', label: 'Why Grantty' },
            { href: '#eligibility', label: 'Who Can Apply' },
            { href: '#faq', label: 'FAQ' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                if (location.pathname !== '/') {
                  navigate(`/${href}`);
                } else {
                  window.location.hash = href.slice(1);
                }
              }}
              className={`text-secondary/80 hover:text-primary transition-colors ${
                activeHash === href ? 'border-b-2 border-blue-500' : ''
              }`}
            >
              {label}
            </a>
          ))}

          {!user && (
            <Button
              variant="ghost"
              className="hover:bg-primary/10 hover:text-primary"
              onClick={signIn}
            >
              Sign in/Log in
            </Button>
          )}
        </div>

        {/* Desktop Right Buttons */}
        <div className="items-center space-x-4 text-[10px] md:text-base hidden md:flex">
          {user && user.full_name ? (
            <button
            onClick={() =>  setDropdownOpen(!dropdownOpen)}
              className="border rounded-full px-2 md:px-4 py-2 bg-primary/10 text-primary font-semibold flex items-center hover:underline"
              aria-label="Go to dashboard"
            >
              <FaUser className="inline-block mr-2" />
              {user.full_name}
            </button>
          ) : (
            <button className="text-[14px]" onClick={signIn}>
              Sign/Log in
            </button>
          )}
<section className="relative">
  {dropdownOpen && (
    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
      <button
        onClick={handleUserClick}
        className="w-full flex items-center px-4 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-150 rounded-t-lg"
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          setShowLogoutModal(true);
          setDropdownOpen(false);
        }}
        className="w-full flex items-center gap-2 px-4 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-150 rounded-b-lg"
      >
        <span>Logout</span>
        <FiLogOut className="text-gray-600" />
      </button>
    </div>
  )}
</section>

          {!isFrontlettRoute && (
            <Button
              className="btn-primary bg-[#549421] hover:bg-[#477d1b] text-white"
              onClick={handleButtonClick}
            >
              Granttees
            </Button>
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

export default Navbar;
