import { useCallback } from "react";
import { useAuthStore } from "../../../store/useAuthStore";
import { useToastStore } from "../../../store/useToastStore";

const link = "https://grantty-backend.onrender.com";

const useAuth = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const showToast = useToastStore((state) => state.showToast);

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      const response = await fetch(`${link}/auth/login`, {
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
      setToken(data.accessToken);

      showToast("Login Successful", "You have logged in successfully.");
      return data;
    } catch (error) {
      showToast("Login Failed", "Invalid credentials.", "destructive");
      throw error;
    }
  }, [setToken, showToast]);

  const signUp = useCallback(async (formData: { email: string; password: string; fullname: string }) => {
    try {
      const response = await fetch(`${link}/auth/signup`, {
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
      setToken(data.accessToken);

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

