"use client";
import { useEffect, useState } from 'react';

// Zustand store:
import useDashboardAdminStore from '~/store/dashboardAdminStore';

// Type definitions:
import { BrandsInterface } from '~/types/dashboardAdminStore';

// Components:
import SearchBar from '../SearchBar/SearchBar';
import TableDropdown from '~/components/componetsDashboard/Dropdowns/TableDropdown';
import Pagination from '../Pagination/Pagination';


// --------------- MODULE ---------------
export default function CardBrands() {


    // GLOBAL STORE:
    const { brands, fetchBrands, isBrandsFetching }: any = useDashboardAdminStore();


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
                            Marcas
                        </h3>
                        <SearchBar section="brand" />
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
                            Array.isArray(brands) && brands?.slice(indexOfFirstElement, indexOfLastElement).map((BRAND: BrandsInterface) => (
                                <tr key={BRAND.id}>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {BRAND.id}
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                        {BRAND.name}
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
                    elementsNumber={brands.length}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
};