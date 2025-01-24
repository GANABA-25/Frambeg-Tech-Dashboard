import MetricCard from "../components/MetricCard";
import Reviews from "../components/Reviews";

import NavBar from "../components/navBar/NavBar";
import Input from "../components/Input";
import Avatar from "../components/Avater";
import Button from "../components/Button";

import { FaUsers } from "react-icons/fa";
import { MdEventSeat } from "react-icons/md";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { GiLoveHowl } from "react-icons/gi";

const Dashboard = () => {
  return (
    <div className="flex font-inter bg-gray-100">
      <NavBar />
      <main className="hidden lg:block font-inter flex-grow h-screen ml-[19%] mr-[1rem] mt-4 overflow-scroll no-scrollbar">
        <header className="flex justify-between items-center">
          <div className="">
            <h1 className=" opacity-50"> Welcome Back</h1>
            <h1 className="font-bold">Dashboard </h1>
          </div>

          <div className="flex gap-4 items-center mr-16">
            <Input />
            <Avatar />
            <Button title="Log out" Color="#2563eb" />
          </div>
        </header>

        <div className="grid grid-cols-2 gap-6 my-8">
          <div className="grid grid-cols-2 gap-6">
            <MetricCard
              icon={<FaUsers />}
              totalNumber="1600"
              percentage="55"
              label="Users active"
              backgroundColor="#2563eb"
            />
            <MetricCard
              icon={<MdEventSeat />}
              totalNumber="375"
              percentage="124"
              label="Click Events"
              backgroundColor="#211f1f"
            />
            <MetricCard
              icon={<BiSolidPurchaseTagAlt />}
              totalNumber="2300"
              percentage="15"
              label="Purchases"
              backgroundColor="#211f1f"
            />
            <MetricCard
              icon={<GiLoveHowl />}
              totalNumber="940"
              percentage="90"
              label="Likes"
              backgroundColor="#211f1f"
            />
          </div>
          <div className="">
            <Reviews />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
