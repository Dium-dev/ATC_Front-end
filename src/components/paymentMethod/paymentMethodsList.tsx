import React from 'react';
import PaymentMethod from './payMethod';

const PaymentMethodsComponent: React.FC = () => {
  return (
    <>
      <div className="flex justify-center bg-gray-200">
        <div className="max-w-6xl p-4 ">
          <div className="rounded-lg shadow-md p-4 flex flex-row h-20 justify-center bg-secondary-background ">
            <PaymentMethod
              imageSrc='CardCredit'
              title="Tarjeta de Credito"
              link="/gz/home/payments/methods"
            />
            <PaymentMethod
              imageSrc='Cash'
              title="Efectivo"
              link="/gz/home/payments/methods"
            />
            <PaymentMethod
              imageSrc='Truck'
              title="Envio a todo el pais"
              link="/gz/home/payments/methods"
            />
            <PaymentMethod
              imageSrc='Shield'
              title="Compra Segura"
              link="/gz/home/payments/methods"
            />
            <PaymentMethod
              imageSrc='warranty'
              title="Grarantia"
              link="/gz/home/payments/methods"
            />
            <PaymentMethod
              imageSrc='MapLocation'
              title="Bogota D.C"
              link="/gz/home/payments/methods"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethodsComponent;

