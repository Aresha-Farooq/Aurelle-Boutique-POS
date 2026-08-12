import React, { useRef, useState } from "react";
import OrderCard from "./OrderCard";

const salesData = [
  {
    id: "#INV-2051",
    customer: "Ayesha Khan",
    product: "Embroidered Lawn Suit",
    method: "Cash",
    date: "2026-07-12",
    amount: 4500,
    status: "Completed",
  },
  {
    id: "#INV-2052",
    customer: "Fatima Ali",
    product: "Silk Maxi",
    method: "Card",
    date: "2026-07-12",
    amount: 7200,
    status: "Completed",
  },
  {
    id: "#INV-2053",
    customer: "Sana Ahmed",
    product: "Cotton Kurti",
    method: "Easypaisa",
    date: "2026-07-11",
    amount: 2800,
    status: "Refunded",
  },
  {
    id: "#INV-2054",
    customer: "Hira Noor",
    product: "Chiffon Lehenga",
    method: "Card",
    date: "2026-07-11",
    amount: 8900,
    status: "Completed",
  },
  {
    id: "#INV-2055",
    customer: "Zara Malik",
    product: "Printed Abaya",
    method: "Cash",
    date: "2026-07-10",
    amount: 12000,
    status: "Completed",
  },
  {
    id: "#INV-2056",
    customer: "Noor Fatima",
    product: "Party Frock",
    method: "JazzCash",
    date: "2026-07-10",
    amount: 6500,
    status: "Pending",
  },
  {
    id: "#INV-2057",
    customer: "Mahnoor Tariq",
    product: "Bridal Lehenga",
    method: "Card",
    date: "2026-07-09",
    amount: 24500,
    status: "Completed",
  },
  {
    id: "#INV-2058",
    customer: "Iqra Shah",
    product: "Casual Kurti",
    method: "Cash",
    date: "2026-07-09",
    amount: 3100,
    status: "Completed",
  },
];

const Sales = () => {
  const dateRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Sales</h1>
          <p className="text-gray-700 mt-1">
            Track your daily sales and transactions
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
        <OrderCard
          icon="fa-solid fa-sack-dollar"
          iconBg="bg-green-100"
          iconColor="text-green-700"
          title="Total Sales"
          value="Rs. 197k"
          unit=""
          change="▲ 15% vs last week"
          changeColor="text-green-600"
          lineColor="#22c55e"
        />

        <OrderCard
          icon="fa-solid fa-receipt"
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
          title="Transactions"
          value="248"
          unit="Sales"
          change="▲ 32 Today"
          changeColor="text-blue-600"
          lineColor="#3b82f6"
        />

        <OrderCard
          icon="fa-solid fa-chart-simple"
          iconBg="bg-yellow-100"
          iconColor="text-yellow-600"
          title="Average Sale"
          value="Rs. 794"
          unit=""
          change="▲ 4% vs last week"
          changeColor="text-green-600"
          lineColor="#f59e0b"
        />

        <OrderCard
          icon="fa-solid fa-shirt"
          iconBg="bg-red-100"
          iconColor="text-red-600"
          title="Items Sold"
          value="512"
          unit="Pcs"
          change="▲ 68 Today"
          changeColor="text-green-600"
          lineColor="#ef4444"
        />
      </div>

      <div className="flex gap-6 mt-8">
        <div className="w-3/4 h-96 bg-white rounded-2xl shadow-lg border-2 border-green flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">All Sales</h2>

            <button className="flex gap-2 items-center border-2 text-gray-600 border-green rounded-lg bg-gray-100 px-3 py-2 duration-300 hover:cursor-pointer">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search sales..."
                className="bg-transparent outline-none w-40"
              />
            </button>
          </div>

          <div className="overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#5F7470] text-white sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left">Invoice</th>
                  <th className="px-4 py-3 text-left">Customer</th>
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-left">Payment</th>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Amount</th>
                  <th className="px-4 py-3 text-center">Status</th>
                </tr>
              </thead>

              <tbody>
                {salesData.map((sale) => (
                  <tr
                    key={sale.id}
                    className="border-b border-gray-200 hover:bg-[#F4F7F6] duration-200"
                  >
                    <td className="px-4 py-3 font-medium">{sale.id}</td>
                    <td className="px-4 py-3">{sale.customer}</td>
                    <td className="px-4 py-3">{sale.product}</td>
                    <td className="px-4 py-3">{sale.method}</td>
                    <td className="px-4 py-3">{sale.date}</td>
                    <td className="px-4 py-3 font-semibold text-[#5F7470]">
                      Rs. {sale.amount}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          sale.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : sale.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : sale.status === "Refunded"
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {sale.status}
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
              Payment Methods
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span>Cash</span>
                  <span>48%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full mt-1">
                  <div className="h-3 bg-green rounded-full w-[48%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span>Card</span>
                  <span>27%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full mt-1">
                  <div className="h-3 bg-green rounded-full w-[27%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span>Easypaisa</span>
                  <span>15%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full mt-1">
                  <div className="h-3 bg-green rounded-full w-[15%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span>JazzCash</span>
                  <span>10%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full mt-1">
                  <div className="h-3 bg-green rounded-full w-[10%]"></div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="mt-6 flex items-center justify-center gap-2 bg-green text-white py-3 rounded-xl font-semibold hover:bg-dark-green duration-300"
          >
            <i className="fa-solid fa-plus"></i>
            New Sale
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-[600px] max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border-2 border-green p-6">
            <div className="flex justify-between items-center border-b pb-2">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-cart-shopping text-2xl text-green"></i>
                <div>
                  <h1 className="text-xl font-bold">New Sale</h1>
                  <p className="text-sm text-gray-500">
                    Record a new customer sale
                  </p>
                </div>
              </div>
              <button onClick={() => setShowModal(false)}>
                <i className="fa-regular fa-circle-xmark text-2xl"></i>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-green">Customer</label>
                <input
                  type="text"
                  placeholder="Enter customer name"
                  className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-green">Product</label>
                <input
                  type="text"
                  placeholder="Enter product"
                  className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-green">Quantity</label>
                <input
                  type="number"
                  placeholder="Enter quantity"
                  className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-green">Amount (Rs.)</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-green">
                  Payment Method
                </label>
                <select className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green">
                  <option value="" disabled selected>
                    Select method
                  </option>
                  <option>Cash</option>
                  <option>Card</option>
                  <option>Easypaisa</option>
                  <option>JazzCash</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-green">Date</label>
                <input
                  type="date"
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
                <i className="fa-solid fa-floppy-disk"></i>
                Save Sale
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sales;
