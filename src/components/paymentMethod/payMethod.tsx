import { IconTypes } from '~/types/icons';
import Icon from '~/assets/icons/icon';
interface PaymentMethodProps {
  imageSrc: IconTypes;
  title: string;
  description: string;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  imageSrc,
  title,
  description
}) => {
  return (
    <div className="flex flex-col items-center mr-5 ml-5 mb-1 mt-3">
        <div className="h-[100px] w-[100px]">
          <Icon icon={imageSrc}/>          
        </div>
        <h2 className='text-2xl font-bold text-primary-lm'>{title}</h2>
        <div className='w-[300px] text-center'>{description}</div>
    </div>
  );
};

export default PaymentMethod;
