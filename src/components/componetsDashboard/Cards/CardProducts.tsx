"use client";
import { useEffect, useState, ChangeEvent } from 'react';

// Zustand store:
import useDashboardAdminStore from '~/store/dashboardAdminStore';

// Type definitions:
import { ProductFilterOptions } from '../dashboardAdmin';
import { ProductsInterface } from '~/types/dashboardAdminStore';

// Components:
import SearchBar from '../SearchBar/SearchBar';
import TableDropdown from '../Dropdowns/TableDropdown';
import Pagination from '../Pagination/Pagination';


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
    const { products, fetchProducts, isProductsFetching, categories, fetchCategories, isCategoriesFetching, brands, fetchBrands, isBrandsFetching, filterProducts }: any = useDashboardAdminStore();


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
        <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded dark:bg-primary-dm dark:text-white'>
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative flex items-center justify-between w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-lg text-blueGray-700 dm:text-white">
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
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                        <tr>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dm:bg-lightBlue-800 dm:text-lightBlue-300 dm:border-lightBlue-700">
                                Id
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dm:bg-lightBlue-800 dm:text-lightBlue-300 dm:border-lightBlue-700">
                                Nombre
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dm:bg-lightBlue-800 dm:text-lightBlue-300 dm:border-lightBlue-700">
                                Categoría
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dm:bg-lightBlue-800 dm:text-lightBlue-300 dm:border-lightBlue-700">
                                Marca
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dm:bg-lightBlue-800 dm:text-lightBlue-300 dm:border-lightBlue-700">
                                Stock
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dm:bg-lightBlue-800 dm:text-lightBlue-300 dm:border-lightBlue-700">
                                Precio
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dm:bg-lightBlue-800 dm:text-lightBlue-300 dm:border-lightBlue-700">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(products) && products.slice(indexOfFirstElement, indexOfLastElement).map((PRODUCT: ProductsInterface) => (
                                <tr key={PRODUCT.id}>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {PRODUCT.id}
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                        <img
                                            src={PRODUCT.image[0]}
                                            className="h-12 w-12 bg-white rounded-full border"
                                            alt=""
                                        ></img>
                                        <span className="ml-3 font-bold text-blueGray-600 dm:text-white">
                                            {PRODUCT.title}
                                        </span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {PRODUCT.category.name}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {PRODUCT.brand.name}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i className={`fas fa-circle mr-2 ${PRODUCT.stock >= 10 ? "text-[#00FF00]" : PRODUCT.stock >= 5 ? "text-[#FFC107]" : "text-[#FF0000]"}`}></i> {PRODUCT.stock}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <div className="flex items-center">
                                            <span className="mr-2">{PRODUCT.price}</span>
                                        </div>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                        <TableDropdown />
                                    </td>
                                </tr>
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