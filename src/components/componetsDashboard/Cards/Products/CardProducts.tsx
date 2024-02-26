"use client";
import { useEffect, useState, ChangeEvent } from 'react';

// Zustand store:
import useDashboardAdminStore from '~/store/dashboardAdminStore';

// Type definitions:
import { ProductFilterOptions } from '../../dashboardAdmin';
import { ProductsInterface } from '~/types/dashboardAdminStore';

// Components:
import SearchBar from '../../SearchBar/SearchBar';
import ProductItem from './ProductItem';
import Pagination from '../../Pagination/Pagination';


// --------------- MODULE ---------------
export default function CardProducts() {


    // CONSTANTS:
    const FILTER_OPTIONS_EMPTY = {
        category: "",
        brand: "",
        stock: {
            above: null,
            below: null
        },
        price: {
            above: null,
            below: null
        }
    };


    // GLOBAL STORE:
    const { products, fetchProducts, isProductsFetching, categories, fetchCategories, isCategoriesFetching, brands, fetchBrands, isBrandsFetching, filterProducts, sortProducts }: any = useDashboardAdminStore();


    // LOCAL STATE:
    const [filterMenu, setFilterMenu] = useState<boolean>(false);
    const [filterOptions, setFilterOptions] = useState<ProductFilterOptions>(FILTER_OPTIONS_EMPTY);
    // Estado para la paginación:
    const [currentPage, setCurrentPage] = useState<number>(1);


    // CONST:
    // Constantes para la paginación.
    const elementsPerPage = 10;
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;


    // FUNCTIONS:
    // Solo cambia el estado local, no afecta al estado global.
    const handleBrandChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const brand = event.target.value;

        setFilterOptions((prevOptions: ProductFilterOptions) => ({
            ...prevOptions,
            brand: brand
        }));
    };

    // Solo cambia el estado local, no afecta al estado global.
    const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = event.target.value;

        setFilterOptions((prevOptions: ProductFilterOptions) => ({
            ...prevOptions,
            category: selectedCategory
        }));
    };

    // Se separó la lógica de la función handleFilter(parameter: "category" | "brand" | null) en dos funciones (handleRemoveSelectOption() & handleFilter()) para mayor claridad.
    // Cambia el estado local y actualiza el estado global basado en el actualizado "filterOptions".
    const handleRemoveSelectOption = (clause: "category" | "brand") => {
        setFilterOptions((prevOptions: ProductFilterOptions) => {
            let updatedOptions = { ...prevOptions };

            if (clause === "category") updatedOptions.category = "";
            else if (clause === "brand") updatedOptions.brand = "";

            return updatedOptions;
        });
    };

    // Se está reusando la función para manejar "stock" y "price".
    // Ambos criterios tienen las mismas propiedades: "above" y "below" (dos "input" tag que contienen un número).
    const handleStockAndPriceChange = (
        event: ChangeEvent<HTMLInputElement>,
        clause: "stock" | "price",
        property: "above" | "below",
    ) => {
        // inputValue debería ser O BIEN <number> O "" (string vacía).
        const inputValue = event.target.value;

        setFilterOptions((prevOptions: ProductFilterOptions) => ({
            ...prevOptions,
            [clause]: {
                ...prevOptions[clause],
                [property]: inputValue === "" ? null : Number(inputValue)
            },
        }));
    };

    // Ejecuta el filtrado con la función de zustand.
    const handleFilter = () => {
        filterProducts(filterOptions);
    };

    // Limpia el estado local y el estado global, al mismo tiempo ejecuta el filtrado por lo que no es necesario llamar la función de filtrado <filterUsers()> en otro lado.
    const handleClearFilters = () => {
        setFilterOptions(FILTER_OPTIONS_EMPTY);
        filterProducts(null);
    };

    const handleSort = (clause: string, type: string) => {
        sortProducts(clause, type);
    };


    // LIFE CYCLES:
    // Obtiene y llena los productos.
    useEffect(() => {
        // Se removió "products" del array de dependencias para evitar conflictos cuando se llama a "filterProducts()".
        // El problema viene cuando se filtran los productos pero no se encuentran resultados y deja al array de products con un length de 0.
        // Con "products" dentro del array de dependencias, el componente haría la petición al servidor para llenar el array de productos nuevamente.
        // Efecto :: Después de que el array de productos se limpia, este "useEffect" se encarga de que lo llene nuevamente.
        if (products.length === 0 && !isProductsFetching) {
            fetchProducts();
        };
    }, [fetchProducts, isProductsFetching]);

    // Obtiene y llena las categorías.
    useEffect(() => {
        if (categories.length === 0 && !isCategoriesFetching) {
            fetchCategories();
        };
    }, [categories, fetchCategories, isCategoriesFetching]);

    // Obtiene y llena las marcas.
    useEffect(() => {
        if (brands.length === 0 && !isBrandsFetching) {
            fetchBrands();
        };
    }, [brands, fetchBrands, isBrandsFetching]);


    // COMPONENT:
    return (
        <div className='relative flex flex-col min-w-0 break-words w-[96%] mx-auto mb-6 shadow-lg rounded-xl bg-white border dark:bg-primary-dm dark:text-white text-black font-inter'>
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative flex items-center justify-between w-full max-w-full flex-grow flex-1">
                        <h3 className="text-xl">
                            Productos
                        </h3>
                        <SearchBar section="product" setFilterMenu={setFilterMenu} />
                    </div>
                </div>
            </div>
            {
                filterMenu ? (
                    <div className="w-full px-8 text-xs">
                        <h3>Filtros:</h3>
                        <div>
                            <span>Categoría:</span>
                            <div className="inline-flex items-center">
                                <select onChange={(e) => handleCategoryChange(e)} value={filterOptions.category}>
                                    <option value="" disabled>Selecciona una categoría</option>
                                    {
                                        Array.isArray(categories) && categories.map((category: any, idx: any) => (
                                            <option key={category + idx} value={category.name}>
                                                {category.name}
                                            </option>
                                        ))
                                    }
                                </select>
                                <button onClick={() => handleRemoveSelectOption("category")}>Eliminar</button>
                            </div>
                        </div>
                        <div>
                            <span>Marca:</span>
                            <div className="inline-flex items-center">
                                <select onChange={(e) => handleBrandChange(e)} value={filterOptions.brand}>
                                    <option value="" disabled>Selecciona una marca</option>
                                    {
                                        Array.isArray(brands) && brands.map((brand, idx) => (
                                            <option key={brand + idx} value={brand.name}>
                                                {brand.name}
                                            </option>
                                        ))
                                    }
                                </select>
                                <button onClick={() => handleRemoveSelectOption("brand")}>Eliminar</button>
                            </div>
                        </div>
                        <div>
                            <span>Stock:</span>
                            <label>Más de:</label>
                            <input
                                type="number" placeholder="-"
                                value={filterOptions.stock.above !== null ? filterOptions.stock.above : ""}
                                onChange={(e) => handleStockAndPriceChange(e, "stock", "above")}
                            />
                            <label>Menos de:</label>
                            <input
                                type="number" placeholder="-"
                                value={filterOptions.stock.below !== null ? filterOptions.stock.below : ""}
                                onChange={(e) => handleStockAndPriceChange(e, "stock", "below")}
                            />
                        </div>
                        <div>
                            <span>Precio:</span>
                            <label>Más de:</label>
                            <input
                                type="number" placeholder="-"
                                value={filterOptions.price.above !== null ? filterOptions.price.above : ""}
                                onChange={(e) => handleStockAndPriceChange(e, "price", "above")}
                            />
                            <label>Menos de:</label>
                            <input
                                type="number" placeholder="-"
                                value={filterOptions.price.below !== null ? filterOptions.price.below : ""}
                                onChange={(e) => handleStockAndPriceChange(e, "price", "below")}
                            />
                        </div>

                        <button onClick={handleFilter}>Aplicar filtros</button>
                        <button onClick={handleClearFilters}>Limpiar filtros</button>
                    </div>
                ) : null
            }
            <div className="block w-full overflow-x-auto">
                <table className="table-fixed items-center w-full min-w-[1200px] bg-transparent border-collapse">
                    <thead className='w-full'>
                        <tr className='w-full text-[#555555]'>
                            <th className="w-[10%] px-6 align-middle py-3 whitespace-nowrap font-normal text-left">
                                ID
                                <div className="flex justify-between">
                                    <button onClick={() => handleSort("id", "ascendant")}>asc</button>
                                    <button onClick={() => handleSort("id", "descendant")}>desc</button>
                                </div>
                            </th>
                            <th className="w-[25%] px-6 align-middle py-3 whitespace-nowrap font-normal text-left">
                                Nombre
                                <div className="flex justify-between">
                                    <button onClick={() => handleSort("title", "ascendant")}>asc</button>
                                    <button onClick={() => handleSort("title", "descendant")}>desc</button>
                                </div>
                            </th>
                            <th className="w-[10%] px-6 align-middle py-3 whitespace-nowrap font-normal text-left">
                                Precio
                                <div className="flex justify-between">
                                    <button onClick={() => handleSort("price", "ascendant")}>asc</button>
                                    <button onClick={() => handleSort("price", "descendant")}>desc</button>
                                </div>
                            </th>
                            <th className="w-[10%] px-6 align-middle py-3 whitespace-nowrap font-normal text-left">
                                Categoría
                                <div className="flex justify-between">
                                    <button onClick={() => handleSort("category", "ascendant")}>asc</button>
                                    <button onClick={() => handleSort("category", "descendant")}>desc</button>
                                </div>
                            </th>
                            <th className="w-[10%] px-6 align-middle py-3 whitespace-nowrap font-normal text-left">
                                Marca
                                <div className="flex justify-between">
                                    <button onClick={() => handleSort("brand", "ascendant")}>asc</button>
                                    <button onClick={() => handleSort("brand", "descendant")}>desc</button>
                                </div>
                            </th>
                            <th className="w-[15%] px-6 align-middle py-3 whitespace-nowrap font-normal text-left" >
                                Estado
                                <div className="flex justify-between">
                                    <button onClick={() => handleSort("isActive", "ascendant")}>asc</button>
                                    <button onClick={() => handleSort("isActive", "descendant")}>desc</button>
                                </div>
                            </th>
                            <th className="w-[10%] px-6 align-middle py-3 whitespace-nowrap font-normal text-left">
                                Stock
                                <div className="flex justify-between">
                                    <button onClick={() => handleSort("stock", "ascendant")}>asc</button>
                                    <button onClick={() => handleSort("stock", "descendant")}>desc</button>
                                </div>
                            </th>
                            <th className="w-[10%] px-6 align-middle py-3 whitespace-nowrap font-normal text-left">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(products) && products.slice(indexOfFirstElement, indexOfLastElement).map((PRODUCT: ProductsInterface) => (
                                <ProductItem key={PRODUCT.id} PRODUCT={PRODUCT} />
                            ))
                        }
                    </tbody>
                </table>
                <Pagination
                    elementsPerPage={elementsPerPage}
                    elementsNumber={products.length}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>
        </div >
    );
};