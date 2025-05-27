
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeClosed } from "lucide-react";
import { useUserStore } from '@/store/useUserStore';


export default function ProfileSettingsCard() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };
  const { user } = useUserStore();


  return (
    <div className="overflow-x-auto md:w-[48%] w-full bg-[#FFFFFF] rounded-xl px-5 py-5 space-y-5 border-[#F0EBFB] border-2 text-[#21283B]">
      <div className="text-xl font-semibold  mb-2">Profile Settings</div>
      <div className="flex flex-wrap gap-6 mt-5 text-xl">
        <div className="flex-[1_1_220px] flex flex-col gap-2 min-w-[300px]">
          <Label htmlFor="fullname" className="text-lg">Full name</Label>
          <Input id="fullname" value={user?.full_name || 'User'} readOnly className="outline-none py-5" />
        </div>
        <div className="flex-[1_1_220px] flex flex-col gap-2 min-w-[300px]">
          <Label htmlFor="email" className="text-lg">Email</Label>
          <Input id="email" value={user?.email || 'User'} readOnly className="border-red-300 outline-none py-5" />
        </div>
        <div className="flex-[1_1_220px] flex flex-col gap-2 min-w-[200px]">
          <Label htmlFor="account-type" className="text-lg">Account type</Label>
          <Input id="account-type" value="Granttor" readOnly className="outline-none py-5" />
        </div>
        <div className="flex-[1_1_220px] flex flex-col gap-2 min-w-[200px] relative">
          <Label htmlFor="password" className="text-lg">Password</Label>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value="********"
            readOnly
            className="outline-none "
          />
          <Button
            variant="ghost"
            size="sm"
            type="button"
            className="absolute right-2 top-10 px-2 py-0 h-7"
            onClick={handleTogglePassword}
            tabIndex={0}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeClosed size={16} className="text-muted-foreground" /> : <Eye size={16} className="text-muted-foreground" />}
          </Button>
        </div>
      </div>
    </div>
  );
}