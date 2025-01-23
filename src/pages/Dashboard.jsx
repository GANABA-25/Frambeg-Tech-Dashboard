import NavBar from "../components/navBar/NavBar";
import Input from "../components/Input";
import Avatar from "../components/Avater";
import LogoutButton from "../components/LogoutButton";

const Dashboard = () => {
  return (
    <div className="flex font-inter bg-gray-100">
      <NavBar />
      <main className="hidden lg:block font-inter flex-grow h-screen ml-[17%] overflow-scroll p-4 no-scrollbar">
        <header className="flex justify-between items-center border-b-2 py-2">
          <div className="">
            <h1 className=" opacity-50"> Welcome Back</h1>
            <h1 className="font-bold">Dashboard </h1>
          </div>

          <div className="flex gap-4 items-center mr-16">
            <Input />
            <Avatar />
            <LogoutButton />
          </div>
        </header>
      </main>
    </div>
  );
};

export default Dashboard;
