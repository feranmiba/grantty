import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/auth/signIn";
import SignUp from "./pages/auth/signup";
import GrantPage from "./pages/Grant";
import FounderForm from "./pages/FounderForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthStore} from "./store/useAuthStore";  // Import Zustand store

// Create a client
const queryClient = new QueryClient();

const App = () => {
  const { token } = useAuthStore(); 

  return (
    <React.StrictMode>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth/signin" element={<SignIn />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="/grant/:startup_id" element={<GrantPage />} />

              {/* Conditional route for Founder page */}
              <Route 
                path="/founder" 
                element={token ? <FounderForm /> : <Navigate to="/auth/signin" />} 
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;

