import React from 'react'
import Cards from "./Cards"
import { useState } from 'react';
import { useEffect } from 'react';
import customersData from './customersData';
const Customers = () => {
   const [showData,setShowData] = useState(false);
   const [showModal,setShowModal]=useState(false);
  useEffect(() => {setShowData(customersData)},[])
  return (
    <div>
 <div className="flex justify-between items-center mt-2">

  {/* Heading */}
  <div>
    <h1 className="text-2xl text-green font-bold">
      Customers
    </h1>
  </div>

  {/* Search + Add Customer */}
  <div className="flex items-center gap-3">

    {/* Search */}
    <div className="flex items-center gap-3 border-2 border-green rounded-xl bg-gray-100 shadow-md px-4 py-3 w-96">
      <i className="fa-solid fa-magnifying-glass text-gray-500"></i>

      <input
        type="text"
        placeholder="Search Customer by name, email or phone..."
        className="flex-1 bg-transparent outline-none text-sm"
      />
    </div>

    {/* Add Customer Button */}
   
    <button onClick={()=>setShowModal(true)}
      className="flex items-center gap-2 bg-[#5F7470] text-white px-5 py-3 rounded-xl shadow-md hover:bg-[#4f625f] duration-200 font-semibold"
    >
      <i className="fa-solid fa-plus"></i>
      Add Customer
    </button>

{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

    <div className="bg-white w-[700px] max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border-2 border-green p-6">

      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-user-plus text-2xl text-green"></i>

          <div>
            <h1 className="text-xl font-bold">Add New Customer</h1>
            <p className="text-sm text-gray-500">
              Fill in the customer details below
            </p>
          </div>
        </div>

        <button onClick={() => setShowModal(false)}>
          <i className="fa-regular fa-circle-xmark text-2xl text-gray-600 hover:text-red-500"></i>
        </button>
      </div>

      {/* Form */}
      <div className="grid grid-cols-2 gap-6 mt-5">

        {/* Customer Name */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-green">Customer Name</label>
          <input
            type="text"
            placeholder="Enter customer name"
            className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-green">Phone Number</label>
          <input
            type="text"
            placeholder="03XX-XXXXXXX"
            className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-green">Email</label>
          <input
            type="email"
            placeholder="customer@email.com"
            className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
          />
        </div>

        {/* City */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-green">City</label>
          <input
            type="text"
            placeholder="Enter city"
            className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
          />
        </div>

        {/* Address */}
        <div className="col-span-2 flex flex-col gap-1">
          <label className="font-semibold text-green">Address</label>
          <textarea
            rows="3"
            placeholder="Enter complete address"
            className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green resize-none"
          ></textarea>
        </div>

        {/* Customer Status */}
        <div className="col-span-2 flex flex-col gap-2">
          <label className="font-semibold text-green">Customer Status</label>

          <div className="flex gap-3 flex-wrap">
            {["New", "Regular", "Favourite"].map((status) => (
              <label
                key={status}
                className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:border-green hover:bg-green/10"
              >
                <input
                  type="radio"
                  name="status"
                  value={status}
                  className="accent-green"
                />
                {status}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
        <button
          onClick={() => setShowModal(false)}
          className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 font-medium"
        >
          Cancel
        </button>

        <button className="px-6 py-2 rounded-lg bg-[#5F7470] text-white hover:bg-[#4f625f] font-semibold">
          <i className="fa-solid fa-floppy-disk mr-2"></i>
          Save Customer
        </button>
      </div>

    </div>
  </div>
)}

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
