import { NavBarSections } from "../@types/types";
import { MdOutlineSettings, MdSpaceDashboard } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { FaTag, FaUserGroup } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";

export const NavItems = [
  {
    icon: <MdSpaceDashboard size={26} />,
    name: NavBarSections.DASHBOARD,
  },
  {
    icon: <AiOutlineProduct size={26} />,
    name: NavBarSections.PRODUCTS,
  },
  {
    icon: <FaUserGroup size={26} />,
    name: NavBarSections.USER,
  },
  {
    icon: <FaCartArrowDown size={26} />,
    name: NavBarSections.ORDERS,
  },
  {
    icon: <FaTag size={26} />,
    name: NavBarSections.PROMOTIONS,
  },
  {
    icon: <MdOutlineSettings size={26} />,
    name: NavBarSections.SETTINGS,
  },
];
