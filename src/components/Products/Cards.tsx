import type { ProductCardsType } from "../../@types/types";

const Cards = ({ color, name, value, id }: ProductCardsType) => {
  return (
    <div
      className="card shadow-sm border border-gray-200 p-6 rounded-xl w-48 bg-white h-32"
      key={id}
    >
      <div className="card-header space-y-2 flex flex-col justify-center ">
        <p className="text-base opacity-65">{name}</p>
        <p className="text-lg" style={{ color: color }}>
          {value}
        </p>{" "}
      </div>
    </div>
  );
};

export default Cards;
