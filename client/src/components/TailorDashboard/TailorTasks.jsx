import React from "react";
import tailorTasksData from "./tailorTasksData";

const TailorTasks = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-black">Tasks</h1>
          <p className="text-gray-700 mt-1">
            Your daily stitching tasks and deadlines
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 w-full mt-4">

        {/* Pending */}
        <div className="bg-[#c7ccc4] rounded-2xl shadow-md border border-gray-200 p-5 h-40 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 duration-300 cursor-pointer">
          <div className="flex gap-4">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-list-check text-2xl text-[#5F7470]"></i>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-700">Pending</h2>
              <h1 className="text-4xl font-bold mt-2 text-gray-900">5</h1>
            </div>
          </div>
          <p className="text-sm text-gray-600">Tasks not started</p>
        </div>

        {/* Due Today */}
        <div className="bg-[#c7ccc4] rounded-2xl shadow-md border border-gray-200 p-5 h-40 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 duration-300 cursor-pointer">
          <div className="flex gap-4">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-clock text-2xl text-yellow-600"></i>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-700">Due Today</h2>
              <h1 className="text-4xl font-bold mt-2 text-gray-900">3</h1>
            </div>
          </div>
          <p className="text-sm text-gray-600">Needs attention</p>
        </div>

        {/* Completed */}
        <div className="bg-[#c7ccc4] rounded-2xl shadow-md border border-gray-200 p-5 h-40 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 duration-300 cursor-pointer">
          <div className="flex gap-4">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-circle-check text-2xl text-green"></i>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-700">Completed</h2>
              <h1 className="text-4xl font-bold mt-2 text-gray-900">12</h1>
            </div>
          </div>
          <p className="text-sm text-gray-600">Done this week</p>
        </div>

        {/* Overdue */}
        <div className="bg-[#c7ccc4] rounded-2xl shadow-md border border-gray-200 p-5 h-40 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 duration-300 cursor-pointer">
          <div className="flex gap-4">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-triangle-exclamation text-2xl text-red-500"></i>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-700">Overdue</h2>
              <h1 className="text-4xl font-bold mt-2 text-gray-900">1</h1>
            </div>
          </div>
          <p className="text-sm text-gray-600">Past deadline</p>
        </div>
      </div>

      {/* Task Table */}
      <div className="mt-8 bg-white rounded-xl shadow-xl border-2 border-green overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Task List</h2>
          <span className="text-sm text-gray-500">Today &amp; upcoming</span>
        </div>

        <table className="w-full table-auto border-collapse text-sm">
          <thead className="bg-[#5F7470] text-white">
            <tr>
              <th className="px-3 py-3 text-center">Done</th>
              <th className="px-3 py-3 text-left">Task</th>
              <th className="px-3 py-3 text-left">Order ID</th>
              <th className="px-3 py-3 text-left">Customer</th>
              <th className="px-3 py-3 text-center">Due Date</th>
              <th className="px-3 py-3 text-center">Priority</th>
              <th className="px-3 py-3 text-center">Status</th>
              <th className="px-3 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tailorTasksData.map((data) => (
              <tr key={data.id} className="hover:bg-[#F4F7F6] duration-200">
                <td className="border border-gray-400 px-3 py-3 text-center">
                  <input
                    type="checkbox"
                    defaultChecked={data.status === "Completed"}
                    className="accent-green w-4 h-4"
                  />
                </td>
                <td className="border border-gray-400 px-3 py-3 font-medium">
                  {data.task}
                </td>
                <td className="border border-gray-400 px-3 py-3">
                  {data.orderId}
                </td>
                <td className="border border-gray-400 px-3 py-3">
                  {data.customer}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-center">
                  {data.dueDate}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      data.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : data.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {data.priority}
                  </span>
                </td>
                <td className="border border-gray-400 px-3 py-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      data.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : data.status === "In Progress"
                        ? "bg-blue-100 text-blue-700"
                        : data.status === "Overdue"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {data.status}
                  </span>
                </td>
                <td className="border border-gray-400 px-3 py-3">
                  <div className="flex justify-center gap-3">
                    <button className="w-9 h-9 rounded-lg bg-green-50 hover:bg-green-100 duration-200">
                      <i className="fa-solid fa-check text-green-600"></i>
                    </button>
                    <button className="w-9 h-9 rounded-lg bg-blue-50 hover:bg-blue-100 duration-200">
                      <i className="fa-solid fa-pen-to-square text-blue-600"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TailorTasks;
