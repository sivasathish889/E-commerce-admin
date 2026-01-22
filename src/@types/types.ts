export const NavBarSections = {
    DASHBOARD: 'DASHBOARD',
    PRODUCTS: 'PRODUCTS',
    USER: 'USER',
    ORDERS: 'ORDERS',
    PROMOTIONS: 'PROMOTIONS',
    SETTINGS: 'SETTINGS'
} as const;

export type CardProps = {
  mainIcon: React.ReactNode;
  trendIcon: "UP" | "DOWN" ;
  percentage: number;
  name: string;
  cost: string;
  color : string
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
};
export type NavBarSections = typeof NavBarSections[keyof typeof NavBarSections]; 