import React from "react";
import { CircleCheck } from "lucide-react";

const activities = [
 
];

const RecentActivity = () => (
  <div className="overflow-x-auto w-full md:w-[50%] bg-[#FFFFFF] rounded-xl px-5 py-5 space-y-5 border-[#F0EBFB] border-2 text-[#21283B]">
    <div className="flex justify-between border-[#F0EBFB] border-b-2">
      <p className="font-semibold text-xl">Recent Activity</p>
      <p>See all</p>
    </div>

    {activities.length === 0 ? (
      <div className="flex justify-center items-center h-40 text-gray-400 text-lg font-medium">
        No activity
      </div>
    ) : (
      <ul className="divide-y divide-gray-100 text-lg">
        {activities.map((activity, i) => (
          <li
            key={i}
            className="flex items-center justify-between py-2 px-1 hover:bg-gray-50 rounded transition"
          >
            <div className="flex items-center mt-5">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 mr-3">
                <CircleCheck className="text-green-500 w-4 h-4" />
              </span>
              <span>{activity.text}</span>
            </div>
            <span className="ml-1 text-xl text-gray-300">&gt;</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default RecentActivity;
