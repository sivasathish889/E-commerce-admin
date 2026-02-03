import CategoryList from "../components/CategoryList";
import Button from "../components/ui/Button";
import Title from "../components/ui/Title";

const Category = () => {
    
  return (
    <div className="m-5">
      <div className="flex justify-between items-center">
        <div>
          <Title title="Category" subtitle="Manage your product categories" />
        </div>
        <Button size="md">+ Add Category</Button>
      </div>
      <div className="m-4">
        <CategoryList />
      </div>
    </div>
  );
};

export default Category;
