import React from "react";
import { Link } from "react-router-dom";
import newShirt from "../../assets/newShirt.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const location = useLocation();
let dashboardPath = "";
if (location.pathname === "/OwnerSignup") {
  dashboardPath = "/MainDashboard";
} else if (location.pathname === "/TailorSignup") {
  dashboardPath = "/TailorDashboard";
} else if (location.pathname === "/CustomerSignup") {
  dashboardPath = "/CustomerDashboard";
}
  return (
    <div className="flex h-screen">

      {/* Left */}

      <div className="w-1/2 bg-skin flex justify-center items-center">

        <div className="bg-white shadow-xl rounded-2xl p-10 w-100">

          <h1 className="text-3xl font-bold text-center text-green mb-2">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Register to continue
          </p>

          <form className="space-y-5">

            {/* Username */}

            <div className="relative group">

              <i className="fa-solid fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-white"></i>

              <input
                type="text"
                placeholder="Username"
                className="w-full border rounded-lg p-3 pl-11
                outline-none
                hover:bg-green
                hover:text-white
                hover:placeholder:text-white
                hover:border-green"
              />

            </div>

            {/* Email */}

            <div className="relative group">

              <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-white"></i>

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg p-3 pl-11
                outline-none
                hover:bg-green
                hover:text-white
                hover:placeholder:text-white
                hover:border-green"
              />

            </div>

            {/* Password */}

            <div className="relative group">

              <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-white"></i>

              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-lg p-3 pl-11
                outline-none
                hover:bg-green
                hover:text-white
                hover:placeholder:text-white
                hover:border-green"
              />

            </div>

            {/* Confirm Password */}

            <div className="relative group">

              <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-white"></i>

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border rounded-lg p-3 pl-11
                outline-none
                hover:bg-green
                hover:text-white
                hover:placeholder:text-white
                hover:border-green"
              />

            </div>
            

<Link to={dashboardPath}>
  <button
    className="w-full bg-green text-white rounded-lg py-3 hover:bg-[#4d615d]"
  >
    Sign Up
  </button>
</Link>
          </form>

          <p className="text-center mt-6">

            Already have an account?

            <Link
              to="/login"
              className="text-green font-semibold ml-2"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

      {/* Right */}

      <div className="w-1/2">

        <img
          src={newShirt}
          alt=""
          className="w-full h-full object-cover"
        />

      </div>

    </div>
  );
};

export default Signup;