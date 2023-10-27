import React from 'react';
import PaymentMethod from './payMethod';

const PaymentMethodsComponent: React.FC = () => {
  return (
    <>
          <div className="py-4 flex flex-wrap justify-between items-center max-w-[1920px] mx-auto">
            <PaymentMethod
              imageSrc='CardCredit'
              title="Todos los medios de pago"
              description="trud nisi nostrud nostrud incididunt fugiat. Enim nostrud tempor cillum ea velit."
            />
            <PaymentMethod
              imageSrc='Truck'
              title="Envio a todo el pais"
              description="trud nisi nostrud nostrud incididunt fugiat. Enim nostrud tempor cillum ea velit."
            />
            <PaymentMethod
              imageSrc='Shield'
              title="Compra Segura"
              description="trud nisi nostrud nostrud incididunt fugiat. Enim nostrud tempor cillum ea velit."
            />
          </div>
    </>
  );
};

export default PaymentMethodsComponent;

