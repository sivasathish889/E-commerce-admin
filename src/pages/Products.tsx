import { useState } from "react";
import { GoPlus } from "react-icons/go";
import Cards from "../components/Products/Cards";
import ProductList from "../components/Products/ProductList";
import type { ProductCardsType } from "../@types/types";

const Products = () => {
  // @ts-ignore
  const [data, setData] = useState<ProductCardsType[]>([
    {
      id: 1,
      name: "Total Products",
      value: 2131,
      color: "#00000",
    },
    {
      id: 2,
      name: "In Stock",
      value: 2123,
      color: "#4CAF50",
    },
    {
      id: 3,
      name: "Low Stock",
      value: 3213,
      color: "#FF9800",
    },
    {
      id: 4,
      name: "Out of Stock",
      value: 2133,
      color: "#F44336",
    },
  ]);
  return (
    <div className="">
      <div className="header flex justify-between items-center">
        <div>
          <p className="text-2xl font-semibold">Products</p>
          <p className="text-base opacity-65">Manage your product inventory</p>
        </div>
        <div>
          <button className="bg-linear-to-r from-gradient-primary to-gradient-secondary text-white cursor-pointer px-6 py-2 rounded-md text-base flex justify-center items-center gap-2">
            <GoPlus size={20} />
            Add Product
          </button>
        </div>
      </div>
      <div className="cards flex w-full justify-around mt-8 flex-wrap gap-5">
        {data.map(({ color, id, name, value }) => (
          <Cards color={color} id={id} name={name} value={value} />
        ))}
      </div>
      <main className="main mt-10 ">
        <ProductList />
      </main>
    </div>
  );
};

export default Products;
