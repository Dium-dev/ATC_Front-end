import Link from "next/link";
import React from "react";

type ButtonComponentProps = {
  variant?: string;
  text?: string;
  to?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  variant,
  text,
  to,
  ...props
}) => {
  const buttonClass =
    variant === "white"
      ? "bg-white text-background-lm text-xs hover:text-background-dm hover:text-opacity-40"
      : variant === "red"
      ? "bg-secondary-lm text-xs hover:text-primary-lm"
      : variant === "search"
      ? "bg-secondary-lm text-text-dm text-sm hover:text-primary-lm"
      : "bg-white text-background-lm text-xs hover:text-background-dm hover:text-opacity-40";

  const textvariant = variant === "search" ? "Buscar" : "Boton";

  const StylesDefaul = ` min-w-[4.34rem] max-w-[8.6875rem] min-h-2.75[rem] max-h-[2.75rem] p-2 flex justify-center items-center font-bold ${buttonClass}`;

  if (to) {
    return (
      <Link href={to} className={StylesDefaul}>
        <p className="truncate"> {text || textvariant} </p>
      </Link>
    );
  }

  return (
    <button className={StylesDefaul} {...props}>
      <p className="truncate"> {text || textvariant} </p>
    </button>
  );
};

export default ButtonComponent;
