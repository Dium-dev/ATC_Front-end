"use client";
import { useEffect, useState } from 'react';

// components
import SearchBar from '../SearchBar/SearchBar';
import TableDropdown from '~/components/componetsDashboard/Dropdowns/TableDropdown';

import useDashboardAdminStore from '~/store/dashboardAdminStore';
import { UserFilterOptions } from '../SearchBar/SearchBar';


// fetch(user/status/xxxxx) debería retornar todos los "status" posibles para el usuario. (blocked | activated | deleted | etc).
// Estas opciones son renderizadas como etiquetas de los checkboxes que se usan para filtrar a los usuarios.
const USER_STATUS = [
    "blocked",
    "activated",
    "deleted"
] as const;
type UserStatus = typeof USER_STATUS[number];

export interface UsersInterface {
    id: number,
    name: string,
    picture: string,
    emailAddress: string,
    status: UserStatus,
    phone: string,
    registerDate: string
};


// fetch(users/xxxxx) rebería retornar un array de objetos.
const USERS: UsersInterface[] = [
    {
        id: 1,
        name: "John",
        picture: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
        status: "activated",
        emailAddress: "johndoe@gmail.com",
        phone: "01 123456789",
        registerDate: "27/09/2023",
    },
    {
        id: 2,
        name: "Doe",
        picture: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
        status: "blocked",
        emailAddress: "doejohn@hotmail.com",
        phone: "10 987654321",
        registerDate: "21/07/2023"
    }
];


export default function CardUsers() {


    // CONSTANTS:
    const FILTER_OPTIONS_EMPTY = {
        status: [],
        after: "",
        before: ""
    };


    // GLOBAL STORE:
    const { users, updateUsers, filterUsers }: any = useDashboardAdminStore();


    // LOCAL STATES:
    const [filterMenu, setFilterMenu] = useState<boolean>(false);
    const [filterOptions, setFilterOptions] = useState<UserFilterOptions>(FILTER_OPTIONS_EMPTY);

    const handleCheckboxChange = (status: UserStatus) => {
        setFilterOptions((prevOptions: UserFilterOptions) => {
            // Si el "status" ya está incluido en "filterOptions.status", quitarlo de ese array (toggle checkbox).
            if (prevOptions.status.includes(status)) {
                const filteredUsers = prevOptions.status.filter((statusItem) => statusItem !== status);
                return {
                    ...prevOptions,
                    status: filteredUsers
                };
            } else {
                // Si no está en el array "filterOptions.status", entonces agregarlo (toggle checkbox).
                prevOptions.status.push(status)
                return {
                    ...prevOptions,
                    status: prevOptions.status
                };
            };
        });
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


    // LIFE CYCLES:
    // Simular petición al servidor para obtener datos y llenar el array de usuarios (users).
    useEffect(() => {
        updateUsers(USERS);
    }, []);


    // COMPONENT:
    return (
        <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded dark:bg-primary-dm dark:text-white'>
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative flex items-center justify-between w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-lg dm:text-blueGray-700">
                            Usuarios
                        </h3>
                        <SearchBar section="user" setFilterMenu={setFilterMenu} />
                    </div>
                </div>
            </div>
            {
                filterMenu ? (
                    <div className="w-full px-8 text-xs">
                        <h3>Filtros:</h3>
                        <div className="flex items-center">
                            <span>Estado:</span>
                            {
                                USER_STATUS.map((status: UserStatus, idx) => (
                                    <div key={status + idx} className="inline-flex items-center">
                                        <input
                                            className=""
                                            type="checkbox"
                                            checked={filterOptions.status.includes(status)}
                                            onChange={() => handleCheckboxChange(status)}
                                        /><label>{status}</label>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <span>Fecha de registro:</span>
                            <label>depués de:</label><input type="date" />
                            <label>antes de:</label><input type="date" />
                        </div>

                        <button onClick={handleFilter}>Aplicar filtros</button>
                        <button onClick={handleClearFilters}>Limpira filtros</button>
                    </div>
                ) : null
            }
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
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dm:bg-lightBlue-800 dm:text-lightBlue-300 dm:border-lightBlue-700" >
                                Correo electrónico
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dm:bg-lightBlue-800 dm:text-lightBlue-300 dm:border-lightBlue-700" >
                                Estado
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dm:bg-lightBlue-800 dm:text-lightBlue-300 dm:border-lightBlue-700" >
                                Fecha de registro
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dm:bg-lightBlue-800 dm:text-lightBlue-300 dm:border-lightBlue-700" >
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((USER: UsersInterface, idx: any) => (
                                <tr key={idx}>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {USER.id}
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                        <img
                                            src={USER.picture}
                                            className="h-12 w-12 bg-white rounded-full border"
                                            alt=""
                                        ></img>
                                        <span className="ml-3 font-bold text-blueGray-600 dm:text-white" >
                                            {USER.name}
                                        </span>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {USER.emailAddress}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i className={`fas fa-circle text-orange-500 mr-2 ${USER.status === "activated" ? "text-[#00FF00]" : "text-[#FF0000]"}`}></i> {USER.status === "activated" ? "activado" : "bloqueado"}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <div className="flex items-center">
                                            <span className="mr-2">{USER.registerDate}</span>
                                            <div className="relative w-full">
                                                <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                    <div
                                                        style={{ width: '60%' }}
                                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                                    ></div>
                                                </div>
                                            </div>
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