import { create } from "zustand";

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("authToken"), // Load from local storage
  setToken: (token: string) => {
    localStorage.setItem("authToken", token); // Save to local storage
    set({ token });
  },
  clearToken: () => {
    localStorage.removeItem("authToken"); // Remove from local storage
    set({ token: null });
  },
}));

