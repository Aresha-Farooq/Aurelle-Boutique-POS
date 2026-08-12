import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomerSidebar from './customerSidebar'
const CustomerLayout = () => {
  return (
    <div>
       <div className="flex">
      <CustomerSidebar />
      <div className="flex-1 bg-skin min-h-screen px-4">
        <Outlet />
      </div>
    </div>
    </div>
  )
}

export default CustomerLayout
