"use client";
import { ChangeEvent, useEffect, useState } from 'react';

// Zustand store:
import useDashboardAdminStore from '~/store/dashboardAdminStore';

// Type definitions:
import { UserFilterOptions } from '../dashboardAdmin';
import { UserStatus, UsersInterface, DashboardAdminStore } from '~/types/dashboardAdminStore';

// Components:
import SearchBar from '../SearchBar/SearchBar';

// Agregar un endpoint con:
// - todos los "status" posibles para el usuario. (blocked | activated | deleted | etc). Estas opciones son renderizadas como etiquetas de los checkboxes que se usan para filtrar a los usuarios.


// Las siguientes líneas hasta "MODULE" no será necesarias luego de que se use la ruta real para el fetch, en lugar de simular un fetch.

// fetch(user/status/xxxxx) debería retornar un array de objetos.
// Simula el array de los estados de usuarios obtenido después del fetch.
const USER_STATUS: UserStatus[] = [
    true,
    false
];

// fetch(users/xxxxx) debería retornar un array de objetos.
// Simula el array de usuarios obtenido después del fetch.
// const USERS: UsersInterface[] = [
//     {
//         id: 1,
//         name: "John",
//         picture: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
//         status: "activated",
//         emailAddress: "johndoe@gmail.com",
//         phone: "01 123456789",
//         registerDate: "27-09-2023",
//     },
//     {
//         id: 2,
//         name: "Doe",
//         picture: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
//         status: "blocked",
//         emailAddress: "doejohn@hotmail.com",
//         phone: "10 987654321",
//         registerDate: "21-07-2023"
//     },
//     {
//         id: 3,
//         name: "Asd",
//         picture: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
//         status: "deleted",
//         emailAddress: "asdfgh@hotmail.com",
//         phone: "11 987654321",
//         registerDate: "21-12-2023"
//     },
//     {
//         id: 4,
//         name: "Qwe",
//         picture: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
//         status: "blocked",
//         emailAddress: "qwerty@hotmail.com",
//         phone: "10 987654321",
//         registerDate: "21-10-2023"
//     },
// ];


