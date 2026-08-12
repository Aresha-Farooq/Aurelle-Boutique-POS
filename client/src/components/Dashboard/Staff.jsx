import React from 'react'
import { useState } from 'react'
import StaffData from './StaffData';
import AttendanceChart from "./AttendanceChart";
import TopPerformer from "./TopPerformer";
import StaffDistribution from './StaffDistribution';
const Staff = () => {
  const [showModal,setShowModal]=useState(false);
  return (
    <div>
  <div className="flex justify-between mt-4">
    <div>
        <h1 className="text-3xl font-bold text-black">
          Staff Management
        </h1>

        <p className="text-gray-700 mt-1">
          Manage your staff members,roles and permissions.
        </p>
      </div>
   <button
  onClick={() => setShowModal(true)}
  className="w-36 h-11 flex items-center justify-center gap-2 bg-green text-white rounded-xl shadow-lg hover:bg-[#4d625f] duration-300"
>
  <i className="fa-solid fa-plus"></i>
  <span>Add Staff</span>
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
            <h1 className="text-xl font-bold">Add New Staff</h1>
            <p className="text-sm text-gray-500">
              Fill in the staff details below
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

  {/* Full Name */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Full Name</label>
    <input
      type="text"
      placeholder="Enter full name"
      className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
    />
  </div>

  {/* Phone Number */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Phone Number</label>
    <input
      type="text"
      placeholder="Enter phone number"
      className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
    />
  </div>

  {/* Email */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Email Address</label>
    <input
      type="email"
      placeholder="Enter email address"
      className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
    />
  </div>

  {/* CNIC */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">CNIC</label>
    <input
      type="text"
      placeholder="Enter CNIC"
      className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
    />
  </div>

  {/* Gender */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Gender</label>

    <select className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green">
      <option>Select Gender</option>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>
  </div>
{/* Date of Birth */}
<div className="flex flex-col gap-1">
  <label className="font-semibold text-green">Date of Birth</label>
  <input
    type="date"
    className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
  />
</div>
</div>
 <div className="flex flex-col gap-4">

  {/* Employment Details */}
  <div className="flex items-center gap-2 mb-2">
    <i className="fa-solid fa-briefcase text-green text-xl"></i>
    <h1 className="text-xl font-bold">Employment Details</h1>
  </div>
{/*Date of Birth*/}

  {/* Role */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Role</label>

    <select className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green">
      <option>Select Role</option>
      <option>Manager</option>
      <option>Tailor</option>
      <option>Sales Staff</option>
      <option>Cashier</option>
      <option>Receptionist</option>
    </select>
  </div>

  {/* Experience */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Experience</label>
    <input
      type="text"
      placeholder="e.g. 2 Years"
      className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
    />
  </div>

  {/* Joining Date */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Joining Date</label>
    <input
      type="date"
      className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
    />
  </div>

  {/* Employment Status */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Employment Status</label>

    <select className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green">
      <option>Active</option>
      <option>On Leave</option>
      <option>Inactive</option>
    </select>
  </div>

  {/* Salary */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">
      Monthly Salary (Rs.)
    </label>

    <input
      type="number"
      placeholder="Enter monthly salary"
      className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
    />
  </div>

  {/* Address */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-green">Address</label>

    <textarea
      rows="2"
      placeholder="Enter address"
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
 <div className="flex gap-2 mt-4">
  <div className="w-52 h-40 bg-white rounded-2xl shadow-lg border border-gray-200 p-5 hover:-translate-y-2 hover:shadow-xl duration-300 cursor-pointer">

  <div className="flex items-center gap-4 ">

    {/* Icon */}
    <div className="w-14 h-14 rounded-full bg-green/10 flex  items-center justify-center">
      <i className="fa-solid fa-users text-2xl text-green"></i>
    </div>

    {/* Text */}
    <div>
      <h2 className="text-lg font-semibold text-gray-700">
        Total Staff
      </h2>

      <h1 className="text-3xl font-bold text-gray-900">
        124
      </h1>

      <p className="text-xs text-gray-500 py-2">
        All Employees
      </p>
    </div>

  </div>

</div>
<div className="w-52 h-40 bg-white rounded-2xl shadow-lg border border-gray-200 p-5 hover:-translate-y-2 hover:shadow-xl duration-300 cursor-pointer">

  <div className="flex items-center gap-4">

    {/* Icon */}
    <div className="w-14 h-14 rounded-full bg-green/10 flex items-center justify-center">
      <i className="fa-solid fa-user-check text-green"></i>
    </div>

    {/* Text */}
    <div>
      <h2 className="text-lg font-semibold text-gray-700">
        Active
      </h2>

      <h1 className="text-3xl font-bold text-gray-900">
        124
      </h1>

      <p className="text-xs text-gray-500 whitespaces-nowrap py-2">
      Currently Working
      </p>
    </div>
  </div>

</div>
<div className="w-52 h-40 bg-white rounded-2xl shadow-lg border border-gray-200 p-5 hover:-translate-y-2 hover:shadow-xl duration-300 cursor-pointer">

  <div className="flex items-center gap-4">

    {/* Icon */}
    <div className="w-14 h-14 rounded-full bg-green/10 flex items-center justify-center">
      <i className="fa-solid fa-user-clock text-green"></i>
    </div>

    {/* Text */}
    <div>
      <h2 className="text-lg font-semibold text-gray-700">
        On Leave
      </h2>

      <h1 className="text-3xl font-bold text-gray-900">
        124
      </h1>

      <p className="text-xs text-gray-500 whitespaces-nowrap py-2">
      On Leave
      </p>
    </div>
  </div>

</div>
<div className="w-52 h-40 bg-white rounded-2xl shadow-lg border border-gray-200 p-5 hover:-translate-y-2 hover:shadow-xl duration-300 cursor-pointer">

  <div className="flex items-center gap-4">

    {/* Icon */}
    <div className="w-14 h-14 rounded-full bg-green/10 flex items-center justify-center">
    <i className="fa-solid fa-user-tie text-green"></i>
    </div>

    {/* Text */}
    <div>
      <h2 className="text-lg font-semibold text-gray-700">
        Managers
      </h2>

      <h1 className="text-3xl font-bold text-gray-900">
        124
      </h1>

      <p className="text-xs text-gray-500 whitespaces-nowrap py-2">
      Department Heads
      </p>
    </div>
  </div>

</div>
<div className="w-52 h-40 bg-white rounded-2xl shadow-lg border border-gray-200 p-5 hover:-translate-y-2 hover:shadow-xl duration-300 cursor-pointer">

  <div className="flex items-center gap-4">

    {/* Icon */}
    <div className="w-14 h-14 rounded-full bg-green/10 flex items-center justify-center">
    <i className="fa-solid fa-scissors text-green"></i>
    </div>

    {/* Text */}
    <div>
      <h2 className="text-lg font-semibold text-gray-700">
        Tailors
      </h2>

      <h1 className="text-3xl font-bold text-gray-900">
        124
      </h1>

      <p className="text-xs text-gray-500 whitespaces-nowrap py-2">
     Tailoring Staff
      </p>
    </div>
  </div>

</div>
<div className="w-52 h-40 bg-white rounded-2xl shadow-lg border border-gray-200 p-5 hover:-translate-y-2 hover:shadow-xl duration-300 cursor-pointer">

  <div className="flex items-center gap-4">

    {/* Icon */}
    <div className="w-14 h-14 rounded-full bg-green/10 flex items-center justify-center">
    <i className="fa-solid fa-user-tag text-green"></i>
    </div>

    {/* Text */}
    <div>
      <h2 className="text-lg font-semibold text-gray-700">
        Sales Staff
      </h2>

      <h1 className="text-3xl font-bold text-gray-900">
        124
      </h1>

      <p className="text-xs text-gray-500 whitespaces-nowrap py-2">
     Sales Representation
      </p>
    </div>
  </div>

</div>
</div>
<div className="mt-8 bg-white rounded-xl shadow-xl border-2 border-green overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">
            Staff Directory
          </h2>
         
        </div>

        <table className="w-full table-auto border-collapse">
          <thead className="bg-green text-white">
            <tr>
              <th className="px-3 py-3 text-left">ID</th>
              <th className="px-3 py-3 text-left">Name</th>
              <th className="px-3 py-3 text-center">Email</th>
              <th className="px-3 py-3 text-left">Role</th>

              <th className="px-3 py-3 text-center whitespace-nowrap">
               Phone
              </th>
              <th className="px-3 py-3 text-center">Shift</th>
              <th className="px-3 py-3 text-center">Status</th>
              <th className="px-3 py-3 text-center">Joined Date</th>
              <th className="px-3 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {StaffData.map((data) => (

  <tr
    key={data.id}
    className="hover:bg-[#F4F7F6] duration-200"
  >

    {/* Staff ID */}
    <td className="border border-[#d8ddd8] px-4 py-3 font-medium">
      {data.id}
    </td>

    {/* Name */}
    <td className="border border-[#d8ddd8] px-4 py-3">
      {data.name}
    </td>

    {/* Email */}
    <td className="border border-[#d8ddd8] px-4 py-3">
      {data.email}
    </td>

    {/* Role */}
    <td className="border border-[#d8ddd8] px-4 py-3">
      {data.role}
    </td>

    {/* Phone */}
    <td className="border border-[#d8ddd8] px-4 py-3">
      {data.phone}
    </td>

    {/* Shift */}
    <td className="border border-[#d8ddd8] px-4 py-3 text-center">
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold
        ${
          data.shift === "Morning"
            ? "bg-blue-100 text-blue-700"
            : "bg-purple-100 text-purple-700"
        }`}
      >
        {data.shift}
      </span>
    </td>

    {/* Status */}
    <td className="border border-[#d8ddd8] px-4 py-3 text-center">
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold
        ${
          data.status === "Active"
            ? "bg-green-100 text-green-700"
            : data.status === "On Leave"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {data.status}
      </span>
    </td>

    {/* Join Date */}
    <td className="border border-[#d8ddd8] px-4 py-3 text-center">
      {data.joinDate}
    </td>

    {/* Actions */}
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
<div className="grid grid-cols-3 gap-6 mt-8">

    {/* Attendance */}
    <AttendanceChart/>

    {/* Distribution */}
    <StaffDistribution/>

    {/* Performer */}
    <TopPerformer/>

</div>
    </div>
  )
}

export default Staff
