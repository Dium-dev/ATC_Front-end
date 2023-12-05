"use client";
import { ChangeEvent, useEffect, useState } from 'react';

// Zustand store:
import useDashboardAdminStore from '~/store/dashboardAdminStore';

// Type definitions:
import { OrderFilterOptions } from '../../dashboardAdmin';
// Las siguientes definiciones de tipado, excepto por "OrdersInterface", no se requerirán en ESTE archivo luego de que se use la ruta real para el fetch, en lugar de simular un fetch.
import { OrderStatus, PaymentStatus, PaymentMethod, OrdersInterface } from '~/types/dashboardAdminStore';

// Components:
import SearchBar from '../../SearchBar/SearchBar';
import OrderItem from './OrderItem';


// Agregar un endpoint con:
// - todos los posibles estados de la orden: Aprobado | En proceso | En despacho | Entregado.
// - todos los medios de pago existentes: Mercado Pago | Pago Directo.
// - todos los posibles estados del pago (transacción): Aprobado | Declinado | Pendiente.


// Las siguientes líneas hasta "MODULE" no será necesarias luego de que se use la ruta real para el fetch, en lugar de simular un fetch.

// fetch(order/status/xxxxx) debería retornar un array de objetos.
// Simula el array de los posibles estados de la orden después del fetch.
const STATUS: OrderStatus[] = [
    "cancelled",
    "declined",
    "approved",
    "processing",
    "inbound",
    "delivered"
];

// fetch(payment/method/xxxxx) debería retornar un array de objetos.
// Simula el array de todos los posibles métodos de pago:
const PAYMENT_METHOD: PaymentMethod[] = [
    "MercadoPago",
    "cash"
];

// fetch(payment/status/xxxxx) debería retornar un array de objetos.
// Simula el array de todos los posibles estados del pago:
const PAYMENT_STATUS: PaymentStatus[] = [
    "approved",
    "declined",
    "pending"
];

// fetch(orders/xxxxx) debería retornar un array de objetos.
// Simula el array de pedidos obtenido después del fetch.
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
            status: "approved",
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
            status: "approved",
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


