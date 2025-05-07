import { create } from "zustand";

interface ToastState {
  open: boolean;
  title: string;
  description: string;
  variant: "default" | "destructive";
  showToast: (title: string, description: string, variant?: "default" | "destructive") => void;
  closeToast: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  open: false,
  title: "",
  description: "",
  variant: "default",
  showToast: (title, description, variant = "default") =>
    set({ open: true, title, description, variant }),
  closeToast: () => set({ open: false }),
}));
