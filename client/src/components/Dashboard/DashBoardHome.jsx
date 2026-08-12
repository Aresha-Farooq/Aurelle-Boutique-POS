import React from "react";
import MonthlyChart from "./MonthlyChart";

const DashboardHome = () => {
  return (
    <div className="bg-skin min-h-screen pt-4">

      {/* Cards */}
      <div className=" pl-8 flex gap-10">

        <div className="w-72 h-36 flex flex-col justify-center items-center gap-1 border-2 border-green shadow-xl rounded-xl bg-light-sage  text-green text-2xl font-bold  hover:cursor-pointer">
          <i className="fa-solid fa-boxes-stacked text-3xl text-green"></i>
          <h1>1000</h1>
          <h1>Total Orders</h1>
        </div>

        <div className="w-72 h-36 flex flex-col justify-center items-center gap-1 border-2 border-green shadow-xl rounded-xl bg-light-sage text-green text-2xl font-bold hover:cursor-pointer">
          <i className="fa-solid fa-hourglass-half text-3xl text-green"></i>
          <h1>1000</h1>
          <h1>Pending Orders</h1>
        </div>

        <div className="w-72 h-36 flex flex-col justify-center items-center gap-1 border-2 border-green shadow-xl rounded-xl bg-light-sage  text-green text-2xl font-bold  hover:cursor-pointer">
          <i className="fa-solid fa-sack-dollar text-3xl text-green"></i>
          <h1>1000</h1>
          <h1>Completed Orders</h1>
        </div>

      </div>

      {/* Monthly Chart */}
      <div className="mt-6">
        <MonthlyChart />
      </div>

    </div>
  );
};

export default DashboardHome;