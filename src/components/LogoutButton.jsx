const LogoutButton = ({ onClick }) => {
  return (
    <button
      className="text-xs bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
      onClick={onClick}
    >
      Log out
    </button>
  );
};

export default LogoutButton;
