
import { ReactNode } from "react";

type SummaryCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
  subLabel?: string;
  success?: boolean;
};

const SummaryCard = ({ icon, label, value, subLabel, success }: SummaryCardProps) => (
  <div className="flex-1 min-w-[190px] bg-white rounded-xl px-6 py-10  h-[20vh] flex gap-4 shadow-sm border border-gray-100">
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
      {icon}
    </div>
    <div>
      <div className="text-gray-500 text-sm">{label}</div>
      <div className="font-bold text-xl text-gray-800">{value}</div>
      {subLabel && <div className="text-xs text-gray-400">{subLabel}</div>}
    </div>
    {success && <div className="ml-auto text-green-500">&#x2714;</div>}
  </div>
);

export default SummaryCard;