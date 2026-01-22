import { Activity } from "react";
import { NavItems } from "../utils/constants";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

type Props = {
  hideBar: boolean;
  setHideBar: (hideBar: boolean) => void;
};

const NavBar = ({ hideBar, setHideBar }: Props) => {
  const path = useLocation().pathname;


  return (
    <div className="h-full flex justify-between flex-col transition-all duration-700 ease-in-out border-r border-r-gray-300 fixed bg-[#FFFFFF] z-10">
      <div>
        <div className="logo h-28 w-18">{/* <img src="" alt="" /> */}</div>
        <div className="nav-item flex flex-col justify-center items-center px-3 transition-all duration-700 ease-in-out">
          {NavItems.map((item, idx) => (
            <Link
              to={item.path}
              className={`
              nav-item flex gap-2  md:justify-baseline items-center px-2 md:px-6 py-3  my-2 w-full cursor-pointer rounded-xl transition-all duration-700 ease-in-out text-black/75 text-xs lg:text-sm
              ${
                path === item.path
                  ? "bg-linear-to-r from-gradient-primary to-gradient-secondary text-white "
                  : "hover:bg-primary/15  " + (hideBar ? "justify-center " : "")
              }
            `}
              key={idx}
            >
              {item.icon}
              <Activity mode={hideBar ? "hidden" : "visible"}>
                <span className={`${hideBar ? "hidden" : "block"} transition-all duration-700 ease-in-out`}>
                  {item.name}
                </span>
              </Activity>
            </Link>
          ))}
        </div>
      </div>
      <div
        className="hide-bar cursor-pointer flex justify-center mb-4"
        onClick={() => setHideBar(!hideBar)}
      >
        {!hideBar ? (
          <IoIosArrowBack size={26} />
        ) : (
          <IoIosArrowForward size={26} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
