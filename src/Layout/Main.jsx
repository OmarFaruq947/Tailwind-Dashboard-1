import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import analytics from "../assets/analytics-01.svg";
import logo from "../assets/csvlogo.svg";
import dashboard from "../assets/dashboard-square-01.svg";
import logout from "../assets/logout-03.svg";
import setting from "../assets/setting-02.svg";
import multiUser from "../assets/user-multiple.svg";
import payment from "../assets/wallet-02.svg";

const Main = () => {

    return (
        <>
        
        <div className="relative min-h-screen md:flex " data-dev-hint="container">
        <input type="checkbox" id="menu-open" className="hidden" />
        <label
          htmlFor="menu-open"
          className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-red-900 text-gray-600 md:hidden "
          data-dev-hint="floating action button"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        {/* <header
          className="bg-blue-600 text-gray-100 flex justify-between md:hidden "
          data-dev-hint="mobile menu bar"
        >
          <a
            href="#"
            className="block p-4 text-white font-bold whitespace-nowrap truncate"
          >
            <img className="h-10" src={logo} alt="" />
          </a>
          <label
            htmlFor="menu-open"
            id="mobile-menu-button"
            className="m-2 p-2 focus:outline-none  hover:bg-[#F5F5F5] rounded-md"
          >
            <svg
              id="menu-open-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              id="menu-close-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </header> */}

        <aside
          id="sidebar"
          className="bg-white border-r text-gray-900 md:w-[240px]  space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col  overflow-y-auto w-[30%] z-20"
          data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
        >
          <div className="flex items-center flex-col mt-6">
            <Link to="/" className=" top-8">
              <img className="w-[64px] h-[68px]" src={logo} alt="" />
            </Link>
          </div>

          <div className="px-4 ">
            <p className="text-[#8E8E8E] w-[92px] h-[17px] left-8 top-[140px] uppercase tracking-tighter text-[14px] font-bold">
              Admin user
            </p>
          </div>

          <nav
            className="items-start gap-y-4 flex flex-col"
            data-dev-hint="main navigation "
          >
            <Link
              to="/"
              className="flex items-center space-x-2 w-full py-2 px-4 transition duration-200 hover:bg-[#F5F5F5] font-bold text-[#181818]"
            >
              <img src={dashboard} alt="" />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/studentInformation"
              className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-[#F5F5F5] font-bold text-[#181818] w-full"
            >
              <img src={multiUser} alt="" />
              <span>Student Info</span>
            </Link>

            <Link
              to="/analytics"
              className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-[#F5F5F5] font-bold text-[#181818] w-full"
            >
              <img src={analytics} alt="" />
              <span>Analytics</span>
            </Link>

            <Link
              to="/payment/status"
              className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-[#F5F5F5] font-bold text-[#181818] w-full"
            >
              <img src={payment} alt="" />
              <span>Payment Status</span>
            </Link>

            <Link
              to="/settings"
              className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-[#F5F5F5] font-bold text-[#181818] w-full"
            >
              <img src={setting} alt="" />
              <span>Settings</span>
            </Link>


          </nav>

          <a
              href="#"
              className="flex items-center py-2 px-4 transition duration-200 hover:bg-[#F5F5F5] font-bold text-[#181818] w-full absolute bottom-2"
            >
              <img src={logout} alt="" />
              <span>Log out</span>
            </a>
            
        </aside>

        <main id="content" className="flex-1">
          <Navbar />

          <div className="max-w-7xl mx-auto bg-[#FAFBFC] p-5">
           
            <Outlet />
            
          </div>
        </main>
      </div>
          
        </>
    );
};

export default Main;