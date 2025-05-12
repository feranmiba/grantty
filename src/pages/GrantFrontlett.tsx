import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Grant from '../assests/grant.jpg';
import { useUserStore } from '@/store/useUserStore';
import { FaUser } from 'react-icons/fa';

const GrantFrontlettPage: React.FC = () => {
    const { user } = useUserStore();
    const [amount, setAmount] = useState<number | "">("");
    const [supportAs, setSupportAs] = useState<string>("Individual");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [anonymous, setAnonymous] = useState<boolean>(false);
    const [subscribe, setSubscribe] = useState<boolean>(false);
    const progress = 0;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('https://grantty-backend.onrender.com/payment/paystack/initialize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                const data = await response.json();
                const authorizationUrl = data.data.authorization_url;

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

    return (
        <div className="">
            <div className='bg-[#163078] py-5 px-2 md:p-8 text-white flex justify-between'>
                <h1 className='text-lg md:text-3xl md:font-bold'>Grant Frontlett</h1>
                <div className='flex gap-8 items-center text-white text-base md:text-2xl font-semibold'>
                    {user ? (
                        <>
                            {user.full_name}
                            <p className='w-[50px] h-[50px] bg-white justify-center items-center rounded-full md:flex hidden'>
                                <FaUser className='text-black' />
                            </p>
                        </>
                    ) : (
                        <>
                            Guest
                            <p className='w-[50px] h-[50px] bg-white justify-center items-center rounded-full md:flex hidden'>
                                <FaUser className='text-black' />
                            </p>
                        </>
                    )}
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-8 px-3 lg:px-0">
                <div className="mb-6">
                    <div className='flex gap-10 items-center flex-wrap md:flex-nowrap px-5 md:px-10'>
                        <div className='w-full md:w-[50%]'>
                            <img src={Grant} alt="grant" className="w-full h-72 object-cover rounded-lg mb-4" />
                        </div>
                        <div className='md:w-[60%]'>
                            <h2 className="text-lg font-semibold">Frontlett</h2>
                            <p className=" leading-8 mb-1 text-[#0F1729]">          Frontlett Virtualting is a staff share and resource share model that allows companies to share a staff with other companies while they split the cost of hiring the employee or resource. The model allows employees and resources to work for as much as 4 companies in slot times of 2hrs.
                            </p>
                            <p className="mt-1 text-[#0F1729] leading-8 mb-4">
          The objective of the model is to allow companies to hire the right people they need irrespective of the cost, as they will need to take a slot portion they can afford as well as an opportunity to hire a full team needed for the company to succeed.
        </p>
                            <p className="text-gray-500 mb-4">Nigeria</p>
                            <p className="text-blue-600">
                                <a href="#" target="_blank" rel="noopener noreferrer">Visit Website</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='px-5 md:max-w-2xl mx-auto'>
                    <div className="flex items-center justify-between mt-4">
                        <span>₦5,000,000 Goal</span>
                        <span>₦0 Raised</span>
                    </div>
                    <div className="w-full bg-gray-300 h-2 rounded-full">
                        <div style={{ width: `${progress}%` }} className="h-full bg-green-500 rounded-full"></div>
                    </div>
                </div>
                <div className='bg-[#5D9CEC0D] px-10 py-5 rounded-2xl max-w-3xl mx-auto mt-10'>
                    <h1 className='text-3xl font-semibold'>Grant Frontlett</h1>
                    <form onSubmit={handleSubmit} className="space-y-5 mt-10 text-[#686868]">
                        <label>Enter Amount
                            <input type="number" className="w-full p-2 border rounded" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} required />
                        </label>
                        <label>Support as
                            <select className="w-full p-2 border rounded" value={supportAs} onChange={(e) => setSupportAs(e.target.value)}>
                                <option>Individual</option>
                                <option>Organization</option>
                            </select>
                        </label>
                        <label>Name
                            <input type="text" className="w-full p-2 border rounded" value={name || user?.full_name || ''} onChange={(e) => setName(e.target.value)} required />
                        </label>
                        <label>Email Address
                            <input type="email" className="w-full p-2 border rounded" value={email || user?.email || ''} onChange={(e) => setEmail(e.target.value)} required />
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />
                            <span>Make my contribution anonymous</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" checked={subscribe} onChange={(e) => setSubscribe(e.target.checked)} />
                            <span>Subscribe to updates from this startup</span>
                        </label>
                        <button type="submit" className="w-full py-3 bg-[#163078] text-white rounded-2xl">Grantt Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GrantFrontlettPage;