"use client"
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserStore } from '@/store/useUserStore';
import { useAuthStore } from '../store/useAuthStore';
import { FaUser } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import Logo from '../assests/Main Logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useUserStore();
  const { token } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isFrontlettRoute = location.pathname === '/frontlett';

  const signUp = () => {
    navigate('/grantee-dashboard');
    console.log('Sign Up button clicked');
  };

  const handleButtonClick = () => {
    if (isFrontlettRoute) {
      navigate('/grant/grant-frontlett');
    } else {
     navigate('frontlett') 
    }
  };

  const signIn = () => {
    navigate('/auth/signin');
    console.log('Sign In button clicked');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-secondary">
          <img src={Logo} alt="Grantty Logo" className="h-8 md:h-10" />
        </a>

        <div className="md:hidden flex items-center space-x-2">
          {user && (
            <div className='border rounded-full px-2 py-1 bg-primary/10 text-primary text-xs font-semibold'>
              <FaUser className='inline-block mr-2 text-xs'  />
              {user.full_name}
            </div>
          )}
          <button onClick={() => setIsOpen(!isOpen)} className="text-secondary hover:text-primary">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#how-it-works" className="text-secondary/80 hover:text-primary transition-colors">How It Works</a>
          <a href="#why-grantty" className="text-secondary/80 hover:text-primary transition-colors">Why Grantty</a>
          <a href="#eligibility" className="text-secondary/80 hover:text-primary transition-colors">Who Can Apply</a>
          <a href="#faq" className="text-secondary/80 hover:text-primary transition-colors">Faqs</a>
        </nav>

        <div className={`flex-col items-center space-y-4 text-center absolute top-14 left-0 right-0 bg-white p-4 md:hidden ${isOpen ? 'flex' : 'hidden'}`}>
          <a href="#how-it-works" className="text-secondary/80 hover:text-primary transition-colors">How It Works</a>
          <a href="#why-grantty" className="text-secondary/80 hover:text-primary transition-colors">Why Grantty</a>
          <a href="#eligibility" className="text-secondary/80 hover:text-primary transition-colors">Who Can Apply</a>
          <a href="#faq" className="text-secondary/80 hover:text-primary transition-colors">Faqs</a>
          <div className="items-center space-x-4 text-[10px] md:text-base flex">
          {user ? (
            <div ></div>
          ) : (
            <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary" onClick={signIn}>Log In</Button>
          )}
          <Button className="btn-primary bg-[#549421] hover:bg-[#477d1b] text-white" onClick={handleButtonClick}>
            {isFrontlettRoute ? 'Grantt This Business' : 'Granttees'}
          </Button>
        </div>
        </div>

        <div className="items-center space-x-4 text-[10px] md:text-base hidden md:flex">
          {user ? (
            <div className='border rounded-full px-2 md:px-4 py-2 bg-primary/10 text-primary font-semibold'>
              <FaUser className='inline-block mr-2' />
              {user.full_name}
            </div>
          ) : (
            <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary" onClick={signIn}>Log In</Button>
          )}
          <Button className="btn-primary bg-[#549421] hover:bg-[#477d1b] text-white" onClick={handleButtonClick}>
            {isFrontlettRoute ? 'Grantt This Business' : 'Granttees'}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

