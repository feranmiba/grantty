import { useCallback } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useUserStore } from "@/store/useUserStore";

const link = "https://grantty-backend-fltj.onrender.com";

export const usePaymentUtils = () => {
  const { user } = useUserStore();
  const { token } = useAuthStore();

  // GET /payments
  const getPayments = useCallback(async () => {
    try {
      const res = await fetch(`${link}/payments`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch payments: ${res.statusText}`);
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching payments:", error);
      throw error;
    }
  }, [token]);


  const getPaymentById = useCallback(
    async (id: number | string) => {
      try {
        const res = await fetch(`${link}/payments/startup/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error(`Failed to fetch payment for ID ${id}`);
        const data = await res.json();
        return data;
      } catch (error) {
        console.error(`Error fetching payment with id ${id}:`, error);
        return null;
      }
    },
    [token]
  );
  
  const getUserPayment = useCallback(async() => {
    try {
      const res = await fetch(`${link}/payment`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch user payments");
      }

      const data = await res.json();
      console.log("User payments data:", data);
      return data;

    } catch (error) {
      console.error("Error fetching user payments:", error);
      throw error;
    }
  }
    , [user, token]);


  return {
    getPayments,
    getPaymentById,
    getUserPayment
  };
};


