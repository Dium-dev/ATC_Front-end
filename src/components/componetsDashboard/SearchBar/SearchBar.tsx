"use client";
import { type } from "os";
import { useState, useRef, useEffect } from "react";

import { BiSearch } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { BsSliders2 } from "react-icons/bs";


import useDashboardAdminStore from "~/store/dashboardAdminStore";


export type UserFilterOptions = {
    // status: {
    //     "blocked": boolean,
    //     "activated": boolean,
    //     "deleted": boolean
    // };
    status: string[];
    after: string;
    before: string;
};

export type ProductFilterOptions = {
    category: {
        "farolas": boolean,
        "pisos": boolean,
        "espejos": boolean
    };
    brand: {
        "Audi": boolean,
        "Mitsubishi": boolean,
        "Hyundai": boolean
    };
    stock: {
        above: number | null,
        below: number | null
    };
    price: {
        above: number | null,
        below: number | null
    };
};

interface SearchBarProps {
    section: "user" | "product" | "brand" | "category" | "order";
    setFilterMenu?: Function;
    userFilterOptions?: UserFilterOptions;
};


function SearchBar({ section, setFilterMenu }: SearchBarProps) {


    // GLOBAL STATE:
    const { filterUsersByName, filterUsersByEmail, filterProducts, filterCategories, filterBrands, filterOrders }: any = useDashboardAdminStore();


    // LOCAL STATES
    const [input, setInput] = useState<string>("");

    const [userProperty, setUserProperty] = useState<"name" | "email">("email");
    const [userPropertyMenu, setUserPropertyMenu] = useState<boolean>(false);


    // CONSTANTS:
    const userPropertyMenuRef = useRef<HTMLDivElement | null>(null);


    // FUNCTIONS:
    const handleChange = (event: any) => {
        setInput(event.target.value)
    };

    const filter = (input: string) => {
        switch (section) {
            case "user": (userProperty === "email") ? filterUsersByEmail(input) : filterUsersByName(input); break;
            case "product": filterProducts(input); break;
            case "category": filterCategories(input); break;
            case "brand": filterBrands(input); break;
            case "order": filterOrders(input); break;
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
                        {userProperty === "name" ? "NOMBRE" : "EMAIL"}
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