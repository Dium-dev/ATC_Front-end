import React from 'react';
import PaymentMethod from './payMethod';

const PaymentMethodsComponent: React.FC = () => {
  return (
    <>
      <div className="flex justify-center bg-gray-200">
        <div className="max-w-6xl p-4">
          <div className="bg-white rounded-lg shadow-md p-4  flex flex-row">
            <PaymentMethod
              imageSrc="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg"
              title="Tarjeta de Credito"
              link="/gz/home/payments/methods"
            />
            <PaymentMethod
              imageSrc="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg"
              title="Efectivo"
              link="/gz/home/payments/methods"
            />
            <PaymentMethod
              imageSrc="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg"
              title="Más medios de pago"
              link="/gz/home/payments/methods"
            />
            <PaymentMethod
              imageSrc="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg"
              title="Más medios de pago"
              link="/gz/home/payments/methods"
            />
            <PaymentMethod
              imageSrc="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg"
              title="Más medios de pago"
              link="/gz/home/payments/methods"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethodsComponent;

