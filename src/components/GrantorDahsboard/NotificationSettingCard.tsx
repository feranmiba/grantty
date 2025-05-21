
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const initialNotifications = [
  { label: "New application notifications", checked: true },
  { label: "New milestone notifications", checked: true },
  { label: "Newsletter notifications", checked: true },
  { label: "Email notifications", checked: true }
];

export default function NotificationSettingsCard() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleToggle = (idx: number) => {
    setNotifications((prev) =>
      prev.map((notif, i) =>
        i === idx ? { ...notif, checked: !notif.checked } : notif
      )
    );
  };

  return (
    <div className="overflow-x-auto w-[50%] bg-[#FFFFFF] rounded-xl px-5 py-5 space-y-5 border-[#F0EBFB] border-2 text-[#21283B]">
      <div className="text-xl font-semibold text-gray-800 mb-2">Notification</div>
      <div className="flex flex-col gap-4">
        {notifications.map((notif, idx) => (
          <div key={idx} className="flex items-center justify-between mt-3 text-lg">
            <Label className="text-lg">{notif.label}</Label>
            <Switch
              checked={notif.checked}
              onCheckedChange={() => handleToggle(idx)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}