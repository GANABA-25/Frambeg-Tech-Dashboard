const LogoutButton = ({ onClick }) => {
  return (
    <button
      className="text-xs bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg md:text-[1.2rem] md:w-[7rem] md:p-3 lg:text-xs lg:w-[4rem] lg:p-2"
      onClick={onClick}
    >
      Log out
    </button>
  );
};

export default LogoutButton;
