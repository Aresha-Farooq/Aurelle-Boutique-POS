import React from "react";
import TailorMonthlyChart from "./TailorMonthlyChart";

const TailorDashboardHome = () => {
  return (
    <div className="bg-skin min-h-screen pt-4">

      
      <div className=" pl-8 flex gap-10">

        <div className="w-72 h-36 flex flex-col justify-center items-center gap-1 border-2 border-green shadow-xl rounded-xl bg-light-sage  text-green text-2xl font-bold  hover:cursor-pointer">
          <i className="fa-solid fa-clipboard-list text-3xl text-green"></i>
          <h1>24</h1>
          <h1>Assigned Orders</h1>
        </div>

        <div className="w-72 h-36 flex flex-col justify-center items-center gap-1 border-2 border-green shadow-xl rounded-xl bg-light-sage text-green text-2xl font-bold hover:cursor-pointer">
          <i className="fa-solid fa-scissors text-3xl text-green"></i>
          <h1>7</h1>
          <h1>In Progress</h1>
        </div>

        <div className="w-72 h-36 flex flex-col justify-center items-center gap-1 border-2 border-green shadow-xl rounded-xl bg-light-sage  text-green text-2xl font-bold  hover:cursor-pointer">
          <i className="fa-solid fa-circle-check text-3xl text-green"></i>
          <h1>17</h1>
          <h1>Completed Orders</h1>
        </div>

      </div>


      <div className="mt-6">
        <TailorMonthlyChart />
      </div>

    </div>
  );
};

export default TailorDashboardHome;
