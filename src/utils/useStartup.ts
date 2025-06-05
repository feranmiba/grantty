import { Link } from 'lucide-react';
import { useState, useCallback } from 'react';
import { useAuthStore } from "@/store/useAuthStore";


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
  const token = useAuthStore((state) => state.token);
  const link = "https://grantty-backend-21eu.onrender.com";


  const submitStartup = useCallback(async (data: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
  
    try { 
      const response = await fetch(`${link}/startups`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSuccess(true);
      } else {
        setError(result.message || "An unknown error occurred.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [token]);
  

  return { submitStartup, loading, error, success };
};

export default useStartup;
