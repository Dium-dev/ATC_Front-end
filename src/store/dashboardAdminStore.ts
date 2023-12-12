import { create } from "zustand";

// Type definitions:
import { UserFilterOptions, ProductFilterOptions, OrderFilterOptions } from "~/components/componetsDashboard/dashboardAdmin";
import { UsersInterface, ProductsInterface, OrdersInterface } from "../types/dashboardAdminStore";


// Zustand slice:
const useDashboardAdminStore: any = create((set: any) => ({
    // ---------- USERS ----------:
    originalUsers: [],
    users: [],
    updateUsers: (data: any) =>
        set({
            users: data,
            originalUsers: data
        }),
    filterUsersByName: (input: string) => {
        const state = useDashboardAdminStore.getState();
        const filteredUsers = state.originalUsers.filter((user: UsersInterface) =>
            user.name.toLowerCase().includes(input.toLowerCase())
        );

        set({ users: filteredUsers });
    },
    filterUsersByEmail: (input: string) => {
        const state = useDashboardAdminStore.getState();
        const filteredUsers = state.originalUsers.filter((user: UsersInterface) =>
            user.emailAddress.toLowerCase().includes(input.toLowerCase())
        );

        set({ users: filteredUsers });
    },
    filterUsersByPhone: (input: string) => {
        const state = useDashboardAdminStore.getState();
        const filteredUsers = state.originalUsers.filter((user: UsersInterface) =>
            user.phone.toLowerCase().includes(input.toLowerCase())
        );

        set({ users: filteredUsers });
    },
    filterUsers: (options: UserFilterOptions | null) => {
        const state = useDashboardAdminStore.getState();
        if (options !== null) {
            const { status, after, before } = options;

            // Usado para convertir el formato de la propiedad "user.registerDate" de "DD/MM/YYYY" a "YYYY/MM/DD" (formato por defecto de <input> tipo "date").
            const convertDateFormat = (date: string) => {
                const [day, month, year] = date.split('-');
                return `${year}-${month}-${day}`;
            };

            const filteredUsers = state.originalUsers.filter((user: UsersInterface) => {
                const userDateFormatted = convertDateFormat(user.registerDate);

                const statusFilter = status.length === 0 || status.includes(user.status);

                const afterFilter = after.length === 0 || after < userDateFormatted;
                const beforeFilter = before.length === 0 || before > userDateFormatted;

                // Se usa "&&" para efectuar un filtrado más específico.
                return statusFilter && afterFilter && beforeFilter;
            });

            set({ users: filteredUsers });
        } else {
            // Limpia los filtros seteando el array original al estado "users".
            set({ users: state.originalUsers });
        };
    },

    // ---------- PRODUCTS ----------:
    originalProducts: [],
    products: [],
    isProductsFetching: false,
    fetchProducts: async () => {
        try {
            if (useDashboardAdminStore.getState().isProductsFetching) {
                return;
            } else {
                set({ isProductsFetching: true });
                const response = await fetch("http://localhost:3001/products?page=1&limit=385&order=NOMBRE%20ASC");
                const data = await response.json();
                set({
                    products: data.items,
                    originalProducts: data.items
                });
            };
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            set({ isProductsFetching: false });
        };
    },
    filterProductsByName: (input: string) => {
        const state = useDashboardAdminStore.getState();
        const filteredProducts = state.originalProducts.filter((product: ProductsInterface) =>
            product.title.toLowerCase().includes(input.toLowerCase())
        );

        set({ products: filteredProducts })
    },
    filterProducts: (options: ProductFilterOptions | null) => {
        const state = useDashboardAdminStore.getState();

        if (options !== null) {
            const { category, brand, stock, price } = options;

            const filteredProducts = state.originalProducts.filter((product: ProductsInterface) => {
                const categoryFilter = category.length === 0 || category === product.category.name;
                const brandFilter = brand.length === 0 || brand === product.brand.name;

                const stockFilterBottom = stock.above === null || stock.above < product.stock;
                const stockFilterTop = stock.below === null || stock.below > product.stock;

                const priceFilterBottom = price.above === null || price.above < product.price;
                const priceFilterTop = price.below === null || price.below > product.price;

                // Se usa "&&" para efectuar un filtrado más específico.
                return categoryFilter && brandFilter && stockFilterBottom && stockFilterTop && priceFilterBottom && priceFilterTop;
            });

            set({ products: filteredProducts });
        } else {
            // Limpia los filtros seteando el array original al estado "productos".
            set({ products: state.originalProducts });
        };
    },

    // ---------- CATEGORIES ----------:
    originalCategories: [],
    categories: [],
    isCategoriesFetching: false,
    fetchCategories: async () => {
        try {
            if (useDashboardAdminStore.getState().isCategoriesFetching) {
                return;
            } else {
                set({ isCategoriesFetching: true });
                const response = await fetch("http://localhost:3001/categories");
                const data = await response.json();
                set({
                    categories: data,
                    originalCategories: data
                });
            };

        } catch (error) {
            console.error("Error fetching categories:", error);
        } finally {
            set({ isCategoriesFetching: false });
        };
    },
    filterCategoriesByName: (input: string) => {
        const state = useDashboardAdminStore.getState();
        const filteredCategories = state.originalCategories.filter((category: any) =>
            category.name.toLowerCase().includes(input.toLowerCase())
        );

        set({ categories: filteredCategories });
    },

    // ---------- BRANDS ----------:
    originalBrands: [],
    brands: [],
    isBrandsFetching: false,
    fetchBrands: async () => {
        try {
            if (useDashboardAdminStore.getState().isBrandsFetching) {
                return;
            } else {
                set({ isBrandsFetching: true });
                const response = await fetch("http://localhost:3001/brands");
                const data = await response.json();
                set({
                    brands: data,
                    originalBrands: data
                });
            };

        } catch (error) {
            console.error("Error fetching brands:", error);
        } finally {
            set({ isBrandsFetching: false });
        };
    },
    filterBrandsByName: (input: string) => {
        const state = useDashboardAdminStore.getState();
        const filteredBrands = state.originalBrands.filter((brand: any) =>
            brand.name.toLowerCase().includes(input.toLowerCase())
        );

        set({ brands: filteredBrands });
    },

    // ---------- ORDERS ----------:
    originalOrders: [],
    orders: [],
    updateOrders: (data: any) =>
        set({
            orders: data,
            originalOrders: data
        }),
    filterOrdersByName: (input: string) => {
        const state = useDashboardAdminStore.getState();
        const filteredOrders = state.originalOrders.filter((order: any) =>
            order.orderNumber.toString().includes(input.toString())
        );

        set({ orders: filteredOrders });
    },
    filterOrders: (options: OrderFilterOptions | null) => {
        const state = useDashboardAdminStore.getState();

        if (options !== null) {
            const { order, totalPrice, itemQuantity, payment } = options;

            const filteredOrders = state.originalOrders.filter((orderItem: OrdersInterface) => {
                const statusFilter = order.status.length === 0 || order.status === orderItem.status;

                const priceFilterBottom = totalPrice.above === null || totalPrice.above < orderItem.total;
                const priceFilterTop = totalPrice.below === null || totalPrice.below > orderItem.total;

                const itemQuantityBottom = itemQuantity.above === null || itemQuantity.above < orderItem.list.length;
                const itemQuantityTop = itemQuantity.below === null || itemQuantity.below > orderItem.list.length;

                // payment:
                const paymentMethod = payment.method.length === 0 || payment.method === orderItem.payment.method;
                const paymentStatus = payment.status.length === 0 || payment.status === orderItem.payment.status;

                // Se usa "&&" para efectuar un filtrado más específico.
                return statusFilter && priceFilterBottom && priceFilterTop && itemQuantityBottom && itemQuantityTop && paymentMethod && paymentStatus;
            });

            set({ orders: filteredOrders });
        } else {
            // Limpia los filtros seteando el array original al estado "orders".
            set({ orders: state.originalOrders });
        }
    }
}));


export default useDashboardAdminStore;