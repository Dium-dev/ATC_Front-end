import React from 'react';
import PaymentMethod from './payMethod';

const PaymentMethodsComponent: React.FC = () => {
  return (
    <>
      <div className="py-4 flex flex-wrap justify-evenly items-center max-w-[1920px] mx-auto mt-4 mb-12">
        <PaymentMethod
          imageSrc="CardCredit"
          title="Todos los medios de pago"
          description="Ofrecemos una variedad de métodos de pago seguros y confiables, para garantizar una experiencia de compra sin preocupaciones."
        />
        <PaymentMethod
          imageSrc="Truck"
          title="Envio a todo el pais"
          description="Entregamos en todo Colombia, desde grandes ciudades hasta áreas rurales, con envíos rápidos, seguros y rasteables."
        />
        <PaymentMethod
          imageSrc="Shield"
          title="Compra Segura"
          description="Tu seguridad es nuestra prioridad. Utilizamos tecnología SSL y métodos de pago verificados para proteger tus datos sin riesgos."
        />
      </div>
    </>
  );
};

export default PaymentMethodsComponent;
