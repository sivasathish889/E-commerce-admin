import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { MdDeleteForever } from "react-icons/md";

const ProductList = () => {
  const [data, setData] = useState([
    {
      id: 1,
      productName: "Headphone",
      category: "Electronics",
      price: 100,
      stock: 123,
      status: 23,
    },
    {
      id: 2,
      productName: "Laptop",
      category: "Electronics",
      price: 999,
      stock: 45,
      status: 12,
    },
    {
      id: 3,
      productName: "Coffee Maker",
      category: "Appliances",
      price: 79,
      stock: 89,
      status: 34,
    },
    {
      id: 4,
      productName: "Gaming Mouse",
      category: "Electronics",
      price: 59,
      stock: 234,
      status: 45,
    },
    {
      id: 5,
      productName: "Bluetooth Speaker",
      category: "Electronics",
      price: 149,
      stock: 67,
      status: 18,
    },
  ]);
  return (
    <div className="w-full rounded-lg shadow-xl border border-black/10 p-4 bg-white">
      <div className="flex justify-between px-5 items-center mb-5">
        <div className="flex relative w-[70%]">
          <GoSearch className="absolute top-3 opacity-60 left-2" size={18} />
          <input
            type="search"
            name=""
            id=""
            className="w-full p-2 ps-10 focus:outline-2 focus:outline-gradient-secondary/15 rounded-md placeholder:text-sm text:base border border-black/15"
            placeholder="Search Products..."
          />
        </div>
        <div className="see-all">
          <p className="bg-linear-to-r from-gradient-primary to-gradient-secondary px-4 py-1 rounded-md cursor-pointer text-white  text-sm">
            View All
          </p>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="w-full border-b border-black/15">
            {[
              "Id",
              "Name",
              "Category",
              "Price",
              "Stock",
              "Status",
              "Action",
            ].map((item, idx) => (
              <th
                key={idx}
                className="py-4 text-start px-5 text-sm text-gray-600 font-semibold bg-amber-200"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({ category, id, price, productName, stock, status }) => (
            <tr
              key={id}
              className="border-b border-black/15 hover:bg-gray-50 text-xs md:text-base"
            >
              <td className="p-2 md:p-4">{id}</td>
              <td className="p-2 md:p-4">{productName}</td>
              <td className="p-2 md:p-4">{category}</td>
              <td className="p-2 md:p-4">{price}</td>
              <td className="p-2 md:p-4">{stock}</td>
              <td className="p-2 md:p-4">{status}</td>
              <td className="p-2 md:p-4">
                <div className="flex gap-2 md:gap-5">
                  <FaEdit color="blue" size={18} className="cursor-pointer" />
                  <MdDeleteForever
                    color="red"
                    size={21}
                    className="cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
