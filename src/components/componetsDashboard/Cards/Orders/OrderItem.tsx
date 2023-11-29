"use client";
import { useState } from "react";

import { OrdersInterface } from "./CardOrders";


interface OrderItemInterface {
    ORDER: OrdersInterface
}

function OrderItem({ ORDER }: OrderItemInterface) {


    // LOCAL STATES:
    const [showDetails, setShowDetails] = useState<boolean>(false);


    // COMPONENT:
    return (
        <>

            <tr className={`${showDetails ? "hidden" : "table-row"}`}>
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
            <div className={`w-full ${showDetails ? "block visible" : "hidden invisible"}`}>
                <table>
                    <tr>
                        <th>ORDEN</th>
                        <td>
                            <table>
                                <tr>
                                    <th>ID</th>
                                    <td>{ORDER.id}</td>
                                </tr>
                                <tr>
                                    <td>Numero de orden</td>
                                    <td>{ORDER.orderNumber}</td>
                                </tr>
                                <tr>
                                    <td>Estado</td>
                                    <td>{ORDER.status}</td>
                                </tr>
                                <tr>
                                    <td>Lista de productos</td>
                                    <td>
                                        <ul>
                                            {
                                                ORDER.list.map((ORDER, idx) => (
                                                    <li key={ORDER.name + idx}>
                                                        <span>
                                                            {ORDER.name}
                                                        </span>
                                                        <span>
                                                            x{ORDER.quantity}
                                                        </span>
                                                        <span>
                                                            {ORDER.value}
                                                        </span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>{ORDER.total}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <th>Pago</th>
                        <td>
                            <table>
                                <tr>
                                    <td>Fecha</td>
                                    <td>{ORDER.payment.date}</td>
                                </tr>
                                <tr>
                                    <td>Metodo</td>
                                    <td>{ORDER.payment.method}</td>
                                </tr>
                                <tr>
                                    <td>Estado</td>
                                    <td>{ORDER.payment.state}</td>
                                </tr>
                                <tr>
                                    <td>Numero de aprobacion</td>
                                    <td>{ORDER.payment.approvalNumber}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <th>Usuario</th>
                        <td>
                            <table>
                                <tr>
                                    <td>Nombre</td>
                                    <td>{ORDER.client.name}</td>
                                </tr>
                                <tr>
                                    <td>Correo electronico</td>
                                    <td>{ORDER.client.emailAddress}</td>
                                </tr>
                                <tr>
                                    <td>Numero de telefono</td>
                                    <td>{ORDER.client.phoneNumber}</td>
                                </tr>
                                <tr>
                                    <td>Dirrecion registrada</td>
                                    <td>
                                        <table>
                                            <tr>
                                                <td>Departamento</td>
                                                <td>{ORDER.client.address.department}</td>
                                            </tr>
                                            <tr>
                                                <td>Localidad</td>
                                                <td>{ORDER.client.address.locality}</td>
                                            </tr>
                                            <tr>
                                                <td>Barrio</td>
                                                <td>{ORDER.client.address.neighborhood}</td>
                                            </tr>
                                            <tr>
                                                <td>Numero</td>
                                                <td>{ORDER.client.address.number}</td>
                                            </tr>
                                            <tr>
                                                <td>Referencias</td>
                                                <td>{ORDER.client.address.references}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
};


export default OrderItem;