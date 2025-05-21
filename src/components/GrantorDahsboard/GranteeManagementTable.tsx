
import React from "react";

const granteeData = [
  { project: "Agrivest", amount: "₦50,000", progress: "Completed", nextMilestone: "28-05-2025" },
  { project: "Agrivest", amount: "₦50,000", progress: "Completed", nextMilestone: "28-05-2025" },
  { project: "Agrivest", amount: "₦50,000", progress: "Completed", nextMilestone: "28-05-2025" },
  { project: "Agrivest", amount: "₦50,000", progress: "Completed", nextMilestone: "28-05-2025" },
];

const GranteeManagementTable = () => (
  <div className="overflow-x-auto w-[50%] bg-[#FFFFFF] rounded-xl px-5 py-5 space-y-5 border-[#F0EBFB] border-2 text-[#21283B]">

  <div className="flex justify-between">
    <p className="font-semibold text-xl">Available Project</p>


  </div>
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
        {granteeData.map((row, i) => (
          <tr
            key={i}
            className="border-b last:border-b-0 hover:bg-gray-50 transition text-base"
          >
            <td className="px-4 py-5 text-gray-700">{row.project}</td>
            <td className="px-4 py-5">{row.amount}</td>
            <td className="px-4 py-5">
              <span className="px-2 py-2  font-semibold rounded text-[#6CBB2D]">
                {row.progress}
              </span>
            </td>
            <td className="px-4 py-2">{row.nextMilestone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default GranteeManagementTable;