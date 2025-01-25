import React from "react";

const OrderTimeline = ({ color, info, dateAndTime }) => {
  return (
    <div className="font-inter font-semibold">
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
          />
          <div className="w-1 h-[3rem] bg-gray-200" />
        </div>
        <div className="text-xs">
          <h1 className="mb-1">{info}</h1>
          <p className=" text-xs opacity-50">{dateAndTime}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderTimeline;
