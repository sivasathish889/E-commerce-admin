import { useState } from "react";
import General from "../components/settings/General";
import Admins from "../components/settings/Admins";
// import Security from "../components/settings/Security";
// import Payment from "../components/settings/Payment";

const Settings = () => {
  const [activeTab, setActiveTab] = useState<
    "GENERAL" | "ADMIN" | "SECURITY" | "PAYMENT"
  >("GENERAL");
  return (
    <div className="md:m-5">
      <div className="header flex justify-between items-center p-3">
        <div >
          <p className="text-2xl font-semibold">Settings & Security</p>
          <p className="text-base opacity-65">
            Manage your store settings, admin accounts, and security preferences
          </p>
        </div>
      </div>
      <main className="bg-white rounded-lg border border-gray-300 px-4 shadow-sm">
        <div className="tabbar bg-black/15 inline-block gap-1 md:gap-3 px-1 md:px-3 py-1 rounded-4xl border border-black/20 text-sm mt-5 ">
          <div className="flex text-center gap-4">
            <p
              className={`rounded-2xl px-2 md:px-5 py-0.5 cursor-pointer transition-all ease-in-out duration-200 shadow-2xl ${activeTab === "GENERAL" && "bg-white shadow-md"}`}
              onClick={() => setActiveTab("GENERAL")}
            >
              General
            </p>
            <p
              className={`rounded-2xl px-2 md:px-5 py-0.5 cursor-pointer transition-all ease-in-out duration-200 shadow-2xl  ${activeTab === "ADMIN" && "bg-white"}`}
              onClick={() => setActiveTab("ADMIN")}
            >
              Admin Users
            </p>
            {/* <p
              className={`rounded-2xl px-2 md:px-5 py-0.5 cursor-pointer transition-all ease-in-out duration-200 shadow-2xl  ${activeTab === "SECURITY" && "bg-white"}`}
              onClick={() => setActiveTab("SECURITY")}
            >
              Security
            </p>
            <p
              className={`rounded-2xl px-2 md:px-5 py-0.5 cursor-pointer transition-all ease-in-out duration-200 shadow-2xl  ${activeTab === "PAYMENT" && "bg-white"}`}
              onClick={() => setActiveTab("PAYMENT")}
            >
              Shipped
            </p> */}
          </div>
        </div>
        <div className="order-list">
          {/* Table Component */}
          {activeTab === "GENERAL" && <General />}
          {activeTab === "ADMIN" && <Admins />}
          {/* {activeTab === "SECURITY" && <Security />}
          {activeTab === "PAYMENT" && <Payment />} */}
        </div>
      </main>
    </div>
  );
};

export default Settings;
