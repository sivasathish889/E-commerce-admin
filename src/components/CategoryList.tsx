import { useState } from "react";
// import { useGetDataQuery } from "../services/apiServices";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const CategoryList = () => {
  // const { data, error, isLoading } = useGetDataQuery("GET_CATEGORY");
  // if (data) {
  //   console.log("Category List Data:", data);
  // }
  // @ts-ignore
  const [data, setData] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      name: "Electronics",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      name: "Clothing",
    },
  ]);
  return (
    <div className="">
      <table className="w-full mt-6 table-auto border-collapse text-base">
        <thead>
          <tr className="bg-gray-200 ">
            {["No.", "Image", "Category Name", "Actions"].map((header) => (
              <th
                key={header}
                className="py-2 px-4 font-semibold text-gray-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-700">
          {data.map((category, index) => (
            <tr
              key={category.id}
              className="text-center border-t border-gray-300 hover:bg-gray-50"
            >
              <td className="py-2">{index + 1}</td>
              <td className="py-2">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-12 h-12 object-cover mx-auto"
                />
              </td>
              <td className="py-2">{category.name}</td>
              <td className="py-2">
                <div className="flex gap-2 md:gap-5 items-center justify-center">
                  <FaEdit color="blue" size={18} className="cursor-pointer" />
                  <MdDeleteForever
                    color="red"
                    size={21}
                    className="cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
