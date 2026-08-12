import React from 'react'
import tailorsData from './tailorsData'
import { useState } from 'react'
const Tailors = () => {
const [showModal,setShowModal]=useState(false);
  return (
    <div className="mt-2">
     <div className="flex items-center justify-between mb-8">
      
      {/* Left Side */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Tailors
        </h1>

        <p className="text-gray-800 mt-1">
          Manage your tailors and view their performance
        </p>
        
      </div>
      {/*Right side*/}
<div className="flex items-center gap-3 border-2 border-green rounded-xl bg-gray-100 shadow-md px-4 py-3 w-96">
  <i className="fa-solid fa-magnifying-glass text-gray-500"></i>

  <input
    type="text"
    placeholder="Search Tailor by name, email or phone..."
    className="flex-1 bg-transparent outline-none text-sm"
  />
  </div>
      </div>
      <div className="grid grid-cols-4 gap-6 w-full mt-6">

  {/* Total Tailors */}
  <div className="bg-[#c7ccc4] rounded-2xl shadow-md border border-gray-200 p-5 h-56 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 duration-300 cursor-pointer">

    <div className="flex gap-4">
      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0">
        <i className="fa-solid fa-users text-3xl text-[#5F7470]"></i>
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold text-gray-700">
            Total Tailors
          </h2>

          <i className="fa-solid fa-circle-info text-gray-500"></i>
        </div>

        <h1 className="text-4xl font-bold mt-3 text-gray-900">
          125
        </h1>

        <p className="text-sm text-gray-600 mt-2 ">
          All registered tailors
        </p>
      </div>
    </div>

    <div className="border-t border-gray-300 pt-3 hover:cursor-pointer">
      <button className="w-full flex justify-center items-center gap-2 text-[#5F7470] font-semibold hover:text-green duration-300">
        View Details
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>

  </div>

  {/* Available Tailors */}

  <div className="bg-[#c7ccc4] rounded-2xl shadow-md border border-gray-200 p-5 h-56 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 duration-300 cursor-pointer">

    <div className="flex gap-4">
      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0">
        <i className="fa-solid fa-user-check text-3xl text-green"></i>
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold text-gray-700">
            Available Tailors
          </h2>

          <i className="fa-solid fa-circle-info text-gray-500"></i>
        </div>

        <h1 className="text-4xl font-bold mt-3 text-gray-900">
          48
        </h1>

        <p className="text-sm text-gray-600 mt-2">
          Ready for new orders
        </p>
      </div>
    </div>

    <div className="border-t border-gray-300 pt-3 hover:cursor-pointer">
      <button className="w-full flex justify-center items-center gap-2 text-[#5F7470] font-semibold hover:text-green duration-300">
        View Details
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>

  </div>

  {/* Busy Tailors */}

  <div className="bg-[#c7ccc4] rounded-2xl shadow-md border border-gray-200 p-5 h-56 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 duration-300 cursor-pointer">

    <div className="flex gap-4">
      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0">
        <i className="fa-solid fa-scissors text-3xl text-green"></i>
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold text-gray-700">
            Busy Tailors
          </h2>

          <i className="fa-solid fa-circle-info text-gray-500"></i>
        </div>

        <h1 className="text-4xl font-bold mt-3 text-gray-900">
          77
        </h1>

        <p className="text-sm text-gray-600 mt-2">
          Working on active orders
        </p>
      </div>
    </div>

    <div className="border-t border-gray-300 pt-3 hover:cursor-pointer">
      <button className="w-full flex justify-center items-center gap-2 text-[#5F7470] font-semibold hover:text-green duration-300">
        View Details
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>

  </div>

  {/* Top Rated Tailors */}

  <div className="bg-[#c7ccc4] rounded-2xl shadow-md border border-gray-200 p-5 h-56 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 duration-300 cursor-pointer">

    <div className="flex gap-4">
      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0">
        <i className="fa-solid fa-star text-3xl text-green"></i>
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold text-gray-700">
            Top Rated Tailors
          </h2>
          <i className="fa-solid fa-circle-info text-gray-500"></i>
        </div>

        <h1 className="text-4xl font-bold mt-3 text-gray-900">
          15
        </h1>

        <p className="text-sm text-gray-600 mt-2">
          Highest customer ratings
        </p>
      </div>
    </div>

    <div className="border-t border-gray-300 pt-3 hover:cursor-pointer">
      <button className="w-full flex justify-center items-center gap-2 text-[#5F7470] font-semibold hover:text-green duration-300">
        View Details
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>

  </div>
</div>
 <div className="flex gap-6 mt-8">

  <div className="w-full h-96 bg-white rounded-2xl shadow-lg border-2 border-green flex flex-col overflow-hidden">

    {/* Header */}
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">

      {/* Left Side */}
      <div className="flex items-center gap-4">

        <div className="w-16 h-16 rounded-full bg-green flex items-center justify-center">
          <i className="fa-solid fa-users text-3xl text-white"></i>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Available Tailors
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            List of tailors who are available for new orders
          </p>
        </div>

      </div>

      {/* Right Side */}
      <button onClick={()=>{
        setShowModal(true);
      }} className="flex items-center gap-2 bg-[#5F7470] hover:bg-[#50635f] text-white px-5 py-3 rounded-xl duration-300">
        <i className="fa-solid fa-user-plus"></i>
        <span>Add Tailor</span>
      </button>

 {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40  rounded-2xl shadow-2xl border-2 border-green overflow-hidden">

    <div className="bg-white w-[700px] max-h-[90vh] overflow-y-auto  p-6">

      <div className="flex justify-between items-center border-b pb-2">

        <div className="flex items-center gap-3">
          
           <button className="bg-skin rounded-full p-2 ">
<i className="fa-solid fa-scissors text-green"></i> 
        </button>
          <div>
            <h1 className="text-xl font-bold">Add New Tailor</h1>
            <p className="text-sm text-gray-500">
              Fill in the tailor details below
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

  {/* Personal Information */}
  <div className="flex items-center gap-2 mb-2">
    <i className="fa-solid fa-user text-green text-xl"></i>
    <h1 className="text-xl font-bold">Personal Information</h1>
  </div>

  {/* Tailor Name */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Tailor Name</label>
    <input
      type="text"
      placeholder="Enter tailor name"
      className="border rounded-lg p-3 bg-gray-50"
    />
  </div>

  {/* Phone */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Phone Number</label>
    <input
      type="text"
      placeholder="Enter phone number"
      className="border rounded-lg p-3 bg-gray-50"
    />
  </div>

  {/* Email */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Email Address</label>
    <input
      type="email"
      placeholder="Enter email"
      className="border rounded-lg p-3 bg-gray-50"
    />
  </div>

  {/* CNIC */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">CNIC</label>
    <input
      type="text"
      placeholder="Enter CNIC"
      className="border rounded-lg p-3 bg-gray-50"
    />
  </div>

  {/* Gender */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Gender</label>

    <select className="border rounded-lg p-3 bg-gray-50">
      <option>Select Gender</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </div>

  {/* Specialization */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Specialization</label>

    <select className="border rounded-lg p-3 bg-gray-50">
      <option>Select Specialization</option>
      <option>Bridal Wear</option>
      <option>Women's Dresses</option>
      <option>Men's Wear</option>
      <option>Kids Wear</option>
      <option>Alterations</option>
      <option>Embroidery</option>
    </select>
  </div>

</div>

  {/* Right Side */}
 <div className="flex flex-col gap-4">

  {/* Employment Details */}
  <div className="flex items-center gap-2 mb-2">
    <i className="fa-solid fa-briefcase text-green text-xl"></i>
    <h1 className="text-xl font-bold">Employment Details</h1>
  </div>

  {/* Experience */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Experience</label>
    <input
      type="text"
      placeholder="e.g. 5 Years"
      className="border rounded-lg p-3 bg-gray-50"
    />
  </div>

  {/* Joining Date */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Joining Date</label>
    <input
      type="date"
      className="border rounded-lg p-3 bg-gray-50"
    />
  </div>

  {/* Availability */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Availability</label>

    <select className="border rounded-lg p-3 bg-gray-50">
      <option>Available</option>
      <option>Busy</option>
      <option>On Leave</option>
    </select>
  </div>

  {/* Salary */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">
      Monthly Salary (Rs.)
    </label>

    <input
      type="number"
      placeholder="Enter salary"
      className="border rounded-lg p-3 bg-gray-50"
    />
  </div>

  {/* Address */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Address</label>

    <textarea
      rows="3"
      placeholder="Enter address"
      className="border rounded-lg p-3 bg-gray-50"
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

    {/* Table */}
    <div className="flex-1 overflow-y-auto">

      <table className="w-full border-collapse text-sm">

        <thead className="bg-[#5F7470] text-white sticky top-0">

          <tr>

            <th className="border border-[#d8ddd8] px-4 py-3 text-left">
              Name
            </th>

            <th className="border border-[#d8ddd8] px-4 py-3 text-left">
              Phone
            </th>

            <th className="border border-[#d8ddd8] px-4 py-3 text-left">
              Experience
            </th>

            <th className="border border-[#d8ddd8] px-4 py-3 text-left">
              Specialization
            </th>

            <th className="border border-[#d8ddd8] px-4 py-3 text-center">
              Current Orders
            </th>

            <th className="border border-[#d8ddd8] px-4 py-3 text-center">
              Status
            </th>

            <th className="border border-[#d8ddd8] px-4 py-3 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {tailorsData.map((data) => (

            <tr
              key={data.id}
              className="hover:bg-[#F4F7F6] duration-200"
            >

              <td className="border border-[#d8ddd8] px-4 py-3 font-medium">
                {data.name}
              </td>

              <td className="border border-[#d8ddd8] px-4 py-3">
                {data.phone}
              </td>

              <td className="border border-[#d8ddd8] px-4 py-3">
                {data.experience}
              </td>

              <td className="border border-[#d8ddd8] px-4 py-3">
                {data.specialization}
              </td>

              <td className="border border-[#d8ddd8] px-4 py-3 text-center">
                {data.currentOrders}
              </td>

              <td className="border border-[#d8ddd8] px-4 py-3 text-center">

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    data.status === "Available"
                      ? "bg-green-100 text-green-700"
                      : data.status === "Busy"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {data.status}
                </span>

              </td>

              <td className="border border-[#d8ddd8] px-4 py-3">

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

</div>
    </div>
  )
}

export default Tailors
