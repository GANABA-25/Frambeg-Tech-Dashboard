import React from "react";
import { ProgressBar } from "./ProgressBar";
import Button from "./Button";

const Reviews = () => {
  return (
    <div className="grid gap-4 bg-white rounded-lg shadow-lg font-inter text-sm p-4">
      <h1 className="font-bold">Reviews</h1>
      <div className="grid gap-2">
        <div className="flex justify-between">
          <h1>Positive Reviews</h1>
          <h1 className=" opacity-70">80%</h1>
        </div>
        <ProgressBar value={80} />
      </div>

      <div className="grid gap-2">
        <div className="flex justify-between">
          <h1>Natural Reviews</h1>
          <h1 className=" opacity-70">17%</h1>
        </div>
        <ProgressBar value={17} />
      </div>

      <div className="grid gap-2">
        <div className="flex justify-between">
          <h1>Negative Reviews</h1>
          <h1 className=" opacity-70">3%</h1>
        </div>
        <ProgressBar value={3} />
      </div>
      <div className="grid gap-2">
        <div className="flex justify-between">
          <h1>Products Reviews</h1>
          <h1 className=" opacity-70">90%</h1>
        </div>
        <ProgressBar value={90} />
      </div>

      <div className="flex items-center justify-between">
        <h1 className="font-bold">Frambeg Tech Reviews</h1>
        <Button title="View all reviews" Color="black" />
      </div>
    </div>
  );
};

export default Reviews;
