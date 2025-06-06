import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GranttyAdvantage: React.FC = () => {
  const [businessInfoList, setBusinessInfoList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default to 3 for desktop

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

  // Handle screen resizing to switch between desktop and mobile view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // Mobile size
      } else {
        setItemsPerPage(3); // Desktop size
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize); // Listen for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup listener
    };
  }, []);

  // Pagination logic
  const indexOfLastCard = currentPage * itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - itemsPerPage;
  const currentCards = businessInfoList.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(businessInfoList.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="text-start py-8 md:px-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Businesses Empowered by the Grantty Advantage</h1>
      <div className="flex justify-around flex-wrap space-x-8">
        {currentCards.map((business) => (
          <Card key={business.startup_id} businessInfo={business} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 items-center">
        <button
          onClick={handlePrevPage}
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 disabled:bg-gray-400"
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <span className="text-lg font-medium">
           {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2 disabled:bg-gray-400"
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
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
    <div className="border border-gray-300 p-6 w-[90%] md:w-[40%] lg:w-[30%] mt-5 shadow-lg rounded-lg">
      <div className="h-48 bg-gray-200 mb-4 ">
        {/* <img src={businessInfo.startup_picture} alt={businessInfo.startup_name} /> */}
      </div>
      <h2 className="text-2xl font-semibold">{businessInfo.startup_name}</h2>
      <p className="text-gray-600 mt-2">{businessInfo.startup_description}</p>
      <p className="font-medium mt-4">
        <span  className='text-lg'>Founded By:</span> {businessInfo.founder_full_name}
      </p>
      <div className='flex justify-between my-5'>
      <p className="font-medium flex flex-col gap-3 text-sm">
        <span  className='text-lg'>Grant Goal:</span> ₦{businessInfo.amount_of_funds}
      </p>
      <p className="font-medium flex flex-col gap-3 text-sm">
        <span  className='text-lg'>Raised:</span> ₦{businessInfo.raisedAmount || '0.00'} 
      </p>
      <p className="font-medium flex flex-col gap-3 text-sm">
        <span className='text-lg'>To-go:</span> ₦{businessInfo.toGo || businessInfo.amount_of_funds} 
      </p>
      </div>
  
      <button
        onClick={handleGrantStartup}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Grant Startup
      </button>
    </div>
  );
};

export default GranttyAdvantage;



