
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Health", value: 40 },
  { name: "Education", value: 25 },
  { name: "Agri", value: 25 },
  { name: "Other", value: 10 },
];

const COLORS = ["#22c55e", "#0295f6", "#dee146", "#b5b6b7"];

const FundingBySectorChart = () => (
  <div className="bg-white rounded-xl p-5 border border-gray-100 h-full flex-1">
    <div className="flex items-center justify-between mb-2">
      <div className="font-semibold text-gray-700">Funding by Sector</div>
      <span className="text-xs text-gray-500">Last 7 days</span>
    </div>
    <ResponsiveContainer width="100%" height={180}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={60}
          innerRadius={40}
          label
        >
          {data.map((entry, i) => (
            <Cell key={entry.name} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="horizontal" align="center" verticalAlign="bottom" />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default FundingBySectorChart;