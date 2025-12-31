import type { ProductCardsType } from "../../pages/Products";

const Cards = ({ color, name, value, id }: ProductCardsType) => {
  return (
    <div
      className="card shadow-md border border-black/15 p-6 rounded-xl w-40 bg-white"
      key={id}
    >
      <div className="card-header space-y-2">
        <p className="text-sm opacity-65">{name}</p>
        <p className="text-lg" style={{ color: color }}>
          {value}
        </p>{" "}
      </div>
    </div>
  );
};

export default Cards;
