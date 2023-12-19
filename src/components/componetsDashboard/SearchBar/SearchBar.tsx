"use client";
import { useState, useRef, useEffect } from "react";

// Zustand store:
import useDashboardAdminStore from "~/store/dashboardAdminStore";

// Type definitions:
import { UserFilterOptions } from "../dashboardAdmin";

// Components:
import { BiSearch } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { BsSliders2 } from "react-icons/bs";


// --------------- MODULE ---------------
interface SearchBarProps {
    section: "user" | "product" | "brand" | "category" | "order";
    setFilterMenu?: Function;
    userFilterOptions?: UserFilterOptions;
};


function SearchBar({ section, setFilterMenu }: SearchBarProps) {


    // GLOBAL STATE:
    const { filterUsersByName, filterUsersByEmail, filterUsersByPhone, filterProductsByName, filterCategoriesByName, filterBrandsByName, filterOrdersByOrderNumber, filterOrdersByUserName, filterOrdersByUserEmail, filterOrdersByUserPhone, filterOrdersByUserAddress }: any = useDashboardAdminStore();


    // LOCAL STATES
    const [input, setInput] = useState<string>("");

    const [userProperty, setUserProperty] = useState<"name" | "email" | "phone">("email");
    const [userPropertyMenu, setUserPropertyMenu] = useState<boolean>(false);
    const [orderProperty, setOrderProperty] = useState<"orderNumber" | "userName" | "userEmail" | "userPhone" | "userAddress" | "paymentNumber">("orderNumber");
    const [orderPropertyMenu, setOrderPropertyMenu] = useState<boolean>(false);


    // CONSTANTS:
    const userPropertyMenuRef = useRef<HTMLDivElement | null>(null);
    enum displayedPropertyUser {
        name = "NOMBRE",
        email = "CORREO",
        phone = "TELÉFONO"
    };

    const orderPropertyMenuRef = useRef<HTMLDivElement | null>(null);
    enum displayedPropertyOrder {
        orderNumber = "NÚMERO DE ORDEN",
        userName = "NOMBRE",
        userEmail = "CORREO ELECTRÓNICO",
        userPhone = "TELÉFONO",
        paymentNumber = "NÚMERO DE APROBACIÓN",
        userAddress = "DIRECCIÓN"
    };


    // FUNCTIONS:
    const handleChange = (event: any) => {
        setInput(event.target.value)
    };

    const filter = (input: string) => {
        switch (section) {
            case "user":
                if (userProperty === "email") filterUsersByEmail(input);
                else if (userProperty === "name") filterUsersByName(input);
                else if (userProperty === "phone") filterUsersByPhone(input);
                else break;
            case "product": filterProductsByName(input); break;
            case "category": filterCategoriesByName(input); break;
            case "brand": filterBrandsByName(input); break;
            case "order":
                if (orderProperty === "orderNumber") filterOrdersByOrderNumber(input);
                else if (orderProperty === "userEmail") filterOrdersByUserEmail(input);
                else if (orderProperty === "userName") filterOrdersByUserName(input);
                else if (orderProperty === "userAddress") filterOrdersByUserAddress(input);
                else if (orderProperty === "userPhone") filterOrdersByUserPhone(input);
                else break;
            default: break;
        };
    };

    const handleOutsideClick = (event: any) => {
        if (section === "user") {
            if (userPropertyMenu && userPropertyMenuRef.current && !userPropertyMenuRef.current.contains(event.target)) {
                setUserPropertyMenu(false);
            };
        } else if (section === "order") {
            if (orderPropertyMenu && orderPropertyMenuRef.current && !orderPropertyMenuRef.current.contains(event.target)) {
                setOrderPropertyMenu(false);
            };
        } else return;
    };


    // LIFE CYCLES:
    useEffect(() => {
        document.addEventListener('click', handleOutsideClick)
        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [userPropertyMenu, orderPropertyMenu]);


    // COMPONENT:
    return (
        <div className="relative flex items-center justify-end gap-2 h-full w-full text-xs">
            {
                section === "user" ? (
                    <div
                        className="relative flex items-center gap-2 p-2 rounded-sm hover:bg-background-lm hover:cursor-pointer"
                        onClick={() => setUserPropertyMenu(true)}
                    >
                        <BsGear size={20} />
                        {displayedPropertyUser[userProperty]}
                        {
                            userPropertyMenu ? (
                                <div
                                    ref={userPropertyMenuRef}
                                    className="absolute z-50 top-full left-0 p-4 rounded-sm bg-secondary-background shadow-lg"
                                >
                                    <span className="mb-2 whitespace-nowrap">Buscar por:</span>
                                    <ul>
                                        <li
                                            className="p-2 whitespace-nowrap hover:bg-background-lm hover:cursor-pointer"
                                            onClick={() => { setUserProperty("email"); setUserPropertyMenu(false) }}
                                        >Correo</li>
                                        <li
                                            className="p-2 whitespace-nowrap hover:bg-background-lm hover:cursor-pointer"
                                            onClick={() => { setUserProperty("name"); setUserPropertyMenu(false) }}
                                        >Nombre</li>
                                        <li
                                            className="p-2 whitespace-nowrap hover:bg-background-lm hover:cursor-pointer"
                                            onClick={() => { setUserProperty("phone"); setUserPropertyMenu(false) }}
                                        >Teléfono</li>
                                    </ul>
                                </div>
                            ) : null
                        }
                    </div>
                ) : (section === "order" ? (
                    <div
                        className="relative flex items-center gap-2 p-2 rounded-sm hover:bg-background-lm hover:cursor-pointer"
                        onClick={() => setOrderPropertyMenu(true)}
                    >
                        <BsGear size={20} />
                        {displayedPropertyOrder[orderProperty]}
                        {
                            orderPropertyMenu ? (
                                <div
                                    ref={orderPropertyMenuRef}
                                    className="absolute z-50 top-full left-0 p-4 rounded-sm bg-secondary-background shadow-lg"
                                >
                                    <span className="mb-2 whitespace-nowrap">Buscar por:</span>
                                    <div className="my-2">
                                        <span className="font-bold">Orden</span>
                                        <ul>
                                            <li
                                                className="p-2 whitespace-nowrap hover:bg-background-lm hover:cursor-pointer"
                                                onClick={() => { setOrderProperty("orderNumber"); setOrderPropertyMenu(false) }}
                                            >Número de orden</li>
                                        </ul>
                                    </div>
                                    <div className="my-2">
                                        <span className="font-bold">Usuario</span>
                                        <ul>
                                            <li
                                                className="p-2 whitespace-nowrap hover:bg-background-lm hover:cursor-pointer"
                                                onClick={() => { setOrderProperty("userEmail"); setOrderPropertyMenu(false) }}
                                            >
                                                Correo
                                            </li>
                                            <li
                                                className="p-2 whitespace-nowrap hover:bg-background-lm hover:cursor-pointer"
                                                onClick={() => { setOrderProperty("userName"); setOrderPropertyMenu(false) }}
                                            >Nombre</li>
                                            <li
                                                className="p-2 whitespace-nowrap hover:bg-background-lm hover:cursor-pointer"
                                                onClick={() => { setOrderProperty("userPhone"); setOrderPropertyMenu(false) }}
                                            >Teléfono
                                            </li>
                                            <li
                                                className="p-2 whitespace-nowrap hover:bg-background-lm hover:cursor-pointer"
                                                onClick={() => { setOrderProperty("userAddress"); setOrderPropertyMenu(false) }}
                                            >
                                                Dirección
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-2">
                                        <span className="font-bold">Pago</span>
                                        <ul>
                                            <li
                                                className="p-2 whitespace-nowrap hover:bg-background-lm hover:cursor-pointer"
                                                onClick={() => { setOrderProperty("paymentNumber"); setOrderPropertyMenu(false) }}
                                            >Número de aprobación</li>
                                        </ul>
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                ) : null)
            }
            <BiSearch
                size={20}
                className="hover:cursor-pointer hover:fill-secondary-lm transition-all duration-300"
                onClick={() => filter(input)}
            />
            <input
                type="text"
                className="w-[40%] py-1.5 px-3 rounded-md text-secondary-dm bg-white border border-[#000]"
                placeholder={`Encontrar ${section === "user" && "usuario" || section === "product" && "producto" || section === "brand" && "marca" || section === "category" && "categoria" || section === "order" && "pedido"}`}
                onChange={(e) => handleChange(e)}
            />
            {/* Renderizar el botón de filtrado en todas las secciones menos "brand" y "category" */}
            {
                section !== "brand" && section !== "category" ? (
                    <div
                        className="p-2 rounded-sm hover:bg-background-lm hover:cursor-pointer"
                        onClick={() => setFilterMenu && setFilterMenu((prev: any) => !prev)}
                    >
                        <BsSliders2 size={20} />
                    </div>
                ) : null
            }
        </div >
    );
};


export default SearchBar;