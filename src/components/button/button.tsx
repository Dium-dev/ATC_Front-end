interface ButtonProps {
  type: string;
  text?: string;
}

const Button: React.FC<ButtonProps> = ({ type, text }) => {
  let buttonContent;

  switch (type) {
    case "search":
      buttonContent = (
        <button className="flex justify-center p-0.5 gap-1 w-fit bg-secondary-lm text-text-dm text-[1rem] items-center hover:bg-primary-lm">
          {text || "Buscar"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[2rem] w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      );
      break;
    case "white":
      buttonContent = (
        <button className="flex justify-center w-fit p-0.5 gap-1  text-backgorund-lm hover:bg-background-dm hover:bg-opacity-40 ">
          {text || "Añadir al carrito"}
          <svg
            className="h-[20px] w-[20px]"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.9219 13.5H18.0782C19.0813 13.5 19.5828 14.7141 18.875 15.4219L13.2969 21C12.8563 21.4406 12.1438 21.4406 11.7078 21L6.12503 15.4219C5.41721 14.7141 5.91878 13.5 6.9219 13.5ZM18.875 8.57815L13.2969 3.00002C12.8563 2.5594 12.1438 2.5594 11.7078 3.00002L6.12503 8.57815C5.41721 9.28596 5.91878 10.5 6.9219 10.5H18.0782C19.0813 10.5 19.5828 9.28596 18.875 8.57815Z"
              fill="black"
            />
          </svg>
        </button>
      );
      break;

    case "red":
      buttonContent = (
        <button className="flex justify-center p-0.5 gap-1 w-32 bg-secondary-lm text-text-dm text-xs hover:bg-primary-lm">
          {text || "Añadir al carrito"}
          <svg
            className="h-[15px] w-[15px]"
            viewBox="0 0 25 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.505 12.8883L24.4747 4.22167C24.6169 3.59592 24.1413 3.00004 23.4996 3.00004H7.13367L6.75175 1.13296C6.65658 0.667582 6.24708 0.333374 5.77204 0.333374H1.5C0.947708 0.333374 0.5 0.781082 0.5 1.33337V2.00004C0.5 2.55233 0.947708 3.00004 1.5 3.00004H4.41179L7.33879 17.3098C6.63854 17.7125 6.16667 18.4676 6.16667 19.3334C6.16667 20.622 7.21133 21.6667 8.5 21.6667C9.78867 21.6667 10.8333 20.622 10.8333 19.3334C10.8333 18.6803 10.5647 18.0903 10.1323 17.6667H18.8676C18.4353 18.0903 18.1667 18.6803 18.1667 19.3334C18.1667 20.622 19.2113 21.6667 20.5 21.6667C21.7887 21.6667 22.8333 20.622 22.8333 19.3334C22.8333 18.4095 22.2963 17.6112 21.5175 17.2332L21.7474 16.2217C21.8896 15.5959 21.414 15 20.7723 15H9.58821L9.3155 13.6667H21.5299C21.9968 13.6667 22.4015 13.3436 22.505 12.8883Z"
              fill="black"
            />
          </svg>
        </button>
      );
      break;

    default:
      break;
  }

  return buttonContent;
};

export default Button;
