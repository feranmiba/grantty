import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify'

const GrantPage: React.FC = () => {
    const { startup_id } = useParams<{ startup_id: string }>(); // Retrieve startup_id from URL params

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

    // Fetch the goal amount and raised amount data from an API
    useEffect(() => {
        const fetchGrantData = async () => {
            try {
                const response = await fetch(`https://grantty-backend.onrender.com/startup/startup/${startup_id}`);
                const data = await response.json();
                if (response.ok && data.data) {
                    setStartup(data.data);
                    setGoalAmount(parseFloat(data.data.amount_of_funds));
                    setRaisedAmount(0); // Set to 0 initially or update with actual raised amount
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
    
    const progress = goalAmount && raisedAmount ? (raisedAmount / goalAmount) * 100 : 0;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(startup_id)
        const formData = { amount, email, startup_id  };

        try {
            const response = await fetch(`https://grantty-backend.onrender.com/payment/paystack/initialize`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Form submitted successfully');
                toast.success('Form submitted successfully, Redirection in progress...');
                
            } else {
                alert('Failed to submit form.');
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
        <div className="min-h-screen p-8 bg-gray-100">
            <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Grant Pitch</h1>
                {startup && (
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">{startup.startup_name}</h2>
                        <p className="text-gray-600">{startup.startup_description}</p>
                        <p className="text-gray-500">{startup.startup_location}</p>
                        <p className="text-blue-600">
                            <a href={startup.startup_website} target="_blank" rel="noopener noreferrer">
                                Visit Website
                            </a>
                        </p>
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
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
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
                        Your Name
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label className="block">
                        Email Address
                        <input
                            type="email"
                            className="w-full p-2 border rounded"
                            value={email}
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
                        className="w-full py-2 bg-black text-white rounded"
                    >
                        Continue Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GrantPage;


