"use client";
import { useState, useRef, useEffect } from "react";

import { BiSearch } from "react-icons/bi";
import { BsGear } from "react-icons/bs";

import useDashboardAdminStore from "~/store/dashboardAdminStore";


type SearchBarProps = {
    section: "user" | "product" | "brand" | "category" | "order";
};


function SearchBar({ section }: SearchBarProps) {


    const [input, setInput] = useState<string>("");

    const [userProperty, setUserProperty] = useState<"name" | "email">("email");
    const [userPropertyMenu, setUserPropertyMenu] = useState<boolean>(false);

    const { filterUsersByName, filterUsersByEmail, filterProducts, filterCategories, filterBrands, filterOrders }: any = useDashboardAdminStore();

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

    const userPropertyMenuRef = useRef<HTMLDivElement | null>(null);
    const handleOutsideClick = (event: any) => {
        if (userPropertyMenu && userPropertyMenuRef.current && !userPropertyMenuRef.current.contains(event.target)) {
            setUserPropertyMenu(false);
        };
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick)
        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [userPropertyMenu]);


    return (
        <div className="flex items-center gap-2 h-full w-full justify-end">
            {
                section === "user" ? (
                    <div
                        className="relative flex gap-2 p-2 rounded-sm hover:bg-background-lm hover:cursor-pointer"
                        onClick={() => setUserPropertyMenu(true)}
                    >
                        <BsGear
                            size={22}
                            className="hover:cursor-pointer"
                        />
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
                size={22}
                className="hover:cursor-pointer hover:fill-secondary-lm transition-all duration-300"
                onClick={() => filter(input)}
            />
            <input
                type="text"
                className="w-[40%] py-1.5 px-3 rounded-md text-secondary-dm bg-white border border-[#000]"
                placeholder={`Encontrar ${section === "user" && "usuario" || section === "product" && "producto" || section === "brand" && "marca" || section === "category" && "categoria" || section === "order" && "pedido"}`}
                onChange={(e) => handleChange(e)}
            />
        </div>
    )
};


export default SearchBar;