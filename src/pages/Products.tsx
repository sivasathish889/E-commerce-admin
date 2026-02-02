import { useState } from "react";
import { GoPlus } from "react-icons/go";
import Cards from "../components/Products/Cards";
import ProductList from "../components/Products/ProductList";
import type { ProductCardsType } from "../@types/types";
import Button from "../components/ui/Button";
import Title from "../components/ui/Title";
import AddProductModal from "../components/Products/AddProductModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);
  return (
    <div className="md:ms-4">
      <div className="header flex justify-between items-center">
        <div>
          <Title title="Products" subtitle="Manage your product inventory" />
        </div>
        <div>
          <Button size="md" onClick={() => setIsModalOpen(!isModalOpen)}>
            <GoPlus size={20} />
            Add Product
          </Button>
        </div>
      </div>
      <div className="cards flex w-full justify-around mt-8 flex-wrap gap-5">
        {data.map(({ color, id, name, value }) => (
          <Cards color={color} id={id} name={name} value={value} />
        ))}
      </div>
      {/* Product Lists */}
      <main className="main mt-10 ">
        <ProductList />
      </main>
      {/* Add Product Modal */}
      {isModalOpen && <AddProductModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </div>
  );
};

export default Products;
