"use client";
import { useState } from "react";

// Type definitions:
import { OrdersInterface } from "~/types/dashboardAdminStore";


// --------------- MODULE ---------------
interface OrderItemProps {
    ORDER: OrdersInterface
}

function ButtonEdit() {
    return (
        <button className="px-5 py-[8px] rounded-[10px] bg-secondary-lm text-white text-sm font-bold tracking-wider uppercase">
            Editar
        </button>
    );
}

function OrderItem({ ORDER }: OrderItemProps) {


    // LOCAL STATES:
    const [detailsVisible, setDetailsVisible] = useState<boolean>(false);


    // CONSTANTS:
    // El "total" alamacena el precio total de la orden. El resultado se obtiene de la suma del precio de todos los items comprados.
    let total = 0;


    // FUNCTIONS:
    const showDetails = () => {
        setDetailsVisible((prev) => !prev);
    }


    // COMPONENT:
    return (
        <>
            <tr className="relative after:absolute after:content-[''] after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-[96%] after:h-[.5px] after:bg-[#A0A0A0]">
                <th className={`overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap font-normal font-mono ${detailsVisible ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}>
                    <div className="relative w-full overflow-hidden text-left after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-white after:to-40% dm:text-white">
                        {ORDER.id}
                    </div>
                </th>
                <td className={`overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap ${detailsVisible ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}>
                    <div className="relative w-full overflow-hidden text-left after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-white after:to-40% dm:text-white">
                        {ORDER.orderNumber}
                    </div>
                </td>
                <td className={`overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap ${detailsVisible ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}>
                    <div className="relative w-full overflow-hidden text-left after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-white after:to-40% dm:text-white">
                        {ORDER.creationDate}
                    </div>
                </td>
                <td className={`overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap ${detailsVisible ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}>
                    <div className="relative w-full overflow-hidden text-left after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-white after:to-40% dm:text-white">
                        {ORDER.payment.method}
                    </div>
                </td>
                <td className={`overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap ${detailsVisible ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}>
                    <div className={`flex items-center w-fit p-[10px] px-4 rounded-[50px] ${ORDER.status ? "bg-[#C9E2C9] text-[#00CC66]" : "bg-[#FFBABA] text-[#C43B3B]"}`}>
                        <i className={`fas fa-circle mr-2 text-xs`} />
                        {ORDER.status ? "Activo" : "Inactivo"}
                    </div>
                </td>
                <td className={`overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap ${detailsVisible ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}>
                    {ORDER.total}
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
                    <tr>
                        <td colSpan={7}>
                            <div className="flex justify-between gap-6 w-full p-6">
                                {/* 1st Col */}
                                <div className="flex flex-col gap-6 w-1/2">
                                    <div className="flex items-center w-full h-[80px] p-4 bg-[#F5F5F5] rounded-xl animate-drop">
                                        <div className="text-[#555555]">ID: <span className="text-black font-mono">{ORDER.id}</span></div>
                                    </div>
                                    <div className="w-full px-4 bg-[#F5F5F5] rounded-xl animate-drop" style={{ animationDelay: '150ms' }}>
                                        <div className="flex items-center justify-between gap-8 w-full h-[80px] -mb-[20px]">
                                            <div className="py-2 text-[#555555]">Número de orden: <span className="text-black">{ORDER.orderNumber ? ORDER.orderNumber : "No especificado"}</span></div>
                                        </div>
                                        <div className="flex items-center justify-between gap-8 w-full min-h-[80px]">
                                            <div className="py-2 text-[#555555]">Fecha de creación: <span className="text-black">{ORDER.creationDate ? ORDER.creationDate : "No especificado"}</span></div>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 bg-[#F5F5F5] rounded-xl animate-drop" style={{ animationDelay: '300ms' }}>
                                        <span className="flex items-center h-[80px] -mb-[20px] font-bold uppercase">Cliente:</span>
                                        <div className="flex items-center justify-between gap-8 w-full h-[80px] -mb-[20px]">
                                            <div className="py-2 text-[#555555]">ID del cliente: <span className="text-black">{ORDER.customer.name ? ORDER.customer.address.phone : "No especificado"}</span></div>
                                        </div>
                                        <div className="flex items-center justify-between gap-8 w-full min-h-[80px] -mb-[20px]">
                                            <div className="py-2 text-[#555555]">Nombre completo: <span className="text-black">{ORDER.customer.name ? ORDER.customer.name : "No especificado"}</span></div>
                                        </div>
                                        <div className="flex items-center justify-between gap-8 w-full min-h-[80px] -mb-[20px]">
                                            <div className="py-2 text-[#555555]">Correo electrónico: <span className="text-black">{ORDER.customer.emailAddress ? ORDER.customer.emailAddress : "No especificado"}</span></div>
                                        </div>
                                        <div className="flex items-center justify-between gap-8 w-full min-h-[80px]">
                                            <div className="py-2 text-[#555555]">Número telefónico:: <span className="text-black">{ORDER.customer.phoneNumber ? ORDER.customer.phoneNumber : "No especificado"}</span></div>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 bg-[#F5F5F5] rounded-xl animate-drop" style={{ animationDelay: '450ms' }}>
                                        <table className="table-fixed w-full">
                                            <thead className="-mb-[20px]">
                                                <tr>
                                                    <th className="w-[10%] h-[80px] align-middle px-2 py-3 whitespace-nowrap font-normal text-left">ID</th>
                                                    <th className="w-[30%] h-[80px] align-middle px-2 py-3 whitespace-nowrap font-normal text-left">Producto</th>
                                                    <th className="w-[20%] h-[80px] align-middle px-2 py-3 whitespace-nowrap font-normal text-left">Cantidad</th>
                                                    <th className="w-[20%] h-[80px] align-middle px-2 py-3 whitespace-nowrap font-normal text-left">Precio un.</th>
                                                    <th className="w-[20%] h-[80px] align-middle px-2 py-3 whitespace-nowrap font-normal text-left">Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    ORDER.list.map((ORDER_ITEM, idx) => {
                                                        // Aprovechando el map a la lista de items, sumar el subtotal de cada item.
                                                        const subtotal = ORDER_ITEM.quantity * ORDER_ITEM.value;
                                                        total += subtotal;

                                                        return (
                                                            <tr key={ORDER_ITEM.name + idx} className="relative after:absolute after:content-[''] after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-[96%] after:h-[.5px] after:bg-[#A0A0A0]">
                                                                {/* simular el ID. */}
                                                                <th className="overflow-hidden align-middle h-[60px] px-2 whitespace-nowrap font-normal">
                                                                    <div className="relative w-full overflow-hidden text-left after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-[#F5F5F5] after:to-40% dm:text-white">
                                                                        {idx}
                                                                    </div>
                                                                </th>
                                                                <td className="overflow-hidden align-middle h-[60px] px-2 whitespace-nowrap font-normal">
                                                                    <div className="relative w-full overflow-hidden text-left after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-[#F5F5F5] after:to-40% dm:text-white">
                                                                        {ORDER_ITEM.name}
                                                                    </div>
                                                                </td>
                                                                <td className="overflow-hidden align-middle h-[60px] px-2 whitespace-nowrap font-normal">
                                                                    <div className="relative w-full overflow-hidden text-left after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-[#F5F5F5] after:to-40% dm:text-white">
                                                                        {ORDER_ITEM.quantity}
                                                                    </div>
                                                                </td>
                                                                <td className="overflow-hidden align-middle h-[60px] px-2 whitespace-nowrap font-normal">
                                                                    <div className="relative w-full overflow-hidden text-left after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-[#F5F5F5] after:to-40% dm:text-white">
                                                                        {ORDER_ITEM.value}
                                                                    </div>
                                                                </td>
                                                                <td className="overflow-hidden align-middle h-[60px] px-2 whitespace-nowrap font-normal">
                                                                    <div className="relative w-full overflow-hidden text-left after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-[#F5F5F5] after:to-40% dm:text-white">
                                                                        {subtotal}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                <tr className="relative after:absolute after:content-[''] after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-[96%] after:h-[.5px] after:bg-[#A0A0A0]">
                                                    <th className="overflow-hidden align-middle h-[80px] px-2 whitespace-nowrap text-right" colSpan={4}>Total:</th>
                                                    <td className="overflow-hidden align-middle h-[80px] px-2 whitespace-nowrap font-normal">
                                                        <div className="relative w-full overflow-hidden text-left after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-[#F5F5F5] after:to-40% dm:text-white">
                                                            {total}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* 2nd Col */}
                                <div className="flex flex-col gap-6 w-1/2 px-4">
                                    <div className="flex items-center justify-between w-full h-[80px] p-4 bg-[#F5F5F5] rounded-xl animate-drop">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#555555]">Estado:</span>
                                            <div className={`flex items-center w-fit p-[10px] px-4 rounded-[50px] ${ORDER.status ? "bg-[#C9E2C9] text-[#00CC66]" : "bg-[#FFBABA] text-[#C43B3B]"}`}>
                                                <i className={`fas fa-circle mr-2 text-xs`} />
                                                {ORDER.status ? "Activo" : "Inactivo"}
                                            </div>
                                        </div>
                                        <ButtonEdit />
                                    </div>
                                    <div className="w-full px-4 bg-[#F5F5F5] rounded-xl animate-drop" style={{ animationDelay: '150ms' }}>
                                        <span className="flex items-center h-[80px] -mb-[20px] font-bold uppercase">Información de pago:</span>
                                        <div className="flex items-center justify-between gap-8 w-full h-[80px] -mb-[20px]">
                                            <div className="py-2 text-[#555555]">Fecha de operación: <span className="text-black">{ORDER.payment.date ? ORDER.payment.date : "No especificado"}</span></div>
                                        </div>
                                        <div className="flex items-center justify-between gap-8 w-full min-h-[80px] -mb-[20px]">
                                            <div className="py-2 text-[#555555]">Método: <span className="text-black">{ORDER.payment.method ? ORDER.payment.method : "No especificado"}</span></div>
                                        </div>
                                        <div className="flex items-center justify-between gap-8 w-full min-h-[80px] -mb-[20px]">
                                            <div className="py-2 text-[#555555]">Estado: <span className="text-black">{ORDER.payment.status ? ORDER.payment.status : "No especificado"}</span></div>
                                        </div>
                                        <div className="flex items-center justify-between gap-8 w-full min-h-[80px]">
                                            <div className="py-2 text-[#555555]">Número de aprobación: <span className="text-black">{ORDER.payment.approvalNumber ? ORDER.payment.approvalNumber : "No especificado"}</span></div>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 bg-[#F5F5F5] rounded-xl animate-drop" style={{ animationDelay: '300ms' }}>
                                        <span className="flex items-center h-[80px] -mb-[20px] font-bold uppercase">Enviar a:</span>
                                        <div className="flex items-center justify-between gap-8 w-full h-[80px] -mb-[20px]">
                                            <div className="py-2 text-[#555555]">Número: <span className="text-black">{ORDER.customer.address.phone ? ORDER.customer.address.phone : "No especificado"}</span></div>
                                            <ButtonEdit />
                                        </div>
                                        <div className="flex items-center justify-between gap-8 w-full min-h-[80px] -mb-[20px]">
                                            <div className="py-2 text-[#555555]">Departamento: <span className="text-black">{ORDER.customer.address.department ? ORDER.customer.address.department : "No especificado"}</span></div>
                                            <ButtonEdit />
                                        </div>
                                        <div className="flex items-center justify-between gap-8 w-full min-h-[80px] -mb-[20px]">
                                            <div className="py-2 text-[#555555]">Ciudad: <span className="text-black">{ORDER.customer.address.city ? ORDER.customer.address.city : "No especificado"}</span></div>
                                            <ButtonEdit />
                                        </div>
                                        <div className="flex items-center justify-between gap-8 w-full min-h-[80px] -mb-[20px]">
                                            <div className="py-2 text-[#555555]">Dirección de la calle: <span className="text-black">{ORDER.customer.address.streetAddress ? ORDER.customer.address.streetAddress : "No especificado"}</span></div>
                                            <ButtonEdit />
                                        </div>
                                        <div className="flex items-center justify-between bg-transparent gap-8 w-full min-h-[80px]">
                                            <div className="py-2 text-[#555555]">Referencias: <span className="text-black">{ORDER.customer.address.references ? ORDER.customer.address.references : "No especificado"}</span></div>
                                            <ButtonEdit />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 pb-6 bg-[#F5F5F5] rounded-xl animate-drop" style={{ animationDelay: '450ms' }}>
                                        <span className="flex items-center h-[80px] font-bold uppercase">Notas:</span>
                                        <textarea className="w-full min-h-[80px] mb-4 bg-[#F5F5F5]" />
                                        <button className="w-full px-5 py-[8px] rounded-[10px] bg-secondary-lm text-white text-sm font-bold tracking-wider uppercase">Guardar</button>
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


export default OrderItem;