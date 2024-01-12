'use client';
import React, { useState } from 'react';
import { MdOutlineSupportAgent } from 'react-icons/md';
import '~/assets/styles/tailwind.css';
import FormSupport from '~/components/componetsDashboard/FormSupport';

const pedidos = [
  {
    id: '2347588823',
    date: new Date(),
    paymentMethod: 'Tarjeta de crédito',
    state: 'Pagado',
    address: 'Carrera 1a #11-30',
    products: [
      {
        name: 'Bombillo led Mazda',
        cuantity: 2,
        unityPrice: 4000,
      },
      {
        name: 'Radio FM Bluetooth',
        cuantity: 3,
        unityPrice: 5000,
      },
      {
        name: 'Farola Mazda 3',
        cuantity: 4,
        unityPrice: 1500,
      },
    ],
    totalPrice: 6700,
  },
  {
    id: '2347544723',
    date: new Date(),
    paymentMethod: 'Tarjeta de crédito',
    state: 'Pagado',
    address: 'Carrera 1a #11-30',
    products: [
      {
        name: 'Bombillo led',
        cuantity: 2,
        unityPrice: 3000,
      },
      {
        name: 'Radio FM Bluetooth',
        cuantity: 3,
        unityPrice: 2000,
      },
      {
        name: 'Farola Mazda 3',
        cuantity: 8,
        unityPrice: 1500,
      },
    ],
    totalPrice: 6500,
  },
];

export default function Dashboard() {
  const [form, setForm] = useState(false);
  const [id, setId] = useState<String>('');

  return (
    <div className="flex flex-wrap flex-col gap-y-12">
      <h1 className='font-bold text-4xl text-center mx-auto'>Pedidos</h1>
      <table className="w-full">
        <thead>
          <tr className="flex px-4 items-center justify-between text-sm p-4 bg-primary-lm text-gray">
            <th className="w-24">Fecha</th>
            <th className="w-36">Método de pago</th>
            <th className="w-20">Estado</th>
            <th className="w-36">Dirección de envío</th>
            <th className="w-40">Productos</th>
            <th className="w-20">Cantidad</th>
            <th className="w-28">Precio unitario</th>
            <th className="w-28">Precio total</th>
            <th className="w-24">Ayuda</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <React.Fragment key={pedido.id}>
              <tr
                key={`${pedido.id}-info`}
                className="text-center text-sm bg-secondary-dm text-gray"
              >
                <td>
                  <span className="block m-1">Id del pedido: {pedido.id}</span>
                </td>
              </tr>
              <tr
                key={`${pedido.id}-details`}
                className="flex items-center justify-between text-sm text-center border border-primary-lm px-4"
              >
                <td className="w-24">
                  {pedido.date.toISOString().split('T')[0]}
                </td>
                <td className="w-36">{pedido.paymentMethod}</td>
                <td className="w-20">{pedido.state}</td>
                <td className="w-36">{pedido.address}</td>
                <td className="w-40">
                  {pedido.products.map((product) => (
                    <div
                      key={`${pedido.id}-${product.name}`}
                      className="flex flex-col items-center my-2"
                    >
                      {product.name}
                    </div>
                  ))}
                </td>
                <td className="w-20">
                  {pedido.products.map((product) => (
                    <div
                      key={`${pedido.id}-${product.name}-quantity`}
                      className="flex flex-col items-center my-2"
                    >
                      {product.cuantity}
                    </div>
                  ))}
                </td>
                <td className="w-28">
                  {pedido.products.map((product) => (
                    <div
                      key={`${pedido.id}-${product.name}-price`}
                      className="flex flex-col items-center my-2"
                    >
                      {product.unityPrice}
                    </div>
                  ))}
                </td>
                <td className="w-28">{pedido.totalPrice}</td>
                <td
                  className="w-24 flex justify-center cursor-pointer"
                  onClick={() => {
                    setId(pedido.id);
                    setForm(true);
                  }}
                >
                  <MdOutlineSupportAgent size={30} />
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {form && <FormSupport setForm={setForm} id={id} />}
    </div>
  );
}
