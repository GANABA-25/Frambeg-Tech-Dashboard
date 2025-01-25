import React from "react";

const MetricCard = ({
  totalNumber,
  percentage,
  icon,
  label,
  backgroundColor,
}) => {
  return (
    <div className="font-inter">
      <div
        className="grid gap-4 rounded-xl border text-white p-4 shadow-lg"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="bg-white text-black rounded-full w-[2.5rem] p-2 text-2xl">
          {icon}
        </div>
        <div className="grid gap-2">
          <div className="flex justify-between items-center">
            <h1> {totalNumber}</h1>
            <h1> + {percentage}%</h1>
          </div>

          <hi>{label}</hi>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
