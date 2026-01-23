import { useState } from "react";
import { GoPlus } from "react-icons/go";
import OrderList from "../components/Orders/OrderList";

const Orders = () => {
  const [activeTab, setActiveTab] = useState<
    "ALL" | "PENDING" | "PROCESSING" | "SHIPPED" | "DELIVERED"
  >("ALL");
  return (
    <div className="min-h-full w-full">
      <div className="header flex justify-between gap-6 items-center py-5">
        <div className="space-y-1">
          <p className="text-md md:text-2xl font-semibold">Order Management</p>
          <p className="text-sm whitespace-nowrap md:text-base opacity-65">
            Track and manage customer orders, shipments, and returns
          </p>
        </div>
        <div>
          <button className="bg-linear-to-r from-gradient-primary whitespace-nowrap to-gradient-secondary text-white cursor-pointer px-6 py-2 rounded-md text-base flex justify-center items-center gap-2">
            <GoPlus size={20} />
            Add Users
          </button>
        </div>
      </div>
      <main className="bg-white rounded-lg border border-gray-300">
        <div className="tabbar bg-black/15 inline-block gap-1 md:gap-3 px-1 md:px-3 py-1 rounded-4xl border border-black/20 text-sm mt-5 ">
          <div className="flex text-center gap-4">
            <p
              className={`rounded-2xl px-2 md:px-5 py-0.5 cursor-pointer transition-all ease-in-out duration-200 shadow-2xl ${activeTab === "ALL" && "bg-white shadow-md"}`}
              onClick={() => setActiveTab("ALL")}
            >
              All
            </p>
            <p
              className={`rounded-2xl px-2 md:px-5 py-0.5 cursor-pointer transition-all ease-in-out duration-200 shadow-2xl  ${activeTab === "PENDING" && "bg-white"}`}
              onClick={() => setActiveTab("PENDING")}
            >
              Pending
            </p>
            <p
              className={`rounded-2xl px-2 md:px-5 py-0.5 cursor-pointer transition-all ease-in-out duration-200 shadow-2xl  ${activeTab === "PROCESSING" && "bg-white"}`}
              onClick={() => setActiveTab("PROCESSING")}
            >
              Processing
            </p>
            <p
              className={`rounded-2xl px-2 md:px-5 py-0.5 cursor-pointer transition-all ease-in-out duration-200 shadow-2xl  ${activeTab === "SHIPPED" && "bg-white"}`}
              onClick={() => setActiveTab("SHIPPED")}
            >
              Shipped
            </p>
            <p
              className={`rounded-2xl px-2 md:px-5 py-0.5 cursor-pointer transition-all ease-in-out duration-200 shadow-2xl  ${activeTab === "DELIVERED" && "bg-white"}`}
              onClick={() => setActiveTab("DELIVERED")}
            >
              Staffs
            </p>
          </div>
        </div>
        <div className="order-list">
          {/* Table Component */}
          <OrderList />
        </div>
      </main>
    </div>
  );
};

export default Orders;
