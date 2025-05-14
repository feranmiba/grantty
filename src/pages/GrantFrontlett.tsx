import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { User, Mail } from "lucide-react";
import Navbar from '@/components/Navbar';

const GrantFrontlettPage = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState<number | "">("");
  const [supportAs, setSupportAs] = useState<string>("Individual");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [orgName, setOrgName] = useState<string>("");
  const [anonymous, setAnonymous] = useState<boolean>(false);
  const [subscribe, setSubscribe] = useState<boolean>(false);
  
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare form data
    const startup_id = 150;
    const callback_url = "https://grantty.netlify.app/";
    const full_name = name;
    
    const formData = { 
      amount, 
      email, 
      startup_id, 
      callback_url, 
      full_name
    };

    try {
      // Show loading toast
      toast({
        title: "Processing donation",
        description: "Please wait while we process your request...",
      });
      
      const response = await fetch(`https://grantty-backend.onrender.com/payment/paystack/initialize`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        const authorizationUrl = data.data;

        if (authorizationUrl) {
          toast({
            title: "Success!",
            description: "Form submitted successfully. Redirecting you now...",
          });
          window.location.href = authorizationUrl;
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Authorization URL not found.",
          });
        }
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: "Unable to process your donation at this time.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
      });
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
      <h1 className="text-2xl font-bold mb-6">Grant Frontlett</h1>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-sm font-medium mb-3 text-gray-600">Amount</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {amountOptions.slice(0, 4).map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleAmountSelect(option.value)}
                className={`py-2 px-3 rounded-md text-sm border ${
                  amount === option.value 
                    ? "border-primary bg-primary/10 text-primary" 
                    : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          
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
                {option.label}
              </button>
            ))}
          </div>
          
          <div className="mt-3">
            <Input
              type="number"
              placeholder="Enter the amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : "")}
              className="w-full"
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
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
          
          <button
            type="submit"
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors mt-4"
          >
            Grant Now
          </button>
        </form>
      </div>
        </div>
        </section>
       
    </section>
    
  );
};

export default GrantFrontlettPage;
