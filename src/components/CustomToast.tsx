import React from "react";
import { useToastStore } from "../store/useToastStore";
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "./ui/toast";

const CustomToast = () => {
  const { open, title, description, variant, closeToast } = useToastStore();

  return (
    <ToastProvider>
      {open && (
        <Toast variant={variant} onOpenChange={closeToast}>
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>
          <ToastClose />
        </Toast>
      )}
      <ToastViewport />
    </ToastProvider>
  );
};

export default CustomToast;
