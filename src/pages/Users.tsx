import { useState } from "react";
import Cards from "../components/Users/Cards";
import type { UserCardType } from "../@types/types";
import UserList from "../components/Users/UserList";
import Title from "../components/ui/Title";

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
    <div className="min-w-full h-full md:m-5">
      <div className="header flex justify-between gap-6 items-center">
        <div>
          <Title
            title="Users Management"
            subtitle="Manage user accounts, permissions, and activity"
          />
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
