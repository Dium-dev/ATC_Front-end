"use client";
import { useEffect } from 'react';
import PropTypes from 'prop-types';

// components
import SearchBar from '../SearchBar/SearchBar';
import TableDropdown from '~/components/componetsDashboard/Dropdowns/TableDropdown';

import useDashboardAdminStore from '~/store/dashboardAdminStore';


interface UsersInterface {
    id: number,
    name: string,
    picture: string,
    emailAddress: string,
    status: "active" | "blocked",
    registerDate: string,
};

const USERS: UsersInterface[] = [
    {
        id: 1,
        name: "John",
        picture: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
        status: "active",
        emailAddress: "johndoe@gmail.com",
        registerDate: "27/09/2023"
    },
    {
        id: 2,
        name: "Doe",
        picture: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
        status: "blocked",
        emailAddress: "doejohn@hotmail.com",
        registerDate: "21/07/2023"
    }
];


type CardUsersProps = {
    color: string
};

export default function CardUsers({ color }: CardUsersProps) {


    // GLOBAL STORE:
    const { users, updateUsers }: any = useDashboardAdminStore();


    // LIFE CYCLES:
    useEffect(() => {
        updateUsers(USERS);
    }, []);


    // COMPONENT:
    return (
        <>
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
                                Usuarios
                            </h3>
                            <SearchBar section="user" />
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
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
                                    Correo electrónico
                                </th>
                                <th
                                    className={
                                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                        (color === 'light'
                                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                            : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                    }
                                >
                                    Estado
                                </th>
                                <th
                                    className={
                                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                        (color === 'light'
                                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                            : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                    }
                                >
                                    Fecha de registro
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
                                users.map((USER: any, idx: any) => (
                                    <tr key={idx}>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {USER.id}
                                        </th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                            <img
                                                src={USER.picture}
                                                className="h-12 w-12 bg-white rounded-full border"
                                                alt="..."
                                            ></img>
                                            <span
                                                className={
                                                    'ml-3 font-bold ' +
                                                    +(color === 'light' ? 'text-blueGray-600' : 'text-white')
                                                }
                                            >
                                                {USER.name}
                                            </span>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {USER.emailAddress}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <i className={`fas fa-circle text-orange-500 mr-2 ${USER.status === "active" ? "text-[#00FF00]" : "text-[#FF0000]"}`}></i> {USER.status === "active" ? "activado" : "bloqueado"}
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
        </>
    );
};

CardUsers.defaultProps = {
    color: 'light',
};

CardUsers.propTypes = {
    color: PropTypes.oneOf(['light', 'dark']),
};