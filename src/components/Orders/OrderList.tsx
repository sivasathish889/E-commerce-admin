import { useEffect, useState } from "react";
import type { OrderType } from "../../@types/types";

const OrderList = () => {
  // @ts-ignore
  const [orders, setOrders] = useState<OrderType[]>([
    {
      id: 1,
      customer: "John Doe",
      date: "2024-06-01",
      items: 3,
      status: "Shipped",
      total: 150.0,
    },
    {
      id: 2,
      customer: "Jane Smith",
      date: "2024-06-03",
      items: 1,
      status: "Processing",
      total: 75.5,
    },
    {
      id: 3,
      customer: "Alice Johnson",
      date: "2024-06-05",
      items: 2,
      status: "Pending",
      total: 200.0,
    },
    {
      id: 4,
      customer: "Bob Brown",
      date: "2024-06-07",
      items: 5,
      status: "Delivered",
      total: 320.0,
    },
    {
      id: 5,
      customer: "Charlie Davis",
      date: "2024-06-09",
      items: 4,
      status: "Cancelled",
      total: 180.0,
    },
    {
      id: 6,
      customer: "Diana Evans",
      date: "2024-06-11",
      items: 2,
      status: "Shipped",
      total: 90.0,
    },
  ]);
  // @ts-ignore
  const [currentPage, setCurrentPage] = useState(1);
  // @ts-ignore
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetch(
      `https://example.com/api/data?page=${currentPage}&limit=${itemsPerPage}`,
    )
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error(error));
  }, [currentPage, itemsPerPage]);

  // @ts-ignore
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = orders.slice(startIndex, endIndex);

  return (
    <div>
      <table className=" w-full border-collapse m-3 rounded-md overflow-hidden shadow-md">
        <thead>
          <tr className="w-full border-b border-black/15 bg-gray-200">
            {[
              "Order ID",
              "Customer",
              "Date",
              "Items",
              "Status",
              "Total",
              "Actions",
            ].map((header) => (
              <th
                key={header}
                className="py-4 text-start px-5 text-sm text-gray-600 font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-700">
          {currentOrders.map(({ id, customer, date, items, status, total }) => (
            <tr
              key={id}
              className="border-b border-black/15 hover:bg-gray-50 text-xs md:text-base"
            >
              <td className="p-2 md:py-3 md:px-4">{id}</td>
              <td className="p-2 md:py-3 md:px-4">{customer}</td>
              <td className="p-2 md:py-3 md:px-4">{date}</td>
              <td className="p-2 md:py-3 md:px-4">{items}</td>
              <td className="p-2 md:py-3 md:px-4">{status}</td>
              <td className="p-2 md:py-3 md:px-4">${total.toFixed(2)}</td>
              <td className="p-2 md:py-3 md:px-4">
                <div className="flex gap-2 md:gap-5">
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>
                  <button className="text-red-600 hover:underline">
                    Cancel
                  </button>
                </div>
              </td>
            </tr>
          ))}
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

export default OrderList;
