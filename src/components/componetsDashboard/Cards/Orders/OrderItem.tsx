"use client";
import { useState } from "react";

// Type definitions:
import { OrdersInterface } from "~/types/dashboardAdminStore";


// --------------- MODULE ---------------
interface OrderItemProps {
    ORDER: OrdersInterface
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
                <th className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap font-normal font-mono">
                    <div className="relative w-full overflow-hidden text-left after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-white after:to-40% dm:text-white">
                        {ORDER.id}
                    </div>
                </th>
                <td className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap">
                    <div className="relative w-full overflow-hidden text-left after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-white after:to-40% dm:text-white">
                        {ORDER.orderNumber}
                    </div>
                </td>
                <td className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap">
                    <div className="relative w-full overflow-hidden text-left after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-white after:to-40% dm:text-white">
                        {ORDER.creationDate}
                    </div>
                </td>
                <td className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap">
                    <div className="relative w-full overflow-hidden text-left after:absolute after:pointer-events-none after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-l after:from-white after:to-40% dm:text-white">
                        {ORDER.payment.method}
                    </div>
                </td>
                <td className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap">
                    <div className={`flex items-center w-fit p-[10px] px-4 rounded-[50px] ${ORDER.status ? "bg-[#C9E2C9] text-[#00CC66]" : "bg-[#FFBABA] text-[#C43B3B]"}`}>
                        <i className={`fas fa-circle mr-2 text-xs`} />
                        {ORDER.status ? "Activo" : "Inactivo"}
                    </div>
                </td>
                <td className="overflow-hidden px-6 align-middle h-[80px] whitespace-nowrap">
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
                            <div className="flex justify-between w-full">
                                <div className="w-[30%] p-4 bg-white rounded-xl text-black">
                                    <h3>CLIENTE</h3>
                                    <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <th>USER ID:</th>
                                                <td>{ORDER.customer.name}</td>
                                            </tr>
                                            <tr>
                                                <th>NOMBRE:</th>
                                                <td>{ORDER.customer.name}</td>
                                            </tr>
                                            <tr>
                                                <th>CORREO:</th>
                                                <td>{ORDER.customer.emailAddress}</td>
                                            </tr>
                                            <tr>
                                                <th>TELÉFONO:</th>
                                                <td>{ORDER.customer.phoneNumber}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="w-[30%] p-4 bg-white rounded-2xl text-black">
                                    <h3>ENVIAR A:</h3>
                                    <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <th>NÚMERO</th>
                                                <td>{ORDER.customer.address.phone}</td>
                                            </tr>
                                            <tr>
                                                <th>DEPARTAMENTO:</th>
                                                <td>{ORDER.customer.address.department}</td>
                                            </tr>
                                            <tr>
                                                <th>CIUDAD:</th>
                                                <td>{ORDER.customer.address.city}</td>
                                            </tr>
                                            <tr>
                                                <th>DIRECCIÓN DE LA CALLE:</th>
                                                <td>{ORDER.customer.address.streetAddress}</td>
                                            </tr>
                                            <tr>
                                                <th>BARRIO:</th>
                                                <td>{ORDER.customer.address.neighborhood}</td>
                                            </tr>
                                            <tr>
                                                <th>REFERENCIAS:</th>
                                                <td>{ORDER.customer.address.references}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="w-[30%] p-4 bg-white rounded-2xl text-black">
                                    <h3>PAGO:</h3>
                                    <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <th>FECHA DE OP.:</th>
                                                <td>{ORDER.payment.date}</td>
                                            </tr>
                                            <tr>
                                                <th>MÉTODO:</th>
                                                <td>{ORDER.payment.method}</td>
                                            </tr>
                                            <tr>
                                                <th>ESTADO:</th>
                                                <td>{ORDER.payment.status}</td>
                                            </tr>
                                            <tr>
                                                <th>NÚMERO DE APROBACIÓN:</th>
                                                <td>{ORDER.payment.approvalNumber}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="flex justify-between w-full mt-8">
                                <div className="w-[65%] p-4 bg-white rounded-2xl text-black">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>PRODUCTO</th>
                                                <th>CANTIDAD</th>
                                                <th>PRECIO UNITARIO</th>
                                                <th>SUBTOTAL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                ORDER.list.map((ORDER_ITEM, idx) => {
                                                    // Aprovechando el map a la lista de items, sumar el subtotal de cada item.
                                                    const subtotal = ORDER_ITEM.quantity * ORDER_ITEM.value;
                                                    total += subtotal;

                                                    return (
                                                        <tr key={ORDER_ITEM.name + idx}>
                                                            {/* simular el ID. */}
                                                            <th>{idx}</th>
                                                            <td>{ORDER_ITEM.name}</td>
                                                            <td>{ORDER_ITEM.quantity}</td>
                                                            <td>{ORDER_ITEM.value}</td>
                                                            <td>{subtotal}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            <tr>
                                                <th colSpan={4}>TOTAL</th>
                                                <td>{total}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="w-[30%] p-4 bg-white rounded-2xl text-black">
                                    <h3>NOTAS</h3>
                                    <textarea className="w-full bg-white" />
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