import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { MdDeleteForever } from "react-icons/md";
import Title from "../ui/Title";

const ProductList = () => {
  // @ts-ignore
  const [currentPage, setCurrentPage] = useState(1);
  // @ts-ignore
  const [itemsPerPage, setItemsPerPage] = useState(10);
  // @ts-ignore
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

  useEffect(() => {
    fetch(
      `https://example.com/api/data?page=${currentPage}&limit=${itemsPerPage}`,
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [currentPage, itemsPerPage]);

  // @ts-ignore
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div className="w-full rounded-lg shadow-xl border border-black/10 p-4 bg-white">
      <header className="mb-3">
        <Title title="Product List" subtitle="Manage your product inventory" />
      </header>
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
        <div className="view-all  cursor-pointer rounded-md bg-linear-to-r from-gradient-primary to-gradient-secondary">
          <p className=" px-6 py-1  text-white cursor-pointer z-10 select-none text-base">
            View All
          </p>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="w-full border-b border-black/15 bg-gray-200">
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
                className="py-4 text-start px-5 text-sm text-gray-600 font-semibold"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-700">
          {currentItems.map(
            ({ category, id, price, productName, stock, status }) => (
              <tr
                key={id}
                className="border-b border-black/15 hover:bg-gray-50 text-xs md:text-base"
              >
                <td className="p-2 md:py-3 md:px-4">{id}</td>
                <td className="p-2 md:py-3 md:px-4">{productName}</td>
                <td className="p-2 md:py-3 md:px-4">{category}</td>
                <td className="p-2 md:py-3 md:px-4">{price}</td>
                <td className="p-2 md:py-3 md:px-4">{stock}</td>
                <td className="p-2 md:py-3 md:px-4">{status}</td>
                <td className="p-2 md:py-3 md:px-4">
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
            ),
          )}
        </tbody>
      </table>
      <div className="pagination w-full flex justify-end items-center mt-4">
        <button
          className="px-3 py-1 mt-4 mr-2 bg-gray-200 rounded-md disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-sm md:text-base mt-4">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-3 py-1 mt-4 ml-2 bg-gray-200 rounded-md disabled:opacity-50"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
