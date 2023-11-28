import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/csvlogo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isOpen);

  return (
    <>
      <nav className="nav flex flex-wrap items-center md:justify-between pl-2 md:px-4 border-b relative ">
        <div className="flex flex-no-shrink items-center mr-3 md:mr-6 py-3 text-grey-darkest">
          {/* search bar */}
          <div className="max-w-md mx-auto md:w-[355px] w-[120px] ">
            <div className="relative flex items-center w-full md:h-12 h-8 rounded-lg bg-gray-100 overflow-hidden">
              {/* search icon */}
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:h-6 md:w-6 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              {/* Search Type bar */}
              <input
                className="peer h-full w-full outline-none text-sm bg-gray-100 text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search Student"
              />
            </div>
          </div>
          {/* search bar */}
        </div>
        {/* profile */}
        <div
          className="flex items-center gap-[9px] mr-5 "
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="border w-[44px] h-[44px] flex justify-center items-center rounded-full">
            <img
              className="h-[38px] w-[38px] rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>

          <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <p className="font-semibold md:text-[18px] text-[14px] text-[#2A353D]">
              Imrul Kayes
            </p>
            <p className="text-[#717171] text-[10px]">Student Profile</p>
          </div>

          <span onClick={() => setIsOpen(!isOpen)} className="py-4 cursor-pointer">
            <Icon icon="ep:arrow-down" width={24} />
          </span>
        </div>

        {/* menuset for small device */}

        <div className="lg:hidden">
          {isMenuOpen ? (
            <button
              aria-label="Close Menu"
              title="Close Menu"
              className="p-2 -mr-1 transition duration-200 rounded   bg-[#0090A6]"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                />
              </svg>
            </button>
          ) : (
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded  bg-[#0090A6]"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
          )}

          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-4/5 transition translate-x-1  duration-500 shadow-md menuRightSlider z-10">
              <div className="p-5 bg-white border rounded shadow-sm h-screen">
                <div className="flex items-center justify-between mb-4 ">
                  <div className="mx-auto mt-6">
                    <Link to="/" className=" top-8">
                      <img className="w-[64px] h-[68px]" src={logo} alt="" />
                    </Link>
                  </div>
                </div>
                <nav
                  className="items-start gap-y-4 flex flex-col"
                  data-dev-hint="main navigation"
                >
                  <Link
                    to="/"
                    className="flex items-center space-x-2 w-full py-2 px-4 transition duration-200 font-semibold text-[#181818] active:bg-[#0090A6] text-[18px] hover:bg-[#0090A6] hover:text-white rounded-xl h-[54px] group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon
                      icon="radix-icons:dashboard"
                      className="group-hover:text-[#ffffff] text-[#8E8E8E]"
                      width={22}
                    />

                    <span>Dashboard</span>
                  </Link>

                  <Link
                    to="/studentInformation"
                    className="flex items-center space-x-2 w-full py-2 px-4 transition duration-200 font-semibold text-[#181818] active:bg-[#0090A6] text-[18px] hover:bg-[#0090A6] hover:text-white rounded-xl h-[54px] group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon
                      icon="mdi:user-multiple-outline"
                      className="group-hover:text-[#ffffff] text-[#8E8E8E]"
                      width={22}
                    />
                    <span>Student Info</span>
                  </Link>

                  <Link
                    to="/analytics"
                    className="flex items-center space-x-2 w-full py-2 px-4 transition duration-200 font-semibold text-[#181818] active:bg-[#0090A6] text-[18px] hover:bg-[#0090A6] hover:text-white rounded-xl h-[54px] group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon
                      icon="majesticons:analytics-line"
                      className="group-hover:text-[#ffffff] text-[#8E8E8E]"
                      width={22}
                    />
                    <span>Analytics</span>
                  </Link>

                  <Link
                    to="/payment/status"
                    className="flex items-center space-x-2 w-full py-2 px-4 transition duration-200 font-semibold text-[#181818] active:bg-[#0090A6] text-[18px] hover:bg-[#0090A6] hover:text-white rounded-xl h-[54px] group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon
                      icon="system-uicons:wallet"
                      className="group-hover:text-[#ffffff] text-[#8E8E8E]"
                      width={25}
                    />
                    <span>Payment Status</span>
                  </Link>

                  <Link
                    to="/settings"
                    className="flex items-center space-x-2 w-full py-2 px-4 transition duration-200 font-semibold text-[#181818] active:bg-[#0090A6] text-[18px] hover:bg-[#0090A6] hover:text-white rounded-xl h-[54px] group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon
                      icon="ep:setting"
                      className="group-hover:text-[#ffffff] text-[#8E8E8E]"
                      width={22}
                    />
                    <span>Settings</span>
                  </Link>
                  <a
                    href="#"
                    className="flex items-center space-x-2 w-full py-2 px-4 transition duration-200 font-semibold text-[#181818] active:bg-[#0090A6] text-[18px] hover:bg-[#0090A6] hover:text-white rounded-xl h-[54px] group"
                  >
                    <Icon
                      icon="uiw:logout"
                      className="group-hover:text-[#ffffff] text-[#8E8E8E]"
                      width={22}
                    />
                    <span>Log out</span>
                  </a>
                </nav>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* profile dropdown  */}
      {isOpen ? (
        <div className="border w-40 shadow-lg rounded-b-lg p-4 right-5 top-15 absolute dropdown bg-white">
          <ul className="">
            <li className="hover:bg-[#0090A6] hover:text-white px-2 py-1 rounded-md">
              <a className="flex gap-2 items-center " href="#"><Icon icon="ph:user-light" />
              Profile</a>
            </li>
            <li className="hover:bg-[#0090A6] hover:text-white px-2 py-1 rounded-md">
              <a className="flex gap-2 items-center" href="#">
              <Icon icon="uil:setting" /> Settings
              </a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
