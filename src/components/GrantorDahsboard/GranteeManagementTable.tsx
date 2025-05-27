
import React, { useState, useEffect } from "react";
import { useGrantorDashboardUtils } from "./hooks/utils";
import { usePaymentUtils } from "@/utils/usePayment";


const granteeData = [
  { project: "Agrivest", amount: "₦50,000", progress: "Completed", nextMilestone: "28-05-2025" },
  { project: "Agrivest", amount: "₦50,000", progress: "Completed", nextMilestone: "28-05-2025" },
  { project: "Agrivest", amount: "₦50,000", progress: "Completed", nextMilestone: "28-05-2025" },
  { project: "Agrivest", amount: "₦50,000", progress: "Completed", nextMilestone: "28-05-2025" },
];

const GranteeManagementTable = () => {
   const { getCompany } = useGrantorDashboardUtils();
    const { getPaymentById } = usePaymentUtils();
  
    const [grantData, setGrantData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [totalRaised, setTotalRaised] = useState(0);
  
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
                return {
                  ...startup,
                  payment: payment?.data || null,
                };
              })
            );
  
            setGrantData(startupsWithPayments);
            console.log(startupsWithPayments)
  
            // Calculate total amount raised
            const total = startupsWithPayments.reduce((sum, startup) => {
              const amount = startup.payment?.amount_raised || startup.payment?.amount || 0;
              return sum + amount;
            }, 0);
  
            setTotalRaised(total);
            console.log(total)
          } else {
            setGrantData([]);
            setTotalRaised(0);
          }
        } catch (error) {
          console.error("Error fetching grant activity data:", error);
          setGrantData([]);
          setTotalRaised(0);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [getCompany, getPaymentById]);


  return(
  <div className="overflow-x-auto w-full md:w-[50%] bg-[#FFFFFF] rounded-xl px-5 py-5 space-y-5 border-[#F0EBFB] border-2 text-[#21283B]">

  <div className="flex justify-between">
    <p className="font-semibold text-xl">Grantee management</p>


  </div>
  {loading ? (
        <p>Loading...</p>
      ) : grantData.length === 0 ? (
        <p className="text-gray-500">No startups found</p>
      ) : (
  <table className="min-w-full text-left text-sm  border-spacing-y-10 border-[#F0EBFB] border-2 rounded-2xl">
  <thead>
        <tr className="bg-gray-50">
          <th className="px-4 py-4 font-medium text-gray-500">PROJECT</th>
          <th className="px-4 py-4 font-medium text-gray-500">AMOUNT</th>
          <th className="px-4 py-4 font-medium text-gray-500">PROGRESS</th>
          <th className="px-4 py-4 font-medium text-gray-500">NEXT MILESTONE</th>
        </tr>
      </thead>
      <tbody>
      {grantData.map((row, i) => {
          const status =
          row.amount_of_funds <= totalRaised ? (
            <span className="px-2 py-2 font-semibold rounded text-[#6CBB2D]">Completed</span>
          ) : (
            <span className="px-2 py-2 font-semibold rounded text-[#E53E3E]">Not Completed</span>
          );
          return(
        
          <tr
            key={i}
            className="border-b last:border-b-0 hover:bg-gray-50 transition text-base"
          >
            <td className="px-4 py-5 text-gray-700">{row.startup_name}</td>
            <td className="px-4 py-5">₦{row.amount_of_funds.toLocaleString()}</td>
            <td className="px-4 py-5">
              <span className="px-2 py-2  font-semibold rounded text-[#6CBB2D]">
                {status}
              </span>
            </td>
            <td className="px-4 py-2">{row.nextMilestone}</td>
          </tr>
)})}
      </tbody>
    </table>
     )}
  </div>
)};

export default GranteeManagementTable;