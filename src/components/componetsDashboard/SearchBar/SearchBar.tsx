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
    const { filterUsersByName, filterUsersByEmail, filterUsersByPhone, filterProductsByName, filterCategoriesByName, filterBrandsByName, filterOrdersByName }: any = useDashboardAdminStore();


    // LOCAL STATES
    const [input, setInput] = useState<string>("");

    const [userProperty, setUserProperty] = useState<"name" | "email" | "phone">("email");
    const [userPropertyMenu, setUserPropertyMenu] = useState<boolean>(false);


    // CONSTANTS:
    const userPropertyMenuRef = useRef<HTMLDivElement | null>(null);
    const displayedProperty = {
        name: "NOMBRE",
        email: "CORREO",
        phone: "TELÉFONO"
    };


    // FUNCTIONS:
    const handleChange = (event: any) => {
        setInput(event.target.value)
    };

    const filter = (input: string) => {
        switch (section) {
            case "user": (userProperty === "email") ? filterUsersByEmail(input) : ((userProperty === "name") ? filterUsersByName(input) : filterUsersByPhone(input)); break;
            case "product": filterProductsByName(input); break;
            case "category": filterCategoriesByName(input); break;
            case "brand": filterBrandsByName(input); break;
            case "order": filterOrdersByName(input); break;
            default: break;
        };
    };

    const handleOutsideClick = (event: any) => {
        if (userPropertyMenu && userPropertyMenuRef.current && !userPropertyMenuRef.current.contains(event.target)) {
            setUserPropertyMenu(false);
        };
    };


    // LIFE CYCLES:
    useEffect(() => {
        document.addEventListener('click', handleOutsideClick)
        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [userPropertyMenu]);


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
                        {displayedProperty[userProperty]}
                        {
                            userPropertyMenu ? (
                                <span
                                    ref={userPropertyMenuRef}
                                    className="absolute z-50 top-full left-0 p-4 rounded-sm bg-secondary-background shadow-lg"
                                >
                                    <p className="mb-2 whitespace-nowrap">Buscar por:</p>
                                    <div
                                        className="p-2 whitespace-nowrap hover:bg-background-lm hover:cursor-pointer"
                                        onClick={() => { setUserProperty("email"); setUserPropertyMenu(false) }}
                                    >Email</div>
                                    <div
                                        className="p-2 whitespace-nowrap hover:bg-background-lm hover:cursor-pointer"
                                        onClick={() => { setUserProperty("name"); setUserPropertyMenu(false) }}
                                    >Nombre</div>
                                    <div
                                        className="p-2 whitespace-nowrap hover:bg-background-lm hover:cursor-pointer"
                                        onClick={() => { setUserProperty("phone"); setUserPropertyMenu(false) }}
                                    >Teléfono</div>
                                </span>
                            ) : null
                        }
                    </div>
                ) : null
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
        </div>
    );
};


export default SearchBar;