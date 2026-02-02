import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { LuShieldBan } from "react-icons/lu";
import { MdBlock, MdOutlineMail } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import type { UserType } from "../../@types/types";
import Tooltip from "../Tooltip";
const UserList = () => {
  // @ts-ignore
  const [activeTab, setActiveTab] = useState<"ALL" | "CUSTOMERS" | "STAFF">(
    "ALL",
  );
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
    }
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
    <div className="p-4 rounded-md  gap-8  text-gray-600 ">
      <div className="tabbar bg-black/15 inline-block  gap-3 px-3 py-1 rounded-4xl border border-black/20 text-sm ">
        <div className="flex text-center gap-4">
          <p
            className={`rounded-2xl px-5 py-0.5 cursor-pointer transition-all ease-in-out duration-200 shadow-2xl ${activeTab === "ALL" && "bg-white shadow-md"}`}
            onClick={() => setActiveTab("ALL")}
          >
            All
          </p>
          <p
            className={`rounded-2xl px-5 py-0.5 cursor-pointer transition-all ease-in-out duration-200 shadow-2xl  ${activeTab === "CUSTOMERS" && "bg-white"}`}
            onClick={() => setActiveTab("CUSTOMERS")}
          >
            Customers
          </p>
          <p
            className={`rounded-2xl px-5 py-0.5 cursor-pointer transition-all ease-in-out duration-200 shadow-2xl  ${activeTab === "STAFF" && "bg-white"}`}
            onClick={() => setActiveTab("STAFF")}
          >
            Staffs
          </p>
        </div>
      </div>
      <div className="search-filter flex w-full justify-between mt-6 gap-x-5">
        <div className="search-bar flex  w-[90%]">
          <div className="search-button w-full relative">
            <input
              type="search"
              placeholder="Search by name, email, or role"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border focus:border-black/70 focus:ring-blue-500 w-full placeholder:text-sm pl-10"
            />
            <IoSearchOutline
              size={20}
              opacity={"60%"}
              className="absolute top-3 left-3"
            />
          </div>
        </div>
        <div className="filter w-[10%]  flex gap-2 px-2 py-1 justify-center items-center border border-gray-300 rounded-lg cursor-pointer">
          <FiFilter />
          <p>Filter</p>
        </div>
      </div>
      <div className="listed-users">
        {/* Table Component */}
        <table className="w-full mt-6 table-auto border-collapse ">
          <thead>
            <tr className="bg-gray-200 text-left">
              {["User", "Role", "Status", "Orders", "Spent", "Last Active"].map(
                (header) => (
                  <th
                    key={header}
                    className="px-4 py-2 text-base font-medium text-gray-700"
                  >
                    {header}
                  </th>
                ),
              )}
              <th className="px-4 py-2 text-base text-center font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm flex items-center gap-3 whitespace-nowrap my-2">
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
                <td className="px-4 py-2">{user.role}</td>
                <td
                  className={`px-4 py-2 ${user.status === "Active" ? "text-green-500" : "text-red-500"}`}
                >
                  {user.status}
                </td>
                <td className="p-2 md:px-4 md:py-2">{user.orders}</td>
                <td className="p-2 md:px-4 md:py-2">{user.totalSpent}</td>
                <td className="p-2 md:px-4 md:py-2">{user.lastActive}</td>
                <td className="p-2 md:px-4 md:py-2 flex gap-4 justify-between">
                    <Tooltip text="Suspend User">
                      <LuShieldBan size={20} className="cursor-pointer" />
                    </Tooltip>
                  <Tooltip text="Send Email">
                    <MdOutlineMail size={20} className="cursor-pointer" />
                  </Tooltip>
                  <Tooltip text="Block User">
                    <MdBlock size={20} className="cursor-pointer" color="red" />
                  </Tooltip>
                  <Tooltip text="More Actions">
                    <BsThreeDotsVertical size={20} className="cursor-pointer" />
                  </Tooltip>
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
    </div>
  );
};

export default UserList;
