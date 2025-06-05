import { useCallback } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useUserStore } from "@/store/useUserStore";
import { usePaymentUtils } from "@/utils/usePayment";

const link = "https://grantty-backend-21eu.onrender.com";

export const useGrantorDashboardUtils = () => {
  const { user } = useUserStore();
  const { token } = useAuthStore();

  const getCompany = useCallback( async ()  => {
   try {
    const response = await fetch(`${link}/startups`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
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

  return { getCompany }
}
