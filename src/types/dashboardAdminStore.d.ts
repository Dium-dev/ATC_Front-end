// Se usa en:
// 1. src/store/dashboardAdminStore/dashboardAdminStore.ts
// 2. src/components/componentsDashboard/Cards/CardUsers.tsx
// 3. src/components/componentsDashboard/Cards/CardProducts.tsx
// 4. src/components/componentsDashboard/Cards/CardCategories.tsx
// 5. src/components/componentsDashboard/Cards/CardBrands.tsx
// 6. src/components/componentsDashboard/Cards/Orders/CardOrders.tsx
// 7. src/components/componentsDashboard/Cards/Orders/OrderItem.tsx


// ----- USERS: -----
export type UserStatus = "blocked" | "activated" | "deleted";
export interface UsersInterface {
    id: number,
    name: string,
    picture: string,
    emailAddress: string,
    status: UserStatus,
    phone: string,
    registerDate: string
};

// ----- PRODUCTS: -----
export interface ProductsInterface {
    id: number;
    title: string;
    availability: number;
    condition: string;
    picture: string;
    image: string[];
    model: null;
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
    costumer: {
        name: string,
        emailAddress: string,
        phoneNumber: string,
        address: {
            department: string,
            locality: string,
            neighborhood: string,
            number: number,
            references: string
        }
    }
};