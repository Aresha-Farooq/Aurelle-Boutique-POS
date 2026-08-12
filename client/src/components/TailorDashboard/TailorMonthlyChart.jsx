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
  { day: "1", orders: 2 },
  { day: "2", orders: 3 },
  { day: "3", orders: 1 },
  { day: "4", orders: 4 },
  { day: "5", orders: 3 },
  { day: "6", orders: 5 },
  { day: "7", orders: 2 },
  { day: "8", orders: 4 },
  { day: "9", orders: 6 },
  { day: "10", orders: 3 },
  { day: "11", orders: 4 },
  { day: "12", orders: 5 },
  { day: "13", orders: 6 },
  { day: "14", orders: 4 },
  { day: "15", orders: 7 },
  { day: "16", orders: 5 },
  { day: "17", orders: 6 },
  { day: "18", orders: 4 },
  { day: "19", orders: 8 },
  { day: "20", orders: 5 },
  { day: "21", orders: 7 },
  { day: "22", orders: 6 },
  { day: "23", orders: 8 },
  { day: "24", orders: 5 },
  { day: "25", orders: 9 },
  { day: "26", orders: 6 },
  { day: "27", orders: 7 },
  { day: "28", orders: 8 },
  { day: "29", orders: 6 },
  { day: "30", orders: 9 },
  { day: "31", orders: 10 },
];

const TailorMonthlyChart = () => {
  return (
    <div className="w-full h-100 bg-[#6f8380] rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        July — Completed Orders
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
              dataKey="orders"
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

export default TailorMonthlyChart;
