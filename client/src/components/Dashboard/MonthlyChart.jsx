import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "1", sales: 12000 },
  { day: "2", sales: 14500 },
  { day: "3", sales: 13200 },
  { day: "4", sales: 16800 },
  { day: "5", sales: 15400 },
  { day: "6", sales: 18000 },
  { day: "7", sales: 17500 },
  { day: "8", sales: 19000 },
  { day: "9", sales: 21000 },
  { day: "10", sales: 20500 },
  { day: "11", sales: 19800 },
  { day: "12", sales: 21500 },
  { day: "13", sales: 22000 },
  { day: "14", sales: 20800 },
  { day: "15", sales: 23000 },
  { day: "16", sales: 22500 },
  { day: "17", sales: 24000 },
  { day: "18", sales: 23500 },
  { day: "19", sales: 25000 },
  { day: "20", sales: 24500 },
  { day: "21", sales: 26000 },
  { day: "22", sales: 25500 },
  { day: "23", sales: 27000 },
  { day: "24", sales: 26800 },
  { day: "25", sales: 28000 },
  { day: "26", sales: 27500 },
  { day: "27", sales: 29000 },
  { day: "28", sales: 28500 },
  { day: "29", sales: 30000 },
  { day: "30", sales: 31000 },
  { day: "31", sales: 32500 },
];

const MonthlyChart = () => {
  return (
    <div className="w-full h-100 bg-[#6f8380] rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        July Daily Sales
      </h2>

      <div className="w-full h-100">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid
              stroke="#9BA8A5"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="day"
              stroke="#F4F2EC"
            />

            <YAxis
              stroke="#F4F2EC"
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#5f7470",
                border: "none",
                borderRadius: "10px",
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#F4F2EC"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#F4F2EC",
              }}
              activeDot={{
                r: 7,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyChart;