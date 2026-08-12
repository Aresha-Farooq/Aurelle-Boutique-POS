import React, { useRef, useState } from "react";
import TailorOrderCard from "./TailorOrderCard";
import tailorEarningsData from "./tailorEarningsData";

const TailorEarnings = () => {
  const dateRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Earnings</h1>
          <p className="text-gray-700 mt-1">
            Track your income from completed orders
          </p>
        </div>

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

      <div className="flex gap-3 flex-wrap hover:cursor-pointer">
        <TailorOrderCard
          icon="fa-solid fa-sack-dollar"
          iconBg="bg-green-100"
          iconColor="text-green-700"
          title="Total Earnings"
          value="Rs. 84k"
          unit=""
          change="▲ 12% vs last month"
          changeColor="text-green-600"
          lineColor="#22c55e"
        />

        <TailorOrderCard
          icon="fa-solid fa-calendar-day"
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
          title="This Month"
          value="Rs. 18k"
          unit=""
          change="▲ 6 Orders Done"
          changeColor="text-blue-600"
          lineColor="#3b82f6"
        />

        <TailorOrderCard
          icon="fa-solid fa-hourglass-half"
          iconBg="bg-yellow-100"
          iconColor="text-yellow-600"
          title="Pending Payout"
          value="Rs. 2.7k"
          unit=""
          change="2 Awaiting Payment"
          changeColor="text-orange-500"
          lineColor="#f59e0b"
        />

        <TailorOrderCard
          icon="fa-solid fa-circle-check"
          iconBg="bg-green-100"
          iconColor="text-green-600"
          title="Orders Completed"
          value="17"
          unit="Orders"
          change="▲ 3 This Week"
          changeColor="text-green-600"
          lineColor="#22c55e"
        />
      </div>

      <div className="flex gap-6 mt-8">
        <div className="w-3/4 h-96 bg-white rounded-2xl shadow-lg border-2 border-green flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Earnings History</h2>

            <button className="flex gap-2 items-center border-2 text-gray-600 border-green rounded-lg bg-gray-100 px-3 py-2 duration-300 hover:cursor-pointer">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search earnings..."
                className="bg-transparent outline-none w-40"
              />
            </button>
          </div>

          <div className="overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#5F7470] text-white sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left">Order ID</th>
                  <th className="px-4 py-3 text-left">Customer</th>
                  <th className="px-4 py-3 text-left">Dress Type</th>
                  <th className="px-4 py-3 text-left">Completed</th>
                  <th className="px-4 py-3 text-left">Earning</th>
                  <th className="px-4 py-3 text-center">Status</th>
                </tr>
              </thead>

              <tbody>
                {tailorEarningsData.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-gray-200 hover:bg-[#F4F7F6] duration-200"
                  >
                    <td className="px-4 py-3 font-medium">{row.id}</td>
                    <td className="px-4 py-3">{row.customer}</td>
                    <td className="px-4 py-3">{row.dress}</td>
                    <td className="px-4 py-3">{row.completedDate}</td>
                    <td className="px-4 py-3 font-semibold text-[#5F7470]">
                      Rs. {row.amount}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          row.status === "Paid"
                            ? "bg-green-100 text-green-700"
                            : row.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-1/4 bg-white rounded-2xl shadow-lg border-2 border-green p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-green mb-4">
              Earnings by Type
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span>Bridal Wear</span>
                  <span>42%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full mt-1">
                  <div className="h-3 bg-green rounded-full w-[42%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span>Party Wear</span>
                  <span>28%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full mt-1">
                  <div className="h-3 bg-green rounded-full w-[28%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span>Casual Wear</span>
                  <span>18%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full mt-1">
                  <div className="h-3 bg-green rounded-full w-[18%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span>Alterations</span>
                  <span>12%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full mt-1">
                  <div className="h-3 bg-green rounded-full w-[12%]"></div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="mt-6 flex items-center justify-center gap-2 bg-green text-white py-3 rounded-xl font-semibold hover:bg-dark-green duration-300"
          >
            <i className="fa-solid fa-money-bill-wave"></i>
            Request Payout
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-[500px] max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border-2 border-green p-6">
            <div className="flex justify-between items-center border-b pb-2">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-money-bill-wave text-2xl text-green"></i>
                <div>
                  <h1 className="text-xl font-bold">Request Payout</h1>
                  <p className="text-sm text-gray-500">
                    Withdraw your pending earnings
                  </p>
                </div>
              </div>
              <button onClick={() => setShowModal(false)}>
                <i className="fa-regular fa-circle-xmark text-2xl"></i>
              </button>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-green">Amount (Rs.)</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-green">Payout Method</label>
                <select className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green">
                  <option value="" disabled selected>
                    Select method
                  </option>
                  <option>Bank Transfer</option>
                  <option>Easypaisa</option>
                  <option>JazzCash</option>
                  <option>Cash</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-green">Account / Number</label>
                <input
                  type="text"
                  placeholder="Enter account or number"
                  className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6 pt-4 border-t">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border-2 border-green text-green font-semibold hover:bg-green hover:text-white duration-300"
              >
                Cancel
              </button>
              <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-green text-white font-semibold hover:bg-dark-green duration-300 shadow-md">
                <i className="fa-solid fa-paper-plane"></i>
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TailorEarnings;
