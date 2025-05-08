import React, { useState } from 'react';

const GrantPage: React.FC = () => {
    const [amount, setAmount] = useState<number | "">("");
    const [supportAs, setSupportAs] = useState<string>("Individual");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [anonymous, setAnonymous] = useState<boolean>(false);
    const [subscribe, setSubscribe] = useState<boolean>(false);

    const goalAmount = 1000000;
    const raisedAmount = 600000;
    const progress = (raisedAmount / goalAmount) * 100;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = { amount, supportAs, name, email, anonymous, subscribe };
        console.log("Form Submitted:", formData);
    };

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
                        <input type="number" className="w-full p-2 border rounded" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
                    </label>
                    <label className="block">
                        Support as
                        <select className="w-full p-2 border rounded" value={supportAs} onChange={(e) => setSupportAs(e.target.value)}>
                            <option>Individual</option>
                            <option>Organization</option>
                        </select>
                    </label>
                    <label className="block">
                        Your Name
                        <input type="text" className="w-full p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label className="block">
                        Email Address
                        <input type="email" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />
                        <span>Make my contribution anonymous</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" checked={subscribe} onChange={(e) => setSubscribe(e.target.checked)} />
                        <span>Subscribe to updates from this startup</span>
                    </label>
                    <button type="submit" className="w-full py-2 bg-black text-white rounded">Continue Now</button>
                </form>
            </div>
        </div>
    );
};

export default GrantPage;
