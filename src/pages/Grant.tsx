import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify'
import Grant from '../assests/grant.jpg'
import { useUserStore } from '@/store/useUserStore';
import { Button } from '@/components/ui/button';
import { FaUser } from 'react-icons/fa';
import usePaymentStore from '@/store/usePaymentstore';
import Navbar from '@/components/Navbar';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";





const GrantPage: React.FC = () => {
    const { startup_id } = useParams<{ startup_id: string }>(); // Retrieve startup_id from URL params
      const { user } = useUserStore();
      const { setPayment } = usePaymentStore();
    

    const [amount, setAmount] = useState<number | "">("");
    const [supportAs, setSupportAs] = useState<string>("Individual");
    const [full_name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [anonymous, setAnonymous] = useState<boolean>(false);
    const [subscribe, setSubscribe] = useState<boolean>(false);
    const [goalAmount, setGoalAmount] = useState<number>(0);
    const [raisedAmount, setRaisedAmount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [startup, setStartup] = useState<any>(null);

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
  
    useEffect(() => {
        const fetchGrantData = async () => {
            try {
                // Fetch grant data
                const response = await fetch(`https://grantty-backend-fltj.onrender.com/startups/${startup_id}`);
                const data = await response.json();
    
    
                if (response.ok && data.data) {
                    // Set the grant data
                    setStartup(data.data);
    
                    
    
                } else {
                    setError('Failed to load grant data.');
                }
            } catch (error) {
                setError('Error fetching grant data.');
            } finally {
                setLoading(false);
            }
        };
    
        if (startup_id) {
            fetchGrantData();
        }
    }, [startup_id]);
    

    const handleAmountSelect = (value: number) => {
        setAmount(value);
      };
    
    const progress = goalAmount && raisedAmount ? Math.min((raisedAmount / goalAmount) * 100, 100) : 0;
    const callback_url = "https://grantty.netlify.app/"
    const generateReference = () => `ref_${Math.random().toString(36).slice(2, 11)}`;


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(startup_id);
        const reference = generateReference();
        const startup_name = startup.startup_name;
     const   full_name = user.full_name || ""
      const  email = user.email || ""
        const formData = { amount, email, startup_id, callback_url, full_name,  startup_name,  };
        // setPayment(formData);
    
        try {
            const response = await fetch(`https://grantty-backend-fltj.onrender.com/payments/initialize`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
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
                        startup_id,
                        startup_name,
                        reference,
                        payment_id: data.data.id, // optional, update if needed
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
        }
    };
    

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <section className="min-h-screen">
        <Navbar />
        <section className='bg-[#000000BF] py-10 min-h-screen mt-20 px-5 md:px-0'>
        <div className="">
        
        <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 mt-8">
                {startup && (
                    <div className="mb-6">

                        <div className='flex gap-10 items-center flex-wrap md:flex-nowrap px-5 md:px-0'>
                      
                        <h1 className="text-2xl font-bold mb-6">Grant {startup.startup_name}</h1>
                        </div>
                  
                  
                    </div>
                )}


                <form onSubmit={handleSubmit} className="space-y-5 mt-10 text-[#686868]">
                    <label className="block">
                        Enter Amount
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                    {amountOptions.slice(0).map((option) => (
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
                    </label>
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
                    <label className="block">
                        Name
                        <input
                            type="text"
                            name="full_name"
                            className="w-full p-2 border rounded"
                            value={full_name || (user ? user.full_name : '')}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label className="block">
                        Email Address
                        <input
                            type="email"
                            className="w-full p-2 border rounded"
                            value={email || (user ? user.email : '')}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={anonymous}
                            onChange={(e) => setAnonymous(e.target.checked)}
                        />
                        <span>Make my contribution anonymous</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={subscribe}
                            onChange={(e) => setSubscribe(e.target.checked)}
                        />
                        <span>Subscribe to updates from this startup</span>
                    </label>
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#163078] text-white rounded-2xl"
                    >
                                {loading ? "loading...." : "Grant Now"}

                    </button>
                </form>
                </div>
               
        </div>
        </section>
        </section>
    );
};

export default GrantPage;


