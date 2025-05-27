
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const data = [
  { name: "Health", value: 50, color: "#34d399" },
  { name: "Education", value: 25, color: "#2563eb" },
  { name: "Agric", value: 25, color: "#a3a3a3" },
];

export default function FundingBySectorCard() {
  const [range, setRange] = React.useState("Last 7 days");

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 w-full h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div className="text-xl font-semibold">Funding by Sector</div>
      
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
      <div className="flex-1 flex flex-col items-center justify-center">
        <ResponsiveContainer width="100%" height={150}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={38}
              outerRadius={70}
              paddingAngle={1}
              dataKey="value"
              stroke="none"
              labelLine={false}
            >
              {data.map((entry, i) => (
                <Cell key={`cell-${i}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex gap-5 justify-between text-xl items-center w-full mt-2 border rounded-xl px-10 py-5">
          {data.map((item, i) => (
            <div key={i} className="md:flex items-center gap-2 border-r-2 pr-5 hidden">
              <span className="inline-block w-3 h-3 rounded-full" style={{ background: item.color }} />
              <span className=" font-medium text-gray-700">{item.name}</span>
              <span className=" text-gray-400">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}