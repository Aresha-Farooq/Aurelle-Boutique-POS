import React from 'react'
import Cards from "./Cards"
import { useState } from 'react';
import { useEffect } from 'react';
import customersData from './customersData';
const Customers = () => {
   const [showData,setShowData] = useState(false);
  useEffect(() => {setShowData(customersData)},[])
  return (
    <div>
    <div className="flex justify-between mt-2">
  <div >
      <h1 className="text-2xl text-green font-bold">Customers</h1>
      </div>
       
  <div className="flex items-center gap-3 border-2 border-green rounded-xl bg-gray-100 shadow-md px-4 py-3 w-96">
  <i className="fa-solid fa-magnifying-glass text-gray-500"></i>

  <input
    type="text"
    placeholder="Search Customer by name, email or phone..."
    className="flex-1 bg-transparent outline-none text-sm"
  />
</div>
</div>
  <div className="flex gap-6 flex-wrap hover:cursor-pointer mt-4 ml-6">
      

       <Cards
  icon="fa-solid fa-users"
  iconBg="bg-green-100"
  iconColor="text-green-700"
  title="Total Customers"
  value="156"
  unit=""
  change="▲ 12 New This Month"
  changeColor="text-green-600"
  lineColor="#22c55e"
/>

        <Cards
  icon="fa-solid fa-heart"
  iconBg="bg-pink-100"
  iconColor="text-pink-600"
  title="Favourite Customers"
  value="32"
  unit=""
  change="▲ 5 Placed Orders This Week"
  changeColor="text-pink-600"
  lineColor="#ec4899"
/>

       <Cards
  icon="fa-solid fa-bag-shopping"
  iconBg="bg-blue-100"
  iconColor="text-blue-600"
  title="5+ Orders"
  value="48"
  unit=""
  change="▲ 6 Became Regular"
  changeColor="text-blue-600"
  lineColor="#3b82f6"
/>     
</div>
<div className="bg-white rounded-2xl shadow-md overflow-hidden mt-8">

  <table className="w-full border-collapse text-sm hover:cursor-pointer">

    {/* Table Header */}
    <thead className="bg-[#5F7470] text-white">
      <tr>
        <th className="border border-gray-300 px-4 py-4 text-center">Customer</th>
        <th className="border border-gray-300 px-4 py-4 text-center">Phone</th>
        <th className="border border-gray-300 px-4 py-4 text-center">City</th>
        <th className="border border-gray-300 px-4 py-4 text-center">Total Orders</th>
        <th className="border border-gray-300 px-4 py-4 text-center">Total Spent</th>
        <th className="border border-gray-300 px-4 py-4 text-center">Last Order</th>
        <th className="border border-gray-300 px-4 py-4 text-center">Status</th>
        <th className="border border-gray-300 px-4 py-4 text-center">Actions</th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody>
      {customersData.slice(0, 5).map((data) => (
        <tr
          key={data.id}
          className="hover:bg-[#F4F7F6] duration-200"
        >
          {/* Customer */}
          <td className="border border-gray-200 px-4 py-4 font-medium">
            {data.name}
          </td>

          {/* Phone */}
          <td className="border border-gray-200 px-4 py-4">
            {data.phone}
          </td>

          {/* City */}
          <td className="border border-gray-200 px-4 py-4">
            {data.city}
          </td>

          {/* Total Orders */}
          <td className="border border-gray-200 px-4 py-4 text-center">
            {data.totalOrders}
          </td>

          {/* Total Spent */}
          <td className="border border-gray-200 px-4 py-4 text-center font-medium">
            Rs. {data.totalSpent}
          </td>

          {/* Last Order */}
          <td className="border border-gray-200 px-4 py-4 text-center text-[#5F7470] font-medium">
            {data.lastOrder}
          </td>

          {/* Status */}
          <td className="border border-gray-200 px-4 py-4 text-center">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                data.status === "Favourite"
                  ? "bg-pink-100 text-pink-600"
                  : data.status === "Regular"
                  ? "bg-[#EAF2F0] text-[#5F7470]"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {data.status}
            </span>
          </td>

          {/* Actions */}
          <td className="border border-gray-200 px-4 py-4">
            <div className="flex justify-center gap-2">

              {/* Edit */}
              <button className="w-9 h-9 rounded-lg bg-blue-50 hover:bg-blue-100 duration-200">
                <i className="fa-solid fa-pen-to-square text-blue-600"></i>
              </button>

              {/* Delete */}
              <button className="w-9 h-9 rounded-lg bg-red-50 hover:bg-red-100 duration-200">
                <i className="fa-solid fa-trash text-red-600"></i>
              </button>

              {/* Favourite */}
              <button className="w-9 h-9 rounded-lg bg-pink-50 hover:bg-pink-100 duration-200">
                <i className="fa-regular fa-heart text-pink-500"></i>
              </button>

            </div>
          </td>
        </tr>
      ))}
    </tbody>

  </table>

</div>
    </div>
  )
}

export default Customers
