"use client";
import { useState } from "react";

// Type definitions:
import { UsersInterface } from "~/types/dashboardAdminStore";


// --------------- MODULE ---------------
interface UserItemProps {
    USER: UsersInterface
}

function ButtonEdit() {
    return (
        <button className="px-6 py-[10px] rounded-[10px] bg-secondary-lm text-white font-bold tracking-wide uppercase">
            Editar
        </button>
    );
}

function UserItem({ USER }: UserItemProps) {


    // LOCAL STATES:
    const [detailsVisible, setDetailsVisible] = useState<boolean>(false);

    // FUNCTIONS:
    const showDetails = () => {
        setDetailsVisible((prev) => !prev);
    }

    const formatDate = (date: string) => {
        return date.substring(0, 10);
    }


    // COMPONENT:
    return (
        <>
            <tr key={USER.id} className={`relative after:absolute after:content-[''] ${detailsVisible ? "animate-fadeIn" : ""} after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-[96%] after:h-[.5px] after:bg-[#A0A0A0]`}>
                <th className={`overflow-hidden px-6 align-middle h-[80px] font-normal whitespace-nowrap font-mono ${detailsVisible ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}>
                    <div className="relative w-full overflow-hidden after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-white after:to-40% dm:text-white">
                        {USER.id}
                    </div>
                </th>
                <td className={`overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap ${detailsVisible ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}>
                    {USER.firstName} {USER.lastName}
                </td>
                <td className={`overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap ${detailsVisible ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}>
                    {USER.email}
                </td>
                <td className={`overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap ${detailsVisible ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}>
                    <div className={`flex items-center w-fit p-[10px] px-4 rounded-[50px] ${USER.isActive ? "bg-[#C9E2C9] text-[#00CC66]" : "bg-[#FFBABA] text-[#C43B3B]"}`}>
                        <i className={`fas fa-circle mr-2 text-xs`} />
                        {USER.isActive ? "Activo" : "Inactivo"}
                    </div>
                </td>
                <td className={`overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap ${detailsVisible ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}>
                    <div className="flex items-center">
                        <span className="mr-2">{USER.rol === "user" ? "Cliente" : "Administrador"}</span>
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
                    <button
                        className="block w-fit p-[.4rem] m-auto border rounded-[10px]"
                        onClick={showDetails}
                    >
                        <div className={`${detailsVisible ? " rotate-180" : "rotate-0"} transition-transform duration-300`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </div>
                    </button>
                </td>
            </tr>
            {
                detailsVisible && (
                    <tr className="relative after:absolute after:content-[''] after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-[96%] after:h-[.5px] after:bg-[#A0A0A0]">
                        <td colSpan={6}>
                            <div className="flex justify-between gap-6 w-full p-6">
                                {/* 1st Col */}
                                <div className="flex flex-col gap-6 w-1/2">
                                    <div className={`flex items-center w-full h-[80px] p-4 bg-[#F5F5F5] rounded-xl animate-drop`}>
                                        <div className="text-[#555555]">ID: <span className="text-black font-mono">{USER.id}</span></div>
                                    </div>
                                    <div className="w-full py-2 px-4 bg-[#F5F5F5] rounded-xl animate-drop" style={{ animationDelay: '150ms' }}>
                                        <div className="w-full">
                                            <div className="py-2 text-[#555555]">Nombre completo: <span className="text-black">{USER.firstName} {USER.lastName}</span></div>
                                            <div className="py-2 text-[#555555]">Correo electrónico: <span className="text-black">{USER.email}</span></div>
                                            <div className="py-2 text-[#555555]">Número telefónico: <span className="text-black">{USER.phone}</span></div>
                                        </div>
                                    </div>
                                </div>
                                {/* 2nd Col */}
                                <div className="flex flex-col gap-6 w-1/2">
                                    <div className="flex items-center justify-between w-full h-[80px] p-4 bg-[#F5F5F5] rounded-xl animate-drop">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#555555]">Estado:</span>
                                            <div className={`flex items-center w-fit p-[10px] px-4 rounded-[50px] ${USER.isActive ? "bg-[#C9E2C9] text-[#00CC66]" : "bg-[#FFBABA] text-[#C43B3B]"}`}>
                                                <i className={`fas fa-circle mr-2 text-xs`} />
                                                {USER.isActive ? "Activo" : "Inactivo"}
                                            </div>
                                        </div>
                                        <ButtonEdit />
                                    </div>
                                    <div className="flex items-center justify-between w-full h-[80px] p-4 bg-[#F5F5F5] rounded-xl animate-drop" style={{ animationDelay: '150ms' }}>
                                        <div className="text-[#555555]">Rol: <span className="text-black">{USER.rol === "user" ? "Cliente" : "Administrador"}</span></div>
                                        <ButtonEdit />
                                    </div>
                                    <div className="w-full py-2 px-4 bg-[#F5F5F5] rounded-xl animate-drop" style={{ animationDelay: '300ms' }}>
                                        <div className="w-full">
                                            <div className="py-2 text-[#555555]">Fecha de registro: <span className="text-black">{formatDate(USER.createdAt)}</span></div>
                                            <div className="py-2 text-[#555555]">Última modificación: <span className="text-black">{formatDate(USER.updatedAt)}</span></div>
                                            <div className="py-2 text-[#555555]">Fecha de baja: <span className="text-black">{USER.deletedAt === null ? "No desactivado" : formatDate(USER.deletedAt)}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr >
                )
            }
        </>
    );
};


export default UserItem;