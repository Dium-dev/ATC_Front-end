import { IconTypes } from '~/types/icons';
import IconText from '../IconText';
interface PaymentMethodProps {
  imageSrc: IconTypes;
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
        <IconText icon={imageSrc} text='' />
        <div>{title}</div>
      </a>
    </div>
  );
};

export default PaymentMethod;
