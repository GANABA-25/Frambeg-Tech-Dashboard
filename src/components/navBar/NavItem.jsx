import { useLocation, Link } from "react-router-dom";

const NavItem = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <div
      className={`flex items-center gap-3 cursor-pointer p-2 md:gap-4 md:text-xl md:p-4 lg:gap-3 lg:text-xs lg:p-2 ${
        isActive
          ? "bg-white p-2 rounded-[16px] drop-shadow-sm shadow-sm md:p-4 lg:p-2"
          : ""
      }`}
    >
      <div
        className={`${
          isActive
            ? "bg-blue-600 text-white p-2 rounded-md shadow-md md:p-4 lg:p-2"
            : "bg-white p-2 rounded-md shadow-md text-[1rem] md:p-4 lg:p-2"
        }`}
      >
        <Icon />
      </div>
      <Link to={to}>{label}</Link>
    </div>
  );
};

export default NavItem;
