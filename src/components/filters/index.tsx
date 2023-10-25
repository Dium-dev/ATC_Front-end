'use client';
import { useProductStore } from '~/store/productStore';
import { useEffect, useState, useRef } from 'react';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { Category } from '~/types/products';
import { Brand } from '~/types/products';

const Filters = () => {
  const updateBody = useProductStore((state) => state.updateBody);
  const resetBody = useProductStore((state) => state.resetBody)
  const products = useProductStore((state) => state.products)
  const selectRef = useRef<HTMLSelectElement>(null);

  const [state, setState] = useState({
    sort: 'hidden',
    categories: 'hidden',
    brands: 'hidden',
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);

  const resetSelect = () => {
    const defaultOption = selectRef.current?.querySelector('#checked');
    if (defaultOption && defaultOption instanceof HTMLOptionElement) {
      defaultOption.selected = true;
    }
  };

  useEffect(() => {
    fetch('http://localhost:3001/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
    fetch('http://localhost:3001/brands')
      .then((response) => response.json())
      .then((data) => {
        setBrands(data);
      });
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
            Ordernar por:
            {state.sort !== 'flex' ? <AiFillCaretDown /> : <AiFillCaretUp />}
          </p>
          <select
            ref={selectRef}
            name="sort"
            id='sort'
            className={`${state.sort} my-3 text-sm p-1 rounded`}
            onChange={(event) => updateBody('order', event.target.value)}
          >
            <option value="NOMBRE ASC" defaultChecked id='checked'>
              A-Z
            </option>
            <option value="NOMBRE DESC">Z-A</option>
            <option value="PRECIO DESC">Mayor precio</option>
            <option value="PRECIO ASC">Menor precio</option>
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
            {categories.map((category) => (
              <div
                className="flex items-center gap-1"
                key={category.id}
                onClick={() => {
                  updateBody('categoryId', category.id)
                  products.length && updateBody('page', 1);
                }}
              >
                <label>• {category.name}</label>
              </div>
            ))}
          </div>
        </div>
      </article>
      <article className="w-full h-auto border-t border-b border-l border-r border-indigo-600 py-2 px-3">
        <div>
          <p
            className="text-primary-lm font-bold flex items-center justify-between text-sm"
            onClick={() => toggleDisplay('brands')}
          >
            Marcas{' '}
            {state.brands !== 'flex' ? <AiFillCaretDown /> : <AiFillCaretUp />}
          </p>
          <div
            className={`${state.brands} flex-col items-start justify-between gap-y-1 py-1 max-h-96 overflow-y-scroll`}
          >
            {brands.map((brand) => (
              <div
                className="flex items-center gap-1"
                key={brand.id}
                onClick={() => {
                  updateBody('brandId', brand.id)
                  products.length && updateBody('page', 1);
                }}
              >
                <label>• {brand.name}</label>
              </div>
            ))}
          </div>
        </div>
      </article>
      <button onClick={() => {
        resetSelect();
        resetBody()
      }} className='border border-primary-lm w-fit h-fit px-4 py-2 bg-primary-lm text-white mt-2 rounded'>Restablecer filtros</button>
    </section>
  );
};
export default Filters;
