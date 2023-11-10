"use client";
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// components
import SearchBar from '../SearchBar/SearchBar';
import TableDropdown from '~/components/componetsDashboard/Dropdowns/TableDropdown';

import useDashboardAdminStore from '~/store/dashboardAdminStore';


interface OrdersInterface {
    id: number,
    orderNumber: number,
    creationDate: string,
    status: "cancelled" | "declined" | "approved" | "processing" | "inbound" | "delivered",
    total: number,
    list: {
        product: string,
        quantity: number,
        value: number
    }[],
    payment: {
        date: string,
        method: "MercadoPago" | "cash",
        state: "approved" | "declined" | "pending",
        approvalNumber: number
    },
    client: {
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
            product: "product A",
            quantity: 1,
            value: 2489900
        }],
        payment: {
            date: "01 Novemeber 2023, 10:25 a.m. GMT-3",
            method: "MercadoPago",
            state: "approved",
            approvalNumber: 123456789
        },
        client: {
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
            product: "product B",
            quantity: 1,
            value: 1929900
        }],
        payment: {
            date: "27 October 2023, 10:25 a.m. GMT-3",
            method: "MercadoPago",
            state: "approved",
            approvalNumber: 987654321
        },
        client: {
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
    }
];


type CardOrdersProps = {
    color: string
};

export default function CardOrders({ color }: CardOrdersProps) {


    // GLOBAL STORE:
    const { orders, updateOrders }: any = useDashboardAdminStore();


    // LOCAL STATES:
    const [showDetails, setShowDetails] = useState<boolean>(false);


    // LIFECYCLES:
    useEffect(() => {
        updateOrders(ORDERS);
    }, [])


    // COMPONENT:
    return (
        <>
            <div
                className={
                    'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
                    (color === 'light' ? 'bg-white' : 'bg-lightBlue-900 text-white')
                }
            >
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
                            <SearchBar section="order" />
                        </div>
                    </div>
                </div>
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
                                orders.map((PRODUCT: any, idx: any) => (
                                    <>
                                        <tr key={idx}>
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {PRODUCT.id}
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {PRODUCT.orderNumber}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {PRODUCT.creationDate}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <i className="fas fa-circle text-orange-500 mr-2"></i> {PRODUCT.status}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {PRODUCT.total}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                                {/* <TableDropdown /> */}
                                                <button onClick={() => setShowDetails(true)}>mostrar detalles</button>
                                            </td>
                                        </tr>
                                        {
                                            showDetails ? (
                                                <div className="w-full">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                            ) : null
                                        }
                                    </>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

CardOrders.defaultProps = {
    color: 'light',
};

CardOrders.propTypes = {
    color: PropTypes.oneOf(['light', 'dark']),
};