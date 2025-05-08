import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GranttyAdvantage: React.FC = () => {
  const [businessInfoList, setBusinessInfoList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://grantty-backend.onrender.com/startup', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setBusinessInfoList(data.data); 
      } catch (error) {
        console.error('Error fetching business data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-center py-8">
      <h1 className="text-3xl font-bold mb-8">Businesses Empowered by the Grantty Advantage</h1>
      <div className="flex justify-around flex-wrap space-x-8">
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
    <div className="border border-gray-300 p-6 w-[30%] mt-5 shadow-lg rounded-lg">
      <div className="h-32 bg-gray-200 mb-4"></div>
      <h2 className="text-2xl font-semibold">{businessInfo.startup_name}</h2>
      <p className="text-gray-600 mt-2">{businessInfo.startup_description}</p>
      <p className="font-medium mt-4">
        <strong>Founded By:</strong> {businessInfo.founder_full_name}
      </p>
      <p className="font-medium">
        <strong>Grant Goal:</strong> {businessInfo.amount_of_funds}
      </p>
      <p className="font-medium">
        <strong>Raised:</strong> {businessInfo.raisedAmount || 'N/A'} {/* Handle missing data */}
      </p>
      <p className="font-medium mb-4">
        <strong>To-go:</strong> {businessInfo.toGo || 'N/A'} {/* Handle missing data */}
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


