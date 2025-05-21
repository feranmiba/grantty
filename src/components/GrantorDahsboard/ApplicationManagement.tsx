
import React from "react";

const projectData = [
  { name: "Yakubu David", project: "Agrivest", raised: "₦50,000", needed: "₦150,000" },
  { name: "Yakubu David", project: "Agrivest", raised: "₦50,000", needed: "₦150,000" },
  { name: "Yakubu David", project: "Agrivest", raised: "₦50,000", needed: "₦150,000" },
  { name: "Yakubu David", project: "Agrivest", raised: "₦50,000", needed: "₦150,000" },
];

const AvailableProjectsTable = () => (
  <div className="overflow-x-auto w-[50%] bg-[#FFFFFF] rounded-xl px-5 py-5 space-y-5 border-[#F0EBFB] border-2 text-[#21283B]">

  <div className="flex justify-between">
    <p className="font-semibold text-xl">Available Project</p>


  </div>
      <table className="min-w-full text-left text-sm  border-spacing-y-10 border-[#F0EBFB] border-2 rounded-2xl">
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
          className="border-b last:border-b-0 hover:bg-gray-50 transition text-[#21283B] text-base"
        >
          <td className="px-4 py-5">{row.name}</td>
          <td className="px-4 py-5">{row.project}</td>
          <td className="px-4 py-5 ">{row.raised}</td>
          <td className="px-4 py-5 ">{row.needed}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
);

export default AvailableProjectsTable;