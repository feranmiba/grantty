import React from 'react';
import Avatar1 from '@/assests/reinhard.png'


const DebtNotice: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fffaf5] p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-red-400 p-6 text-center">
        <img
          src={Avatar1}
          alt="Owner Avatar"
          className="w-40 h-40 rounded-full mx-auto mb-4"
        />

        <h1 className="text-3xl font-bold text-red-600 mb-3">⚠️ Payment Alert</h1>
        
        <p className="text-lg text-gray-800 mb-2">
          This owner currently owes their developer money.
        </p>
        <p className="text-md text-gray-700 mb-4">
          Please contact them and remind them to pay up.
        </p>

        <div className="bg-red-100 text-red-700 font-medium p-3 rounded-lg">
          📞 Contact: <span className="font-bold">
            <a href='tel:+2347041200171'>+234 704 120 0171</a></span>
        </div>
      </div>
    </div>
  );
};

export default DebtNotice;
