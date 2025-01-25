import React from "react";
import { ProgressBar } from "./ProgressBar";

const ReviewCard = ({ title, value }) => {
  const color = value >= 70 ? "success" : "default";
  return (
    <div className="grid gap-2 font-inter">
      <div className="flex justify-between">
        <h1>{title}</h1>
        <h1 className=" opacity-70">{value}%</h1>
      </div>
      <ProgressBar variant={color} value={value} />
    </div>
  );
};

export default ReviewCard;
