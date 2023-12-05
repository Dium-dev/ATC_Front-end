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
    const [showDetails, setShowDetails] = useState<boolean>(false);


    // CONSTANTS:
    // El "total" alamacena el precio total de la orden. El resultado se obtiene de la suma del precio de todos los items comprados.
    let total = 0;


    // COMPONENT:
    return (
        <>
            <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {ORDER.id}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {ORDER.orderNumber}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {ORDER.creationDate}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-circle text-orange-500 mr-2"></i> {ORDER.status}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {ORDER.total}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                    {/* <TableDropdown /> */}
                    <button onClick={() => setShowDetails((prev) => !prev)}>mostrar detalles</button>
                </td>
            </tr>
            {
                showDetails && (
                    <tr>
                        <td colSpan={6}>
                            <div className="flex justify-between w-full">
                                <div className="w-[30%] p-4 bg-white rounded-xl text-black">
                                    <h3>CLIENTE</h3>
                                    <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <th>USER ID:</th>
                                                <td>{ORDER.costumer.name}</td>
                                            </tr>
                                            <tr>
                                                <th>NOMBRE:</th>
                                                <td>{ORDER.costumer.name}</td>
                                            </tr>
                                            <tr>
                                                <th>CORREO:</th>
                                                <td>{ORDER.costumer.emailAddress}</td>
                                            </tr>
                                            <tr>
                                                <th>TELÉFONO:</th>
                                                <td>{ORDER.costumer.phoneNumber}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="w-[30%] p-4 bg-white rounded-2xl text-black">
                                    <h3>ENVIAR A:</h3>
                                    <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <th>DEPARTAMENTO:</th>
                                                <td>{ORDER.costumer.address.department}</td>
                                            </tr>
                                            <tr>
                                                <th>LOCALIDAD:</th>
                                                <td>{ORDER.costumer.address.locality}</td>
                                            </tr>
                                            <tr>
                                                <th>BARRIO:</th>
                                                <td>{ORDER.costumer.address.neighborhood}</td>
                                            </tr>
                                            <tr>
                                                <th>NÚMERO:</th>
                                                <td>{ORDER.costumer.address.number}</td>
                                            </tr>
                                            <tr>
                                                <th>REFERENCIAS:</th>
                                                <td>{ORDER.costumer.address.references}</td>
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