import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify'
import Grant from '../assests/grant.jpg'
import { useUserStore } from '@/store/useUserStore';
import { Button } from '@/components/ui/button';
import { FaUser } from 'react-icons/fa';


const GrantPage: React.FC = () => {
    const { startup_id } = useParams<{ startup_id: string }>(); // Retrieve startup_id from URL params
      const { user } = useUserStore();
    

    const [amount, setAmount] = useState<number | "">("");
    const [supportAs, setSupportAs] = useState<string>("Individual");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [anonymous, setAnonymous] = useState<boolean>(false);
    const [subscribe, setSubscribe] = useState<boolean>(false);
    const [goalAmount, setGoalAmount] = useState<number>(0);
    const [raisedAmount, setRaisedAmount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [startup, setStartup] = useState<any>(null);

  
    useEffect(() => {
        const fetchGrantData = async () => {
            try {
                // Fetch grant data
                const response = await fetch(`https://grantty-backend.onrender.com/startup/startup/${startup_id}`);
                const data = await response.json();
    
                // Fetch raised amount data
                const responseSec = await fetch(`https://grantty-backend.onrender.com/payment/amount-raised/${startup_id}`);
                const raisedData = await responseSec.json();
    
                if (response.ok && data.data && responseSec.ok && raisedData) {
                    // Set the grant data
                    setStartup(data.data);
                    setGoalAmount(parseFloat(data.data.amount_of_funds));
    
                    // Set the raised amount from the second response
                    setRaisedAmount(raisedData.total_amount_raised || 0); // Default to 0 if no data
    
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
    
    
    const progress = goalAmount && raisedAmount ? Math.min((raisedAmount / goalAmount) * 100, 100) : 0;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(startup_id);
        const formData = { amount, email, startup_id };
    
        try {
            const response = await fetch(`https://grantty-backend.onrender.com/payment/paystack/initialize`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                const data = await response.json();
                const authorizationUrl = data.data.authorization_url;
    
                // If the URL is provided, redirect to it
                if (authorizationUrl) {
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
        <div className="">
            <div className='bg-[#163078] p-8 text-white flex justify-between '>
                <h1 className='text-3xl font-bold'>Grant {startup.startup_name}</h1>
                {user? (
          <div className=' flex gap-8 items-center  text-white text-2xl font-semibold'>
            {user.full_name}
            <p className='w-[50px] h-[50px] bg-white flex justify-center items-center rounded-full'>
            <FaUser className=' text-black' />
            </p>
          </div>

        ) : ( "")}


                </div>
            <div className="max-w-7xl mx-auto mt-8">
                {startup && (
                    <div className="mb-6">

                        <div className='flex gap-10 items-center'>
                            <div>
                            <img
                                src={startup.startup_image || Grant}
                                alt={startup.startup_name}
                                className="w-full h-72 object-cover rounded-lg mb-4"
                            />
                            </div>
                           <div>
                            <h2 className="text-lg font-semibold">{startup.startup_name}</h2>
                            <p className="text-gray-600">{startup.startup_description}</p>
                            <p className="text-gray-500">{startup.startup_location}</p>
                        <p className="text-blue-600">
                            <a href={startup.startup_website} target="_blank" rel="noopener noreferrer">
                                Visit Website
                            </a>
                        </p>
                            </div>
                        </div>
                  
                  
                    </div>
                )}

<div className='max-w-2xl mx-auto'>


<div className="flex items-center justify-between mt-4">
    <span>₦{goalAmount.toLocaleString()} Goal</span>
    <span>₦{raisedAmount.toLocaleString()} Raised</span>
</div>
<div className="w-full bg-gray-300 h-2 rounded-full">
    <div
        style={{ width: `${progress}%` }}
        className="h-full bg-green-500 rounded-full"
    ></div>
</div>
</div>

                <div className='bg-[#5D9CEC0D] px-10 py-5 rounded-2xl max-w-3xl  mx-auto mt-10'>

                    <h1 className='text-3xl font-semibold'>Grant {startup.startup_name}</h1>
                <form onSubmit={handleSubmit} className="space-y-5 mt-10 text-[#686868]">
                    <label className="block">
                        Enter Amount
                        <input
                            type="number"
                            className="w-full p-2 border rounded"
                            value={amount}
                            onChange={(e) => setAmount(parseFloat(e.target.value))}
                            required
                        />
                    </label>
                    <label className="block">
                        Support as
                        <select
                            className="w-full p-2 border rounded"
                            value={supportAs}
                            onChange={(e) => setSupportAs(e.target.value)}
                        >
                            <option>Individual</option>
                            <option>Organization</option>
                        </select>
                    </label>
                    <label className="block">
                        Name
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={name || user.full_name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label className="block">
                        Email Address
                        <input
                            type="email"
                            className="w-full p-2 border rounded"
                            value={email || user.email}
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
                       Grantt Now
                    </button>
                </form>
                </div>
               
            </div>
        </div>
    );
};

export default GrantPage;


