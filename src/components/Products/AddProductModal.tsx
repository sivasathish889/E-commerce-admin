import { useCallback, useState } from "react";
import type { ModalProps } from "../../@types/types";
import Input from "../ui/Input";
// @ts-ignore
const AddProductModal = ({ isOpen, setIsOpen }: ModalProps) => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      const previewUrls = files.map((file) => URL.createObjectURL(file));
      setPreviewImages(previewUrls);
    },
    [previewImages],
  );

  const selectiveImageRemove = useCallback((index: number) => {
    setPreviewImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }, []);
  return (
    <div
      className={`${isOpen ? "block" : "hidden"} fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50`}
    >
      <div className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 h-fit md:h-10/12 p-6 overflow-auto">
        <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
        <form className="space-y-2">
          <div className="sm:flex justify-between gap-4 w-full">
            <div className="w-full">
              <Input
                label="Product Name *"
                type="text"
                placeholder="Enter product name"
                required
              />
            </div>
            <div className="w-full">
              <Input
                label="SKU *"
                type="number"
                placeholder="Enter product SKU"
                required
              />
            </div>
          </div>
          <div>
            <Input
              label="Description *"
              type="text"
              placeholder="Enter product description"
              required
            />
          </div>
          <div className="sm:flex justify-between gap-4 w-full">
            <div className="w-full">
              <Input
                label="Price *"
                type="number"
                placeholder="Enter product price"
                required
              />
            </div>
            <div className="w-full">
              <Input
                label="Offer Price *"
                type="number"
                placeholder="Enter product offer price"
                required
              />
            </div>
          </div>
          <div className="sm:flex justify-between gap-4 w-full">
            <div className="w-full">
              <Input
                label="Stock Quantity *"
                type="number"
                placeholder="Enter product stock quantity"
                required
              />
            </div>
            <div className="w-full">
              <Input
                label="Low Stock Alert *"
                type="number"
                placeholder="Enter low stock alert value"
                required
                defaultValue={10}
              />
            </div>
          </div>
          <div className="image-add-preview">
            <label className="block mb-2 font-medium">Product Image *<span className="text-xs font-normal"> (Atlease 5 image required)</span></label>
            {previewImages.length > 0 && (
              <div className="flex space-x-4 mb-4 overflow-x-auto">
                {previewImages.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Preview ${index}`}
                    className="w-24 h-24 object-cover rounded-md cursor-pointer hover:opacity-55"
                    onClick={() => selectiveImageRemove(index)}
                    
                  />
                ))}
              </div>
            )}
            <input
              type="file"
              className="border border-gray-300 rounded-md p-2 w-full cursor-pointer"
              accept="image/*"
              required
              multiple
              onChange={handleImageChange}
              
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded-md cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-linear-to-r from-gradient-primary to-gradient-secondary cursor-pointer text-white rounded-md"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
