import React, { useState } from "react";

const TopSellingProduct = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Product 1",
      salesCount: 9238,
      totalAmount: "$47598",
    },
    {
      id: 2,
      name: "Product 2",
      salesCount: 9238,
      totalAmount: "$47598",
    },
    {
      id: 3,
      name: "Product 3",
      salesCount: 9238,
      totalAmount: "$47598",
    },
    {
      id: 4,
      name: "Product 4",
      salesCount: 9238,
      totalAmount: "$47598",
    },
    {
      id: 5,
      name: "Product 5",
      salesCount: 9238,
      totalAmount: "$47598",
    },
  ]);
  return (
    <div className="px-6 py-6">
      <p className="mb-5 font-semibold text-base">Top Selling Products</p>
      {data.map((item, idx) => (
        <div className="flex flex-col">
          <div key={idx} className="flex justify-between items-center my-2">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-xl mr-4 flex justify-center items-center opacity-65">
                {idx + 1}
              </div>
              <div>
                <p className="text-gray-800 text-base">{item.name}</p>
                <p className="text-gray-600 text-xs">{item.salesCount} sales</p>
              </div>
            </div>
            <p className="text-gray-800 ">{item.totalAmount}</p>
          </div>
          <p className="w-full border-b border-black/5"></p>
        </div>
      ))}
    </div>
  );
};

export default TopSellingProduct;
