import React, { useState } from "react";

const TailorProfile = () => {
  const [available, setAvailable] = useState(true);

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
          <p className="text-gray-700 mt-1">
            View and manage your tailor profile
          </p>
        </div>

        <button className="flex items-center gap-2 bg-green text-white px-5 py-3 rounded-xl font-semibold hover:bg-dark-green duration-300 shadow-md">
          <i className="fa-solid fa-pen-to-square"></i>
          Edit Profile
        </button>
      </div>

      <div className="flex gap-6">

        {/* Left: Profile Card */}
        <div className="w-1/3 bg-white rounded-2xl shadow-lg border-2 border-green p-6 flex flex-col items-center">
          <div className="w-28 h-28 rounded-full bg-green flex items-center justify-center">
            <i className="fa-solid fa-user text-5xl text-white"></i>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-4">Ahmed Khan</h2>
          <p className="text-gray-500">Master Tailor</p>

          <span className="mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
            Bridal Wear Specialist
          </span>

          {/* Availability Toggle */}
          <div className="w-full mt-6 flex items-center justify-between border-2 border-green rounded-xl px-4 py-3">
            <span className="font-semibold text-gray-700">Availability</span>
            <button
              onClick={() => setAvailable(!available)}
              className={`px-4 py-1 rounded-full text-sm font-semibold duration-300 ${
                available
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {available ? "Available" : "Busy"}
            </button>
          </div>

          <div className="w-full mt-6 space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-phone text-green"></i>
              <span>0321-4567890</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-green"></i>
              <span>ahmed.khan@aurelle.com</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-green"></i>
              <span>Gulberg III, Lahore</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-calendar text-green"></i>
              <span>Joined 12 Jan 2021</span>
            </div>
          </div>
        </div>

        {/* Right: Stats & Skills */}
        <div className="w-2/3 flex flex-col gap-6">

          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-[#c7ccc4] rounded-2xl shadow-md border border-gray-200 p-5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <i className="fa-solid fa-circle-check text-2xl text-green"></i>
              </div>
              <h1 className="text-3xl font-bold mt-3 text-gray-900">245</h1>
              <p className="text-sm text-gray-600">Orders Completed</p>
            </div>

            <div className="bg-[#c7ccc4] rounded-2xl shadow-md border border-gray-200 p-5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <i className="fa-solid fa-star text-2xl text-yellow-500"></i>
              </div>
              <h1 className="text-3xl font-bold mt-3 text-gray-900">4.9</h1>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>

            <div className="bg-[#c7ccc4] rounded-2xl shadow-md border border-gray-200 p-5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <i className="fa-solid fa-briefcase text-2xl text-green"></i>
              </div>
              <h1 className="text-3xl font-bold mt-3 text-gray-900">8 Yrs</h1>
              <p className="text-sm text-gray-600">Experience</p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-green p-6">
            <div className="flex items-center gap-2 mb-4">
              <i className="fa-solid fa-user text-green text-xl"></i>
              <h2 className="text-xl font-bold text-gray-800">
                Personal Information
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <div>
                <p className="text-gray-500">Full Name</p>
                <p className="font-semibold text-gray-800">Ahmed Khan</p>
              </div>
              <div>
                <p className="text-gray-500">CNIC</p>
                <p className="font-semibold text-gray-800">35201-1234567-8</p>
              </div>
              <div>
                <p className="text-gray-500">Gender</p>
                <p className="font-semibold text-gray-800">Male</p>
              </div>
              <div>
                <p className="text-gray-500">Specialization</p>
                <p className="font-semibold text-gray-800">Bridal Wear</p>
              </div>
              <div>
                <p className="text-gray-500">Monthly Salary</p>
                <p className="font-semibold text-gray-800">Rs. 55,000</p>
              </div>
              <div>
                <p className="text-gray-500">Employment Status</p>
                <p className="font-semibold text-gray-800">Active</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-green p-6">
            <div className="flex items-center gap-2 mb-4">
              <i className="fa-solid fa-scissors text-green text-xl"></i>
              <h2 className="text-xl font-bold text-gray-800">Skills</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Bridal Lehenga",
                "Embroidery",
                "Silk Maxi",
                "Alterations",
                "Hand Stitching",
                "Pattern Making",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailorProfile;
