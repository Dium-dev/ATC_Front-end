import Icon from '~/assets/icons/icon';
import { MainButton } from '~/components/button/button';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors md:ml-64
      ${open ? 'visible bg-black/20' : 'invisible'}
      `}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-xl shadow px-6 py-10 transition-all
      ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}
      `}
        onClick={(e) => e.stopPropagation()}
      >
        <MainButton
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2"
        >
          <div className="h-6 w-6">
            <Icon icon="Close" />
          </div>
        </MainButton>
        {children}
      </div>
    </div>
  );
};
