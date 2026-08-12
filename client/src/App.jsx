import "./App.css";
import { Routes, Route } from "react-router-dom";

import MainPage from "./components/pages/MainPage";
import Signup from "./components/pages/signup";
import Login from "./components/pages/Login";

// Dashboard Layout
import MainDash from "./components/Dashboard/mainDash";

// Dashboard Home (Cards + Chart)
import DashboardHome from "./components/Dashboard/DashBoardHome";
import Layout from "./components/Dashboard/Layout";
// Dashboard Pages
import Inventory from "./components/Dashboard/Inventory";
import Orders from "./components/Dashboard/Orders";
import Customers from "./components/Dashboard/Customers";
import Tailors from "./components/Dashboard/Tailors";
import Sales from "./components/Dashboard/Sales";
import Reports from "./components/Dashboard/Reports";
import Staff from "./components/Dashboard/Staff";

// Tailor Dashboard
import TailorLayout from "./components/TailorDashboard/TailorLayout";
import TailorDashboardHome from "./components/TailorDashboard/TailorDashboardHome";
import TailorOrders from "./components/TailorDashboard/TailorOrders";
import TailorMeasurements from "./components/TailorDashboard/TailorMeasurements";
import TailorTasks from "./components/TailorDashboard/TailorTasks";
import TailorEarnings from "./components/TailorDashboard/TailorEarnings";
import TailorProfile from "./components/TailorDashboard/TailorProfile";

//Customer Dashboard
import CustomerDashboardHome from "./components/Dashboard/customerDashboard/CustomerDashboardHome";
import CustomerLayout from "./components/Dashboard/customerDashboard/customerLayout";
import CustomerWishlist from "./components/Dashboard/customerDashboard/customerWishlist";
import Appointments from "./components/Dashboard/customerDashboard/Appointments";
import Measurements from "./components/Dashboard/customerDashboard/Measurements";
import CustomerOrders from "./components/Dashboard/customerDashboard/CustomerOrders";
import Browse from "./components/Dashboard/customerDashboard/Browse";
function App() {
  return (
    <Routes>
      {/* Main Website */}
      <Route path="/" element={<MainPage />} />
      <Route path="/OwnerSignup" element={<Signup />} />
      <Route path="/TailorSignup" element={<Signup />} />
      <Route path="/CustomerSignup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* Dashboard */}
      <Route path="/MainDashboard" element={<Layout />}>
        {/* Dashboard Home */}
        <Route index element={<DashboardHome />} />
        {/* Sidebar Pages */}
        <Route path="inventory" element={<Inventory />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />
        <Route path="tailors" element={<Tailors />} />
        <Route path="sales" element={<Sales />} />
        <Route path="reports" element={<Reports />} />
        <Route path="staff" element={<Staff />} />
      </Route>

      {/* Tailor Dashboard */}
      <Route path="/TailorDashboard" element={<TailorLayout />}>
        {/* Dashboard Home */}
        <Route index element={<TailorDashboardHome />} />

        {/* Sidebar Pages */}
        <Route path="orders" element={<TailorOrders />} />
        <Route path="measurements" element={<TailorMeasurements />} />
        <Route path="tasks" element={<TailorTasks />} />
        <Route path="earnings" element={<TailorEarnings />} />
        <Route path="profile" element={<TailorProfile />} />
      </Route>

       {/*Customer Pages*/}
         <Route path="/CustomerDashboard" element={<CustomerLayout />}>
        {/* Dashboard Home */}
        <Route index element={<CustomerDashboardHome />} />
        <Route path="wishlist" element={<CustomerWishlist />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="measurements" element={<Measurements />} />
        <Route path="orders" element={<CustomerOrders />} />
        <Route path="browseCatalog" element={<Browse />} />
      </Route>
    </Routes>
   
  );
}

export default App;