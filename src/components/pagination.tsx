import React, { FC } from 'react';
import ButtonComponent from './button/button';

interface paginationProps {
  page: number;
  anteriorSiguiente: (action: 'Anterior' | 'Siguiente') => void;
  maximo: number;
}

const Pagination: FC<paginationProps> = ({
  page,
  anteriorSiguiente,
  maximo,
}) => {
  return (
    <div className=" flex items-center gap-2 ">
      <ButtonComponent
        variant="white"
        onClick={() => anteriorSiguiente('Anterior')}
        text={'Anterior'}
        disabled={page <= 1}
        svg={
          <svg
            fill="#000000"
            height="50px"
            width="50px"
            version="1.1"
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M21,2H11c-5,0-9,4-9,9v10c0,5,4,9,9,9h10c5,0,9-4,9-9V11C30,6,26,2,21,2z M18.7,20.3c0.4,0.4,0.4,1,0,1.4 C18.5,21.9,18.3,22,18,22s-0.5-0.1-0.7-0.3l-5-5c-0.4-0.4-0.4-1,0-1.4l5-5c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L14.4,16L18.7,20.3z"></path>{' '}
            </g>
          </svg>
        }
      ></ButtonComponent>
      <input
        className="w-12 h-7 border text-center"
        name="page"
        autoComplete="off"
        value={page}
      />

      <p className="flex justify-items-center text-center">de {maximo}</p>

      <ButtonComponent
        variant="white"
        onClick={() => anteriorSiguiente('Siguiente')}
        text={'Siguiente'}
        disabled={page >= maximo}
        svg={
          <svg
            fill="#000000"
            height="50px"
            width="50px"
            version="1.1"
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path d="M21,2H11c-5,0-9,4-9,9v10c0,5,4,9,9,9h10c5,0,9-4,9-9V11C30,6,26,2,21,2z M19.7,16.7l-5,5C14.5,21.9,14.3,22,14,22 s-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l4.3-4.3l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5,5C20.1,15.7,20.1,16.3,19.7,16.7z"></path>{' '}
            </g>
          </svg>
        }
      ></ButtonComponent>
    </div>
  );
};

export default Pagination;
