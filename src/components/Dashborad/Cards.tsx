import type React from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

export type CardProps = {
  mainIcon: React.ReactNode;
  trendIcon: "UP" | "DOWN" ;
  percentage: number;
  name: string;
  cost: string;
  color : string
};
const Cards = ({ mainIcon, trendIcon, percentage, name, cost,color }: CardProps) => {
  return (
    <>
      <div className="shadow-2xl border border-gray-200 p-6 px-8 space-y-4 rounded-xl">
        <div className="percentage flex gap-4 justify-center items-center">
          <div className={`p-2 rounded-md bg-[#F0FDF4] `}>
            {mainIcon}
          </div>
          <div className="flex gap-2">
            {trendIcon == "DOWN" ? (
              <FaArrowTrendDown color={"red"} size={24} />
            ) : (
              <FaArrowTrendUp color={"green"} size={24} />
            )}
            <p className={`text-sm ${color}`}>{percentage}</p>
          </div>
        </div>
        <div className="cost space-y-1">
          <p className="opacity-65 text-base">{name}</p>
          <p className="text-balance"> {cost}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
