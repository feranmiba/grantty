
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const signUp = () => {
    navigate('/founder');
    console.log('Sign Up button clicked');
  }

  const signIn = () => {
    navigate('/auth/signin');
    console.log('Sign In button clicked');
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-secondary">
          Grant<span className="text-primary">ty</span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#how-it-works" className="text-secondary/80 hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#why-grantty" className="text-secondary/80 hover:text-primary transition-colors">
            Why Grantty
          </a>
          <a href="#eligibility" className="text-secondary/80 hover:text-primary transition-colors">
            Who Can Apply
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex hover:bg-primary/10 hover:text-primary" onClick={signIn}>
          
            Log In
          </Button>
          <Button className="btn-primary" onClick={signUp}>
            Apply Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
