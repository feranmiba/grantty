import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GrantPage: React.FC = () => {
    const { userId } = useParams<{ userId: string }>(); // Retrieve userId from URL params

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

    // Fetch the goal amount and raised amount data from an API
    useEffect(() => {
        const fetchGrantData = async () => {
            try {
                const response = await fetch(`https://api.example.com/grant-info/${userId}`); // API using userId
                const data = await response.json();
                if (response.ok) {
                    setGoalAmount(data.goalAmount);
                    setRaisedAmount(data.raisedAmount);
                } else {
                    setError('Failed to load grant data.');
                }
            } catch (error) {
                setError('Error fetching grant data.');
            } finally {
                setLoading(false);
            }
        };

        fetchGrantData();
    }, [userId]);

    const progress = goalAmount && raisedAmount ? (raisedAmount / goalAmount) * 100 : 0;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = { amount, supportAs, name, email, anonymous, subscribe };

        // API call to submit form data
        try {
            const response = await fetch('https://api.example.com/submit-grant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Form submitted successfully');
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
                <div className="mb-6">
                    <h2 className="text-lg font-semibold">About Frontlett:</h2>
                    <p className="text-gray-600">A startup aiming to revolutionize the way businesses raise funds. Frontlett focuses on helping startups secure the capital needed to scale through community grants.</p>
                    <div className="flex items-center justify-between mt-4">
                        <span>₦{goalAmount.toLocaleString()} Goal</span>
                        <span>₦{raisedAmount.toLocaleString()} Raised</span>
                    </div>
                    <div className="w-full bg-gray-300 h-2 rounded-full">
                        <div style={{ width: `${progress}%` }} className="h-full bg-green-500 rounded-full"></div>
                    </div>
                </div>

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

