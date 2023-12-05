"use client";
import { useEffect, useState } from "react";

// Zustand store:
import useDashboardAdminStore from "~/store/dashboardAdminStore";

// Type definitions:
import { CategoriesInterface } from "~/types/dashboardAdminStore";

// Components:
import SearchBar from '../SearchBar/SearchBar';
import TableDropdown from '~/components/componetsDashboard/Dropdowns/TableDropdown';
import Pagination from "../Pagination/Pagination";


// --------------- MODULE ---------------
export default function CardCategories() {


    // GLOBAL STORE:
    const { categories, fetchCategories, isCategoriesFetching }: any = useDashboardAdminStore();


    // LOCAL STATES:
    // Estado para la paginación.
    const [currentPage, setCurrentPage] = useState<number>(1);


    // CONST:
    // Constantes para la paginación.
    const elementsPerPage = 10;
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;


    // LIFE CYCLES:
    useEffect(() => {
        if (categories.length === 0 && !isCategoriesFetching) {
            fetchCategories();
        };
    }, [categories, fetchCategories, isCategoriesFetching]);


    // COMPONENT:
    return (
        <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded dark:bg-primary-dm dark:text-white'>
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative flex items-center justify-between w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-lg text-blueGray-700 dm:text-white">
                            Categorías
                        </h3>
                        <SearchBar section="category" />
                    </div>
                </div>
            </div>
            <div className="block w-full overflow-x-auto">
                {/* Projects table */}
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
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(categories) && categories?.slice(indexOfFirstElement, indexOfLastElement).map((CATEGORY: CategoriesInterface) => (
                                <tr key={CATEGORY.id}>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {CATEGORY.id}
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                        {CATEGORY.name}
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
                    elementsNumber={categories.length}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
};