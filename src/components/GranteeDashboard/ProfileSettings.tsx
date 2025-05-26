
import React, { useState } from "react";
import { Eye } from "lucide-react";
import { useUserStore } from '@/store/useUserStore';


export default function ProfileSettings() {
     const [showPassword, setShowPassword] = useState(false);
    
      const handleTogglePassword = () => {
        setShowPassword(prev => !prev);
      };
      const { user } = useUserStore();
  return (
    <div className="bg-white rounded-2xl border border-[#F2F5F2] p-5 w-full">
      <div className="text-base font-semibold mb-4">Profile Settings</div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-[#F0EBFB] rounded-lg p-4 space-y-2">
          <label className="block text-sm text-gray-400 mb-1">Full name</label>
          <div className="text-[16px]">{user.full_name}</div>
        </div>
        <div className="border border-[#F0EBFB] rounded-lg p-4 space-y-2">
          <label className="block text-xs text-gray-400 mb-1">Email</label>
          <div className="text-[16px]">{user.email}</div>
        </div>
        <div className="border border-[#F0EBFB] rounded-lg p-4 space-y-2">
          <label className="block text-xs text-gray-400 mb-1">Account type</label>
          <div className="text-[16px]">Grantee</div>
        </div>
        <div className="relative flex items-center border border-[#F0EBFB] rounded-lg p-4 space-y-2">
          <div className="w-full">
            <label className="block text-xs text-gray-400 mb-1">Password</label>
            <div className="text-[16px] flex items-center">
              <span className="flex-1">********</span>
              <Eye size={18} className="text-gray-500 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}