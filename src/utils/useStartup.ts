import { Link } from 'lucide-react';
import { useState, useCallback } from 'react';

interface StartupData {
  startup_name: string;
  startup_description: string;
  startup_location: string;
  startup_website: string;
  startup_email: string;
  picture?: File | null;
  team_size: number;
  no_of_teams: number;
  cofounder: string;
  profile_image?: File;
  linkedin_profile: string;
  nin: string;
  amount_of_funds: number;
  usage_of_funds: string;
  no_of_customers: number;
  video?: File | null;
  startup_industry: string;
  full_name: string;
  founder_linkedin_profile: string;
  email_address: string;
  phone_no: string;
  founder_profile_img?: File | null;
  founder_nin: string;
  role: string;
  user_id: number;
}

const useStartup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const link = "https://grantty-backend.onrender.com";


  const submitStartup = useCallback(async (data: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
  
    try {
      const response = await fetch(`${link}/startup/create-startup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Ensure the server knows to expect JSON
        },
        body: JSON.stringify(data), // Send data as JSON
      });
  
      if (response.ok) {
        setSuccess(true);
      } else {
        const errorText = await response.text();
        setError(`Error: ${errorText}`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);
  

  return { submitStartup, loading, error, success };
};

export default useStartup;
