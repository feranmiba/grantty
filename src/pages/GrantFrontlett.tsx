import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { User, Mail } from "lucide-react";
import Navbar from '@/components/Navbar';
import usePaymentStore from '@/store/usePaymentstore';
import {toast} from 'react-toastify'
import { useUserStore } from '@/store/useUserStore';
import Frontlettt from '@/assests/Frontlett.png'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';




const GrantFrontlettPage = () => {
  const [amount, setAmount] = useState<number | "">("");
  const [supportAs, setSupportAs] = useState<string>("Individual");
  const [name, setName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [orgName, setOrgName] = useState<string>("");
  const [anonymous, setAnonymous] = useState<boolean>(false);
  const [subscribe, setSubscribe] = useState<boolean>(false);
  const [currency, setCurrency] = useState("NGN");
  const [paymentMethod, setPaymentMethod] = useState<'online' | 'offline'>('online');

  const navigate = useNavigate();


useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/auth/signin');
    }
  }, [navigate]);


  const [loading, setLoading] = useState<boolean>(false);
  const { setPayment } = usePaymentStore();
        const { user } = useUserStore();
  


        const conversionRate = 1000; // $1 = ₦1000

const formatLabel = (value: number) => {
  if (currency === "USD") {
    const dollarValue = value / conversionRate;
    return `$${dollarValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  } else {
    return `₦${value.toLocaleString()}`;
  }
};

  
  // Predefined amounts
  const amountOptions = [
    { value: 1000, label: "₦1,000 ($1)" },
    { value: 2000, label: "₦2,000 ($2)" },
    { value: 5000, label: "₦5,000 ($5)" },
    { value: 10000, label: "₦10,000 ($10)" },
    { value: 20000, label: "₦20,000 ($20)" },
    { value: 50000, label: "₦50,000 ($50)" },
    { value: 100000, label: "₦100,000 ($100)" },
    { value: 250000, label: "₦250,000 ($250)" },

     
  ];


  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!inputValue) {
      setAmount("");
      return;
    }
  
    const value = Number(inputValue);
  
    if (currency === "USD") {
      // Convert USD to NGN internally
      const amountInNaira = Math.round(value * conversionRate);
      setAmount(amountInNaira); // Stored as NGN
    } else {
      // Directly store as NGN
      setAmount(value);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Use the email from either user store or local state
  const email = user?.email || Email;
  
  // Validation: check amount and email
  if (!amount || amount <= 0) {
    toast.error("Please enter a valid amount.");
    return;
  }
  
  if (!email || email.trim() === "") {
    toast.error("Please enter your email.");
    return;
  }

  setLoading(true);

  if (paymentMethod === 'offline') {
    toast.success('Offline method selected, redirecting...');
    navigate('/payment-details');
    setLoading(false);
    return;
  }

  // Prepare form data
  const startup_id = 2;
  const callback_url = "http://localhost:8080/payment";
  const full_name = user?.full_name || name;
  const startup_name = "Frontlett";

  const formData = { amount, email, startup_id, callback_url, full_name, startup_name };

  try {
    const response = await fetch(`https://grantty-backend-fltj.onrender.com/payments/initialize`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      const authorizationUrl = data.data.authorization_url;
      const reference = data.data.reference;

      if (authorizationUrl) {
        setPayment({
          amount,
          email,
          startup_id: startup_id.toString(),
          startup_name,
          reference,
          payment_id: data.data.id,
        });
        toast.success('Form submitted successfully, Redirection in progress...');
        window.location.href = authorizationUrl;
      } else {
        alert('Authorization URL not found.');
      }
    } else {
      toast.error('Failed to submit form.');
    }
  } catch (error) {
    alert('Error submitting form.');
  } finally {
    setLoading(false);
  }
};


  const handleAmountSelect = (value: number) => {
    setAmount(value);
  };

  return (
    <section className="min-h-screen">
        <Navbar />
        <section className='bg-[#000000BF] py-10 min-h-screen mt-20 px-5 md:px-0'>
        <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-sm p-6 mt-8">
        <p>
      <img src={Frontlettt} alt="Frontlett" className=" inline-block mr-2 w-32 mb-3" />
      </p>
      <h1 className="text-2xl font-bold mb-3">Grantt Frontlett</h1>
   
      
      <div className="space-y-6">
      <div className="w-full">
      <label htmlFor="currency" className="block text-sm font-medium text-gray-600 mb-1">
        Select Currency
      </label>
      <select
        id="currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="NGN">NGN (₦)</option>
        <option value="USD">USD ($)</option>
      </select>
    </div>
        <div>
          <h2 className="text-sm font-medium mb-3 text-gray-600">Amount</h2>
        {/* First row */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
  {amountOptions.slice(0, 4).map((option) => {
    const isDisabled = supportAs === "Organization" && option.value < 15000;

    return (
      <button
        key={option.value}
        type="button"
        onClick={() => !isDisabled && handleAmountSelect(option.value)}
        disabled={isDisabled}
        className={`py-2 px-3 rounded-md text-sm border transition-colors duration-200
          ${isDisabled
            ? "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
            : amount === option.value
            ? "border-primary bg-primary/10 text-primary"
            : "border-gray-200 bg-gray-50 hover:bg-gray-100"
          }`}
      >
        {formatLabel(option.value)}
      </button>
    );
  })}
</div>

{/* Second row */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
  {amountOptions.slice(4).map((option) => (
    <button
      key={option.value}
      type="button"
      onClick={() => handleAmountSelect(option.value)}
      className={`py-2 px-3 rounded-md text-sm border ${
        amount === option.value 
          ? "border-primary bg-primary/10 text-primary" 
          : option.value === 100000 
            ? "border-green-500 bg-green-50 hover:bg-green-100" 
            : option.value === 250000 
              ? "border-green-200 bg-green-50 hover:bg-green-100" 
              : "border-gray-200 bg-gray-50 hover:bg-gray-100"
      }`}
    >
      {formatLabel(option.value)}
    </button>
  ))}
</div>

          
<div className="mt-3 relative">
  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
    {currency === "USD" ? "$" : "₦"}
  </span>

  <Input
    type="number"
    placeholder={`Enter the amount in ${currency === "USD" ? "USD" : "NGN"}`}
    value={
      currency === "USD"
        ? amount
          ? Math.round(amount / conversionRate)
          : ""
        : amount
    }
    onChange={handleAmountChange}
    className="w-full pl-8" // padding-left to avoid overlap with the sign
  />
</div>


        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-gray-600">Support as</h2>
            <RadioGroup defaultValue="Individual" value={supportAs} onValueChange={setSupportAs} className="flex gap-8">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Individual" id="individual" />
                <Label htmlFor="individual">Individual</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Organization" id="organization" />
                <Label htmlFor="organization">Organization</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <Input
                id="name"
                placeholder="Your Name"
                value={name || user?.full_name || ""}
                onChange={(e) => setName(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={Email || user?.email || ""}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
          
          {supportAs === "Organization" && (
            <div className="space-y-2">
              <Label htmlFor="orgName">Organization Name</Label>
              <Input
                id="orgName"
                placeholder="Enter your organization name"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
              />
            </div>
          )}
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="anonymous" 
              checked={anonymous}
              onCheckedChange={(checked) => setAnonymous(checked as boolean)}
            />
            <label
              htmlFor="anonymous"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Make my contribution anonymous
            </label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="subscribe" 
              checked={subscribe}
              onCheckedChange={(checked) => setSubscribe(checked as boolean)}
            />
            <label
              htmlFor="subscribe"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Subscribe me to updates from this startup
            </label>
          </div>


          <div className="space-y-2">
              <h2 className="text-sm font-medium text-gray-600">Payment Method</h2>
              <RadioGroup
                defaultValue="online"
                value={paymentMethod}
                onValueChange={(value) => setPaymentMethod(value as 'online' | 'offline')}
                className="flex gap-8"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="online" id="online" />
                  <Label htmlFor="online">Online Payment</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="offline" id="offline" />
                  <Label htmlFor="offline">Offline Bank Transfer</Label>
                </div>
              </RadioGroup>
            </div>

          
          <button
            type="submit"
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors mt-4"
          >
          {loading ? "loading...." : "Grantt Now"}
          </button>
        </form>
      </div>
        </div>
        </section>
       
    </section>
    
  );
};

export default GrantFrontlettPage;
