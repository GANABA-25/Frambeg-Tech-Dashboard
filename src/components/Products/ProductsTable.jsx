import React from "react";
import ProductsCard from "../ProductsCard";

const ProductsTable = () => {
  const products = [
    {
      image:
        "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711545517/FrambegTech/ALLPRODUCTS/toaster_2_rdkryz.png",
      productName: "Toaster",
      price: "140",
      quantity: "300",
      sold: "70",
    },
    {
      image:
        "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541590/FrambegTech/HOME%20PAGE/Laptop_ybu2rq.png",
      productName: "Macbook Pro",
      price: "2500",
      quantity: "130",
      sold: "80",
    },
    {
      image:
        "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541587/FrambegTech/HOME%20PAGE/homeSpeaker_fylaiu.png",
      productName: "Bluetooth Speaker",
      price: "100",
      quantity: "160",
      sold: "60",
    },
    {
      image:
        "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541575/FrambegTech/HOME%20PAGE/air-conditioner_bmp6ng.png",
      productName: "Air Conditioner",
      price: "500",
      quantity: "300",
      sold: "65",
    },
    {
      image:
        "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541608/FrambegTech/HOME%20PAGE/washing-machine_lluqxz.png",
      productName: "Washing Machine",
      price: "380",
      quantity: "300",
      sold: "80",
    },
    {
      image:
        "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1711541609/FrambegTech/HOME%20PAGE/wirelessHeadPhone_cwjtzp.png",
      productName: "HeadPhone",
      price: "380",
      quantity: "100",
      sold: "30",
    },
  ];

  return (
    <div>
      <table className="w-full font-inter">
        <thead>
          <tr className="text-xs uppercase opacity-50">
            <th className="p-4 text-start">Products</th>
            <th className="p-4 text-start">Price</th>
            <th className="p-4 text-start">Quantity</th>
            <th className="p-4 text-start">Sold</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductsCard key={index} {...product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
