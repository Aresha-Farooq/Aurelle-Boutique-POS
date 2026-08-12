import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import staffDistributionData from "./staffDistributionData";

const StaffDistribution = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5 w-full h-80">
      <h2 className="text-xl font-bold mb-4">
        Staff Distribution
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={staffDistributionData}>
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />

          <Bar
            dataKey="count"
            fill="#5f7470"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StaffDistribution;