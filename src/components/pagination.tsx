import React, { FC } from 'react';
import ButtonComponent from './button/button';

interface paginationProps {
  page: number;
  setPage: Function;
  maximo: number;
}

const Pagination: FC<paginationProps> = ({ page, setPage, maximo }) => {
  return (
    <div className=" flex gap-2 ">
      <ButtonComponent
        variant="white"
        onClick={() => setPage(page - 1)}
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
        onClick={() => setPage(page + 1)}
        disabled={page >= maximo}
        text={'Siguiente'}
      ></ButtonComponent>
    </div>
  );
};

export default Pagination;
