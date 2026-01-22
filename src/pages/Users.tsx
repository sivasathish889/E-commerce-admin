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
    },
    {
      id: 2,
      title: "Active Users",
      value: "987",
      percentage: "+3% from last month",
    },
    {
      id: 3,
      title: "New This Month",
      value: "123",
      percentage: "+10% from last month",
    },
    {
      id: 4,
      title: "Suspended Users",
      value: "12",
      percentage: "-2% from last month",
    },
  ]);
  return (
    <div className="px-5 min-w-full h-full">
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
        {cardsData.map(({ id, title, value, percentage }) => (
          <Cards id={id} title={title} value={value} percentage={percentage} />
        ))}
      </div>
      <main className="main mt-5 border border-gray-300 rounded-md bg-white">
        <UserList />
      </main>
    </div>
  );
};

export default Users;
