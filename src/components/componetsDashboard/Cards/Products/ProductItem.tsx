"use client";
import { useState } from "react";

// Type definitions:
import { ProductsInterface } from "~/types/dashboardAdminStore";


// --------------- MODULE ---------------
interface ProductItemProps {
    PRODUCT: ProductsInterface
}

function ButtonEdit() {
    return (
        <button className="px-5 py-[8px] rounded-[10px] bg-secondary-lm text-white text-sm font-bold tracking-wider uppercase">
            Editar
        </button>
    );
}

function ButtonRedirectEdit() {
    return (
        <button className="px-6 py-[10px] rounded-[10px] bg-secondary-lm text-white text-sm font-bold tracking-wider uppercase">
            Ir a editar
        </button>
    );
}

function ProductItem({ PRODUCT }: ProductItemProps) {


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
            <tr key={PRODUCT.id} className="relative after:absolute after:content-[''] after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-[96%] after:h-[.5px] after:bg-[#A0A0A0]">
                <th className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap font-normal font-mono">
                    <div className="relative w-full overflow-hidden after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-white after:to-40% dm:text-white">
                        {PRODUCT.id}
                    </div>
                </th>
                <td className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap">
                    <div className="flex items-center">
                        <img
                            src={PRODUCT.image[0]}
                            className="h-12 w-12 bg-white rounded-full border"
                            alt=""
                        ></img>
                        <div className="relative inline-block w-full overflow-hidden ml-3 after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-white after:to-40% dm:text-white">
                            {PRODUCT.title}
                        </div>
                    </div>
                </td>
                <td className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap">
                    {PRODUCT.price}
                </td>
                <td className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap">
                    <div className="relative w-full overflow-hidden after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-white after:to-20% dm:text-white">
                        {PRODUCT.category.name}
                    </div>
                </td>
                <td className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap">
                    <div className="relative w-full overflow-hidden after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-white after:to-20% dm:text-white">
                        {PRODUCT.brand.name}
                    </div>
                </td>
                <td className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap">
                    <div className={`flex items-center w-fit p-[10px] px-4 rounded-[50px] ${PRODUCT.state ? "bg-[#C9E2C9] text-[#00CC66]" : "bg-[#FFBABA] text-[#C43B3B]"}`}>
                        <i className={`fas fa-circle mr-2 text-xs`} />
                        {PRODUCT.state ? "Activo" : "Inactivo"}
                    </div>
                </td>
                <td className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap">
                    <i className={`fas fa-circle mr-2 ${PRODUCT.stock >= 10 ? "text-[#00FF00]" : PRODUCT.stock >= 5 ? "text-[#FFC107]" : "text-[#FF0000]"}`}></i> {PRODUCT.stock}
                </td>
                <td className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap">
                    <button
                        className="block w-fit p-[.4rem] m-auto border rounded-[10px]"
                        onClick={showDetails}
                    >
                        <div>
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
                        <td colSpan={8}>
                            <div className="flex justify-between gap-6 w-full p-6">
                                {/* 1st Col */}
                                <div className="flex flex-col gap-6 w-1/2">
                                    <div className={`flex items-center w-full h-[80px] p-4 bg-[#F5F5F5] rounded-xl`}>
                                        <div className="text-[#555555]">ID: <span className="text-black font-mono">{PRODUCT.id}</span></div>
                                    </div>
                                    <div className="w-full px-4 bg-[#F5F5F5] rounded-xl">
                                        <div className="flex items-center justify-between w-full h-[80px] -mb-[20px]">
                                            <div className="py-2 text-[#555555]">Nombre del producto: <span className="text-black">{PRODUCT.title}</span></div>
                                            <ButtonEdit />
                                        </div>
                                        <div className="flex items-center justify-between w-full h-[80px] -mb-[20px]">
                                            <div className="py-2 text-[#555555]">Precio: <span className="text-black">{PRODUCT.price}</span></div>
                                            <ButtonEdit />
                                        </div>
                                        <div className="flex items-center justify-between w-full h-[80px]">
                                            <div className="py-2 text-[#555555]">Stock: <span className="text-black">{PRODUCT.stock}</span></div>
                                            <ButtonEdit />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 bg-[#F5F5F5] rounded-xl">
                                        <div className="flex items-center justify-between w-full h-[80px] -mb-[20px]">
                                            <div className="py-2 text-[#555555]">Categoría: <span className="text-black">{PRODUCT.category.name}</span></div>
                                            <ButtonEdit />
                                        </div>
                                        <div className="flex items-center justify-between w-full h-[80px]">
                                            <div className="py-2 text-[#555555]">Marca: <span className="text-black">{PRODUCT.brand.name}</span></div>
                                            <ButtonEdit />
                                        </div>
                                    </div>

                                </div>
                                {/* 2nd Col */}
                                <div className="flex flex-col gap-6 w-1/2">
                                    <div className="flex items-center justify-between w-full h-[80px] p-4 bg-[#F5F5F5] rounded-xl">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#555555]">Estado:</span>
                                            <div className={`flex items-center w-fit p-[10px] px-4 rounded-[50px] ${PRODUCT.state ? "bg-[#C9E2C9] text-[#00CC66]" : "bg-[#FFBABA] text-[#C43B3B]"}`}>
                                                <i className={`fas fa-circle mr-2 text-xs`} />
                                                {PRODUCT.state ? "Activo" : "Inactivo"}
                                            </div>
                                        </div>
                                        <ButtonEdit />
                                    </div>
                                    <div className="flex items-center justify-between w-full h-[80px] p-4 bg-[#F5F5F5] rounded-xl">
                                        <div className="text-[#555555]">Promocionado: <span className="text-black"> {PRODUCT.mostSelled ? "Sí" : "No"}</span></div>
                                        <ButtonRedirectEdit />
                                    </div>
                                    <div className="w-full px-4 bg-[#F5F5F5] rounded-xl">
                                        <div className="flex items-center justify-between w-full h-[80px] -mb-[20px]">
                                            <div className="py-2 text-[#555555]">Condición: <span className="text-black">{PRODUCT.condition ? PRODUCT.condition : "No especificado"}</span></div>
                                            <ButtonEdit />
                                        </div>
                                        <div className="flex items-center justify-between w-full h-[80px] -mb-[20px]">
                                            <div className="py-2 text-[#555555]">Modelo: <span className="text-black">{PRODUCT.model ? PRODUCT.model : "No especificado"}</span></div>
                                            <ButtonEdit />
                                        </div>
                                        <div className="flex items-center justify-between w-full h-[80px]">
                                            <div className="py-2 text-[#555555]">Año: <span className="text-black">{PRODUCT.year ? PRODUCT.year : "No especificado"}</span></div>
                                            <ButtonEdit />
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


export default ProductItem;