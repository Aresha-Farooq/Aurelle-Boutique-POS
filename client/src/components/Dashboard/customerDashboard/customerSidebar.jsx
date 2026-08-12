import React from 'react'
import logo2 from '../../../assets/logo2.svg'
import { Link } from 'react-router-dom'
const CustomerSidebar = () => {
  return (
    <div className="bg-green h-auto  text-skin border rounded">

      {/* Logo */}
      <div className="flex items-center gap-2 px-3 py-6 border-b border-[#7d8f8a]">
        <img
          src={logo2}
          alt="Boutique Logo"
          className="w-16 h-16"
        />

        <div>
          <h1
            className="text-3xl font-bold"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Aurelle
          </h1>

          <p className="uppercase tracking-[0.35em] text-xs">
            Tailor
          </p>
        </div>
      </div>

      {/* Sidebar */}
      <ul className="m-3 mt-4 w-52 space-y-2">
        <Link to="/CustomerDashboard">
          <li className="font-bold items-center flex gap-2  p-2 text-12 hover:text-green hover:bg-skin hover:border hover:rounded-2xl hover:cursor-pointer">
            <i className="fa-solid fa-gauge-high"></i>
            Dashboard
          </li>
        </Link>

        <Link to="/CustomerDashboard/wishlist">
          <li className="font-bold flex items-center gap-3 p-3 rounded-xl hover:bg-skin hover:text-green duration-300 cursor-pointer">
            <i className="fa-regular fa-heart or fa-solid fa-heart"></i>
            Wishlist
          </li>
        </Link>

        <Link to="/CustomerDashboard/appointments">
          <li className="font-bold flex items-center gap-3 p-3 rounded-xl hover:bg-skin hover:text-green duration-300 cursor-pointer">
            <i className="fa-solid fa-calendar-check"></i>
           Appointments
          </li>
        </Link>

        <Link to="/CustomerDashboard/measurements">
          <li className="font-bold flex items-center gap-3 p-3 rounded-xl hover:bg-skin hover:text-green duration-300 cursor-pointer">
            <i className="fa-solid fa-ruler"></i>
            Measurements
          </li>
        </Link>

        <Link to="/CustomerDashboard/orders">
          <li className="font-bold flex items-center gap-3 p-3 rounded-xl hover:bg-skin hover:text-green duration-300 cursor-pointer">
            <i className="fa-solid fa-sack-dollar"></i>
         My Orders
          </li>
        </Link>

        <Link to="/CustomerDashboard/browseCatalog">
          <li className="font-bold flex items-center gap-3 p-3 rounded-xl hover:bg-skin hover:text-green duration-300 cursor-pointer">
            <i className="fa-solid fa-shirt"></i>
            Browse Catalog
          </li>
        </Link>

    
  <Link to="/login">
          <li className="font-bold flex items-center gap-3 p-3 rounded-xl hover:bg-skin hover:text-green duration-300 cursor-pointer">
            <i className="fa-solid fa-right-from-bracket"></i>
            Logout
          </li>
        </Link>
      </ul>

    </div>
  )
}

export default CustomerSidebar
