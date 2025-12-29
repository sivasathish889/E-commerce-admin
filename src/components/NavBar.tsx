import type { NavBarSections } from "../@types/types";
import { NavItems } from "../utils/constants";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {
  activeSection: NavBarSections;
  setActiveSection: (section: NavBarSections) => void;
  hideBar: boolean;
  setHideBar: (hideBar: boolean) => void;
};

const NavBar = ({
  activeSection,
  setActiveSection,
  hideBar,
  setHideBar,
}: Props) => {
  return (
    <div className="h-full flex justify-between flex-col transition-all duration-700 ease-in-out border-r-2 border-r-gray-300 fixed">
      <div>
        <div className="logo h-28">
          <img src="" alt="" />
        </div>
        <div className="nav-item flex flex-col justify-center items-center px-3 transition-all duration-700 ease-in-out">
          {NavItems.map((item, idx) => (
            <div
              className={`
              nav-item flex gap-2 not-md:justify-center md:justify-baseline items-center px-2 md:px-6 py-3  my-2 w-full cursor-pointer rounded-xl transition-all duration-700 ease-in-out text-black/75 text-xs lg:text-sm
              ${
                activeSection === item.name
                  ? "bg-primary text-white "
                  : "hover:bg-primary/15  " + (hideBar ? "justify-center " : "")
              }
            `}
              key={idx}
              onClick={() => setActiveSection(item.name)}
            >
              {item.icon}

              {hideBar ? null : (
                <span className="hidden md:block transition-all duration-700 ease-in-out">
                  {item.name}
                </span>
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
          <IoIosArrowBack size={26} />
        ) : (
          <IoIosArrowForward size={26} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
