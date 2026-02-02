export const NavBarSections = {
  DASHBOARD: "DASHBOARD",
  PRODUCTS: "PRODUCTS",
  USER: "USER",
  ORDERS: "ORDERS",
  PROMOTIONS: "PROMOTIONS",
  SETTINGS: "SETTINGS",
} as const;

export type CardProps = {
  mainIcon: React.ReactNode;
  trendIcon: "UP" | "DOWN";
  percentage: number;
  name: string;
  cost: string;
  color: string;
};

export type ProductCardsType = {
  id: number;
  name: string;
  value: number;
  color: string;
};

export type UserCardType = {
  id: number;
  title: string;
  value: string;
  percentage: string;
  status: "UP" | "DOWN";
};

export type UserType = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
  orders: string;
  totalSpent: string;
  lastActive: string;
};

export type OrderType = {
  id: number;
  customer: string;
  date: string;
  items: number;
  status: "Pending" | "Shipped" | "Processing" | "Delivered" | "Cancelled";
  total: number;
};
export type NavBarSections =
  (typeof NavBarSections)[keyof typeof NavBarSections];

export type TitleProps = {
  title: string;
  subtitle: string;
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