// --------------- MODULE ---------------
export default function CardUsers() {


    // CONSTANTS:
    const FILTER_OPTIONS_EMPTY: UserFilterOptions = {
        isActive: null,
        after: "",
        before: ""
    };


    // GLOBAL STORE:
    const { users, fetchUsers, isUsersFetching, filterUsers, sortUsers }: DashboardAdminStore = useDashboardAdminStore();


    // LOCAL STATES:
    const [filterMenu, setFilterMenu] = useState<boolean>(false);
    const [filterOptions, setFilterOptions] = useState<UserFilterOptions>(FILTER_OPTIONS_EMPTY);

    const handleRadioChange = (isActive: UserStatus) => {
        setFilterOptions((prevOptions: UserFilterOptions) => {
            return {
                ...prevOptions,
                isActive: isActive
            };
        });
    };

    const handleRemoveRadioOption = () => {
        setFilterOptions((prevOptions: UserFilterOptions) => {
            return {
                ...prevOptions,
                isActive: null
            };
        });
    }

    const handleInputDate = (event: ChangeEvent<HTMLInputElement>, property: "before" | "after") => {
        const inputValue = event.target.value;

        setFilterOptions((prevOptions: UserFilterOptions) => ({
            ...prevOptions,
            [property]: inputValue === "" ? null : inputValue
        }));
    };

    // Ejecuta el filtrado con la función de zustand.
    const handleFilter = () => {
        filterUsers(filterOptions);
    };

    // Limpia el estado local y el estado global, al mismo tiempo ejecuta el filtrado por lo que no es necesario llamar la función de filtrado <filterUsers()> en otro lado.
    const handleClearFilters = () => {
        setFilterOptions(FILTER_OPTIONS_EMPTY);
        filterUsers(null);
    };

    // Llama a la función de zustand "sortUsers" para manejar el orden el array. Espera 2 parámetros:
    // "clause" => "id" | "firstName" | "email" | "isActive" | "phone" | "createdAt".
    // "type" => "ascendant" | "descendant".
    const handleSort = (clause: "id" | "firstName" | "email" | "isActive" | "phone" | "createdAt", type: "ascendant" | "descendant") => {
        sortUsers(clause, type);
    };


    // LIFE CYCLES:
    // Obtiene y llena el array de usuarios.
    useEffect(() => {
        if (users.length === 0 && !isUsersFetching) {
            fetchUsers();
        };
    }, [fetchUsers, isUsersFetching]);


    // COMPONENT:
    return (
        <div className='relative flex flex-col min-w-0 break-words w-[96%] mx-auto mb-6 shadow-lg rounded-xl bg-white border dark:bg-primary-dm dark:text-white text-black font-[Nunito]'>
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative flex items-center justify-between w-full max-w-full flex-grow flex-1">
                        <h3 className="text-xl">
                            Usuarios
                        </h3>
                        <SearchBar section="user" setFilterMenu={setFilterMenu} />
                    </div>
                </div>
            </div>
            {
                filterMenu ? (
                    <div className="w-full px-8">
                        <h3>Filtros:</h3>
                        <div className="flex items-center">
                            <span>Estado:</span>
                            {
                                USER_STATUS.map((isActive, idx) => (
                                    <div>
                                        <input
                                            id={`${isActive}` + idx}
                                            type="radio"
                                            checked={filterOptions.isActive === isActive ?? false}
                                            onChange={() => handleRadioChange(isActive)}
                                        />
                                        <label htmlFor={`${isActive}` + idx}>{isActive ? "Activo" : "Inactivo"}</label>
                                    </div>
                                ))
                            }
                            <button onClick={handleRemoveRadioOption}>Eliminar</button>
                        </div>
                        <div>
                            <span>Fecha de registro:</span>
                            <label>depués de:</label><input type="date" value={filterOptions.after} onChange={(e) => handleInputDate(e, "after")} />
                            <label>antes de:</label><input type="date" value={filterOptions.before} onChange={(e) => handleInputDate(e, "before")} />
                        </div>
                        <button onClick={handleFilter}>Aplicar filtros</button>
                        <button onClick={handleClearFilters}>Limpira filtros</button>
                    </div>
                ) : null
            }
            <div className="block w-full overflow-x-auto">
                {/* Projects table */}
                <table className="table-fixed items-center w-full min-w-[1200px] bg-transparent border-collapse">
                    <thead className='w-full'>
                        <tr className='w-full text-[#555555]'>
                            <th className="w-[10%] px-6 align-middle py-3 whitespace-nowrap font-normal text-left">
                                Id
                                <div className="flex justify-between">
                                    <button onClick={() => handleSort("id", "ascendant")}>asc</button>
                                    <button onClick={() => handleSort("id", "descendant")}>desc</button>
                                </div>
                            </th>
                            <th className="w-[20%] px-6 align-middle py-3 whitespace-nowrap font-normal text-left">
                                Nombre
                                <div className="flex justify-between">
                                    <button onClick={() => handleSort("firstName", "ascendant")}>asc</button>
                                    <button onClick={() => handleSort("firstName", "descendant")}>desc</button>
                                </div>
                            </th>
                            <th className="w-[30%] px-6 align-middle py-3 whitespace-nowrap font-normal text-left" >
                                Correo electrónico
                                <div className="flex justify-between">
                                    <button onClick={() => handleSort("email", "ascendant")}>asc</button>
                                    <button onClick={() => handleSort("email", "descendant")}>desc</button>
                                </div>
                            </th>
                            <th className="w-[15%] px-6 align-middle py-3 whitespace-nowrap font-normal text-left" >
                                Estado
                                <div className="flex justify-between">
                                    <button onClick={() => handleSort("isActive", "ascendant")}>asc</button>
                                    <button onClick={() => handleSort("isActive", "descendant")}>desc</button>
                                </div>
                            </th>
                            <th className="w-[15%] px-6 align-middle py-3 whitespace-nowrap font-normal text-left" >
                                Rol
                                <div className="flex justify-between">
                                    <button onClick={() => handleSort("createdAt", "ascendant")}>asc</button>
                                    <button onClick={() => handleSort("createdAt", "descendant")}>desc</button>
                                </div>
                            </th>
                            <th className="w-[10%] px-6 align-middle py-3 whitespace-nowrap font-normal text-left" >
                                Acción
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-black">
                        {
                            Array.isArray(users) && users.map((USER: UsersInterface) => {
                                const { id, firstName, lastName, email, phone, rol, isActive, createdAt } = USER;
                                // const startDate = createdAt.substring(0, 10);

                                return (
                                    <tr key={id} className="relative after:absolute after:content-[''] after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-[96%] after:h-[.5px] after:bg-[#A0A0A0]">
                                        <th className="overflow-hidden px-6 align-middle h-[80px] font-normal whitespace-nowrap font-mono">
                                            {id}
                                        </th>
                                        <td className="overflow-hidden px-6 align-middle h-[80px] text-left whitespace-nowrap">
                                            <span className="dm:text-white">
                                                {firstName} {lastName}
                                            </span>
                                        </td>
                                        <td className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap">
                                            {email}
                                        </td>
                                        <td className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap">
                                            <div className={`flex items-center w-fit p-[10px] px-4 rounded-[50px] ${isActive ? "bg-[#C9E2C9] text-[#00CC66]" : "bg-[#FFBABA] text-[#C43B3B]"}`}>
                                                <i className={`fas fa-circle mr-2 text-xs`} />
                                                {isActive ? "Activo" : "Inactivo"}
                                            </div>
                                        </td>
                                        <td className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap">
                                            <div className="flex items-center">
                                                <span className="mr-2 capitalize">{rol === "user" ? "cliente" : "admin"}</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 flex rounded bg-red-200">
                                                        <div
                                                            style={{ width: '60%' }}
                                                            className="shadow-none flex flex-col text-center text-white justify-center bg-red-500"
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 align-middle h-[80px] text-right">
                                            <div className="w-fit p-[.4rem] m-auto border rounded-[10px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};