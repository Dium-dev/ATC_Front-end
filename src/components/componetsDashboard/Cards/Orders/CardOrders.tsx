"use client";
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// components
import SearchBar from '../../SearchBar/SearchBar';
import TableDropdown from '~/components/componetsDashboard/Dropdowns/TableDropdown';

import useDashboardAdminStore from '~/store/dashboardAdminStore';
import OrderItem from './OrderItem';


export interface OrdersInterface {
    id: number,
    orderNumber: number,
    creationDate: string,
    status: "cancelled" | "declined" | "approved" | "processing" | "inbound" | "delivered",
    total: number,
    list: {
        name: string,
        quantity: number,
        value: number
    }[],
    payment: {
        date: string,
        method: "MercadoPago" | "cash",
        state: "approved" | "declined" | "pending",
        approvalNumber: number
    },
    costumer: {
        name: string,
        emailAddress: string,
        phoneNumber: string,
        address: {
            department: string,
            locality: string,
            neighborhood: string,
            number: number,
            references: string
        }
    }
};


const ORDERS: OrdersInterface[] = [
    {
        id: 1,
        orderNumber: 123456789098,
        creationDate: "01 November 2023",
        status: "declined",
        total: 2489900,
        list: [{
            name: "product A",
            quantity: 1,
            value: 2489900
        },
        {
            name: "product B",
            quantity: 2,
            value: 3489900
        },

        ],
        payment: {
            date: "01 Novemeber 2023, 10:25 a.m. GMT-3",
            method: "MercadoPago",
            state: "approved",
            approvalNumber: 123456789
        },
        costumer: {
            name: "John",
            emailAddress: "johndoe@gmail.com",
            phoneNumber: "+54 123456789",
            address: {
                department: "Departamento",
                locality: "Localidad",
                neighborhood: "Barrio",
                number: 123,
                references: "Cerca al mall"
            }
        }
    },
    {
        id: 2,
        orderNumber: 324567876543,
        creationDate: "27 October 2023",
        status: "delivered",
        total: 1929900,
        list: [{
            // considerar agregar el ID del producto.
            name: "product B",
            quantity: 1,
            value: 1929900
        }],
        payment: {
            date: "27 October 2023, 10:25 a.m. GMT-3",
            method: "MercadoPago",
            state: "approved",
            approvalNumber: 987654321
        },
        costumer: {
            // considerar agregar el ID del usuario.
            name: "Doe",
            emailAddress: "doejohn@gmail.com",
            phoneNumber: "+57 123456789",
            address: {
                department: "Departamento",
                locality: "Localidad",
                neighborhood: "Vecindario",
                number: 321,
                references: "Cerca al mall"
            }
        }
        // agregar "notas" al back.
    }
];


type CardOrdersProps = {
    color: string
};

export default function CardOrders({ color }: CardOrdersProps) {


    // GLOBAL STORE:
    const { orders, updateOrders }: any = useDashboardAdminStore();


    // LOCAL STATES:
    const [filterMenu, setFilterMenu] = useState<boolean>(false);


    // LIFECYCLES:
    useEffect(() => {
        updateOrders(ORDERS);
    }, [])


    // COMPONENT:
    return (
        <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded dark:bg-primary-dm dark:text-white'>
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative flex items-center justify-between w-full px-4 max-w-full flex-grow flex-1">
                        <h3
                            className={
                                'font-semibold text-lg ' +
                                (color === 'light' ? 'text-blueGray-700' : 'text-white')
                            }
                        >
                            Pedidos
                        </h3>
                        <SearchBar section="order" setFilterMenu={setFilterMenu} />
                    </div>
                </div>
            </div>
            {
                filterMenu ? (
                    <div className="w-full px-8 text-xs">
                        <h3>Filtros:</h3>
                        <div><span>Estado:</span>
                        </div>
                        <div>
                            <span>Fecha de creación:</span>
                            <label>depués de:</label><input type="date" />
                            <label>antes de:</label><input type="date" />
                        </div>
                        <div><span>Total:</span>
                        </div>
                        <div>Productos</div>
                        <div><span>Cantidad de objetos</span></div>

                        <div>Pago:</div>
                        <div><span>Medio</span></div>
                        <div><span>Estado</span></div>
                        <div>
                            <span>Fecha de Pago:</span>
                            <label>depués de:</label><input type="date" />
                            <label>antes de:</label><input type="date" />
                        </div>

                        <div>Usuario</div>

                        <button>Aplicar filtros</button>
                    </div>
                ) : null
            }
            <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                        <tr>
                            <th
                                className={
                                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                    (color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                }
                            >
                                Id
                            </th>
                            <th
                                className={
                                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                    (color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                }
                            >
                                Número de orden
                            </th>
                            <th
                                className={
                                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                    (color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                }
                            >
                                Fecha de creación
                            </th>
                            <th
                                className={
                                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                    (color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                }
                            >
                                Estado
                            </th>
                            <th
                                className={
                                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                    (color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                }
                            >
                                Total
                            </th>
                            <th
                                className={
                                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                    (color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                                }
                            >
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ORDERS.map((ORDER, idx: any) => (
                                <OrderItem key={idx} ORDER={ORDER}/>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

CardOrders.defaultProps = {
    color: 'light',
};

CardOrders.propTypes = {
    color: PropTypes.oneOf(['light', 'dark']),
};