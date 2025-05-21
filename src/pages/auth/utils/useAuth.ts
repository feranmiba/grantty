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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login response data:", data.data.token); 
      setToken(data.data.token);
      setUser(data.data.user);

      showToast("Login Successful", "You have logged in successfully.");
      return data;
    } catch (error) {
      showToast("Login Failed", "Invalid credentials.", "destructive");
      throw error;
    }
  }, [setToken, showToast]);

  const signUp = useCallback(async (formData: { email: string; password: string; full_name: string }) => {
    try {
      const response = await fetch(`${link}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Sign-up failed");
      }

      const data = await response.json();
      setToken(data.data.token);

      showToast("Sign Up Successful", "Your account has been created.");
      return data;
    } catch (error) {
      showToast("Sign Up Failed", "Could not create account.", "destructive");
      throw error;
    }
  }, [setToken, showToast]);

  return { signIn, signUp };
};

export default useAuth;

