import  { useState } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const TopSellingProduct = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Product 1",
      salesCount: 9238,
      totalAmount: "$47598",
      trend: "UP",
    },
    {
      id: 2,
      name: "Product 2",
      salesCount: 9238,
      totalAmount: "$47598",
      trend: "UP",
    },
    {
      id: 3,
      name: "Product 3",
      salesCount: 9238,
      totalAmount: "$47598",
      trend: "DOWN",
    },
    {
      id: 4,
      name: "Product 4",
      salesCount: 9238,
      totalAmount: "$47598",
      trend: "DOWN",
    },
    {
      id: 5,
      name: "Product 5",
      salesCount: 9238,
      totalAmount: "$47598",
      trend: "UP",
    },
  ]);
  return (
    <div className="px-10 py-8">
      <p className="mb-5 font-semibold text-base">Top Selling Products</p>
      {data.map((item, idx) => (
        <div className="flex flex-col">
          <div key={idx} className="flex justify-between items-center my-2">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-700 text-white rounded-xl mr-4 flex justify-center items-center opacity-65">
                {idx + 1}
              </div>
              <div>
                <p className="text-gray-800 text-base">{item.name}</p>
                <p className="text-gray-600 text-xs">{item.salesCount} sales</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-800 ">{item.totalAmount}</p>
              {item.trend == "UP" ? (
                <div className="flex gap-2">
                  <FaArrowTrendDown
                    color="oklch(57.7% 0.245 27.325)"
                    size={12}
                  />
                  <p className="text-red-600 text-xs">- 10%</p>
                </div>
              ) : (
                <div className="flex gap-2">
                  <FaArrowTrendUp
                    color="oklch(62.7% 0.194 149.214)"
                    size={12}
                  />
                  <p className="text-green-600 text-xs">+ 10%</p>
                </div>
              )}
            </div>
          </div>
          <p className="w-full border-b border-black/5"></p>
        </div>
      ))}
      <div className="text-center w-full mt-5">
        <p className="border px-3 cursor-pointer py-1 inline-block rounded-md text-base">View More</p>
      </div>
    </div>
  );
};

export default TopSellingProduct;
