import React, { useEffect, useState } from "react";
import { useGrantorDashboardUtils } from "./hooks/utils";
import { usePaymentUtils } from "@/utils/usePayment";
import { useNavigate } from "react-router-dom";


const AvailableProjectsTable = () => {
  const { getCompany } = useGrantorDashboardUtils();
  const { getPaymentById } = usePaymentUtils();

  const [projectData, setProjectData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
    const [totalRaised, setTotalRaised] = useState(0);
    const navigate = useNavigate();

    
  

  useEffect(() => {
      const fetchData = async () => {
        try {
          const companyResponse = await getCompany();
  
          if (Array.isArray(companyResponse?.data) && companyResponse.data.length > 0) {
            const startups = companyResponse.data;
  
            // Fetch payments for each startup
            const startupsWithPayments = await Promise.all(
              startups.map(async (startup: any) => {
                const payment = await getPaymentById(startup.id);
                console.log(payment)
                return {
                  ...startup,
                  payment: payment?.totalAmount || null,
                };
              })
            );
  
  
            setProjectData(startupsWithPayments);
            console.log(startupsWithPayments)
          } else {
            setProjectData([]);
            setTotalRaised(0);
          }
        } catch (error) {
          console.error("Error fetching Project activity data:", error);
          setProjectData([]);
          setTotalRaised(0);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [getCompany, getPaymentById]);

  return (
    <div className="overflow-x-auto w-full md:w-[50%] bg-[#FFFFFF] rounded-xl px-5 py-5 space-y-5 border-[#F0EBFB] border-2 text-[#21283B]">
      <div className="flex justify-between">
        <p className="font-semibold text-xl">Available Projects</p>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : projectData.length === 0 ? (
        <p className="text-gray-500 flex justify-center">No projects found</p>
      ) : (
        <table className="min-w-full text-left text-sm border-spacing-y-10 border-[#F0EBFB] border-2 rounded-2xl">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-4 font-medium text-gray-500">NAME</th>
              <th className="px-4 py-4 font-medium text-gray-500">PROJECT</th>
              <th className="px-4 py-4 font-medium text-gray-500">AMOUNT RAISED</th>
              <th className="px-4 py-4 font-medium text-gray-500">AMOUNT NEEDED</th>
            </tr>
          </thead>
              <tbody>
      {projectData.map((row, i) => (
        <tr
          key={i}
          onClick={() => navigate(`/grant/${row.id}`)}
          className="border-b last:border-b-0 hover:bg-gray-50 transition text-[#21283B] text-base cursor-pointer"
        >
          <td className="px-4 py-5">{row.founder_full_name}</td>
          <td className="px-4 py-5">{row.startup_name}</td>
          <td className="px-4 py-5">
            {row.payment ? `₦${row.payment.toLocaleString()}` : "₦0"}
          </td>
          <td className="px-4 py-5">
            {row.amount_of_funds
              ? `₦${(row.amount_of_funds - row.payment).toLocaleString()}`
              : "-"}
          </td>
        </tr>
      ))}
    </tbody>

        </table>
      )}
    </div>
  );
};

export default AvailableProjectsTable;


