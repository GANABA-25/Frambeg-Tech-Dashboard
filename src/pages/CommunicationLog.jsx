import NavBar from "../components/navBar/NavBar";
import Input from "../components/Input";
import Avatar from "../components/Avater";
import Button from "../components/Button";

const CommunicationLog = () => {
  return (
    <div className="flex font-inter bg-gray-100">
      <NavBar />
      <main className="hidden lg:block font-inter flex-grow h-screen ml-[19%] mr-[1rem] mt-4 overflow-scroll no-scrollbar">
        <header className="flex justify-between items-center">
          <div className="">
            <h1 className=" opacity-50"> Welcome Back</h1>
            <h1 className="font-bold">Communication Log</h1>
          </div>

          <div className="flex gap-4 items-center mr-16">
            <Input />
            <Avatar />
            <Button title="Log out" Color="#2563eb" />
          </div>
        </header>
      </main>
    </div>
  );
};

export default CommunicationLog;
