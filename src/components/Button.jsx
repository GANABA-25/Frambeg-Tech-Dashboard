import React from "react";

const Button = ({ title, onClick, Color }) => {
  return (
    <button
      onClick={onClick}
      className="
        text-white text-sm md:text-base lg:text-sm font-medium text-center cursor-pointer transition-colors duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg p-2 md:p-3 lg:p-2 w-auto"
      style={{ backgroundColor: Color }}
    >
      {title}
    </button>
  );
};

export default Button;
