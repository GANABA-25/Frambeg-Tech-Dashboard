import React from "react";
import { useLocation, Link } from "react-router-dom";

import NavItem from "./NavItem";

import { BiSolidDashboard } from "react-icons/bi";
import { RiTableAltFill } from "react-icons/ri";
import { HiCreditCard } from "react-icons/hi";
import { FaProductHunt } from "react-icons/fa6";
import { MdBorderColor } from "react-icons/md";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { MdLibraryBooks } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { GiSatelliteCommunication } from "react-icons/gi";

const Offcanvas = ({ isOpen, onClose }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed inset-y-0 left-0 max-w-xs w-full md:max-w-[60%] bg-gray-100 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="">
          {/* <button
            className="text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            Close
          </button> */}
          <nav className="h-screen top-0 left-0 mt-4">
            <div className="h-full flex flex-col pb-2">
              <div className="flex justify-center items-center gap-3 py-4 mx-4 border-b-2">
                <img
                  className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] object-cover"
                  src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542176/FrambegTech/HOME%20PAGE/logo_ddmofy.png"
                />
                <h1 className="text-md md:text-2xl">Frambeg-Tech</h1>
              </div>
              {/*------------------------------ Scrollable Section ------------------------------*/}
              <div className="overflow-auto no-scrollbar hover:scrollbar-thin hover:scrollbar-thumb-gray-500 scrollbar-track-transparent flex-1">
                <div className="pl-8 pr-3 my-4">
                  <ul className="grid gap-1 text-[12px]">
                    <NavItem to="/" icon={BiSolidDashboard} label="Dashboard" />
                    <NavItem
                      to="/Tables"
                      icon={RiTableAltFill}
                      label="Tables"
                    />
                    <NavItem
                      to="/Billing"
                      icon={HiCreditCard}
                      label="Billings"
                    />
                    <NavItem
                      to="/Products"
                      icon={FaProductHunt}
                      label="Products"
                    />
                    <NavItem
                      to="/OrderHistory"
                      icon={MdBorderColor}
                      label="Order History"
                    />
                    <NavItem
                      to="/CustomerData"
                      icon={BsDatabaseFillCheck}
                      label="Customer Data"
                    />

                    <li className="uppercase text-[12px] ml-4 my-2 font-bold opacity-50 md:text-[18px] md:my-4 md:ml-12 lg:text-[12px] lg:ml-4 lg:my-2">
                      Account Pages
                    </li>

                    <NavItem
                      to="/Profile"
                      icon={BsFillPersonPlusFill}
                      label="Profile"
                    />
                    <NavItem
                      to="/SignIn"
                      icon={MdLibraryBooks}
                      label="Sign ln"
                    />
                    <NavItem to="/SignUp" icon={IoIosRocket} label="Sign Up" />

                    <li className="uppercase text-[12px] ml-4 my-2 font-bold opacity-50 md:text-[18px] md:my-4 md:ml-12 lg:text-[12px] lg:ml-4 lg:my-2">
                      Customers
                    </li>

                    <NavItem
                      to="/HelpAndSupport"
                      icon={FaHandsHelping}
                      label="Help and Support"
                    />

                    <NavItem
                      to="/CommunicationLog"
                      icon={GiSatelliteCommunication}
                      label="Communication Log"
                    />
                  </ul>
                </div>
              </div>
              <div className="flex justify-between items-center bg-blue-600 text-gray-300 mx-4 shadow-md p-3 rounded-lg sticky bottom-2 left-0 right-0 md:p-6 md:mx-6 md:bottom-3  lg:p-3 lg:mx-4 lg:bottom-2">
                <div className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors md:gap-4 lg:gap-3">
                  <MdLightMode className="text-yellow-400 text-xl md:text-2xl lg:text-xl" />
                  <h1 className="text-xs md:text-xl lg:text-xs">Light Mode</h1>
                </div>
                <div className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors md:gap-4 lg:gap-3">
                  <BsMoonStarsFill className="text-indigo-400 text-xl md:text-2xl lg:text-xl" />
                  <h1 className="text-xs md:text-xl lg:text-xs">Dark Mode</h1>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
