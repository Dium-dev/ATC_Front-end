"use client";
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// components
import SearchBar from '../SearchBar/SearchBar';
import TableDropdown from '~/components/componetsDashboard/Dropdowns/TableDropdown';

import useDashboardAdminStore from '~/store/dashboardAdminStore';
import { ProductFilterOptions } from '../SearchBar/SearchBar';


export interface ProductsInterface {
    id: number;
    name: string;
    picture: string;
    category: ProductCategories;
    brand: ProductBrands;
    stock: number;
    regularPrice: number;
    salePrice: number
};

// fetch(categories/xxxxx)  debería retornar todos las "categorías" posibles para el producto. (farolas | pisos | espejos | etc).
// Estas opciones son renderizadas como etiquetas de los checkboxes que se usan para filtrar a los productos.
const CATEGORIES = [
    "farolas",
    "pisos",
] as const;
type ProductCategories = typeof CATEGORIES[number];


// // fetch(brands/xxxxx) debería retornar todos las "brands" posibles para el producto. (audi | mitsubishi | etc).
// Estas opciones son renderizadas como etiquetas de los checkboxes que se usan para filtrar a los productos.
const BRANDS = [
    "audi",
    "mitsubishi",
    "hyundai"
] as const;
type ProductBrands = typeof BRANDS[number];

// fetch(/products/xxxxx) debería retornar un array de objetos.
const PRODUCTS: ProductsInterface[] = [
    {
        id: 1,
        name: "Farola Hyundai I35 Elantra 2012 2016 Drl Tubo Led Proyector",
        picture: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
        category: "farolas",
        brand: "hyundai",
        stock: 10,
        regularPrice: 2489900,
        salePrice: 2150910
    }, {
        id: 2,
        name: "Stop Hyundai i35 Elantra 2012-2016 Tubo Led+ Secuencial Giro",
        picture: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
        category: "farolas",
        brand: "audi",
        stock: 7,
        regularPrice: 2289900,
        salePrice: 2060910
    }, {
        id: 3,
        name: "Stop Hyundai i35 Elantra 2012-2016 Tubo Led Full Led Ahumado",
        picture: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
        category: "farolas",
        brand: "mitsubishi",
        stock: 3,
        regularPrice: 1929900,
        salePrice: 1736910
    }
];


type CardProductsProps = {
    color: string
};

export default function CardProducts({ color }: CardProductsProps) {


    // GLOBAL STORE:
    const { products, updateProducts, filterProducts }: any = useDashboardAdminStore();


    // LOCAL STATE:
    const [filterMenu, setFilterMenu] = useState<boolean>(false);
    const [filterOptions, setFilterOptions] = useState<ProductFilterOptions>({
        category: [],
        brand: [],
        stock: {
            above: null,
            below: null
        },
        price: {
            above: null,
            below: null
        }
    });


    // FUNCTIONS:
    const handleBrandChange = (brand: ProductBrands) => {
        setFilterOptions((prevOptions: ProductFilterOptions) => {
            if (prevOptions.brand.includes(brand)) {
                const filteredProducts = prevOptions.brand.filter((brandsItem) => brandsItem !== brand)
                return {
                    ...prevOptions,
                    brand: filteredProducts
                };
            } else {
                prevOptions.brand.push(brand);
                return {
                    ...prevOptions,
                    brand: prevOptions.brand
                };
            };
        });
    };

    const handleCategoryChange = (category: ProductCategories) => {
        setFilterOptions((prevOptions: ProductFilterOptions) => {
            if (prevOptions.category.includes(category)) {
                const filteredProducts = prevOptions.category.filter((categoryItem) => categoryItem !== category);
                return {
                    ...prevOptions,
                    category: filteredProducts
                }
            } else {
                prevOptions.category.push(category);
                return {
                    ...prevOptions,
                    category: prevOptions.category
                };
            };
        });
    };

    const handleFilter = () => {
        filterProducts(filterOptions);
    };

    const handleClearFilters = () => {
        setFilterOptions({
            category: [],
            brand: [],
            stock: {
                above: null,
                below: null
            },
            price: {
                above: null,
                below: null
            }
        });
        filterProducts(null);
    };

    // LIFE CYCLES:
    useEffect(() => {
        updateProducts(PRODUCTS);
    }, []);

    useEffect(() => {
        console.log(filterOptions)
    }, [filterOptions])


    // COMPONENT:
    return (
        <div
            className={
                'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
                (color === 'light' ? 'bg-white' : 'bg-lightBlue-900 text-white')
            }
        >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative flex items-center justify-between w-full px-4 max-w-full flex-grow flex-1">
                        <h3
                            className={
                                'font-semibold text-lg ' +
                                (color === 'light' ? 'text-blueGray-700' : 'text-white')
                            }
                        >
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
                        <div><span>Categoría:</span>
                            {
                                CATEGORIES.map((category, idx) => (
                                    <div key={category + idx} className="inline-flex items-center">
                                        <input
                                            className=""
                                            type="checkbox"
                                            checked={filterOptions.category.includes(category)}
                                            onChange={() => handleCategoryChange(category)}
                                        /><label>{category}</label>
                                    </div>
                                ))
                            }
                        </div>
                        <div><span>Marca:</span>
                            {
                                BRANDS.map((brand, idx) => (
                                    <div key={brand + idx} className="inline-flex items-center">
                                        <input
                                            className=""
                                            type="checkbox"
                                            checked={filterOptions.brand.includes(brand)}
                                            onChange={() => handleBrandChange(brand)}
                                        /><label>{brand}</label>
                                    </div>
                                ))
                            }
                        </div>
                        <div><span>Stock:</span>
                        </div>
                        <div><span>Precio:</span>
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
                            <th
                                className={
                                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                    (color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                }
                            >
                                Id
                            </th>
                            <th
                                className={
                                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                    (color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                }
                            >
                                Nombre
                            </th>
                            <th
                                className={
                                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                    (color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                }
                            >
                                Categoría
                            </th>
                            <th
                                className={
                                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                    (color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                }
                            >
                                Marca
                            </th>
                            <th
                                className={
                                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                    (color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                }
                            >
                                Stock
                            </th>
                            <th
                                className={
                                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                    (color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                }
                            >
                                Precio regular
                            </th>
                            <th
                                className={
                                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                    (color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                }
                            >
                                Precio de oferta
                            </th>
                            <th
                                className={
                                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                    (color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                }
                            >
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((PRODUCT: any, idx: any) => (
                                <tr key={idx}>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {PRODUCT.id}
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                        <img
                                            src={PRODUCT.picture}
                                            className="h-12 w-12 bg-white rounded-full border"
                                            alt="..."
                                        ></img>
                                        <span
                                            className={
                                                'ml-3 font-bold ' +
                                                +(color === 'light' ? 'text-blueGray-600' : 'text-white')
                                            }
                                        >
                                            {PRODUCT.name}
                                        </span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {PRODUCT.category}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {PRODUCT.brand}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i className={`fas fa-circle mr-2 ${PRODUCT.stock >= 10 ? "text-[#00FF00]" : PRODUCT.stock >= 5 ? "text-[#FFC107]" : "text-[#FF0000]"}`}></i> {PRODUCT.stock}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <div className="flex items-center">
                                            <span className="mr-2">{PRODUCT.regularPrice}</span>
                                        </div>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <div className="flex items-center">
                                            <span className="mr-2">{PRODUCT.salePrice}</span>
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
            </div>
        </div>
    );
};


CardProducts.defaultProps = {
    color: 'light',
};

CardProducts.propTypes = {
    color: PropTypes.oneOf(['light', 'dark']),
};