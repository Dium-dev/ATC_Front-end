'use client';
import { useState } from 'react';
import { AiFillCaretUp } from 'react-icons/ai';
import { AiFillCaretDown } from 'react-icons/ai';

const Filters = () => {
  const [state, setState] = useState({
    sort: 'hidden',
    categories: 'hidden',
    brands: 'hidden',
  });

  const toggleDisplay = (name: string) => {
    setState((prevState) => {
      const newState = { ...prevState };
      if (name === 'sort' || name === 'categories' || name === 'brands') {
        newState[name] = newState[name] === 'hidden' ? 'flex' : 'hidden';
      }
      return newState;
    });
  };

  return (
    <section className="w-full md:w-1/5 flex flex-col items-center justify-center h-full">
      <article className="w-full h-auto border-t border-l border-r border-indigo-600 py-2 px-3">
        <div className="">
          <p
            className="text-primary-lm font-bold flex items-center justify-between text-sm"
            onClick={() => toggleDisplay('sort')}
          >
            Ordernar por:{state.sort !== 'flex' ? <AiFillCaretDown /> : <AiFillCaretUp />}
          </p>
          <select id="" className={`${state.sort} my-3 text-sm p-1 rounded`}>
            <option value="">Mayor precio</option>
            <option value="">Menor precio</option>
          </select>
        </div>
      </article>
      <article className="w-full h-auto border-t border-l border-r border-indigo-600 py-2 px-3">
        <div className="group">
          <p
            className="text-primary-lm font-bold flex items-center justify-between text-sm"
            onClick={() => toggleDisplay('categories')}
          >
            Categorias{' '}
            {state.categories !== 'flex' ? (
              <AiFillCaretDown />
            ) : (
              <AiFillCaretUp />
            )}
          </p>
          <div
            className={`${state.categories} flex-col items-start justify-between gap-y-1 py-1`}
          >
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Acura</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Alfa Romeo</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Aston Martin</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Audi</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">BMW</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Cadillac</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Chevrolet</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Chrysler</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Cupra</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Citroën</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Daihatsu</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Dodge</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Ferrari</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Fiat</label>
            </div>
          </div>
        </div>
      </article>
      <article className="w-full h-auto border-t border-b border-l border-r border-indigo-600 py-2 px-3">
        <div className="group">
          <p
            className="text-primary-lm font-bold flex items-center justify-between text-sm"
            onClick={() => toggleDisplay('brands')}
          >
            Marcas{' '}
            {state.brands !== 'flex' ? <AiFillCaretDown /> : <AiFillCaretUp />}
          </p>
          <div
            className={`${state.brands} flex-col items-start justify-between gap-y-1 py-1`}
          >
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Farolas</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Stops</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Audio</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Exploradoras</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Exterior</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Interior</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Bombillos</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <label htmlFor="">Repuestos</label>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Filters;
