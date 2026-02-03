import { NavBarSections } from "../@types/types";
import { MdOutlineSettings, MdSpaceDashboard } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { FaTag, FaUserGroup } from "react-icons/fa6";
import { AiFillDatabase, AiOutlineProduct } from "react-icons/ai";

export const NavItems = [
  {
    icon: <MdSpaceDashboard size={26} />,
    name: NavBarSections.DASHBOARD,
    path: "/",
  },
  {
    icon: <AiOutlineProduct size={26} />,
    name: NavBarSections.PRODUCTS,
    path: "/products",
  },
  {
    icon: <AiFillDatabase size={26} />,
    name: NavBarSections.CATEGORIES,
    path: "/categories",
  },
  {
    icon: <FaUserGroup size={26} />,
    name: NavBarSections.USER,
    path: "/users",
  },
  {
    icon: <FaCartArrowDown size={26} />,
    name: NavBarSections.ORDERS,
    path: "/orders",
  },
  {
    icon: <FaTag size={26} />,
    name: NavBarSections.PROMOTIONS,
    path: "/promotions",
  },
  {
    icon: <MdOutlineSettings size={26} />,
    name: NavBarSections.SETTINGS,
    path: "/settings",
  },
];
