'use client';
import React, { useState } from 'react';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { ClipLoader } from 'react-spinners';
import '~/assets/styles/tailwind.css';
import FormSupport from '~/components/componetsDashboard/FormSupport';
import { useUser } from '~/hooks/userDashboard/useUser';

export default function Dashboard() {
  const { user, isLoading, isError, error } = useUser();
  const [form, setForm] = useState(false);
  const [id, setId] = useState<String>('');

  return (
    <div className="flex flex-wrap flex-col gap-y-12 items-center">
      {isLoading ? (
        <ClipLoader color="rgb(140 3 3)" size={60} />
      ) : isError ? (
        <p className='text-xl'>Ocurrió un error al cargar los pedidos</p>
      ) : !user?.orders.length ? (
        <h3>No has creado un pedido</h3>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="flex px-4 items-center justify-between text-sm p-4 bg-primary-lm text-gray">
              <th className="w-24">Fecha</th>
              <th className="w-20">Estado</th>
              <th className="w-36">Dirección de envío</th>
              <th className="w-56">Productos</th>
              <th className="w-20">Cantidad</th>
              <th className="w-28">Precio unitario</th>
              <th className="w-28">Precio total</th>
              <th className="w-24">Ayuda</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {user?.orders.map((order) => (
              <React.Fragment key={order.id}>
                <tr
                  key={`${order.id}-info`}
                  className="text-center text-sm bg-secondary-dm text-gray"
                >
                  <td>
                    <span className="block m-1">Id del pedido: {order.id}</span>
                  </td>
                </tr>
                <tr
                  key={`${order.id}-details`}
                  className="flex items-center justify-between text-sm text-center border border-primary-lm px-4"
                >
                  <td className="w-24">
                    {new Date().toISOString().split('T')[0]}
                  </td>
                  <td className="w-20">{order.payment.state}</td>
                  <td className="w-36">{order.direction.address}</td>
                  <td className="w-56">
                    {order.products.map((product) => (
                      <div
                        key={`${order.id}-${product.title}`}
                        className="flex flex-col items-center my-2"
                      >
                        {product.title}
                      </div>
                    ))}
                  </td>
                  <td className="w-20">
                    {order.products.map((product) => (
                      <div
                        key={`${order.id}-${product.title}-quantity`}
                        className="flex flex-col items-center my-2"
                      >
                        {product.OrderProduct.amount}
                      </div>
                    ))}
                  </td>
                  <td className="w-28">
                    {order.products.map((product) => (
                      <div
                        key={`${order.id}-${product.title}-price`}
                        className="flex flex-col items-center my-2"
                      >
                        ${product.OrderProduct.price}
                      </div>
                    ))}
                  </td>
                  <td className="w-28">${order.payment.amount}</td>
                  <td
                    className="w-24 flex justify-center cursor-pointer"
                    onClick={() => {
                      setId(order.id);
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
      )}
      {form && <FormSupport setForm={setForm} id={id} />}
    </div>
  );
}
