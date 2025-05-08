import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GranttyAdvantage: React.FC = () => {
  const [businessInfoList, setBusinessInfoList] = useState<any[]>([]);

  useEffect(() => {
    // Simulate fetching data from backend
    const fetchData = async () => {
      // Replace with actual backend call, e.g., fetch('/api/businesses')
      const response = [
        {
          startup_id: 1,
          name: 'Frontlett',
          description: 'A group-buying platform helping startups access discounted services.',
          foundedBy: 'James Doe',
          grantGoal: 'N3M',
          raisedAmount: 'N300,000',
          toGo: 'N300,000',
        },
        {
          startup_id: 2,
          name: 'Techify',
          description: 'A tech startup building cutting-edge solutions for businesses.',
          foundedBy: 'Jane Smith',
          grantGoal: 'N5M',
          raisedAmount: 'N1,000,000',
          toGo: 'N4M',
        },
      ];
      setBusinessInfoList(response);
    };
    fetchData();
  }, []);

  return (
    <div className="text-center py-8">
      <h1 className="text-3xl font-bold mb-8">Businesses Empowered by the Grantty Advantage</h1>
      <div className="flex justify-around space-x-8">
        {businessInfoList.map((business) => (
          <Card key={business.startup_id} businessInfo={business} />
        ))}
      </div>
    </div>
  );
};

const Card: React.FC<{ businessInfo: any }> = ({ businessInfo }) => {
  const navigate = useNavigate();

  const handleGrantStartup = () => {
    // Navigate to /grant page with startup_id
    navigate(`/grant/${businessInfo.startup_id}`);
  };

  return (
    <div className="border border-gray-300 p-6 w-80 shadow-lg rounded-lg">
      <div className="h-32 bg-gray-200 mb-4"></div>
      <h2 className="text-2xl font-semibold">{businessInfo.name}</h2>
      <p className="text-gray-600 mt-2">{businessInfo.description}</p>
      <p className="font-medium mt-4">
        <strong>Founded By:</strong> {businessInfo.foundedBy}
      </p>
      <p className="font-medium">
        <strong>Grant Goal:</strong> {businessInfo.grantGoal}
      </p>
      <p className="font-medium">
        <strong>Raised:</strong> {businessInfo.raisedAmount}
      </p>
      <p className="font-medium mb-4">
        <strong>To-go:</strong> {businessInfo.toGo}
      </p>
      <button
        onClick={handleGrantStartup}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Grant Startup
      </button>
      <button
        className="mt-2 bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300"
      >
        View Value Proposition
      </button>
    </div>
  );
};

export default GranttyAdvantage;

