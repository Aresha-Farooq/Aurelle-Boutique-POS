import React, { useRef } from "react";
import TailorOrderCard from "./TailorOrderCard";
import tailorOrdersData from "./tailorOrdersData";

const TailorOrders = () => {
  const dateRef = useRef(null);

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-8">

        {/* Left Side */}
        <div>
          <h1 className="text-3xl font-bold text-black">
            My Orders
          </h1>

          <p className="text-gray-700 mt-1">
            Orders assigned to you for stitching
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 border-2 border-green shadow-2xl rounded-xl px-2 py-2">
          <div className="flex gap-2">
            <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-dark-green hover:cursor-pointer duration-300">
              Today
            </button>
            <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-dark-green hover:cursor-pointer duration-300">
              This Week
            </button>
            <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-dark-green hover:cursor-pointer duration-300">
              This Month
            </button>
            <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-dark-green hover:cursor-pointer duration-300">
              This Year
            </button>
            <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-dark-green hover:cursor-pointer duration-300">
              Custom
            </button>
            <div>
              <input ref={dateRef} type="date" className="hidden" />
              <button
                onClick={() => dateRef.current?.showPicker()}
                className="w-12 h-12 bg-green rounded-lg flex items-center justify-center hover:bg-dark-green duration-300"
              >
                <i className="fa-regular fa-calendar text-white text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-3 flex-wrap hover:cursor-pointer">

          <TailorOrderCard
            icon="fa-solid fa-clipboard-list"
            iconBg="bg-green-100"
            iconColor="text-green-700"
            title="Assigned"
            value="24"
            unit="Orders"
            change="▲ 4 New This Week"
            changeColor="text-green-600"
            lineColor="#22c55e"
          />

          <TailorOrderCard
            icon="fa-solid fa-hourglass-half"
            iconBg="bg-yellow-100"
            iconColor="text-yellow-600"
            title="Pending"
            value="9"
            unit="Orders"
            change="3 Due Today"
            changeColor="text-orange-500"
            lineColor="#f59e0b"
          />

          <TailorOrderCard
            icon="fa-solid fa-scissors"
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
            title="In Stitching"
            value="7"
            unit="Orders"
            change="2 Started Today"
            changeColor="text-blue-600"
            lineColor="#3b82f6"
          />

          <TailorOrderCard
            icon="fa-solid fa-circle-check"
            iconBg="bg-green-100"
            iconColor="text-green-600"
            title="Completed"
            value="17"
            unit="Orders"
            change="▲ 3 Completed Today"
            changeColor="text-green-600"
            lineColor="#22c55e"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden mt-8">

        <table className="w-full border-collapse text-sm">

          <thead className="bg-[#5F7470] text-white">
            <tr>
              <th className="border border-gray-300 px-4 py-4 text-left">Order ID</th>
              <th className="border border-gray-300 px-4 py-4 text-left">Customer</th>
              <th className="border border-gray-300 px-4 py-4 text-left">Dress Type</th>
              <th className="border border-gray-300 px-4 py-4 text-left">Assigned Date</th>
              <th className="border border-gray-300 px-4 py-4 text-left">Delivery Date</th>
              <th className="border border-gray-300 px-4 py-4 text-left">Earning</th>
              <th className="border border-gray-300 px-4 py-4 text-center">Priority</th>
              <th className="border border-gray-300 px-4 py-4 text-center">Status</th>
              <th className="border border-gray-300 px-4 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>

            {tailorOrdersData.map((order) => (

              <tr
                key={order.id}
                className="hover:bg-[#F4F7F6] duration-200"
              >

                <td className="border border-gray-200 px-4 py-4 font-medium">
                  {order.id}
                </td>

                <td className="border border-gray-200 px-4 py-4">
                  {order.customer}
                </td>

                <td className="border border-gray-200 px-4 py-4">
                  {order.dress}
                </td>

                <td className="border border-gray-200 px-4 py-4">
                  {order.assignedDate}
                </td>

                <td className="border border-gray-200 px-4 py-4">
                  {order.deliveryDate}
                </td>

                <td className="border border-gray-200 px-4 py-4 font-semibold text-[#5F7470]">
                  Rs. {order.amount}
                </td>

                <td className="border border-gray-200 px-4 py-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : order.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {order.priority}
                  </span>
                </td>

                <td className="border border-gray-200 px-4 py-4 text-center">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "In Stitching"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {order.status}
                  </span>

                </td>

                <td className="border border-gray-200 px-4 py-4">
                  <div className="flex justify-center gap-3">

                    <button className="w-9 h-9 rounded-lg bg-green-50 hover:bg-green-100 duration-200">
                      <i className="fa-solid fa-check text-green-600"></i>
                    </button>

                    <button className="w-9 h-9 rounded-lg bg-blue-50 hover:bg-blue-100 duration-200">
                      <i className="fa-solid fa-eye text-blue-600"></i>
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

export default TailorOrders;
