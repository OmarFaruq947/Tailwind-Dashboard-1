import { Icon } from "@iconify/react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
console.log(isOpen)

  return (
    <>
      <nav class="nav flex flex-wrap items-center justify-between px-4 border-b relative ">
        <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
          {/* search bar */}
          <div class="max-w-md mx-auto">
            <div class="relative flex items-center w-full h-12 rounded-lg bg-gray-100 overflow-hidden">
              <div class="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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

              <input
                class="peer h-full w-full outline-none text-sm bg-gray-100 text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search Student"
              />
            </div>
          </div>
          {/* search bar */}
        </div>

        

        <div class="flex justify-end mr-5" >
            <a
              href="/"
              class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
              onClick={()=>setIsOpen(!isOpen)}
            >
              <img
                class="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </a>
            <div className="-space-y-2 mt-2" onClick={()=>setIsOpen(!isOpen)}>
              <p className="font-bold">Imrul Kayes</p>
              <p className="text-gray-400">Student Profile</p>
            </div>
         
            <span onClick={()=>setIsOpen(!isOpen)} className="py-4 ml-3"><Icon icon="ep:arrow-down" /></span>
        </div>
      </nav>
      {
  isOpen ? <div className="border w-40 shadow-lg rounded-b-lg px-3 py-4 right-5 top-15 absolute z-[60] dropdown bg-white">
  <ul className="">
      <li className="flex gap-2"><Icon icon="ph:user-light" />Profile</li>
      <li className="flex gap-2 mt-3"><Icon icon="uil:setting" /> Settings</li>
  </ul>
</div>
:
""
}
    </>
  );
};

export default Navbar;
