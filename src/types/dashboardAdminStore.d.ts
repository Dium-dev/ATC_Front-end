// Se usa en:
// 1. src/store/dashboardAdminStore/dashboardAdminStore.ts
// 2. src/components/componentsDashboard/Cards/CardUsers.tsx
// 3. src/components/componentsDashboard/Cards/CardProducts.tsx
// 4. src/components/componentsDashboard/Cards/CardCategories.tsx
// 5. src/components/componentsDashboard/Cards/CardBrands.tsx
// 6. src/components/componentsDashboard/Cards/Orders/CardOrders.tsx
// 7. src/components/componentsDashboard/Cards/Orders/OrderItem.tsx

import { ProductFilterOptions, UserFilterOptions } from "~/components/componetsDashboard/dashboardAdmin";


export type SetFunction<T> = (partial: Partial<T>) => void;

export interface DashboardAdminStore {
    originalUsers: UsersInterface[];
    users: UsersInterface[];
    // updateUsers: (data: any) => void;
    isUsersFetching: boolean;
    fetchUsers: () => Promise<void>;
    filterUsersByName: (data: any) => void;
    filterUsersByEmail: (data: any) => void;
    filterUsersByPhone: (data: any) => void;
    filterUsers: (options: UserFilterOptions | null) => void;
    sortUsers: (clause: "id" | "firstName" | "email" | "isActive" | "phone" | "createdAt", type: "ascendant" | "descendant") => void;

    originalProducts: ProductsInterface[];
    products: ProductsInterface[];
    isProductsFetching: boolean;
    fetchProducts: () => Promise<void>;
    filterProductsByName: (input: string) => void;
    filterProducts: (options: ProductFilterOptions | null) => void;
    sortProducts: (clause: "id" | "title" | "category" | "brand" | "stock" | "price", type: "ascendant" | "descendant") => void;

    originalCategories: CategoriesInterface[];
    categories: CategoriesInterface[];
    isCategoriesFetching: boolean;
    fetchCategories: () => Promise<void>;
    filterCategoriesByName: (input: string) => void;
    sortCategories: (clause: "id" | "name", type: "ascendant" | "descendant") => void;

    originalBrands: BrandsInterface[];
    brands: BrandsInterface[];
    isBrandsFetching: boolean;
    fetchBrands: () => Promise<void>;
    filterBrandsByName: (input: string) => void;
    sortBrands: (clause: "id" | "name", type: "ascendant" | "descendant") => void;

    originalOrders: OrdersInterface[],
    orders: OrdersInterface[],
    updateOrders: (data: any) => void;
    filterOrdersByOrderNumber: (input: string) => void;
    filterOrdersByUserName: (input: string) => void;
    filterOrdersByUserEmail: (input: string) => void;
    filterOrdersByUserPhone: (input: string) => void;
    filterOrdersByUserAddress: (input: string) => void;
    filterOrdersByPaymentNumber: (input: string) => void;
    filterOrders: (options: OrderFilterOptions | null) => void;
    sortOrders: (clause: "id" | "orderNumber" | "creationDate" | "status" | "total", type: "ascendant" | "descendant") => void;
}

// ----- USERS: -----
export type UserStatus = boolean;
export interface UsersInterface {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    rol: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null
};

// ----- PRODUCTS: -----
export interface ProductsInterface {
    id: string;
    title: string;
    availability: number;
    condition: string;
    picture: string;
    image: string[];
    model: null;
    mostSelled: boolean;
    state: string;
    category: {
        id: number,
        name: string
    };
    brand: {
        id: number,
        name: string
    };
    stock: number;
    price: number;
    year: string
};

// ----- CATEGORIES: -----
export interface CategoriesInterface {
    id: string,
    name: string,
};

// ----- BRANDS: -----
export interface BrandsInterface {
    id: string,
    name: string,
};

// ----- ORDERS: -----
export type OrderStatus = "cancelled" | "declined" | "approved" | "processing" | "inbound" | "delivered";
export type PaymentMethod = "MercadoPago" | "cash";
export type PaymentStatus = "approved" | "declined" | "pending";
export interface OrdersInterface {
    id: number,
    orderNumber: number,
    creationDate: string,
    status: "cancelled" | "declined" | "approved" | "processing" | "inbound" | "delivered",
    total: number,
    list: {
        name: string,
        quantity: number,
        value: number
    }[],
    payment: {
        date: string,
        method: "MercadoPago" | "cash",
        status: "approved" | "declined" | "pending",
        approvalNumber: number
    },
    customer: {
        name: string,
        emailAddress: string,
        phoneNumber: string,
        address: {
            phone: string;
            department: string;
            city: string;
            streetAddress: string;
            neighborhood: string;
            references: string;
        }
    }
};