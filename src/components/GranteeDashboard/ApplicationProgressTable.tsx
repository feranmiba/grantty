import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { useGranteeDashboardUtils } from "./utils/utils";

export default function ApplicationProgressTable() {
  const { getUserCompanyStatus } = useGranteeDashboardUtils();
  const [steps, setSteps] = useState([
    { step: 1, name: "Company Info", status: "Not Completed" },
    { step: 2, name: "Founder Details", status: "Not Completed" },
    { step: 3, name: "Company Overview", status: "Not Completed" },
    { step: 4, name: "Team Information", status: "Not Completed" },
    { step: 5, name: "Product and Traction", status: "Not Completed" },
    { step: 6, name: "Funding Information", status: "Not Completed" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUserCompanyStatus();
        const startup = res?.data?.[0];

        if (!startup) return;

        const updatedSteps = [
          {
            step: 1,
            name: "Company Info",
            status:
              startup.startup_name &&
              startup.startup_description &&
              startup.startup_location &&
              startup.startup_website &&
              startup.startup_email
                ? "Completed"
                : "Not Completed",
          },
          {
            step: 2,
            name: "Founder Details",
            status:
              startup.founder_full_name &&
              startup.founder_email &&
              startup.founder_phone_no &&
              startup.founder_linkedin_profile &&
              startup.founder_nin
                ? "Completed"
                : "Not Completed",
          },
          {
            step: 3,
            name: "Company Overview",
            status:
              startup.startup_industry &&
              startup.video &&
              startup.startup_picture
                ? "Completed"
                : "Not Completed",
          },
          {
            step: 4,
            name: "Team Information",
            status:
              startup.team_size && startup.no_of_teams
                ? "Completed"
                : "Not Completed",
          },
          {
            step: 5,
            name: "Product and Traction",
            status: startup.no_of_customers ? "Completed" : "Not Completed",
          },
          {
            step: 6,
            name: "Funding Information",
            status:
              startup.amount_of_funds && startup.usage_of_funds
                ? "Completed"
                : "Not Completed",
          },
        ];

        setSteps(updatedSteps);
      } catch (error) {
        console.error("Error fetching user company status:", error);
      }
    };

    fetchData();
  }, [getUserCompanyStatus]);

  return (
    <div className="w-full  rounded-2xl border border-[#F2F5F2] p-6 shadow-sm mb-8 ">
      <div className="text-lg font-semibold mb-4">Application Progress</div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-transparent border border-[#F0F2ED] rounded-lg">
          <thead className="bg-[#fafdf8]">
            <tr>
              <th className="text-left py-3 px-4 font-medium text-gray-500">STEPS</th>
              <th className="text-left py-3 px-4 font-medium text-gray-500">NAME</th>
              <th className="text-left py-3 px-4 font-medium text-gray-500">STATUS</th>
              <th className="text-left py-3 px-4 font-medium text-gray-500">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((item) => (
              <tr key={item.step} className="border-t border-[#f0f2ed] last:border-b">
                <td className="py-4 px-4 font-medium text-gray-900">{`Step ${item.step}`}</td>
                <td className="py-4 px-4 text-gray-700">{item.name}</td>
                <td className="py-4 px-4">
                  <span
                    className={
                      `inline-block text-sm rounded-full px-3 py-1 ` +
                      (item.status === "Completed"
                        ? "text-green-600 bg-green-50 border border-green-200"
                        : "text-red-500 bg-red-50 border border-red-200")
                    }
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <button
                    className={
                      "flex items-center gap-1 border rounded-full px-4 py-1.5 transition bg-white " +
                      (item.status === "Completed"
                        ? "border-green-300 text-green-600 hover:bg-green-50"
                        : "border-green-200 text-green-500 hover:bg-green-50")
                    }
                  >
                    <Eye size={16} className="mr-1" />
                    <span>Review</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
