import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const UserList = () => {
  const [activeTab, setActiveTab] = useState<"ALL" | "CUSTOMERS" | "STAFF">(
    "ALL",
  );
  return (
    <div className=" p-4 rounded-md  gap-8  text-gray-600 font-medium">
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
      <div className="search-bar flex mt-5">
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
    </div>
  );
};

export default UserList;
