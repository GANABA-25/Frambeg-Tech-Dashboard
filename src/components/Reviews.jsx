import React from "react";

import ReviewCard from "./ReviewCard";
import Button from "./Button";

const Reviews = () => {
  const ReviewData = [
    {
      title: "Positive Reviews",
      value: 80,
    },
    {
      title: "Natural Reviews",
      value: 17,
    },
    {
      title: "Negative Reviews",
      value: 3,
    },
    {
      title: "Products Reviews",
      value: 90,
    },
  ];

  return (
    <div className="grid gap-4 bg-white rounded-lg border shadow-lg font-inter text-sm p-5">
      <h1 className="font-bold">Reviews</h1>

      {ReviewData.map((Review, index) => (
        <ReviewCard key={index} {...Review} />
      ))}

      <div className="flex items-center justify-between">
        <h1 className="font-bold">Frambeg Tech Reviews</h1>
        <Button title="View all reviews" Color="black" />
      </div>
    </div>
  );
};

export default Reviews;
