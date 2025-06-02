import React, { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import useAuth from "./utils/useAuth";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners"; // Import the spinner
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSignUp = () => {
    navigate("/auth/signup");
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const response = await signIn(formData.email, formData.password);
      setIsLoading(false);
  
      if (response?.message) {
        toast.success(response.message);
      } else {
        toast.success("Sign in successful!");
      }
  
      // Access user_type from the response
      const userType = response?.data?.user?.user_type;
  
      // Redirect based on user_type
      setTimeout(() => {
        if (userType === "grantor") {
          window.location.href = "/grantor-dashboard";
        } else {
          window.location.href = "/grantee-dashboard";
        }
      }, 2000);
    } catch (error: any) {
      setIsLoading(false);
      const errorMessage = error.message || "Error signing in, please try again.";
      toast.error(errorMessage);
      console.error("Error signing in:", errorMessage);
    }
  };
  
  
  return (
    <section className="h-screen w-full flex flex-col md:flex-row overflow-hidden">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-800 via-blue-900 to-black items-center justify-center p-10 text-white"
      >
        <div className="max-w-3xl space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold leading-snug"
          >
         Welcome to Grantty 👋🏼
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-300"
          >
            We missed you! Log in to continue your journey.
          </motion.p>
              <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="flex items-center justify-center flex-col bg-white rounded-2xl border-2  py-8 p-4 shadow-lg text-black"
                    >
                      <p>Kindly select an option</p>
                      <div className="flex items-center justify-center rounded-lg p-4 gap-5  ml-2 border-2 mt-5 hover:bg-[#F4F5F7] cursor-pointer" onClick={handleSignUp}>
                        <p className="w-7 h-7 border-[#B4B4B4] border-2  rounded-full"></p>
                        <div className="space-y-3">
                          <h1 className="font-semibold text-xl">Sign Up</h1>
                          <p>You don’t have an account with us</p>
                        </div>
          
                      </div>
          
                      <div className="flex items-center justify-center rounded-lg p-4 gap-5  ml-2 border-2 mt-5 hover:bg-[#F4F5F7] cursor-pointer" >
                        <p className="w-7 h-7 border-[#B4B4B4] border-2  rounded-full"></p>
                        <div className="space-y-3">
                          <h1 className="font-semibold text-xl">Log In</h1>
                          <p>You have an existing account with us</p>
                        </div>
          
                      </div>
          
                    </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 h-full overflow-y-auto px-6 py-10 flex flex-col space-y-20"
      >
        {/* Navigation */}
        <div className="flex justify-between items-center text-sm text-gray-600">
          <a href="/" className="flex items-center gap-2 hover:underline">
            <ArrowLeft size={16} />
            Back
          </a>
          <div className="text-right flex gap-4 items-center">
            <p>Don’t have an account?</p>
            <Link to="/auth/signup" className="text-blue-600 hover:underline border px-3 py-2">
              Sign Up
            </Link>
          </div>
        </div>

        <div className="flex justify-center flex-col items-center gap-2">
          <h1 className="text-3xl font-semibold text-gray-900">Log In</h1>
          <p className="text-sm text-gray-500">Log in to access your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(59,130,246,0.6)" }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            className="w-full bg-[#163078] text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-all mt-5"
          >
            {isLoading ? (
              <ClipLoader size={24} color="#ffffff" /> // Show spinner while loading
            ) : (
              "Log In"
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default SignIn;


