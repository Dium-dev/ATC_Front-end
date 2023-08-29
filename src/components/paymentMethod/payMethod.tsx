interface PaymentMethodProps {
  imageSrc: string;
  title: string;
  link: string;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ imageSrc, title, link }) => {
  return (
    <div className="flex justify-between items-center mt-4 mr-5 ml-5 w-80">
      <a
        className="flex items-center"
        href={link}
        data-title="Medios de pago"
      >
        <img
          className="w-10 h-10 mr-2"
          decoding="async"
          src={imageSrc}
          alt={title}
        />
        <div>{title}</div>
      </a>
    </div>
  );
};

export default PaymentMethod;
