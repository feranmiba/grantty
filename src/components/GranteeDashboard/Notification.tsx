
import React from "react";

const notifications = [
  "June 01, Round 2 application opens.",
  "June 01, Round 2 application opens.",
  "June 01, Round 2 application opens.",
  "June 01, Round 2 application opens.",
];

export default function NotificationList() {
  return (
    <div className="bg-white rounded-2xl border border-[#F2F5F2] p-5 mb-8">
      <div className="text-base font-bold mb-4 border-b pb-4 text-[#21283B] ">Notification</div>
      <ul className="flex flex-col gap-5 mt-5">
        {notifications.map((msg, idx) => (
          <li key={idx} className="flex items-center gap-3 border-t px-3 py-3 rounded-lg">
            <span className="flex items-center justify-center h-8 w-8 bg-[#e8fce3] rounded-full">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M12 3.08789C4.802 3.08789 2.25 5.63989 2.25 12.8379C2.25 20.0359 4.802 22.5879 12 22.5879C19.198 22.5879 21.75 20.0359 21.75 12.8379C21.75 5.63989 19.198 3.08789 12 3.08789Z" fill="#6CBB2D"/>
        <path d="M11.249 16.3379C11.249 16.7519 11.59 17.0879 12.004 17.0879C12.418 17.0879 12.754 16.7519 12.754 16.3379C12.754 15.9239 12.418 15.5879 12.004 15.5879H11.995C11.581 15.5879 11.249 15.9239 11.249 16.3379Z" fill="#6CBB2D"/>
        <path d="M12 8.19287C11.586 8.19287 11.25 8.52887 11.25 8.94287V12.8379C11.25 13.2519 11.586 13.5879 12 13.5879C12.414 13.5879 12.75 13.2519 12.75 12.8379V8.94287C12.75 8.52887 12.414 8.19287 12 8.19287Z" fill="#6CBB2D"/>
        </svg>
            </span>
            <span className="text-[16px] text-[#21283B]">{msg}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}