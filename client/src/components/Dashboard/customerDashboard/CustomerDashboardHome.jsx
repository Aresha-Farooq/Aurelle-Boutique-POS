import React from 'react'
import RecentActivityTable from "./RecentActivityTable";
import { recentActivities } from './customerData';
import { upcomingAppointment } from './upcomingAppointment';
import UpcomingAppointment from './appointmentData';
const CustomerDashboardHome = () => {
  return (
    <div className="flex gap-4 flex-col mt-2">
        <div className="ml-2">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <h1>Welcome back! Here's what's happening</h1>
        </div>
        <div className="flex gap-4">
     <div className=" flex justify-center items-center flex-col gap-2 bg-white rounded-2xl w-60 h-38 p-2 shadow-2xl hover:translate-y-2">
    <h1 className="text-gray-700 font-medium">Active Orders</h1>
<h1 className="text-4xl font-extrabold">2</h1>
<h1 className="text-green font-medium">1 in Final fitting</h1>
    </div> 
     <div className=" flex justify-center items-center flex-col gap-2 bg-white rounded-2xl w-60 h-38 p-2 shadow-2xl hover:translate-y-2">
    <h1 className="text-gray-700 font-medium  whitespace-nowrap">Upcoming Appointments</h1>
<h1 className="text-4xl font-extrabold">2</h1>
<h1 className="text-green font-medium">1 in Final fitting</h1>
    </div> 
     <div className=" flex justify-center items-center flex-col gap-2 bg-white rounded-2xl w-60 h-38 p-2 shadow-2xl hover:translate-y-2">
    <h1 className="text-gray-700 font-medium">Loyalty Points</h1>
<h1 className="text-4xl font-extrabold">2</h1>
<h1 className="text-green font-medium">1 in Final fitting</h1>
    </div> 
     <div className=" flex justify-center items-center flex-col gap-2 bg-white rounded-2xl w-60 h-38 p-2 shadow-2xl hover:translate-y-2">
    <h1 className="text-gray-700 font-medium">Wishlist items</h1>
<h1 className="text-4xl font-extrabold">2</h1>
<h1 className="text-green font-medium">1 in Final fitting</h1>
    </div> 
        </div>
   <div>
    <div className="flex gap-4">
      <RecentActivityTable activities={recentActivities} />
 <UpcomingAppointment appointment={upcomingAppointment} />
    </div>
   </div>



    </div>
  )
}

export default CustomerDashboardHome
