import React from 'react'
import { myOrders } from './OrderData'
const CustomerOrders = () => {
  return (
    <div className="mt-4">
      <div className="ml-4" >
            <h1 className="text-2xl font-bold">My Orders</h1>
            <h1>Track,edit and filter your orders</h1>
        </div>

<div className="bg-white rounded-2xl shadow-md overflow-hidden mt-4">

  <table className="w-full hover:cursor-pointer">

    {/* Table Header */}
    <thead className="border-b">
      <tr className="text-left text-gray-600 text-sm">

        <th className="px-6 py-4 border-r">ORDER #</th>
        <th className="px-6 py-4 border-r">ITEM</th>
        <th className="px-6 py-4 border-r">DATE</th>
        <th className="px-6 py-4 border-r">TOTAL</th>
        <th className="px-6 py-4 border-r">STATUS</th>
        <th className="px-6 py-4 border-r">ACTIONS</th>

      </tr>
    </thead>

    {/* Table Body */}
    <tbody>

      {myOrders.map((order) => (

        <tr
          key={order.id}
          className="border-b last:border-none hover:bg-gray-50 duration-200"
        >

          <td className="px-6 py-5 font-semibold border-r">
            {order.orderNo}
          </td>

          <td className="px-6 py-5 border-r">
            {order.item}
          </td>

          <td className="px-6 py-5 border-r">
            {order.date}
          </td>

          <td className="px-6 py-5 font-medium border-r">
            {order.total}
          </td>

          {/* Status */}
          <td className="px-6 py-5 border-r">

            <span
              className={`px-3 py-1 rounded-full text-sm font-medium

              ${
                order.status === "Processing"
                  ? "bg-yellow-100 text-yellow-700"

                  : order.status === "Shipped"
                  ? "bg-blue-100 text-blue-700"

                  : order.status === "In Fitting"
                  ? "bg-orange-100 text-orange-700"

                  : "bg-green-100 text-green-700"
              }

            `}
            >
              {order.status}
            </span>

          </td>

          {/* Actions */}
          <td className="px-6 py-5 border-r">

            <div className="flex gap-3">

              <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                Edit
              </button>

              <button className="px-4 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200">
                Delete
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

export default CustomerOrders