// --------------- MODULE ---------------
export default function CardOrders() {


    // CONSTANTS:
    const FILTER_OPTIONS_EMPTY = {
        order: {
            status: "",
            creationDate: {
                before: "",
                after: ""
            },
        },
        totalPrice: {
            below: null,
            above: null
        },
        // list:
        itemQuantity: {
            below: null,
            above: null
        },
        // payment:
        payment: {
            method: "",
            status: "",
            efectiveDate: {
                before: "",
                after: ""
            },
        }
    };


    // GLOBAL STORE:
    const { orders, updateOrders, filterOrders }: any = useDashboardAdminStore();


    // LOCAL STATES:
    const [filterMenu, setFilterMenu] = useState<boolean>(false);
    const [filterOptions, setFilterOptions] = useState<OrderFilterOptions>(FILTER_OPTIONS_EMPTY);


    // FUNCTIONS:
    const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedStatus = event.target.value;

        setFilterOptions((prevOptions: OrderFilterOptions) => ({
            ...prevOptions,
            order: {
                ...prevOptions.order,
                status: selectedStatus
            }
        }));
    };

    const handlePaymentMethodChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedPaymentMethod = event.target.value;

        setFilterOptions((prevOptions: OrderFilterOptions) => ({
            ...prevOptions,
            payment: {
                ...prevOptions.payment,
                method: selectedPaymentMethod
            }
        }));
    };

    const handlePaymentStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedPaymentStatus = event.target.value;

        setFilterOptions((prevOptions: OrderFilterOptions) => ({
            ...prevOptions,
            payment: {
                ...prevOptions.payment,
                status: selectedPaymentStatus
            }
        }));
    };

    // Se está reusando la función para manejar "totalPrice" y "itemQuantity".
    // Ambos criterios tienen las mismas propiedades: "above" y "below" (dos "input" tag que contienen un número).
    const handleTotalAndProductsChange = (
        event: ChangeEvent<HTMLInputElement>,
        clause: "totalPrice" | "itemQuantity",
        property: "above" | "below"
    ) => {
        // inputValue debería ser O BIEN <number> O "" (string vacía).
        const inputValue = event.target.value;

        setFilterOptions((prevOptions: OrderFilterOptions) => ({
            ...prevOptions,
            [clause]: {
                ...prevOptions[clause],
                [property]: inputValue === "" ? null : Number(inputValue)
            },
        }));
    };

    // Elimina la opción seleccionada del estado local.
    const handleRemoveSelectOption = (clause: "status" | "paymentMethod" | "paymentStatus") => {
        setFilterOptions((prevOptions: OrderFilterOptions) => {
            let updatedOptions = { ...prevOptions };

            if (clause === "status") updatedOptions.order.status = "";
            else if (clause === "paymentMethod") updatedOptions.payment.method = "";
            else if (clause === "paymentStatus") updatedOptions.payment.status = ""

            return updatedOptions;
        });
    };

    // Ejecuta el filtrado con la función de zustand.
    const handleFilter = () => {
        filterOrders(filterOptions);
    };

    // Limpia el estado local y el estado global, al mismo tiempo ejecuta el filtrado por lo que no es necesario llamar la función de filtrado <filterUsers()> en otro lado.
    const handleClearFilters = () => {
        setFilterOptions(FILTER_OPTIONS_EMPTY);
        filterOrders(null);
    };

    // Simular petición al servidor para obtener datos y llenar el array de pedidos (orders).
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
                        <h3 className="font-semibold text-lg text-blueGray-700 dm:text-white">
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
                        <div>
                            <span>Estado:</span>
                            <div className="inline-flex items-center">
                                <select onChange={(e) => handleStatusChange(e)} value={filterOptions.order.status}>
                                    <option value="" disabled>Selecciona el estado del pedido</option>
                                    {
                                        Array.isArray(STATUS) && STATUS.map((status: OrderStatus, idx: number) => (
                                            <option
                                                key={status + idx}
                                                value={status}
                                            >
                                                {status}
                                            </option>
                                        ))
                                    }
                                </select>
                                <button onClick={() => handleRemoveSelectOption("status")} >Eliminar</button>
                            </div>
                        </div>
                        <div>
                            <span>Fecha de creación:</span>
                            <label>depués de:</label><input type="date" />
                            <label>antes de:</label><input type="date" />
                        </div>
                        <div>
                            <span>Total:</span>
                            <label>Más de:</label>
                            <input
                                type="number" placeholder="-"
                                value={filterOptions.totalPrice.above !== null ? filterOptions.totalPrice.above : ""}
                                onChange={(e) => handleTotalAndProductsChange(e, "totalPrice", "above")}
                            />
                            <label>Menos de:</label>
                            <input
                                type="number" placeholder="-"
                                value={filterOptions.totalPrice.below !== null ? filterOptions.totalPrice.below : ""}
                                onChange={(e) => handleTotalAndProductsChange(e, "totalPrice", "below")}
                            />
                        </div>
                        <strong>Productos:</strong>
                        <div>
                            <span>Cantidad de objetos</span>
                            <label>Más de:</label>
                            <input
                                type="number" placeholder="-"
                                value={filterOptions.itemQuantity.above !== null ? filterOptions.itemQuantity.above : ""}
                                onChange={(e) => handleTotalAndProductsChange(e, "itemQuantity", "above")}
                            />
                            <label>Menos de:</label>
                            <input
                                type="number" placeholder="-"
                                value={filterOptions.itemQuantity.below !== null ? filterOptions.itemQuantity.below : ""}
                                onChange={(e) => handleTotalAndProductsChange(e, "itemQuantity", "below")}
                            />
                        </div>

                        <strong>Pago:</strong>
                        <div>
                            <span>Medio</span>
                            <div className="inline-flex items-center">
                                <select onChange={(e) => handlePaymentMethodChange(e)} value={filterOptions.payment.method}>
                                    <option value="" disabled>Selecciona un método de pago</option>
                                    {
                                        Array.isArray(PAYMENT_METHOD) && PAYMENT_METHOD.map((paymentMethod: PaymentMethod, idx: number) => (
                                            <option
                                                key={paymentMethod + idx}
                                                className=""
                                                value={paymentMethod}
                                            >
                                                {paymentMethod}
                                            </option>
                                        ))
                                    }
                                </select>
                                <button onClick={() => handleRemoveSelectOption("paymentMethod")} >Eliminar</button>
                            </div>
                        </div>
                        <div>
                            <span>Estado</span>
                            <div className="inline-flex items-center">
                                <select onChange={(e) => handlePaymentStatusChange(e)} value={filterOptions.payment.status}>
                                    <option value="" disabled>Selecciona el estado del pago</option>
                                    {
                                        Array.isArray(PAYMENT_STATUS) && PAYMENT_STATUS.map((paymentStatus: PaymentStatus, idx: number) => (
                                            <option
                                                key={paymentStatus + idx}
                                                value={paymentStatus}
                                            >
                                                {paymentStatus}
                                            </option>
                                        ))
                                    }
                                </select>
                                <button onClick={() => handleRemoveSelectOption("paymentStatus")}>Eliminar</button>
                            </div>
                        </div>
                        <div>
                            <span>Fecha de Pago:</span>
                            <label>depués de:</label><input type="date" />
                            <label>antes de:</label><input type="date" />
                        </div>

                        <div>Usuario</div>

                        <button onClick={handleFilter}>Aplicar filtros</button>
                        <button onClick={handleClearFilters}>Limpiar filtros</button>
                    </div>
                ) : null
            }
            <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                        <tr>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dm:bg-lightBlue-800 dm:text-lightBlue-300 dm:border-lightBlue-700">
                                Id
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dm:bg-lightBlue-800 dm:text-lightBlue-300 dm:border-lightBlue-700">
                                Número de orden
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dm:bg-lightBlue-800 dm:text-lightBlue-300 dm:border-lightBlue-700">
                                Fecha de creación
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dm:bg-lightBlue-800 dm:text-lightBlue-300 dm:border-lightBlue-700">
                                Estado
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dm:bg-lightBlue-800 dm:text-lightBlue-300 dm:border-lightBlue-700">
                                Total
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 dm:bg-lightBlue-800 dm:text-lightBlue-300 dm:border-lightBlue-700">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(orders) && orders.map((ORDER: OrdersInterface) => (
                                <OrderItem key={ORDER.id} ORDER={ORDER} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};