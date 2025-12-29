export const NavBarSections = {
    DASHBOARD: 'DASHBOARD',
    PRODUCTS: 'PRODUCTS',
    USER: 'USER',
    ORDERS: 'ORDERS',
    PROMOTIONS: 'PROMOTIONS',
    SETTINGS: 'SETTINGS'
} as const;

export type NavBarSections = typeof NavBarSections[keyof typeof NavBarSections]; 