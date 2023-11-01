import Link from 'next/link';
import React from 'react';

type ButtonComponentProps = {
  variant?: string;
  svg?: React.ReactNode;
  text?: string;
  to?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  variant,
  svg,
  text,
  to,
  ...props
}) => {
  const buttonClass =
    variant === 'white'
      ? 'text-background-lm text-xs hover:text-background-dm hover:text-opacity-40'
      : variant === 'red'
      ? 'bg-secondary-lm text-xs hover:text-primary-lm'
      : variant === 'search'
      ? 'bg-secondary-lm text-text-dm text-sm hover:text-primary-lm'
      : 'bg-white text-background-lm text-xs hover:text-background-dm hover:text-opacity-40';

  const textvariant = variant === 'search' ? 'Buscar' : 'Boton';

  const StylesDefaul = `text-base text-text-lm min-w-[4.34rem] max-w-[8.6875rem] min-h-2.75[rem] max-h-[2.75rem] p-2 flex justify-center items-center font-medium ${buttonClass}`;

  if (to) {
    return (
      <Link href={to} className={StylesDefaul}>
        {svg || <p className="truncate">{text || textvariant}</p>}
      </Link>
    );
  }

  return (
    <button className={StylesDefaul} {...props}>
      {svg || <p className="truncate">{text || textvariant}</p>}
    </button>
  );
};

type MainButtonProps = {
  variant?: 'default' | 'secondary' | 'tertiary';
  color?: 'default' | 'red';
  children: React.ReactNode;
  className?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const MainButton: React.FC<MainButtonProps> = ({
  variant = 'default',
  color = 'default',
  className,
  children,
  ...props
}) => {
  const variant_style =
    variant === 'secondary'
      ? `border ${color === 'red' ? 'border-primary-lm text-primary-lm' : ''}`
      : variant === 'tertiary'
      ? `${color === 'red' ? 'text-primary-lm' : ''}`
      : `${color === 'red' ? 'bg-primary-lm text-white' : 'bg-none'}`;

  return (
    <button
      className={`px-3 py-1 text-base font-medium rounded ${variant_style} ${className} xxxl:px-0`}
      {...props}
    >
      {children}
    </button>
  );
};
export default ButtonComponent;
