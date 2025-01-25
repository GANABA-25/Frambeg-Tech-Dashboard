import NavBar from "../components/navBar/NavBar";
import Input from "../components/Input";
import Avatar from "../components/Avater";
import Button from "../components/Button";

const Tables = () => {
  return (
    <div className="flex font-inter bg-gray-100">
      <NavBar />
      <main className="hidden lg:block font-inter flex-grow h-screen overflow-scroll no-scrollbar md:mx-6 lg:mx-0 lg:pt-4 lg:ml-[19%] lg:mr-[1rem]">
        <header className="flex justify-between items-center">
          <div className="">
            <h1 className=" opacity-50"> Welcome Back</h1>
            <h1 className="font-bold">Tables</h1>
          </div>

          <div className="flex gap-4 items-center mr-[3.4rem]">
            <Input />
            <Avatar />
            <Button title="Log out" Color="#2563eb" />
          </div>
        </header>
      </main>
    </div>
  );
};

export default Tables;
