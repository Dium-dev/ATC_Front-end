import React from 'react';
import PaymentMethod from './payMethod';

const PaymentMethodsComponent: React.FC = () => {
  return (
    <>
      <div className="flex justify-center bg-gray-200">
        <div className="max-w-6xl p-4">
          <div className="bg-white rounded-lg shadow-md p-4  flex flex-row">
            <PaymentMethod
              imageSrc='CardCredit'
              title="Tarjeta de Credito"
              link="/gz/home/payments/methods"
            />
            <PaymentMethod
              imageSrc='CardCredit'
              title="Efectivo"
              link="/gz/home/payments/methods"
            />
            <PaymentMethod
              imageSrc='CardCredit'
              title="Envio a todo el pais"
              link="/gz/home/payments/methods"
            />
            <PaymentMethod
              imageSrc='CardCredit'
              title="Compra Segura"
              link="/gz/home/payments/methods"
            />
            <PaymentMethod
              imageSrc='CardCredit'
              title="Grarantia"
              link="/gz/home/payments/methods"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethodsComponent;

