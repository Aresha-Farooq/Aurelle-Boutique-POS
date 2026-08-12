import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import attendanceData from "./attendanceData";

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 h-80">

      <h2 className="text-2xl font-bold mb-4">
        Today's Attendance
      </h2>

      <div className="flex items-center justify-between h-[220px]">

        {/* Donut Chart */}
        <div className="w-1/2 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={attendanceData}
                dataKey="value"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
              >
                {attendanceData.map((item, index) => (
                  <Cell key={index} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="space-y-5">

          {attendanceData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-8"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: item.color }}
                ></div>

                <span>{item.name}</span>
              </div>

              <span className="font-semibold">
                {item.value}
              </span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default AttendanceChart;