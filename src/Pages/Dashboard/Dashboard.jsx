


import React, { useState } from 'react';
import {Menu, X,Home,Users,Settings,BarChart3,Mail,Calendar,Bell,Search,ChevronDown,LogOut,Package,HelpCircle,FileText,Shield} from 'lucide-react';
import { Navigate, Outlet, useNavigate } from 'react-router';
import { Link } from 'react-router';
import Statisticspage from './Statisticspage';
import { toast } from 'react-toastify';

function Dashboard() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');



  const handleLogout = async() => {
    try{
      await fetch("https://task-api-eight-flax.vercel.app/api/logout",{
        method:"POST",
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`,
        },
      });
      
    }catch(err){
        toast.error("Logout Failed",err)
      }finally{
        localStorage.removeItem("token");
        toast.success("Logout Successful");
        navigate("/")
      }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-72 bg-gradient-to-b from-indigo-900 to-indigo-800 shadow-2xl transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-30 flex flex-col`}
      >
        {/* Logo Area */}
        <div className="flex items-center justify-between p-6 border-b border-indigo-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <span className="text-indigo-900 font-bold text-xl">D</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-lg md:hidden hover:bg-indigo-800 text-white"
          >
            <X size={24} />
          </button>
        </div>

      

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-6 px-4">
  <p className="text-xs font-semibold text-indigo-300 uppercase tracking-wider px-4 mb-4">
    Main Menu
  </p>

  <ul className="space-y-2">

    <li>
      <Link
        to="/dashboard/dashboard1"
        onClick={() => setSidebarOpen(false)}
        className="flex items-center space-x-4 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white hover:text-blue-300 transition-all"
      >
        <Home size={22} />
        <span className="font-medium">Dashboard</span>
      </Link>
    </li>

    <li>
      <Link
        to="/dashboard/analytics"
        onClick={() => setSidebarOpen(false)}
        className="flex items-center space-x-4 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white hover:text-blue-300 transition-all"
      >
        <BarChart3 size={22} />
        <span className="font-medium">Analytics</span>
      </Link>
    </li>

    <li>
      <Link
        to="dashboard/user"
        onClick={() => setSidebarOpen(false)}
        className="flex items-center space-x-4 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white hover:text-blue-300 transition-all"
      >
        <Users size={22} />
        <span className="font-medium">Users</span>
      </Link>
    </li>

    <li>
      <Link
        to="/dashboard/products"
        onClick={() => setSidebarOpen(false)}
        className="flex items-center space-x-4 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white hover:text-blue-300 transition-all"
      >
        <Package size={22} />
        <span className="font-medium">Products</span>
      </Link>
    </li>

   

  </ul>
</nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-indigo-700">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-4 px-4 py-3 w-full rounded-xl text-indigo-100 hover:bg-red-600 hover:text-white transition-colors duration-200"
          >
            <LogOut size={22} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="md:ml-72 min-h-screen">
        {/* Navbar */}
        <nav className="bg-white shadow-md sticky top-0 z-20">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Left side */}
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 rounded-lg md:hidden hover:bg-gray-100 text-gray-600"
                >
                  <Menu size={24} />
                </button>
                
                {/* Page title */}
                {/* <h2 className="text-xl font-semibold text-gray-800 ml-4 md:ml-0">
                  {menuItems.find(item => item.key === activeItem)?.label || 'Dashboard'}
                </h2> */}
              </div>

              {/* Right side */}
              <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="hidden md:block">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Notifications */}
                <button className="relative p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                </button>

                {/* User Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2 transition-colors"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Profile"
                      className="w-8 h-8 rounded-lg"
                    />
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-medium text-gray-700">John Doe</p>
                      <p className="text-xs text-gray-500">Admin</p>
                    </div>
                    <ChevronDown size={16} className="hidden md:block text-gray-500" />
                  </button>

                  {/* Dropdown Menu */}
                  {userMenuOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-30"
                        onClick={() => setUserMenuOpen(false)}
                      ></div>
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 z-40 border border-gray-200">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-900">John Doe</p>
                          <p className="text-xs text-gray-500">john.doe@example.com</p>
                        </div>
                        
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</a>
                       
                        <hr className="my-2 border-gray-100" />
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                        >
                          <LogOut size={16} />
                          <span>Logout</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Placeholder */}
        <main className="p-6">

          <Outlet></Outlet>





        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Dashboard;