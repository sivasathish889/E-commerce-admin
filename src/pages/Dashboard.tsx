import { FaBox, FaIndianRupeeSign, FaUser } from "react-icons/fa6";
import Cards, { type CardProps } from "../components/Dashborad/Cards";
import { useState } from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import SalesChart from "../components/Dashborad/SalesChart";
import RevenueGraph from "../components/Dashborad/RevenueGraph";
import TopSellingProduct from "../components/Dashborad/TopSellingProduct";

const Dashboard = () => {
  const [cardData, setCardData] = useState<CardProps[]>([
    {
      name: "Total Revenue",
      cost: "$ 45000",
      percentage: 10,
      mainIcon: (
        <FaIndianRupeeSign size={24} color="oklch(72.3% 0.219 149.579)" />
      ),
      trendIcon: "UP",
      color: "#F0FDF4",
    },
    {
      name: "Orders",
      cost: "$ 187232",
      mainIcon: <MdShoppingCartCheckout size={24} color="blue" />,
      percentage: 23,
      trendIcon: "DOWN",
      color: "blue",
    },
    {
      name: "Users",
      cost: "12000",
      mainIcon: <FaUser size={24} color="purple" />,
      percentage: 34,
      trendIcon: "DOWN",
      color: "purple",
    },
    {
      name: "Products",
      cost: "12860",
      mainIcon: <FaBox size={24} color="orange" />,
      percentage: 34,
      trendIcon: "DOWN",
      color: "orange",
    },
  ]);
  return (
    <div className=" min-w-full h-full">
      <header className="header m-6">
        <p className=" text-sm font-bold md:text-2xl">DashBorad</p>
        <p className=" text-xs md:text-base">
          Welcome back! Here's what's happening with your store today.
        </p>
      </header>
      <div className="cards flex not-md:justify-center md:justify-around mx-2 md:mx-6 mt-3 flex-wrap whitespace-break-spaces gap-4 ">
        {cardData.map(
          ({ cost, mainIcon, name, percentage, trendIcon, color }, index) => (
            <Cards
              key={index}
              name={name}
              cost={cost}
              percentage={percentage}
              mainIcon={mainIcon}
              trendIcon={trendIcon}
              color={color}
            />
          )
        )}
      </div>
      <div className="flex flex-wrap mt-7 gap-5 justify-around md:mt-10 m-3 ">
        <div className="chart w-full lg:w-[48%] p-6 h-full border border-gray-200 rounded-2xl shadow-2xl  ">
          <SalesChart />
        </div>
        <div className="w-full lg:w-[48%] border border-gray-200 rounded-2xl shadow-2xl p-3 ">
          <RevenueGraph />
        </div>
      </div>

      <div className="flex flex-wrap mt-7 gap-5 justify-around md:mt-10 m-3 ">
        <div className="chart w-full lg:w-[48%] h-full border border-gray-200 rounded-2xl shadow-2xl  ">
          <TopSellingProduct />
        </div>
        <div className="w-full lg:w-[48%] border  border-gray-200 rounded-2xl shadow-2xl p-3 ">
          {/* <RevenueGraph /> */}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
