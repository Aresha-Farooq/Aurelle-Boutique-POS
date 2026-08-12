import React, { useState } from "react";
import tailorMeasurementsData from "./tailorMeasurementsData";

const TailorMeasurements = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-6">

        {/* Left Side */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Measurements
          </h1>

          <p className="text-gray-800 mt-1">
            Customer measurements for your assigned orders
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 border-2 border-green rounded-xl bg-gray-100 shadow-md px-4 py-3 w-80">
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i>

            <input
              type="text"
              placeholder="Search by customer or order..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-green hover:bg-dark-green text-white px-5 py-3 rounded-xl duration-300"
          >
            <i className="fa-solid fa-plus"></i>
            <span>Add Measurement</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="flex gap-6 mt-4">
        <div className="border-2 border-green shadow-xl rounded-xl bg-gray-100 p-4 flex gap-4 w-75">
          <div className="flex justify-center items-center">
            <button className="w-16 h-16 bg-green rounded-full flex justify-center items-center hover:bg-dark-green duration-300">
              <i className="fa-solid fa-ruler-combined text-3xl text-[#FFF5F5]"></i>
            </button>
          </div>
          <div className="text-black">
            <h1 className="text-xl font-medium">Total Records</h1>
            <h1 className="text-2xl font-bold">48</h1>
            <h1 className="font-medium">Saved measurements</h1>
          </div>
        </div>

        <div className="border-2 border-yellow-400 shadow-xl rounded-xl bg-[#FFFEF8] p-4 flex gap-4 w-75">
          <div className="flex justify-center items-center">
            <button className="w-16 h-16 bg-yellow-400 rounded-full flex justify-center items-center hover:bg-dark-green duration-300">
              <i className="fa-solid fa-clock text-3xl text-[#FFFEF8]"></i>
            </button>
          </div>
          <div className="text-black">
            <h1 className="text-xl font-medium">Pending Entry</h1>
            <h1 className="text-2xl font-bold">5</h1>
            <h1 className="font-medium">Awaiting measurements</h1>
          </div>
        </div>

        <div className="border-2 border-blue-400 shadow-xl rounded-xl bg-[#F5F9FF] p-4 flex gap-4 w-75">
          <div className="flex justify-center items-center">
            <button className="w-16 h-16 bg-blue-500 rounded-full flex justify-center items-center hover:bg-dark-green duration-300">
              <i className="fa-solid fa-user-check text-3xl text-[#F5F9FF]"></i>
            </button>
          </div>
          <div className="text-black">
            <h1 className="text-xl font-medium">Customers</h1>
            <h1 className="text-2xl font-bold">32</h1>
            <h1 className="font-medium">With saved profiles</h1>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 bg-white rounded-xl shadow-xl border-2 border-green overflow-hidden">
        <table className="w-full table-auto border-collapse text-sm">
          <thead className="bg-[#5F7470] text-white">
            <tr>
              <th className="px-3 py-3 text-left">Customer</th>
              <th className="px-3 py-3 text-left">Order ID</th>
              <th className="px-3 py-3 text-left">Dress Type</th>
              <th className="px-3 py-3 text-center">Chest</th>
              <th className="px-3 py-3 text-center">Waist</th>
              <th className="px-3 py-3 text-center">Hips</th>
              <th className="px-3 py-3 text-center">Length</th>
              <th className="px-3 py-3 text-center">Shoulder</th>
              <th className="px-3 py-3 text-center">Sleeve</th>
              <th className="px-3 py-3 text-left">Notes</th>
              <th className="px-3 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tailorMeasurementsData.map((data) => (
              <tr key={data.id} className="hover:bg-[#F4F7F6] duration-200">
                <td className="border border-gray-400 px-3 py-3 font-medium">
                  {data.customer}
                </td>
                <td className="border border-gray-400 px-3 py-3">
                  {data.orderId}
                </td>
                <td className="border border-gray-400 px-3 py-3">
                  {data.dress}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-center">
                  {data.chest}"
                </td>
                <td className="border border-gray-400 px-3 py-3 text-center">
                  {data.waist}"
                </td>
                <td className="border border-gray-400 px-3 py-3 text-center">
                  {data.hips}"
                </td>
                <td className="border border-gray-400 px-3 py-3 text-center">
                  {data.length}"
                </td>
                <td className="border border-gray-400 px-3 py-3 text-center">
                  {data.shoulder}"
                </td>
                <td className="border border-gray-400 px-3 py-3 text-center">
                  {data.sleeve}"
                </td>
                <td className="border border-gray-400 px-3 py-3 text-gray-600">
                  {data.notes}
                </td>
                <td className="border border-gray-400 px-3 py-3">
                  <div className="flex justify-center gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Measurement Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 rounded-2xl shadow-2xl border-2 border-green overflow-hidden">
          <div className="bg-white w-[700px] max-h-[90vh] overflow-y-auto p-6">

            <div className="flex justify-between items-center border-b pb-2">
              <div className="flex items-center gap-3">
                <button className="bg-skin rounded-full p-2">
                  <i className="fa-solid fa-ruler-combined text-green"></i>
                </button>
                <div>
                  <h1 className="text-xl font-bold">Add Measurement</h1>
                  <p className="text-sm text-gray-500">
                    Record measurements for a customer order
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
                <div className="flex items-center gap-2 mb-2">
                  <i className="fa-solid fa-user text-green text-xl"></i>
                  <h1 className="text-xl font-bold">Customer Details</h1>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-green">Customer Name</label>
                  <input
                    type="text"
                    placeholder="Enter customer name"
                    className="border rounded-lg p-3 bg-gray-50"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-green">Order ID</label>
                  <input
                    type="text"
                    placeholder="e.g. #1001"
                    className="border rounded-lg p-3 bg-gray-50"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-green">Dress Type</label>
                  <select className="border rounded-lg p-3 bg-gray-50">
                    <option>Select Dress Type</option>
                    <option>Bridal Lehenga</option>
                    <option>Silk Maxi</option>
                    <option>3 Piece Suit</option>
                    <option>Party Frock</option>
                    <option>Abaya</option>
                    <option>Kurti</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-green">Notes</label>
                  <textarea
                    rows="3"
                    placeholder="Special instructions..."
                    className="border rounded-lg p-3 bg-gray-50"
                  ></textarea>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2">
                  <i className="fa-solid fa-ruler text-green text-xl"></i>
                  <h1 className="text-xl font-bold">Measurements (inch)</h1>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold text-green">Chest</label>
                    <input type="number" placeholder="Chest" className="border rounded-lg p-3 bg-gray-50" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold text-green">Waist</label>
                    <input type="number" placeholder="Waist" className="border rounded-lg p-3 bg-gray-50" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold text-green">Hips</label>
                    <input type="number" placeholder="Hips" className="border rounded-lg p-3 bg-gray-50" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold text-green">Length</label>
                    <input type="number" placeholder="Length" className="border rounded-lg p-3 bg-gray-50" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold text-green">Shoulder</label>
                    <input type="number" placeholder="Shoulder" className="border rounded-lg p-3 bg-gray-50" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold text-green">Sleeve</label>
                    <input type="number" placeholder="Sleeve" className="border rounded-lg p-3 bg-gray-50" />
                  </div>
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
              <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-green text-white font-semibold hover:bg-dark-green duration-300 shadow-md">
                <i className="fa-solid fa-floppy-disk"></i>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TailorMeasurements;
