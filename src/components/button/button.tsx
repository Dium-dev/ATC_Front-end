import React from "react";

interface ButtonComponentProps {
  type?: string;
  text?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ type, text }) => {
  const buttonClass =
    type === "white"
      ? "bg-white text-background-lm text-xs hover:text-background-dm hover:text-opacity-40"
      : type === "red"
      ? "bg-secondary-lm text-xs hover:text-primary-lm"
      : type === "search"
      ? "bg-secondary-lm text-text-dm text-sm hover:text-primary-lm"
      : "bg-white text-background-lm text-xs hover:text-background-dm hover:text-opacity-40";

  const textType = type === "search" ? "Buscar" : "Boton";

  return (
    <button
      className={` w-max-[8.6875rem] h-max-[2.75rem] p-2 flex justify-center items-center font-bold ${buttonClass}`}
    >
      <p className="truncate"> {text || textType} </p>
    </button>
  );
};

export default ButtonComponent;
