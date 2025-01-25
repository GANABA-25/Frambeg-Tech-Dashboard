import MetricCard from "../components/MetricCard";
import Reviews from "../components/Reviews";

import NavBar from "../components/navBar/NavBar";
import Input from "../components/Input";
import Avatar from "../components/Avater";
import Button from "../components/Button";
import ProductsTable from "../components/Products/ProductsTable";
import OrderTimeline from "../components/Products/OrderTimeline";
import Footer from "../components/Footer";

import { FaUsers } from "react-icons/fa";
import { ImStatsBars2 } from "react-icons/im";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

const infoData = [
  {
    color: "blue",
    info: "1983, orders, $4220",
    dateAndTime: "08 Nov 2023 12:00 am",
  },
  {
    color: "green",
    info: "12 Invoices have been paid",
    dateAndTime: "09 Apr 2024 12:00 am",
  },
  {
    color: "yellow",
    info: "Order #37745 from September",
    dateAndTime: "12 Sep 2023 12:00 am",
  },
  {
    color: "blue",
    info: "New order placed #XF-2356",
    dateAndTime: "01 Jan 2024 12:00 am",
  },
  {
    color: "green",
    info: "New order placed #XF-2346",
    dateAndTime: "23 Apr 2024 12:00 am",
  },
];

const Dashboard = () => {
  return (
    <div className="font-inter bg-gray-100">
      <NavBar />
      <main className="max-[767px]:w-[90%] m-auto font-inter flex-grow h-screen overflow-scroll no-scrollbar md:mx-6 lg:mx-0 lg:pt-4 lg:ml-[19%] lg:pr-[2rem]">
        <header className="hidden justify-between items-center lg:flex">
          <div className="">
            <h1 className=" opacity-50"> Welcome Back</h1>
            <h1 className="font-bold">Dashboard </h1>
          </div>

          <div className="flex gap-4 items-center mr-[3.4rem]">
            <Input />
            <Avatar />
            <Button title="Log out" Color="#2563eb" />
          </div>
        </header>

        <div className="grid  gap-6 my-8 lg:grid-cols-2">
          <div className="grid md:grid-cols-2 gap-6">
            <MetricCard
              icon={<FaUsers />}
              totalNumber="1600"
              percentage="55"
              label="Users active"
              backgroundColor="#2563eb"
            />
            <MetricCard
              icon={<ImStatsBars2 />}
              totalNumber="375"
              percentage="124"
              label="Weekly sales"
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
              icon={<BiSolidMessageSquareDetail />}
              totalNumber="940"
              percentage="90"
              label="Messages"
              backgroundColor="#211f1f"
            />
          </div>
          <div>
            <Reviews />
          </div>
        </div>

        <div className="flex gap-8 ">
          <div
            className="bg-white rounded-lg shadow-lg grid gap-2 font-inter border"
            style={{ flex: 7 }}
          >
            <div className="grid gap-1 p-4">
              <h1 className="font-bold opacity-85">To selling Products </h1>
              <p className="opacity-75 mx-2 text-xs">the month January</p>
            </div>
            <ProductsTable />
          </div>

          <div
            className="bg-white rounded-lg shadow-lg p-4 border"
            style={{ flex: 3 }}
          >
            <h1 className="font-semibold opacity-85">Orders Overview</h1>

            <div className="grid gap-2 mt-6">
              {infoData.map((data, index) => (
                <OrderTimeline
                  key={index}
                  color={data.color}
                  info={data.info}
                  dateAndTime={data.dateAndTime}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Dashboard;
