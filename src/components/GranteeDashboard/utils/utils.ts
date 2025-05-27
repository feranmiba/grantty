import { useCallback } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useUserStore } from "@/store/useUserStore";

const link = "https://grantty-backend-fltj.onrender.com";

export const useGranteeDashboardUtils = () => {
  const { user } = useUserStore();
  const { token } = useAuthStore();

  const getUserCompanyStatus = useCallback( async ()  => {
    try {
     const response = await fetch(`${link}/user/startups`, {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
       },
     });
 
     if (!response.ok) {
       throw new Error("Failed to fetch companies");
     }
 
     const data = await response.json();
     return data;
     console.log("User company status:", data);
     
    } catch (error) {
     
    }   
  
   }
     , [user]);

  return { getUserCompanyStatus, }
}


