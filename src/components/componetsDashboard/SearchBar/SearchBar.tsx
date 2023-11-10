"use client";
import { useState } from "react";

import { BiSearch } from "react-icons/bi";
import useDashboardAdminStore from "~/store/dashboardAdminStore";


type SearchBarProps = {
    section: "user" | "product" | "brand" | "category" | "order";
};


function SearchBar({ section }: SearchBarProps) {


    const [input, setInput] = useState<string>("");

    const { filterUsers, filterProducts, filterCategories, filterBrands, filterOrders }: any = useDashboardAdminStore();

    const handleChange = (event: any) => {
        setInput(event.target.value)
    };

    const filter = (input: string) => {
        switch (section) {
            case "user": filterUsers(input); break;
            case "product": filterProducts(input); break;
            case "category": filterCategories(input); break;
            case "brand": filterBrands(input); break;
            case "order": filterOrders(input); break;
            default: break;
        };
    };


    return (
        <div className="flex items-center gap-2 w-[40%] h-full">
            <BiSearch
                size={22}
                className="hover:cursor-pointer hover:fill-secondary-lm transition-all duration-300"
                onClick={() => filter(input)}
            />
            <input
                type="text"
                className="w-full py-1.5 px-3 rounded-md text-secondary-dm bg-white border border-[#000]"
                placeholder={`Encontrar ${section === "user" && "usuario" || section === "product" && "producto" || section === "brand" && "marca" || section === "category" && "categoria" || section === "order" && "pedido"}`}
                onChange={(e) => handleChange(e)}
            />
        </div>
    )
};


export default SearchBar;