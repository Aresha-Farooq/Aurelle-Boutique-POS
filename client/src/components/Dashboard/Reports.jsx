import React, { useRef } from "react";

const topProducts = [
  { name: "Embroidered Lawn Suit", category: "Women's Wear", sold: 128, revenue: 576000 },
  { name: "Silk Maxi", category: "Party Wear", sold: 96, revenue: 691200 },
  { name: "Cotton Kurti", category: "Casual Wear", sold: 84, revenue: 210000 },
  { name: "Chiffon Lehenga", category: "Party Wear", sold: 42, revenue: 504000 },
  { name: "Printed Abaya", category: "Women's Wear", sold: 38, revenue: 247000 },
];

const Reports = () => {
  const dateRef = useRef(null);

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Reports</h1>
          <p className="text-gray-700 mt-1">
            Analyze your business performance and trends
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border-2 border-green shadow-2xl rounded-xl px-2 py-2">
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

          <button className="flex items-center gap-2 bg-green text-white px-5 py-3 rounded-xl font-semibold hover:bg-dark-green duration-300 shadow-md">
            <i className="fa-solid fa-file-arrow-down"></i>
            Export
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="border-2 border-green shadow-xl rounded-xl bg-gray-100 p-4 flex gap-4 w-75">
          <div className="flex justify-center items-center">
            <button className="w-16 h-16 bg-green rounded-full flex justify-center items-center hover:bg-dark-green duration-300">
              <i className="fa-solid fa-sack-dollar text-3xl text-[#FFF5F5]"></i>
            </button>
          </div>
          <div className="text-black">
            <h1 className="text-xl font-medium">Total Revenue</h1>
            <h1 className="text-2xl font-bold">Rs. 1.65M</h1>
            <h1 className="font-medium text-green-600">▲ 12% this year</h1>
          </div>
        </div>

        <div className="border-2 border-yellow-400 shadow-xl rounded-xl bg-[#FFFEF8] p-4 flex gap-4 w-75">
          <div className="flex justify-center items-center">
            <button className="w-16 h-16 bg-yellow-400 rounded-full flex justify-center items-center hover:bg-dark-green duration-300">
              <i className="fa-solid fa-arrow-trend-up text-3xl text-[#FFFEF8]"></i>
            </button>
          </div>
          <div className="text-black">
            <h1 className="text-xl font-medium">Net Profit</h1>
            <h1 className="text-2xl font-bold">Rs. 611k</h1>
            <h1 className="font-medium text-green-600">▲ 8% this year</h1>
          </div>
        </div>

        <div className="border-2 border-blue-400 shadow-xl rounded-xl bg-[#F5F9FF] p-4 flex gap-4 w-75">
          <div className="flex justify-center items-center">
            <button className="w-16 h-16 bg-blue-500 rounded-full flex justify-center items-center hover:bg-dark-green duration-300">
              <i className="fa-solid fa-clipboard-list text-3xl text-[#F5F9FF]"></i>
            </button>
          </div>
          <div className="text-black">
            <h1 className="text-xl font-medium">Total Orders</h1>
            <h1 className="text-2xl font-bold">1,842</h1>
            <h1 className="font-medium text-green-600">▲ 156 this month</h1>
          </div>
        </div>

        <div className="border-2 border-dusty-rose shadow-xl rounded-xl bg-[#FBF3F3] p-4 flex gap-4 w-75">
          <div className="flex justify-center items-center">
            <button className="w-16 h-16 bg-dusty-rose rounded-full flex justify-center items-center hover:bg-dark-green duration-300">
              <i className="fa-solid fa-users text-3xl text-[#FBF3F3]"></i>
            </button>
          </div>
          <div className="text-black">
            <h1 className="text-xl font-medium">New Customers</h1>
            <h1 className="text-2xl font-bold">324</h1>
            <h1 className="font-medium text-green-600">▲ 18% this year</h1>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-xl border-2 border-green overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">
            Top Selling Products
          </h2>
          <span className="text-sm text-gray-500">Last 30 days</span>
        </div>

        <table className="w-full table-auto border-collapse">
          <thead className="bg-green text-white">
            <tr>
              <th className="px-3 py-3 text-left">#</th>
              <th className="px-3 py-3 text-left">Product Name</th>
              <th className="px-3 py-3 text-left">Category</th>
              <th className="px-3 py-3 text-center">Units Sold</th>
              <th className="px-3 py-3 text-center whitespace-nowrap">
                Revenue (Rs.)
              </th>
              <th className="px-3 py-3 text-center">Trend</th>
            </tr>
          </thead>

          <tbody>
            {topProducts.map((product, index) => (
              <tr key={product.name} className="border-b hover:bg-gray-50">
                <td className="border border-gray-400 px-3 py-3 font-bold text-green">
                  {index + 1}
                </td>
                <td className="border border-gray-400 px-3 py-3 font-medium">
                  {product.name}
                </td>
                <td className="border border-gray-400 px-3 py-3">
                  {product.category}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-center">
                  {product.sold}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-center font-semibold text-[#5F7470]">
                  {product.revenue.toLocaleString()}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-center">
                  <i className="fa-solid fa-arrow-trend-up text-green-600"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
