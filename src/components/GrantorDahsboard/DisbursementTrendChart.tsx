
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { date: "14 May 2025", value: 40000 },
  { date: "15 May 2025", value: 60000 },
  { date: "16 May 2025", value: 25000 },
  { date: "17 May 2025", value: 96000 },
  { date: "18 May 2025", value: 60000 },
];

const DisbursementTrendChart = () => (
  <div className="bg-white rounded-xl p-5 border border-gray-100 h-full flex-1">
    <div className="flex items-center justify-between mb-2">
      <div className="font-semibold text-gray-700">Disbursement Trend</div>
      <span className="text-xs text-gray-500">Last 7 days</span>
    </div>
    <ResponsiveContainer width="100%" height={180}>
      <LineChart data={data}>
        <CartesianGrid stroke="#ececec" vertical={false} />
        <XAxis dataKey="date" axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2.5} dot={{ r: 5, stroke: "#22c55e", strokeWidth: 2, fill: "white" }} />
      </LineChart>
    </ResponsiveContainer>
    <div className="text-xs text-gray-400 mt-4 flex justify-between">
      <div>
        <span className="font-semibold text-gray-800">₦60,000</span>
        <span className="ml-2 text-gray-400">16 May, 2025</span>
      </div>
    </div>
  </div>
);

export default DisbursementTrendChart;