import { create } from "zustand";
import { UsersInterface } from "~/components/componetsDashboard/Cards/CardUsers";
import { ProductsInterface } from "~/components/componetsDashboard/Cards/CardProducts";
import { UserFilterOptions, ProductFilterOptions } from "~/components/componetsDashboard/SearchBar/SearchBar";


const useDashboardAdminStore: any = create((set: any) => ({
    // ---------- USERS ----------:
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
    filterUsersByPhone: (input: string) => {
        set((state: any) => {
            const filteredUsers = state.originalUsers.filter((user: UsersInterface) =>
                user.phone.toLowerCase().includes(input.toLowerCase())
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
        set((state: any) => {
            const filteredProducts = state.originalProducts.filter((product: ProductsInterface) =>
                product.title.toLowerCase().includes(input.toLowerCase())
            );
            return { products: filteredProducts };
        });
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
        set((state: any) => {
            const filteredCategories = state.originalCategories.filter((category: any) =>
                category.name.toLowerCase().includes(input.toLowerCase())
            );
            return {
                categories: filteredCategories
            };
        });
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
        set((state: any) => {
            const filteredBrands = state.originalBrands.filter((brand: any) =>
                brand.name.toLowerCase().includes(input.toLowerCase())
            );
            return {
                brands: filteredBrands
            };
        });
    },

    // ---------- ORDERS ----------:
    originalOrders: [],
    orders: [],
    updateOrders: (data: any) =>
        set(() => ({
            orders: data,
            originalOrders: data
        })),
    filterOrdersByName: (input: string) => {
        set((state: any) => {
            const filteredOrders = state.originalOrders.filter((order: any) =>
                order.orderNumber.toString().includes(input.toString())
            );
            return {
                orders: filteredOrders
            };
        });
    },
}));


export default useDashboardAdminStore;