import { create } from "zustand";

// Type definitions:
import { UserFilterOptions, ProductFilterOptions, OrderFilterOptions } from "~/components/componetsDashboard/dashboardAdmin";
import { SetFunction, DashboardAdminStore, UsersInterface, ProductsInterface, OrdersInterface, CategoriesInterface, BrandsInterface } from "../types/dashboardAdminStore";

// Usado para convertir el formato de las subpropiedades ("after", "before") de la propiedad "user.registerDate" de "DD/MM/YYYY" a "YYYY/MM/DD" (formato por defecto de <input> tipo "date").
// Conveniente para el filtro y orden de los objetos con una propiedad que represente una fecha => "DD-MM-YYYY".
const convertDateFormat = (date: string) => {
    const [day, month, year] = date.split('-');
    return `${year}-${month}-${day}`;
};

// Zustand slice:
const useDashboardAdminStore = create<DashboardAdminStore>((set: SetFunction<DashboardAdminStore>) => ({
    // ---------- USERS ----------:
    originalUsers: [],
    users: [],
    // updateUsers: (data: any) =>
    //     set({
    //         users: data,
    //         originalUsers: data
    //     }),
    isUsersFetching: false,
    fetchUsers: async () => {
        try {
            if (useDashboardAdminStore.getState().isUsersFetching) {
                return;
            } else {
                set({ isUsersFetching: true });
                const response = await fetch("http://localhost:3001/users?page=1&limit=25");
                const data = await response.json();
                set({
                    users: data.users,
                    originalUsers: data.users
                });
            };
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            set({ isUsersFetching: false });
        };
    },
    filterUsersByName: (input: string) => {
        const state = useDashboardAdminStore.getState();
        const filteredUsers = state.originalUsers.filter((user: UsersInterface) =>
            user.firstName.toLowerCase().includes(input.toLowerCase().trim())
        );

        set({ users: filteredUsers });
    },
    filterUsersByEmail: (input: string) => {
        const state = useDashboardAdminStore.getState();
        const filteredUsers = state.originalUsers.filter((user: UsersInterface) =>
            user.email.toLowerCase().includes(input.toLowerCase().trim())
        );

        set({ users: filteredUsers });
    },
    filterUsersByPhone: (input: string) => {
        const state = useDashboardAdminStore.getState();
        const filteredUsers = state.originalUsers.filter((user: UsersInterface) =>
            user.phone.toLowerCase().includes(input.toLowerCase().trim())
        );

        set({ users: filteredUsers });
    },
    filterUsers: (options: UserFilterOptions | null) => {
        const state = useDashboardAdminStore.getState();
        if (options !== null) {
            const { isActive, after, before } = options;

            const filteredUsers = state.originalUsers.filter((user: UsersInterface) => {
                const userDateFormatted = convertDateFormat(user.createdAt);

                const statusFilter = isActive === null || isActive === user.isActive;

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
    sortUsers: (clause: "id" | "firstName" | "email" | "isActive" | "phone" | "createdAt", type: "ascendant" | "descendant") => {
        const users = [...useDashboardAdminStore.getState().users];
        let sortedUsers;

        if (type === "ascendant") {
            sortedUsers = users.sort((a: UsersInterface, b: UsersInterface) => {
                if (clause === "id" || clause === "firstName" || clause === "email" || clause === "phone") {
                    // caso: "firstName", "email", "isActive", "phone", "createdAt". (string).
                    return (a[clause]).localeCompare((b[clause]));
                } else if (clause === "createdAt") {
                    return convertDateFormat(a[clause]).localeCompare(convertDateFormat(b[clause]));
                } else if (clause === "isActive") {
                    return a[clause] === b[clause] ? 0 : a[clause] ? -1 : 1;
                }
                // caso por defecto, sin cambios en el orden.
                else return 0;
            });
        } else if (type === "descendant") {
            sortedUsers = users.sort((a: UsersInterface, b: UsersInterface) => {
                if (clause === "id" || clause === "firstName" || clause === "email" || clause === "phone") {
                    // caso: "firstName", "emailAddress", "isActive", "phone", "createdAt". (string).
                    return (b[clause]).localeCompare((a[clause]));
                } else if (clause === "isActive") {
                    return a[clause] === b[clause] ? 0 : a[clause] ? 1 : -1;
                } else if (clause === "createdAt") {
                    return convertDateFormat(b[clause]).localeCompare(convertDateFormat(a[clause]));
                }
                // caso por defecto, sin cambios en el orden.
                else return 0;
            });
        };
        set({ users: sortedUsers });
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
            product.title.toLowerCase().includes(input.toLowerCase().trim())
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
    // Ordena a los producto según los parámetros especificados.
    sortProducts: (clause: "id" | "title" | "category" | "brand" | "stock" | "price", type: "ascendant" | "descendant") => {
        const products = [...useDashboardAdminStore.getState().products];
        let sortedProducts;

        if (type === "ascendant") {
            sortedProducts = products.sort((a: ProductsInterface, b: ProductsInterface) => {
                if (clause === "title") {
                    // caso: "title". (string).
                    return a[clause].localeCompare(b[clause]);
                } else if (clause === "category" || clause === "brand") {
                    // caso: "category", "brand". (porque son objectos con una propiedad "name").
                    return (a[clause].name.localeCompare(b[clause].name))
                } else if (clause === "id" || clause === "stock" || clause === "price") {
                    // caso: "id", "stock", "price" ("number")
                    return a[clause] - b[clause];
                }
                // caso por defecto, sin cambios en el orden.
                else return 0;
            })
        } else if (type === "descendant") {
            sortedProducts = products.sort((a: ProductsInterface, b: ProductsInterface) => {
                if (clause === "title") {
                    // caso: "title". (string.)
                    return b[clause].localeCompare(a[clause]);
                } else if (clause === "category" || clause === "brand") {
                    // caso: "category", "brand". (porque son objectos con una propiedad "name").
                    return (b[clause].name.localeCompare(a[clause].name))
                } else if (clause === "id" || clause === "stock" || clause === "price") {
                    // caso: "id", "stock", "price" ("number")
                    return b[clause] - a[clause];
                }
                // caso por defecto, sin cambios en el orden.
                else return 0;
            });
        };
        set({ products: sortedProducts });
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
        const filteredCategories = state.originalCategories.filter((category: CategoriesInterface) =>
            category.name.toLowerCase().includes(input.toLowerCase().trim())
        );

        set({ categories: filteredCategories });
    },
    sortCategories: (clause: "id" | "name", type: "ascendant" | "descendant") => {
        const categories = [...useDashboardAdminStore.getState().categories];
        let sortedCategories;

        if (type === "ascendant") {
            sortedCategories = categories.sort((a: CategoriesInterface, b: CategoriesInterface) => {
                if (clause === "id" || clause === "name") {
                    // caso: "id", "name".
                    return a[clause].localeCompare(b[clause]);
                }
                // caso por defecto, sin cambios en el orden.
                else return 0;
            })
        } else if (type === "descendant") {
            sortedCategories = categories.sort((a: CategoriesInterface, b: CategoriesInterface) => {
                if (clause === "id" || clause === "name") {
                    // caso: "id", "name"
                    return b[clause].localeCompare(a[clause]);
                }
                // caso por defecto, sin cambios en el orden.
                else return 0;
            })
        };
        set({ categories: sortedCategories });
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
        const filteredBrands = state.originalBrands.filter((brand: BrandsInterface) =>
            brand.name.toLowerCase().includes(input.toLowerCase().trim())
        );

        set({ brands: filteredBrands });
    },
    sortBrands: (clause: "id" | "name", type: "ascendant" | "descendant") => {
        const brands = [...useDashboardAdminStore.getState().brands];
        let sortedBrands;

        if (type === "ascendant") {
            sortedBrands = brands.sort((a: BrandsInterface, b: BrandsInterface) => {
                if (clause === "id" || clause === "name") {
                    // caso: "id", "name".
                    return a[clause].localeCompare(b[clause]);
                }
                // caso por defecto, sin cambios en el orden.
                else return 0;
            })
        } else if (type === "descendant") {
            sortedBrands = brands.sort((a: BrandsInterface, b: BrandsInterface) => {
                if (clause === "id" || clause === "name") {
                    // caso: "id", "name".
                    return b[clause].localeCompare(a[clause]);
                }
                // caso por defecto, sin cambios en el orden.
                else return 0;
            });
        };
        set({ brands: sortedBrands });
    },

    // ---------- ORDERS ----------:
    originalOrders: [],
    orders: [],
    updateOrders: (data: any) =>
        set({
            orders: data,
            originalOrders: data
        }),
    filterOrdersByOrderNumber: (input: string) => {
        const state = useDashboardAdminStore.getState();
        const filteredOrders = state.originalOrders.filter((order: OrdersInterface) =>
            order.orderNumber.toString().includes(input.toLowerCase().trim())
        );

        set({ orders: filteredOrders });
    },
    filterOrdersByUserName: (input: string) => {
        const state = useDashboardAdminStore.getState();
        const filteredOrders = state.originalOrders.filter((order: OrdersInterface) =>
            order.customer.name.toLowerCase().includes(input.toLowerCase().trim())
        );

        set({ orders: filteredOrders });
    },
    filterOrdersByUserEmail: (input: string) => {
        const state = useDashboardAdminStore.getState();
        const filteredOrders = state.originalOrders.filter((order: OrdersInterface) =>
            order.customer.emailAddress.toLowerCase().includes(input.toLowerCase().trim())
        );

        set({ orders: filteredOrders });
    },
    filterOrdersByUserPhone: (input: string) => {
        const state = useDashboardAdminStore.getState();
        const filteredOrders = state.originalOrders.filter((order: OrdersInterface) =>
            order.customer.phoneNumber.toLowerCase().includes(input.toLowerCase().trim())
        );

        set({ orders: filteredOrders });
    },
    filterOrdersByUserAddress: (input: string) => {
        const state = useDashboardAdminStore.getState();
        const filteredOrders = state.originalOrders.filter((order: OrdersInterface) => {
            // Remueve los espacios en blanco dejando solo las palabras.
            // Ex: "  calle       el    bosque    " => ["calle", "el", "bosque"]
            const regex = /\s+/;
            const arr = input.split(regex);
            const { phone, department, city, streetAddress, neighborhood, references } = order.customer.address;

            // Objetivo: filtrar todos los productos según el input. TODAS las palabras del input deben coincidir
            // con cualquiera de las propiedades de un MISMO predido. Si no se encuentra alguna palabra del input
            // en ninguna propiedad del pedido, este se descartará.

            for (const prop of arr) {
                const match = (
                    phone.toLocaleLowerCase().includes(prop.toLocaleLowerCase()) ||
                    department.toLocaleLowerCase().includes(prop.toLocaleLowerCase()) ||
                    city.toLocaleLowerCase().includes(prop.toLocaleLowerCase()) ||
                    streetAddress.toLocaleLowerCase().includes(prop.toLocaleLowerCase()) ||
                    neighborhood.toLocaleLowerCase().includes(prop.toLocaleLowerCase()) ||
                    references.toLocaleLowerCase().includes(prop.toLocaleLowerCase())
                )
                // Si alguna palabra no matchea con ninguna propiedad del pedido, se descarta.
                if (!match) return false;
            };

            // Si todas las palabras coinciden, se incluye.
            return true;
        });

        set({ orders: filteredOrders });
    },
    filterOrdersByPaymentNumber: (input: string) => {
        const state = useDashboardAdminStore.getState();
        const filteredOrders = state.originalOrders.filter((order: OrdersInterface) =>
            order.payment.approvalNumber.toString().includes(input.toLowerCase().trim())
        );

        set({ orders: filteredOrders });
    },
    filterOrders: (options: OrderFilterOptions | null) => {
        const state = useDashboardAdminStore.getState();

        if (options !== null) {
            const { order, totalPrice, itemQuantity, payment } = options;

            const filteredOrders = state.originalOrders.filter((orderItem: OrdersInterface) => {
                const orderDateFormatted = convertDateFormat(orderItem.creationDate);
                const paymentDateFormatted = convertDateFormat(orderItem.payment.date);

                const statusFilter = order.status.length === 0 || order.status === orderItem.status;
                const orderDateAfter = order.effectiveDate.after.length === 0 || order.effectiveDate.after < orderDateFormatted;
                const orderDateBefore = order.effectiveDate.before.length === 0 || order.effectiveDate.before > orderDateFormatted;

                const priceFilterBottom = totalPrice.above === null || totalPrice.above < orderItem.total;
                const priceFilterTop = totalPrice.below === null || totalPrice.below > orderItem.total;

                const itemQuantityBottom = itemQuantity.above === null || itemQuantity.above < orderItem.list.length;
                const itemQuantityTop = itemQuantity.below === null || itemQuantity.below > orderItem.list.length;

                // payment:
                const paymentMethod = payment.method.length === 0 || payment.method === orderItem.payment.method;
                const paymentStatus = payment.status.length === 0 || payment.status === orderItem.payment.status;

                const paymentDateAfter = payment.effectiveDate.after.length === 0 || payment.effectiveDate.after < paymentDateFormatted;
                const paymentDateBefore = payment.effectiveDate.before.length === 0 || payment.effectiveDate.before > paymentDateFormatted;

                // Se usa "&&" para efectuar un filtrado más específico.
                return statusFilter && orderDateAfter && orderDateBefore && priceFilterBottom && priceFilterTop && itemQuantityBottom && itemQuantityTop && paymentMethod && paymentStatus && paymentDateAfter && paymentDateBefore;
            });

            set({ orders: filteredOrders });
        } else {
            // Limpia los filtros seteando el array original al estado "orders".
            set({ orders: state.originalOrders });
        }
    },
    sortOrders: (clause: "id" | "orderNumber" | "creationDate" | "status" | "total", type: "ascendant" | "descendant") => {
        const orders = [...useDashboardAdminStore.getState().orders];
        let sortedOrders;

        if (type === "ascendant") {
            sortedOrders = orders.sort((a: OrdersInterface, b: OrdersInterface) => {
                if (clause === "status") {
                    // caso: "status", "creationDate".
                    return a[clause].localeCompare(b[clause]);
                } else if (clause === "creationDate") {
                    return convertDateFormat(a[clause]).localeCompare(convertDateFormat(b[clause]));
                } else if (clause === "id" || clause === "orderNumber" || clause === "total") {
                    // caso: "id", "orderNumber", "total".
                    return a[clause] - b[clause];
                }
                // caso por defecto, sin cambios en el orden.
                return 0;
            })
        } else if (type === "descendant") {
            sortedOrders = orders.sort((a: OrdersInterface, b: OrdersInterface) => {
                if (clause === "status") {
                    // caso: "status", "creationDate".
                    return b[clause].localeCompare(a[clause]);
                } else if (clause === "creationDate") {
                    return convertDateFormat(b[clause]).localeCompare(convertDateFormat(a[clause]));
                } else if (clause === "id" || clause === "orderNumber" || clause === "total") {
                    // caso: "id", "orderNumber", "total".
                    return b[clause] - a[clause];
                }
                // caso por defecto, sin cambios en el orden.
                return 0;
            })
        };
        set({ orders: sortedOrders });
    }
}));


export default useDashboardAdminStore;