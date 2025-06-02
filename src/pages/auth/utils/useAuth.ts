import { useCallback } from "react";
import { useAuthStore } from "../../../store/useAuthStore";
import { useToastStore } from "../../../store/useToastStore";
import { useUserStore } from "@/store/useUserStore";

const link = "https://grantty-backend-fltj.onrender.com";

const useAuth = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const showToast = useToastStore((state) => state.showToast);
  const { setUser } = useUserStore();

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      const response = await fetch(`${link}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");

      setToken(data.data.token);
      setUser(data.data.user);
      showToast("Login Successful", "You have logged in successfully.");
      return data;
    } catch (error: any) {
      showToast("Login Failed", error.message, "destructive");
      throw error;
    }
  }, [setToken, showToast]);

  const signUp = useCallback(async (formData: { email: string; password: string; full_name: string }) => {
    try {
      const response = await fetch(`${link}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Sign-up failed");

      setToken(data.data.token);
      showToast("Sign Up Successful", "Your account has been created.");
      return data;
    } catch (error: any) {
      showToast("Sign Up Failed", error.message || "Could not create account", "destructive");
      throw error;
    }
  }, [setToken, showToast]);

  const verifyOtp = useCallback(async (otp: string) => {
    try {
      const response = await fetch(`${link}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "OTP verification failed");

      if (data.token) {
        setToken(data.token);
      }

      showToast("Success", "OTP verified!");
      return data;
    } catch (error: any) {
      showToast("Verification Failed", error.message, "destructive");
      throw error;
    }
  }, [setToken, showToast]);

  const resendOtp = useCallback(async (email: string) => {
    try {
      const response = await fetch(`${link}/resend-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Resend failed");

      showToast("OTP Resent", "A new code has been sent to your email.");
      return data;
    } catch (error: any) {
      showToast("Resend Failed", error.message, "destructive");
      throw error;
    }
  }, [showToast]);

  return {
    signIn,
    signUp,
    verifyOtp,
    resendOtp,
  };
};

export default useAuth;

