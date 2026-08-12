import React from 'react'
import logo2 from "../../assets/logo2.svg"
import MonthlyChart from './MonthlyChart'
const MainDash = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-green h-screen w-1/5 ">
    <div className="flex items-center gap-4 px-5 py-6 border-b border-[#7d8f8a]">
  <img
    src={logo2}
    alt="Boutique Logo"
    className="w-16 h-16"
  />

  <div>
    <h1
      className="text-3xl font-bold text-skin"
      style={{ fontFamily: "Georgia, serif" }}
    >
      Aurelle
    </h1>

    <p className="uppercase tracking-[0.35em] text-skin text-xs">
      Boutique
    </p>
  </div>
</div>
        <ul className="m-2">
           <li className="font-bold items-center flex gap-2  p-2 text-12 hover:text-green hover:bg-skin hover:border hover:rounded-2xl hover:cursor-pointer"><i className="fa-solid fa-gauge-high"></i>Dashboard</li>
            <li className="font-bold items-center flex gap-2  p-2 text-12 hover:text-green hover:bg-skin hover:border hover:rounded-2xl hover:cursor-pointer"><i className="fa-solid fa-boxes-stacked "></i>Inventory</li>
            <li className="font-bold items-center flex gap-2 hover:cursor-pointer  hover:text-green hover:bg-skin hover:border hover:rounded-2xl  p-2"><i className="fa-solid fa-clipboard-list"></i>Orders</li>
            <li className="font-bold items-center flex gap-2  hover:text-green hover:bg-skin hover:border hover:rounded-2xl hover:cursor-pointer p-2"><i className="fa-solid fa-users"></i>Customers</li>
            <li className="font-bold items-center flex gap-2  hover:text-green hover:bg-skin hover:border hover:rounded-2xl hover:cursor-pointer p-2"><i className="fa-solid fa-scissors"></i>Tailors</li>
            <li className="font-bold items-center flex gap-2  hover:text-green hover:bg-skin hover:border hover:rounded-2xl hover:cursor-pointer p-2"><i className="fa-solid fa-sack-dollar"></i>Sales</li>
            <li className="font-bold items-center flex gap-2  hover:text-green hover:bg-skin hover:border hover:rounded-2xl hover:cursor-pointer p-2"><i className="fa-solid fa-chart-line"></i>Reports</li>
            <li className="font-bold items-center flex gap-2  hover:text-green hover:bg-skin hover:border hover:rounded-2xl hover:cursor-pointer p-2"><i className="fa-solid fa-user-tie"></i>Staff Management</li>
            <li className="font-bold items-center flex gap-2  hover:text-green hover:bg-skin hover:border hover:rounded-2xl hover:cursor-pointer p-2"><i className="fa-solid fa-right-from-bracket"></i>Logout</li>
        </ul>
      </div>
      <div className="bg-skin h-screen w-4/5">
    <div className="flex justify-start items-center h-1/5 text-2xl font-bold mt-6 ml-10 gap-10 text-skin ">
      <div className="w-72 h-36 flex flex-col justify-center items-center gap-1 p-8 border-black border-2 rounded-xl bg-light-sage hover:cursor-pointer">
          <i className="fa-solid fa-boxes-stacked text-4xl text-skin"></i>
          <h1>1000</h1>
        <h1>Total Orders</h1>
      </div>
      <div className="bg-light-sage w-72 h-36 flex flex-col justify-center items-center gap-1 p-8 border-black border-2 rounded-xl hover:cursor-pointer">
        <i className="fa-solid fa-hourglass-half text-4xl text-skin"></i>
        <h1>1000</h1>
        <h1>Pending Orders</h1>
      </div>
      <div className="bg-light-sage w-72 h-36 flex flex-col justify-center items-center gap-1 p-8 border-black border-2 rounded-xl hover:cursor-pointer">
       <i className="fa-solid fa-sack-dollar text-4xl text-skin"></i>
        <h1>1000</h1>
        <h1>Completed Orders</h1>
      </div>
    </div>

<div>
  {MonthlyChart}
</div>
</div>
      </div>
  )
}

export default MainDash
