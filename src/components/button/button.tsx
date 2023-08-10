import React from "react";

interface ButtonComponentProps {
  type?: string;
  text?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ type, text }) => {
  const buttonClass =
    type === "white"
      ? "bg-white text-background-lm text-xs hover:bg-background-dm hover:bg-opacity-40"
      : type === "red"
      ? "bg-secondary-lm text-xs hover:bg-primary-lm"
      : type === "search"
      ? "bg-secondary-lm text-text-dm text-[22px] hover:bg-primary-lm"
      : "bg-white text-background-lm text-xs hover:bg-background-dm hover:bg-opacity-40";

  const textType = type === "search" ? "Buscar" : "Boton";

  return (
    <button
      className={`w-[139px] h-[44px] p-[10px] flex justify-center items-center font-bold ${buttonClass}`}
    >
      <p className="truncate">{text || textType} </p>
    </button>
  );
};

export default ButtonComponent;
