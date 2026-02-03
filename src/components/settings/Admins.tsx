import { useEffect, useState } from "react";
import Button from "../ui/Button";
import type { UserType } from "../../@types/types";
import { BsTrash } from "react-icons/bs";
import { cn } from "../../utils/cn";

const Admins = () => {
  // @ts-ignore
  const [userData, setUserData] = useState<UserType[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Customer",
      status: "Active",
      orders: "15",
      totalSpent: "$1,200",
      lastActive: "2024-06-10",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Customer",
      status: "Inactive",
      orders: "20",
      totalSpent: "$1,800",
      lastActive: "2024-06-12",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Customer",
      status: "Active",
      orders: "10",
      totalSpent: "$800",
      lastActive: "2024-06-15",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      role: "Customer",
      status: "Active",
      orders: "25",
      totalSpent: "$2,000",
      lastActive: "2024-06-18",
    },
    {
      id: 5,
      name: "Admin User",
      email: "admin@example.com",
      role: "Staff",
      status: "Active",
      orders: "N/A",
      totalSpent: "$0",
      lastActive: "2024-06-20",
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
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  }, [currentPage, itemsPerPage]);

  // @ts-ignore
  const totalPages = Math.ceil(userData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = userData.slice(startIndex, endIndex);
  return (
    <div className="p-5">
      <header className="flex justify-between items-center">
        <p className="text-lg font-semibold">Admin Users</p>
        <Button size="md">+ Add New Admin</Button>
      </header>
      <main className="mt-4">
        <table className="table-auto w-full">
          <tbody className="w-full">
            {currentUsers.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 justify-around w-full border-b border-gray-200 flex"
              >
                <td className="px-4 py-2 text-sm flex items-center gap-3 whitespace-nowrap my-2 bg">
                  <div className="profile-pic bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex justify-center items-center font-semibold">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                  <div className="name-email flex flex-col">
                    <span className="font-medium">{user.name}</span>
                    <span className="text-xs text-gray-500">{user.email}</span>
                  </div>
                </td>
                <td className="flex justify-end-safe items-center w-full ">
                  <div className="px-4 py-2 text-violet-600 text-sm">
                    {user.role}
                  </div>
                  <div
                    className={cn(
                      "px-4 py-2 text-sm font-medium",
                      user.status === "Active"
                        ? "text-green-600"
                        : "text-red-600",
                    )}
                  >
                    {user.status}
                  </div>
                  <div className="p-2 md:px-4 md:py-2 cursor-pointer">
                    <BsTrash color="red" />
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
      </main>
    </div>
  );
};

export default Admins;
