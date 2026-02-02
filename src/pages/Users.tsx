import { useState } from "react";
import { GoPlus } from "react-icons/go";
import Cards from "../components/Users/Cards";
import type { UserCardType } from "../@types/types";
import UserList from "../components/Users/UserList";

const Users = () => {
  // @ts-ignore
  const [cardsData, setCardsData] = useState<UserCardType[]>([
    {
      id: 1,
      title: "Total Users",
      value: "1,234",
      percentage: "+5% from last month",
      status: "UP",
    },
    {
      id: 2,
      title: "Active Users",
      value: "987",
      percentage: "+3% from last month",
      status: "UP",
    },
    {
      id: 3,
      title: "New This Month",
      value: "123",
      percentage: "+10% from last month",
      status: "UP",
    },
    {
      id: 4,
      title: "Suspended Users",
      value: "12",
      percentage: "-2% from last month",
      status: "DOWN",
    },
  ]);
  return (
    <div className="min-w-full h-full">
      <div className="header flex justify-between gap-6 items-center">
        <div>
          <p className="text-md md:text-2xl font-semibold">Users Management</p>
          <p className="text-sm whitespace-nowrap md:text-base opacity-65">
            Manage user accounts, permissions, and activity
          </p>
        </div>
        <div>
          <button className="bg-linear-to-r from-gradient-primary whitespace-nowrap to-gradient-secondary text-white cursor-pointer px-6 py-2 rounded-md text-base flex justify-center items-center gap-2">
            <GoPlus size={20} />
            Add Users
          </button>
        </div>
      </div>
      <div className="cards flex w-full justify-around mt-8 flex-wrap gap-5">
        {cardsData.map(({ id, title, value, percentage, status }) => (
          <Cards
            id={id}
            title={title}
            value={value}
            percentage={percentage}
            status={status}
          />
        ))}
      </div>
      <div className="bg-white border border-gray-300 my-5 p-4 rounded-md">
        <main className="main">
          <UserList />
        </main>        
      </div>
    </div>
  );
};

export default Users;
