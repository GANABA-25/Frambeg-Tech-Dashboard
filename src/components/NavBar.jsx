import { Link, useLocation } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { RiTableAltFill } from "react-icons/ri";
import { HiCreditCard } from "react-icons/hi";

import { MdBorderColor } from "react-icons/md";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { MdLibraryBooks } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";

const NavBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-[17%] h-screen  fixed top-0 left-0 mt-4">
      <div className="h-full flex flex-col">
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
              <div
                className={`flex items-center gap-3 cursor-pointer p-2 ${
                  isActive("/")
                    ? "bg-white p-2 rounded-[16px] drop-shadow-sm shadow-sm"
                    : "bg-none"
                }`}
              >
                <div
                  className={`${
                    isActive("/")
                      ? "bg-blue-600 text-white p-2 rounded-md shadow-md"
                      : "bg-white p-2 rounded-md shadow-md text-[1rem]"
                  }`}
                >
                  <BiSolidDashboard />
                </div>
                <Link to="/">Dashboard</Link>
              </div>

              <div
                className={`flex items-center gap-3 cursor-pointer p-2 ${
                  isActive("/Tables")
                    ? "bg-white p-2 rounded-[16px] drop-shadow-sm shadow-sm"
                    : "bg-none"
                }`}
              >
                <div
                  className={`${
                    isActive("/Tables")
                      ? "bg-blue-600 text-white p-2 rounded-md shadow-md"
                      : "bg-white p-2 rounded-md shadow-md text-[1rem]"
                  }`}
                >
                  <RiTableAltFill />
                </div>
                <Link to="/Tables">Tables</Link>
              </div>

              <div
                className={`flex items-center gap-3 cursor-pointer p-2 ${
                  isActive("/Billing")
                    ? "bg-white p-2 rounded-[16px] drop-shadow-sm shadow-sm"
                    : ""
                }`}
              >
                <div
                  className={`${
                    isActive("/Billing")
                      ? "bg-blue-600 text-white p-2 rounded-md shadow-md"
                      : "bg-white p-2 rounded-md shadow-md text-[1rem]"
                  }`}
                >
                  <HiCreditCard />
                </div>
                <Link to="/Billing">Billings</Link>
              </div>

              <div
                className={`flex items-center gap-3 cursor-pointer p-2 ${
                  isActive("/OrderHistory")
                    ? "bg-white p-2 rounded-[16px] drop-shadow-sm shadow-sm"
                    : ""
                }`}
              >
                <div
                  className={`${
                    isActive("/OrderHistory")
                      ? "bg-blue-600 text-white p-2 rounded-md shadow-md"
                      : "bg-white p-2 rounded-md shadow-md text-[1rem]"
                  }`}
                >
                  <MdBorderColor />
                </div>
                <Link to="/OrderHistory">Order History</Link>
              </div>

              <div
                className={`flex items-center gap-3 cursor-pointer p-2 ${
                  isActive("/CustomerData")
                    ? "bg-white p-2 rounded-[16px] drop-shadow-sm shadow-sm"
                    : ""
                }`}
              >
                <div
                  className={`${
                    isActive("/CustomerData")
                      ? "bg-blue-600 text-white p-2 rounded-md shadow-md"
                      : "bg-white p-2 rounded-md shadow-md text-[1rem]"
                  }`}
                >
                  <BsDatabaseFillCheck />
                </div>
                <Link to="/CustomerData">Customer Data</Link>
              </div>

              <li className="uppercase text-[12px] ml-4 my-2 font-bold opacity-50">
                Account Pages
              </li>

              <div
                className={`flex items-center gap-3 cursor-pointer p-2 ${
                  isActive("/Profile")
                    ? "bg-white p-2 rounded-[16px] drop-shadow-sm shadow-sm"
                    : ""
                }`}
              >
                <div
                  className={`${
                    isActive("/Profile")
                      ? "bg-blue-600 text-white p-2 rounded-md shadow-md"
                      : "bg-white p-2 rounded-md shadow-md text-[1rem]"
                  }`}
                >
                  <BsFillPersonPlusFill />
                </div>
                <Link to="/Profile">Profile</Link>
              </div>

              <div
                className={`flex items-center gap-3 cursor-pointer p-2 ${
                  isActive("/SignIn")
                    ? "bg-white p-2 rounded-[16px] drop-shadow-sm shadow-sm"
                    : ""
                }`}
              >
                <div
                  className={`${
                    isActive("/SignIn")
                      ? "bg-blue-600 text-white p-2 rounded-md shadow-md"
                      : "bg-white p-2 rounded-md shadow-md text-[1rem]"
                  }`}
                >
                  <MdLibraryBooks />
                </div>
                <Link to="/SignIn">Sign ln</Link>
              </div>

              <div
                className={`flex items-center gap-3 cursor-pointer p-2 ${
                  isActive("/SignUp")
                    ? "bg-white p-2 rounded-[16px] drop-shadow-sm shadow-sm"
                    : ""
                }`}
              >
                <div
                  className={`${
                    isActive("/SignUp")
                      ? "bg-blue-600 text-white p-2 rounded-md shadow-md"
                      : "bg-white p-2 rounded-md shadow-md text-[1rem]"
                  }`}
                >
                  <IoIosRocket />
                </div>
                <Link to="/SignUp">Sign Up</Link>
              </div>

              <div className="flex items-center gap-3 cursor-pointer p-2">
                <div className="bg-white p-2 rounded-md shadow-md text-[1rem]">
                  <RiLogoutBoxFill />
                </div>
                <li>Log out</li>
              </div>

              <li className="uppercase text-[12px] ml-4 my-2 font-bold opacity-50">
                Customers
              </li>

              <div
                className={`flex items-center gap-3 cursor-pointer p-2 ${
                  isActive("/HelpAndSupport")
                    ? "bg-white p-2 rounded-[16px] drop-shadow-sm shadow-sm"
                    : ""
                }`}
              >
                <div
                  className={`${
                    isActive("/HelpAndSupport")
                      ? "bg-blue-600 text-white p-2 rounded-md shadow-md"
                      : "bg-white p-2 rounded-md shadow-md text-[1rem] text-blue-600"
                  }`}
                >
                  <FaHandsHelping />
                </div>
                <Link to="/HelpAndSupport">Help and Support</Link>
              </div>
              <div
                className={`flex items-center gap-3 cursor-pointer p-2 ${
                  isActive("/HelpAndSupport")
                    ? "bg-white p-2 rounded-[16px] drop-shadow-sm shadow-sm"
                    : ""
                }`}
              >
                <div
                  className={`${
                    isActive("/HelpAndSupport")
                      ? "bg-blue-600 text-white p-2 rounded-md shadow-md"
                      : "bg-white p-2 rounded-md shadow-md text-[1rem] text-blue-600"
                  }`}
                >
                  <FaHandsHelping />
                </div>
                <Link to="/HelpAndSupport">Help and Support</Link>
              </div>
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
  );
};

export default NavBar;
