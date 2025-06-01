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

  const [activeHash, setActiveHash] = useState("");

useEffect(() => {
  const handleHashChange = () => {
    setActiveHash(window.location.hash);
  };

  handleHashChange(); // initial value
  window.addEventListener("hashchange", handleHashChange);

  return () => window.removeEventListener("hashchange", handleHashChange);
}, []);


  const signIn = () => {
    navigate('/auth/signin');
    console.log('Sign In button clicked');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'}`}>
      <div className="container-custom flex justify-between items-center xl:px-24">
        <a href="/" className="text-2xl font-bold text-secondary">
          <img src={Logo} alt="Grantty Logo" className="h-8 md:h-10" />
        </a>

        <div className="md:hidden flex items-center space-x-2">

        <button className=" py-2  font-semibold px-2 rounded-xl bg-[#549421] hover:bg-[#477d1b] text-white text-[12px]" onClick={handleButtonClick}>
            {isFrontlettRoute ? 'Grantt This Business' : 'Granttees'}
          </button>
          {user && (
            <div className='border rounded-full px-2 py-1 bg-primary/10 text-primary text-xs font-semibold'>
              <FaUser className='inline-block mr-2 text-xs'  />
              {user.full_name.slice(0, 5)}
            </div>
          )}
          <button onClick={() => setIsOpen(!isOpen)} className="text-secondary hover:text-primary">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <nav className="hidden md:flex space-x-8">
  {[
    { href: "#how-it-works", label: "How It Works" },
    { href: "#why-grantty", label: "Why Grantty" },
    { href: "#eligibility", label: "Who Can Apply" },
    { href: "#faq", label: "FAQs" },
  ].map(({ href, label }) => (
    <a
      key={href}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        if (location.pathname !== "/") {
          navigate(`/${href}`);
        } else {
          window.location.hash = href.slice(1); 
        }
      }}
      className={`cursor-pointer text-secondary/80 hover:text-primary transition-colors ${
        activeHash === href ? "border-b-2 border-blue-500" : ""
      }`}
    >
      {label}
    </a>
  ))}
</nav>


<div className={`flex-col items-end space-y-4 text-center absolute top-14 left-0 right-0 bg-white p-4 md:hidden ${isOpen ? 'flex' : 'hidden'}`}>
  {[
    { href: "#how-it-works", label: "How It Works" },
    { href: "#why-grantty", label: "Why Grantty" },
    { href: "#eligibility", label: "Who Can Apply" },
    { href: "#faq", label: "FAQs" },
  ].map(({ href, label }) => (
    <a
      key={href}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        setIsOpen(false); // close the mobile menu on click
        if (location.pathname !== "/") {
          navigate(`/${href}`);
        } else {
          window.location.hash = href.slice(1);
        }
      }}
      className={`text-secondary/80 hover:text-primary transition-colors ${
        activeHash === href ? "border-b-2 border-blue-500" : ""
      }`}
    >
      {label}
    </a>
  ))}

  <div className="items-center flex-col space-y-4 text-[10px] md:text-base flex">
    {user ? (
      <div></div>
    ) : (
      <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary" onClick={signIn}>
        Sign in/Log in
      </Button>
    )}
  </div>
</div>

        <div className="items-center space-x-4 text-[10px] md:text-base hidden md:flex">
          {user ? (
            <div className='border rounded-full px-2 md:px-4 py-2 bg-primary/10 text-primary font-semibold'>
              <FaUser className='inline-block mr-2' />
              {user.full_name}
            </div>
          ) : (
            <button className="text-[14px]" onClick={signIn}>Sign/Log in</button>
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

