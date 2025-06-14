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
import Frontlett from "./pages/Frontlett";
import GrantFrontlettPage from "./pages/GrantFrontlett";
import FounderForm from "./pages/FounderForm";
import GrantorDashboard from "./pages/GrantorDashboard";
import GranteeDashboard from "./pages/GranteeDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthStore} from "./store/useAuthStore";  
import PaymentSuccess from "./pages/Success";
import PaymentDetails from "./pages/PaymentDetails";
import VerifyEmail from "./pages/auth/VerifEmail";
import Terms from "./pages/TermsOfServices";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import DebtNotice from "./pages/Debt";

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
              <Route path="/" element={<DebtNotice />} />
              {/* <Route path="/auth/signin" element={<SignIn />} />
              <Route path="/auth/verify" element={<VerifyEmail />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="/grant/:startup_id" element={<GrantPage />} />
              <Route path="/frontlett" element={<Frontlett />} />
              <Route path="/grant/grant-frontlett" element={<GrantFrontlettPage />} />
              <Route path="/payment" element={<PaymentSuccess />} />
              <Route path="/payment-details" element={<PaymentDetails />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} /> */}

              

              

              

              

              

              

              {/* Conditional route for Founder page */}
              {/* <Route 
                path="/founder" 
                element={token ? <FounderForm /> : <Navigate to="/auth/signin" />} 
              />

              <Route 
                path="/grantor-dashboard" 
                element={token ? <GrantorDashboard /> : <Navigate to="/auth/signin" />} 
              />

              <Route 
                path="/grantee-dashboard" 
                element={token ? <GranteeDashboard /> : <Navigate to="/auth/signin" />} 
              />

              <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;

