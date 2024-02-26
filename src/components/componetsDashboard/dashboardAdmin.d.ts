// Definiciones de tipo para el objecto pasado a las funciones de filtrado que son luego usadas en el slice de zustand.

// Se usa en:
// 1. src/components/componentsDashboard/SearchBar/SearchBar.tsx


export type UserFilterOptions = {
    isActive: boolean | null;
    after: string;
    before: string;
};

export type ProductFilterOptions = {
    category: string;
    brand: string;
    stock: {
        above: number | null,
        below: number | null
    };
    price: {
        above: number | null,
        below: number | null
    };
};

export type OrderFilterOptions = {
    // order:
    order: {
        status: string,
        effectiveDate: {
            before: string,
            after: string
        },
    };
    totalPrice: {
        below: number | null,
        above: number | null
    },
    // list:
    itemQuantity: {
        below: number | null,
        above: number | null
    };
    // payment:
    payment: {
        method: string,
        status: string,
        effectiveDate: {
            before: string,
            after: string
        },
    };
    // user: {
    //     name: string,
    //     email: string,
    //     phone: string,
    //     address: {}
    // };
};