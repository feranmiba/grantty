import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceDot,
} from "recharts";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const data = [
  { name: "Mon", value: 20000 },
  { name: "Tue", value: 15000 },
  { name: "Wed", value: 50000 },
  { name: "Thu", value: 20000 },
  { name: "Fri", value: 30000 },
  { name: "Sat", value: 80000 },
  { name: "Sun", value: 25000 },
];

// Highlight Wednesday (index 2)
const highlightedPoint = data[2];

export default function DisbursementTrendCard() {
  const [range, setRange] = React.useState("Last 7 days");

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 w-full h-full flex flex-col relative text-[#21283B]">
      <div className="flex items-center justify-between mb-2">
        <div className="text-lg font-semibold">Disbursement Trend</div>

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button
      variant="outline"
      size="sm"
      className="ml-4 text-xs rounded-full px-3 py-1 border-gray-200"
    >
      {range}
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end" className="text-xs">
    <DropdownMenuItem onClick={() => setRange("Last 7 days")}>
      Last 7 days
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setRange("Last month")}>
      Last month
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
      </div>

      {/* Static bubble-like tooltip */}
      <div
        className="absolute z-10 bg-white px-4 py-2 rounded-xl shadow text-center border"
        style={{
          top: 90, // tweak based on chart height
          left: '40%', // tweak to align with data point (Wed)
          transform: 'translateX(-50%)',
        }}
      >
        <div className="font-bold text-lg">₦50,000</div>
        <div className="text-xs text-muted-foreground">14 May, 2025</div>
      </div>

      <div className="!mt-12 w-full" style={{ minHeight: 190 }}>
  <ResponsiveContainer width="100%" height={180}>
    <LineChart
      data={data}
      margin={{ left: 20, right: 15, top: 10, bottom: 5 }} // Increased left margin
    >
      <defs>
        <linearGradient id="colorLine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ADE80" stopOpacity={0.9} />
          <stop offset="100%" stopColor="#bbf7d0" stopOpacity={0.1} />
        </linearGradient>
      </defs>

      <CartesianGrid strokeDasharray="3 3" vertical={false} />

      <XAxis dataKey="name" tickLine={false} axisLine={false} />

      <YAxis
        axisLine={false}
        tickLine={false}
        tickFormatter={(value) => `${value / 1000}K`}
        fontSize={12}
        stroke="#94A3B8"
        tickMargin={10} // Adds spacing between tick label and Y-axis
      />

      <Tooltip
        contentStyle={{ borderRadius: 12, fontSize: 12 }}
        formatter={(value) => [`₦${Number(value).toLocaleString()}`]}
      />

      <Line
        type="linear"
        dataKey="value"
        stroke="#4ADE80"
        strokeWidth={2}
        dot={{ r: 5, fill: "#fff", stroke: "#4ADE80", strokeWidth: 2 }}
        activeDot={{ r: 7, fill: "#4ADE80", stroke: "#fff", strokeWidth: 3 }}
        fill="url(#colorLine)"
      />

      <ReferenceDot
        x={highlightedPoint.name}
        y={highlightedPoint.value}
        r={0}
        fill="#4ADE80"
        stroke="none"
        isFront
      />
    </LineChart>
  </ResponsiveContainer>
</div>

    </div>
  );
}
