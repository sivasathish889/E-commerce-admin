import { useState } from "react";
import type { NavBarSections } from "../@types/types";
import { NavItems } from "../utils/constants";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {
  activeSection: NavBarSections;
  setActiveSection: (section: NavBarSections) => void;
};

const NavBar = ({ activeSection, setActiveSection }: Props) => {
  const [hideBar, setHideBar] = useState(false);
  return (
    <div className="h-full flex justify-between flex-col">
      <div>
        <div className="logo h-28">
          <img src="" alt="" />
        </div>
        <div className="nav-item flex flex-col justify-center items-center px-3  ">
          {NavItems.map((item, idx) => (
            <div
              className={`
              nav-item flex gap-2 not-md:justify-center md:justify-baseline items-center px-2 md:px-6 py-3 mx-1 md:mx-2 my-2 w-full cursor-pointer rounded-xl transition-all duration-700 ease-in-out text-black/75 text-xs lg:text-sm
              ${
                activeSection === item.name
                  ? "bg-primary text-white"
                  : "hover:bg-primary/15 " + (hideBar ? "justify-center " : "") + (hideBar ? "px-2" : "")
              }
            `}
              key={idx}
              onClick={() => setActiveSection(item.name)}
            >
              {item.icon}

              {hideBar ? null : (
                <span className="hidden md:block transition-all duration-700 ease-in-out">{item.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        className="hide-bar cursor-pointer flex justify-center mb-4"
        onClick={() => setHideBar(!hideBar)}
      >
        {!hideBar ? (
          <IoIosArrowBack size={26}  />
        ) : (
          <IoIosArrowForward size={26} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
