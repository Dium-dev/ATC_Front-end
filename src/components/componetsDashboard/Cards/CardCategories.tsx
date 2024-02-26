"use client";
import { useEffect, useState } from "react";

// Zustand store:
import useDashboardAdminStore from "~/store/dashboardAdminStore";

// Type definitions:
import { CategoriesInterface } from "~/types/dashboardAdminStore";

// Components:
import SearchBar from '../SearchBar/SearchBar';
import Pagination from "../Pagination/Pagination";


// --------------- MODULE ---------------
function ButtonEdit() {
    return (
        <button className="block m-auto px-5 py-[8px] rounded-[10px] bg-secondary-lm text-white text-sm font-bold tracking-wider uppercase">
            Editar
        </button>
    );
}

export default function CardCategories() {


    // GLOBAL STORE:
    const { categories, fetchCategories, isCategoriesFetching, sortCategories }: any = useDashboardAdminStore();


    // LOCAL STATES:
    // Estado para la paginación.
    const [currentPage, setCurrentPage] = useState<number>(1);


    // CONST:
    // Constantes para la paginación.
    const elementsPerPage = 10;
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;


    // FUNCTIONS:
    const handleSort = (clause: string, type: string) => {
        sortCategories(clause, type);
    };


    // LIFE CYCLES:
    useEffect(() => {
        if (categories.length === 0 && !isCategoriesFetching) {
            fetchCategories();
        };
    }, [categories, fetchCategories, isCategoriesFetching]);


    // COMPONENT:
    return (
        <div className='relative flex flex-col min-w-0 break-words w-[96%] mx-auto mb-6 shadow-lg rounded-xl bg-white border dark:bg-primary-dm dark:text-white text-black font-inter'>
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative flex items-center justify-between w-full max-w-full flex-grow flex-1">
                        <h3 className="text-xl">
                            Categorías
                        </h3>
                        <SearchBar section="category" />
                    </div>
                </div>
            </div>
            <div className="block w-full overflow-x-auto">
                <table className="table-fixed items-center w-full min-w-[1200px] bg-transparent border-collapse">
                    <thead className='w-full'>
                        <tr className='w-full text-[#555555]'>
                            <th className="w-[30%] px-6 align-middle py-3 whitespace-nowrap font-normal text-left">
                                Id
                                <div className="flex justify-between">
                                    <button onClick={() => handleSort("id", "ascendant")}>asc</button>
                                    <button onClick={() => handleSort("id", "descendant")}>desc</button>
                                </div>
                            </th>
                            <th className="w-[57%] px-6 align-middle py-3 whitespace-nowrap font-normal text-left">
                                Nombre
                                <div className="flex justify-between">
                                    <button onClick={() => handleSort("name", "ascendant")}>asc</button>
                                    <button onClick={() => handleSort("name", "descendant")}>desc</button>
                                </div>
                            </th>
                            <th className="w-[13%] px-6 align-middle py-3 whitespace-nowrap font-normal text-left" >
                                Acción
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(categories) && categories?.slice(indexOfFirstElement, indexOfLastElement).map((CATEGORY: CategoriesInterface) => (
                                <tr key={CATEGORY.id}>
                                    <th className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap font-normal font-mono transition-opacity duration-200">
                                        <div className="relative w-full overflow-hidden text-left after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-white after:to-10% dm:text-white">
                                            {CATEGORY.id}
                                        </div>
                                    </th>
                                    <td className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap">
                                        {CATEGORY.name}
                                    </td>
                                    <td className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap">
                                        <ButtonEdit />
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