import { useState } from "react";

import NavItem from "./NavItem";

import Input from "../Input";
import Button from "../Button";
import Avatar from "../Avater";
import Offcanvas from "./Offcanvas";

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

import { HiBars3BottomRight } from "react-icons/hi2";

const NavBar = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <>
      {/*----------------------------- SMALL SCREEN NAVBAR -----------------------------*/}
      <nav className=" w-screen border-b-2 shadow-sm lg:hidden">
        <div className="grid gap-4 mx-4 py-4">
          <div className="flex justify-between">
            <div className="text-sm">
              <h1 className="opacity-50"> Welcome Back</h1>
              <h1 className="font-bold">Dashboard </h1>
            </div>

            <Avatar />
          </div>

          <div className="flex justify-center items-center gap-2">
            <Input />
            <Button title="Log out" Color="blue" />
            <HiBars3BottomRight
              onClick={toggleOffcanvas}
              className="text-4xl md:text-5xl"
            />
          </div>
        </div>
      </nav>

      <Offcanvas isOpen={isOffcanvasOpen} onClose={toggleOffcanvas} />

      {/*----------------------------- LARGE SCREEN NAV BAR -----------------------------*/}
      <nav className="hidden lg:block w-[17%] h-screen fixed top-0 left-0 mt-4">
        <div className="h-full flex flex-col pb-2">
          <div className="flex justify-center items-center gap-3 py-4 mx-4 border-b-2">
            <img
              className="w-[2rem] h-[2rem] object-cover"
              src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711542176/FrambegTech/HOME%20PAGE/logo_ddmofy.png"
            />
            <h1 className="text-md">Frambeg-Tech</h1>
          </div>
          {/*------------------------------ Scrollable Section ------------------------------*/}
          <div className="overflow-auto no-scrollbar hover:scrollbar-thin hover:scrollbar-thumb-gray-500 scrollbar-track-transparent flex-1">
            <div className="pl-8 pr-3 my-4">
              <ul className="grid gap-1 text-[12px]">
                <NavItem to="/" icon={BiSolidDashboard} label="Dashboard" />
                <NavItem to="/Tables" icon={RiTableAltFill} label="Tables" />
                <NavItem to="/Billing" icon={HiCreditCard} label="Billings" />
                <NavItem to="/Products" icon={FaProductHunt} label="Products" />
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

                <li className="uppercase text-[12px] ml-4 my-2 font-bold opacity-50">
                  Account Pages
                </li>

                <NavItem
                  to="/Profile"
                  icon={BsFillPersonPlusFill}
                  label="Profile"
                />
                <NavItem to="/SignIn" icon={MdLibraryBooks} label="Sign ln" />
                <NavItem to="/SignUp" icon={IoIosRocket} label="Sign Up" />

                <li className="uppercase text-[12px] ml-4 my-2 font-bold opacity-50">
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
          <div className="flex justify-between items-center bg-blue-600 text-gray-300 mx-4 shadow-md p-3 rounded-lg sticky bottom-2 left-0 right-0">
            <div className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors">
              <MdLightMode className="text-yellow-400 text-xl" />
              <h1 className="text-xs">Light Mode</h1>
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors">
              <BsMoonStarsFill className="text-indigo-400 text-xl" />
              <h1 className="text-xs">Dark Mode</h1>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
