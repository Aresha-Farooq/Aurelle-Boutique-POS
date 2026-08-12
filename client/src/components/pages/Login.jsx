import React from "react";
import { Link } from "react-router-dom";
import newShirt from "../../assets/newShirt.png";
const Login = () => {
  return (
    <div className="flex h-screen">

      {/* Left Side */}
      <div className="w-1/2 bg-skin flex justify-center items-center">

        <div className="bg-white shadow-xl rounded-2xl p-10 w-[420px]">

          <h1 className="text-3xl font-bold text-center text-green mb-2">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Login to continue
          </p>

          <form className="space-y-5">

            {/* Email */}

            <div className="relative group">

              <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-white"></i>

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg p-3 pl-11
                outline-none
                transition-all duration-300
                hover:bg-green
                hover:text-white
                hover:placeholder:text-white
                hover:border-green
                focus:border-green"
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
                transition-all duration-300
                hover:bg-green
                hover:text-white
                hover:placeholder:text-white
                hover:border-green
                focus:border-green"
              />

            </div>
<Link to="/MainDashboard">
  <button
              className="w-full bg-green text-white rounded-lg py-3
              hover:bg-[#4d615d] transition-all duration-300"
            >
              Login
            </button>
</Link>
          

          </form>

          <p className="text-center mt-6">

            Don't have an account?

            <Link
              to="/OwnerSignup"
              className="text-green font-semibold ml-2"
            >
              Sign Up
            </Link>

          </p>

        </div>

      </div>

      {/* Right Side */}

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

export default Login;