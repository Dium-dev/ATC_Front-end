import { create } from "zustand";
import { UsersInterface } from "~/components/componetsDashboard/Cards/CardUsers";
import { UserFilterOptions } from "~/components/componetsDashboard/SearchBar/SearchBar";


const useDashboardAdminStore = create((set) => ({
    // USERS:
    originalUsers: [],
    users: [],
    updateUsers: (data: any) =>
        set(() => ({
            users: data,
            originalUsers: data
        })),
    filterUsersByName: (input: string) => {
        set((state: any) => {
            const filteredUsers = state.originalUsers.filter((user: UsersInterface) =>
                user.name.toLowerCase().includes(input.toLowerCase())
            );
            return { users: filteredUsers };
        });
    },
    filterUsersByEmail: (input: string) => {
        set((state: any) => {
            const filteredUsers = state.originalUsers.filter((user: UsersInterface) =>
                user.emailAddress.toLowerCase().includes(input.toLowerCase())
            );
            return { users: filteredUsers };
        });
    },
    filterUsers: (options: UserFilterOptions | null) => {
        if (options !== null) {
            const { status, after, before } = options;

            set((state: any) => {
                // Filtra a los usuarios que tengan una propiedad "status" que esté incluida en el array "options.status".
                const filteredUsers = state.originalUsers.filter((user: UsersInterface) =>
                    status.includes(user.status)
                );
                return { users: filteredUsers }
            });
        } else {
            // Limpia los filtros seteando el array original al estado "users".
            set((state: any) => ({ users: state.originalUsers }));
        };
    },

    // PRODUCTS:
    originalProducts: [],
    products: [],
    updateProducts: (data: any) =>
        set(() => ({
            products: data,
            originalProducts: data
        })),
    filterProducts: (input: string) => {
        set((state: any) => {
            const filteredProducts = state.originalProducts.filter((object: any) =>
                object.name.toLowerCase().includes(input.toLowerCase())
            );
            return {
                products: filteredProducts
            };
        });
    },

    // CATEGORIES:
    originalCategories: [],
    categories: [],
    updateCategories: (data: any) =>
        set(() => ({
            categories: data,
            originalCategories: data
        })),
    filterCategories: (input: string) => {
        set((state: any) => {
            const filteredCategories = state.originalCategories.filter((object: any) =>
                object.name.toLowerCase().includes(input.toLowerCase())
            );
            return {
                categories: filteredCategories
            };
        });
    },

    // BRANDS:
    originalBrands: [],
    brands: [],
    updateBrands: (data: any) =>
        set(() => ({
            brands: data,
            originalBrands: data
        })),
    filterBrands: (input: string) => {
        set((state: any) => {
            const filteredBrands = state.originalBrands.filter((object: any) =>
                object.name.toLowerCase().includes(input.toLowerCase())
            );
            return {
                brands: filteredBrands
            };
        });
    },

    // ORDERS:
    originalOrders: [],
    orders: [],
    updateOrders: (data: any) =>
        set(() => ({
            orders: data,
            originalOrders: data
        })),
    filterOrders: (input: string) => {
        set((state: any) => {
            const filteredOrders = state.originalOrders.filter((object: any) =>
                object.orderNumber.toString().includes(input.toString())
            );
            return {
                orders: filteredOrders
            };
        });
    },
}));


export default useDashboardAdminStore;