import { Icon } from "@iconify/react";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import logo from "../assets/csvlogo.svg";
import supportImg from "../assets/support.svg";
const Main = () => {
  const location=useLocation()
 
  const lavelHidden =()=>{
    return
  }
  return (
    <>
      <div className="relative min-h-screen md:flex " data-dev-hint="container">
      
        <aside
          id="sidebar"
          className="bg-white border-r text-gray-900 lg:w-[246px] space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col  overflow-y-auto w-[50%] pl-[31px] pr-[7px] z-20 overflow-x-hidden"
          
          data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation "
        >
          <div className="flex items-center flex-col mt-6">
            <Link to="/" className=" top-8">
              <img className="w-[64px] h-[68px]" src={logo} alt="" />
            </Link>
          </div>

          <div className="px-4 ">
            <p className="text-[#8E8E8E] w-[92px] h-[17px] left-8 top-[140px] uppercase tracking-tighter text-[14px] font-semibold">
              Admin user
            </p>
          </div>

          <nav
            className="items-start gap-y-4 flex flex-col"
            data-dev-hint="main navigation"
          >
            <Link
              to="/"
              className={`flex items-center space-x-2 w-full py-2 px-4 transition duration-200 font-semibold group rounded-xl h-[54px] text-[18px] ${
                location.pathname === "/"
                  ? "bg-[#0090A6] text-white rounded-lg px-2 py-1 "
                  : "text-[#181818]"
              }`}
              
            >
              <Icon
                icon="radix-icons:dashboard"
                className={`${
                  location.pathname === "/"
                    ? " text-white  "
                    : "text-[#8E8E8E]"
                }`}
                width={22}
              />

              <span>Dashboard</span>
            </Link>

            <Link
              to="/studentInformation"
              className={`flex items-center space-x-2 w-full py-2 px-4 transition duration-200 font-semibold group rounded-xl h-[54px] text-[18px] ${
                location.pathname === "/studentInformation"
                  ? "bg-[#0090A6] text-white rounded-lg px-2 py-1 "
                  : "text-[#181818]"
              }`}
  
              
            >
              <Icon
                icon="mdi:user-multiple-outline"
                className={`${
                  location.pathname === "/studentInformation"
                    ? " text-white  "
                    : "text-[#8E8E8E]"
                }`}
                
                width={22}
              />
              <span>Student Info</span>
            </Link>

            <Link
              to="/analytics"
              className={`flex items-center space-x-2 w-full py-2 px-4 transition duration-200 font-semibold group rounded-xl h-[54px] text-[18px] ${
                location.pathname === "/analytics"
                  ? "bg-[#0090A6] text-white rounded-lg px-2 py-1 "
                  : "text-[#181818]"
              }`}
            >
              <Icon
                icon="majesticons:analytics-line"
                className={`${
                  location.pathname === "/analytics"
                    ? " text-white  "
                    : "text-[#8E8E8E]"
                }`}
                width={22}
              />
              <span>Analytics</span>
            </Link>

            <Link
              to="/payment/status"
              className={`flex items-center space-x-2 w-full py-2 px-4 transition duration-200 font-semibold group rounded-xl h-[54px] text-[18px] ${
                location.pathname === "/payment/status"
                  ? "bg-[#0090A6] text-white rounded-lg px-2 py-1 "
                  : "text-[#181818]"
              }`}
            >
              <Icon
                icon="system-uicons:wallet"
                className={`${
                  location.pathname === "/payment/status"
                    ? " text-white  "
                    : "text-[#8E8E8E]"
                }`}
                width={25}
              />
              <span>Payment Status</span>
            </Link>

            <Link
              to="/settings"
              className={`flex items-center space-x-2 w-full py-2 px-4 transition duration-200 font-semibold group rounded-xl h-[54px] text-[18px] ${
                location.pathname === "/settings"
                  ? "bg-[#0090A6] text-white rounded-lg px-2 py-1 "
                  : "text-[#181818]"
              }`}
            >
              <Icon
                icon="ep:setting"
                className={`${
                  location.pathname === "/settings"
                    ? " text-white  "
                    : "text-[#8E8E8E]"
                }`}
                width={22}
              />
              <span>Settings</span>
            </Link>
          </nav>

          <div className="flex gap-2 items-center w-[200px] transition duration-200 font-semibold text-[#181818] text-[18px] hover:bg-[#0090A6] hover:text-white rounded-xl h-[54px] group absolute bottom-5 pl-[31px]">
        
            <Icon
              icon="uiw:logout"
              className="group-hover:text-[#ffffff] text-[#8E8E8E]"
              width={22}
            />
            <span>Log out</span>
         
          </div>
        </aside>

        <main id="content" className="flex-1 pb-10">
          <Navbar />

          <div className="max-w-7xl mx-auto bg-[#FAFBFC] p-5">
            <Outlet />
          </div>
        </main>
        <div
          className="absolute right-10 bottom-5 bg-[#0090A6] w-16 h-16 flex items-center justify-center rounded-full drop-shadow-lg cursor-pointer"
          style={{ dropShadow: "(0px 8px 16px rgba(0, 144, 166, 0.32))" }}
        >
          <img src={supportImg} alt="" className="text-red-500 " />
        </div>
      </div>
    </>
  );
};

export default Main;
