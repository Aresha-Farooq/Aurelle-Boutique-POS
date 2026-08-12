import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-96 w-96 bg-green rounded-xl shadow-2xl pt-1">
        <ul className="flex flex-col gap-2 m-2">

          <li
            className="
             border-l-2 border-t-2 border-r border-b
              border-transparent
              bg-skin text-xl font-medium rounded-lg p-2
              transition-all duration-300
              hover:bg-green hover:text-white
              hover:border-white hover:cursor-pointer
            "
          >
            <Link to="/OwnerSignup" className="block w-full">
              <i className="fa-solid fa-user-tie text-2xl mr-2"></i>
              Owner
            </Link>
          </li>

          <li
            className="
              border-l-2 border-t-2 border-r border-b
              border-transparent
              bg-skin text-xl font-medium rounded-lg p-2
              transition-all duration-300
              hover:bg-green hover:text-white
              hover:border-white hover:cursor-pointer
            "
          >
            <Link to="/TailorSignup" className="block w-full">
              <i className="fa-solid fa-scissors text-2xl mr-2"></i>
              Tailors
            </Link>
          </li>

          <li
            className="
              border-l-2 border-t-2 border-r border-b
              border-transparent
              bg-skin text-xl font-medium rounded-lg p-2
              transition-all duration-300
              hover:bg-green hover:text-white
              hover:border-white hover:cursor-pointer
            "
          >
            <Link to="/CustomerSignup" className="block w-full">
              <i className="fa-solid fa-user-group text-2xl mr-2"></i>
              Customers
            </Link>
          </li>

          <li>
            <div className="text-xl font-medium flex flex-col justify-center items-center gap-1 my-8 text-white">
              <button className="w-12 h-12 rounded-full border flex items-center justify-center">
                <i className="fa-solid fa-clipboard-list text-2xl"></i>
              </button>

              <p>Welcome!</p>
              <p>Select an option above to get started.</p>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default MainPage;