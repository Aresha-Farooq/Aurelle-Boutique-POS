import React, { useEffect } from 'react'
import { useRef } from 'react'
import OrderCard from './OrderCard'
import ordersData from './ordersData'
import { useState } from 'react'
const Orders = () => {
  const [showModal,setShowModal]=useState(false);
  const dateRef = useRef(null)
  const [showData,setShowData] = useState(false);
  useEffect(() => {setShowData(ordersData)},[])
  return (
    <div className="mt-4">
     <div className="flex items-center justify-between mb-8">
      
      {/* Left Side */}
      <div>
        <h1 className="text-3xl font-bold text-black">
          Orders
        </h1>

        <p className="text-gray-700 mt-1">
          Manage and track all customer orders
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
      <input
        ref={dateRef}
        type="date"
        className="hidden"
      />

      <button
        onClick={() => dateRef.current?.showPicker()}
        className="w-12 h-12 bg-green rounded-lg flex items-center justify-center hover:bg-dark-green duration-300"
      >
        <i className="fa-regular fa-calendar text-white text-xl"></i>
      </button>
     
    </div>
      <button
  onClick={() => setShowModal(true)}
  className="w-36 hover:cursor-pointer h-11 flex items-center justify-center gap-2 bg-green text-white rounded-xl shadow-lg hover:bg-[#4d625f] duration-300"
>
  <i className="fa-solid fa-plus"></i>
  <span>Add Order</span>
</button>
{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40  rounded-2xl shadow-2xl border-2 border-green overflow-hidden">

    <div className="bg-white w-[700px] max-h-[90vh] overflow-y-auto  p-6">

      <div className="flex justify-between items-center border-b pb-2">

        <div className="flex items-center gap-3">
          
         <button className="bg-skin rounded-full p-2">
  <i className="fa-solid fa-bag-shopping text-green"></i>
</button>

<div>
  <h1 className="text-xl font-bold">Add New Order</h1>
  <p className="text-sm text-gray-500">
    Fill in the order details below
  </p>
</div>
      </div>
      <button onClick={() => setShowModal(false)}>
      <i className="fa-regular fa-circle-xmark text-2xl"></i>
       </button>

      </div>
 <div className="grid grid-cols-2 gap-8 mt-4">

 {/* Left Side */}
<div className="flex flex-col gap-4">

  {/* Customer Information */}
  <div className="flex items-center gap-2 mb-2">
    <i className="fa-solid fa-user text-green text-xl"></i>
    <h1 className="text-xl font-bold">Customer Information</h1>
  </div>

  {/* Customer */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Customer</label>
    <select className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green">
      <option>Select Customer</option>
      <option>Ali</option>
      <option>Sara</option>
      <option>Ahmed</option>
      <option>Ayesha</option>
    </select>
  </div>

  {/* Phone */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Phone Number</label>
    <input
      type="text"
      placeholder="Phone Number"
      className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
    />
  </div>

  {/* Dress Type */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Dress Type</label>
    <select className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green">
      <option>Select Dress Type</option>
      <option>Suit</option>
      <option>Shirt</option>
      <option>Pant</option>
      <option>Kurta</option>
      <option>Abaya</option>
    </select>
  </div>

  {/* Quantity */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Quantity</label>
    <input
      type="number"
      placeholder="Enter Quantity"
      className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
    />
  </div>

  {/* Tailor */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Assign Tailor</label>
    <select className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green">
      <option>Select Tailor</option>
      <option>Usman</option>
      <option>Hamza</option>
      <option>Bilal</option>
    </select>
  </div>

  {/* Order Date */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Order Date</label>
    <input
      type="date"
      className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
    />
  </div>

</div>
 {/* Right Side */}
<div className="flex flex-col gap-4">

  {/* Order Details */}
  <div className="flex items-center gap-2 mb-2">
    <i className="fa-solid fa-bag-shopping text-green text-xl"></i>
    <h1 className="text-xl font-bold">Order Details</h1>
  </div>

  {/* Delivery Date */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Delivery Date</label>
    <input
      type="date"
      className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
    />
  </div>

  {/* Total Price */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Total Price (Rs.)</label>
    <input
      type="number"
      placeholder="Enter Total Price"
      className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
    />
  </div>

  {/* Advance Payment */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Advance Payment (Rs.)</label>
    <input
      type="number"
      placeholder="Enter Advance Payment"
      className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
    />
  </div>

  {/* Remaining Balance */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Remaining Balance</label>
    <input
      type="number"
      placeholder="Auto Calculated"
      readOnly
      className="border border-gray-300 rounded-lg p-3 bg-gray-100 focus:outline-none"
    />
  </div>

  {/* Status */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Status</label>
    <select className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green">
      <option>Pending</option>
      <option>Completed</option>
    </select>
  </div>

  {/* Notes */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Notes</label>
    <textarea
      rows="2"
      placeholder="Additional Notes..."
      className="border border-gray-300 rounded-lg p-3 bg-gray-50 resize-none focus:outline-none focus:ring-2 focus:ring-green"
    ></textarea>
  </div>

</div>

</div>
<div className="flex justify-end gap-4 mt-2 pt-4 border-t">

  <button
    onClick={() => setShowModal(false)}
    className="px-4 py-2 rounded-lg border-2 border-green text-green font-semibold hover:bg-green hover:text-white duration-300"
  >
    Cancel
  </button>

  <button
    className="flex items-center gap-2 px-6 py-2 rounded-lg bg-green text-white font-semibold hover:bg-dark-green duration-300 shadow-md"
  >
    <i className="fa-solid fa-floppy-disk"></i>
    Save
  </button>

</div>
    </div>

  </div>
)} 
    </div>
      </div>
    </div>
      <div>
   <div className="flex gap-3 flex-wrap hover:cursor-pointer">

      <OrderCard
        icon="fa-solid fa-box"
        iconBg="bg-green-100"
        iconColor="text-green-700"
        title="Total Orders"
        value="156"
        unit="Orders"
        change="▲ 12% vs last month"
        changeColor="text-green-600"
        lineColor="#22c55e"
      />

      <OrderCard
        icon="fa-solid fa-hourglass-half"
        iconBg="bg-yellow-100"
        iconColor="text-yellow-600"
        title="Pending "
        value="18"
        unit="Orders"
        change="5 Due Today"
        changeColor="text-orange-500"
        lineColor="#f59e0b"
      />

      <OrderCard
        icon="fa-solid fa-scissors"
        iconBg="bg-blue-100"
        iconColor="text-blue-600"
        title="In Stitching"
        value="12"
        unit="Orders"
        change="3 Started Today"
        changeColor="text-blue-600"
        lineColor="#3b82f6"
      />

      <OrderCard
        icon="fa-solid fa-circle-check"
        iconBg="bg-green-100"
        iconColor="text-green-600"
        title="Completed"
        value="92"
        unit="Orders"
        change="▲ 10 Completed Today"
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
        <th className="border border-gray-300 px-4 py-4 text-left">Tailor</th>
        <th className="border border-gray-300 px-4 py-4 text-left">Amount</th>
        <th className="border border-gray-300 px-4 py-4 text-left">Order Date</th>
        <th className="border border-gray-300 px-4 py-4 text-left">Delivery Date</th>
        <th className="border border-gray-300 px-4 py-4 text-center">Status</th>
        <th className="border border-gray-300 px-4 py-4 text-center">Actions</th>
      </tr>
    </thead>

    <tbody>

      {ordersData.slice(0, 5).map((order) => (

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
            {order.tailor}
          </td>

          <td className="border border-gray-200 px-4 py-4 font-semibold text-[#5F7470]">
            Rs. {order.amount}
          </td>

          <td className="border border-gray-200 px-4 py-4">
            {order.orderDate}
          </td>

          <td className="border border-gray-200 px-4 py-4">
            {order.deliveryDate}
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

              <button className="w-9 h-9 rounded-lg bg-blue-50 hover:bg-blue-100 duration-200">
                <i className="fa-solid fa-pen-to-square text-blue-600"></i>
              </button>

              <button className="w-9 h-9 rounded-lg bg-red-50 hover:bg-red-100 duration-200">
                <i className="fa-solid fa-trash text-red-600"></i>
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

export default Orders
