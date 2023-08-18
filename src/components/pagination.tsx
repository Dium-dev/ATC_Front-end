import React, { FC } from 'react';
import ButtonComponent from './button/button';

interface paginationProps {
  page: number;
  anteriorSiguiente: Function;
  maximo: number;
}

const Pagination: FC<paginationProps> = ({
  page,
  anteriorSiguiente,
  maximo,
}) => {
  return (
    <div className=" flex gap-2 ">
      <ButtonComponent
        variant="white"
        onClick={() => anteriorSiguiente('Anterior')}
        disabled={page <= 1}
        text={'Anterior'}
      ></ButtonComponent>
      <input
        className="w-12 h-7 border text-center"
        name="page"
        autoComplete="off"
        value={page}
      />
      <p className="flex items-center">de {maximo}</p>

      <ButtonComponent
        variant="white"
        onClick={() => anteriorSiguiente('Siguiente')}
        disabled={page >= maximo}
        text={'Siguiente'}
      ></ButtonComponent>
    </div>
  );
};

export default Pagination;
