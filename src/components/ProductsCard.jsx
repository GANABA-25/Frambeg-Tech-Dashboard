import React from "react";
import { ProgressBar } from "./ProgressBar";

const ProductsCard = ({ image, productName, price, quantity, sold }) => {
  const formattedPrice = Number(price).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const color = sold >= 70 ? "success" : "default";

  return (
    <tr className="text-xs text-start font-inter">
      <td className="border-y border-gray-300 p-4">
        <div className="flex gap-8 items-center font-semibold">
          <img
            className="w-[2rem] h-[2rem] object-contain"
            src={image}
            alt={productName}
          />
          {productName}
        </div>
      </td>
      <td className="border-y border-gray-300 p-4 opacity-75">
        ₵{formattedPrice}
      </td>
      <td className="border-y border-gray-300 p-4 opacity-75">{quantity}</td>
      <td className="border-y border-gray-300 p-4 w-[10rem]">
        {sold}% <ProgressBar variant={color} value={sold} />
      </td>
    </tr>
  );
};

export default ProductsCard;
