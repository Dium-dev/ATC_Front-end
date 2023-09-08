import { IconTypes } from '~/types/icons';
import IconText from '../IconText';
interface PaymentMethodProps {
  imageSrc: IconTypes;
  title: string;
  link: string;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  imageSrc,
  title,
  link,
}) => {
  return (
    <div className="flex justify-between items-center mr-5 ml-5">
      <a className="flex items-center" href={link} data-title="Medios de pago">
        <IconText icon={imageSrc} text="" className="h-6 w-6" />
        <div>{title}</div>
      </a>
    </div>
  );
};

export default PaymentMethod;
