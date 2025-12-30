import React, { useState } from "react";

const RecentOrders = () => {
  const [data, setData] = useState([
    {
      id: "1",
      name: "John",
      Product: "Headphone",
      amount: "7834",
      status: "PENDING",
      Date: "22-10-2003",
    },
    {
      id: "2",
      name: "Sarah",
      Product: "Laptop",
      amount: "12999",
      status: "COMPLETED",
      Date: "15-11-2023",
    },
    {
      id: "3",
      name: "Mike",
      Product: "Smartphone",
      amount: "9999",
      status: "PENDING",
      Date: "01-12-2023",
    },
    {
      id: "4",
      name: "Emily",
      Product: "Smartwatch",
      amount: "3499",
      status: "COMPLETED",
      Date: "10-12-2023",
    },
    {
      id: "5",
      name: "David",
      Product: "Tablet",
      amount: "5999",
      status: "PENDING",
      Date: "20-12-2023",
    },
  ]);
  return (
    <div className="w-full p-4 rounded-lg shadow-sm">
      <div className="flex justify-between px-5 items-center mb-5">
        <div>
          <p className="text-base">Recent Orders</p>
          <p className="text-sm opacity-65">Latest customer orders and their status</p>
        </div>
        <div className="see-all">
          <p className="bg-linear-to-r from-[#34D399] to-[#059669] px-2 py-1 rounded-md cursor-pointer text-white text-base">View All</p>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="w-full border-b border-black/15">
            {[
              "Id",
              "Name",
              "Product",
              "Amount",
              "Status",
              "Date",
              "Action",
            ].map((item, index) => (
              <td key={index} className="p-4 text-sm font-semibold text-gray-600">
                {item}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-black/15 hover:bg-gray-50 text-xs md:text-base">
              <td className="p-4">{item.id}</td>
              <td className="p-4">{item.name}</td>
              <td className="p-4">{item.Product}</td>
              <td className="p-4">₹{item.amount}</td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    item.status === "COMPLETED"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="p-4">{item.Date}</td>
              <td className="p-4">
                <div className="md:flex items-center gap-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 w-full rounded-md text-sm">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 w-full rounded-md text-sm">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
