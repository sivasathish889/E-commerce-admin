import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className='h-16 fixed bg-[#FFFFFF] border-b border-b-gray-300  w-full z-10 flex justify-between items-center gap-x-10'>
      <div className="search-bar w-[70%]  p-2 flex relative px-10">
        <IoSearchOutline size={20} opacity={"40%"} className="absolute top-3.5 left-13" />
        <input type="text" name="" id="" className="ps-10 border border-black/15 w-full py-1 rounded-md text-base focus:outline-1 focus:outline-black/15" placeholder="Search Orders,Users"/>
      </div>
      <div className="profile w-[30%] bg-blue-400">
        <p className="w-10 h-10 bg-amber-600 rounded-md"></p>
      </div>
    </div>
  )
}

export default Header