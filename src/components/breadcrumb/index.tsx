'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Category } from '../../types/products';
import { useProductStore } from '~/store/productStore';
import { useRouter } from 'next/navigation';

const Breadcrumb = ({categoryId}: {categoryId: string}) => {
  const router = useRouter();
  const updateBody = useProductStore((state) => state.updateBody);
  const [category, setCategory] = useState<String>()

  useEffect(()=> {
    const fetchBrand = async () => {
      const response = await fetch('http://localhost:3001/categories');
      const categories = await response.json();
      const categoryFiltered = categories.categories.find(
        (brand: Category) => brand.id === categoryId
      );

      setCategory(categoryFiltered.name);
    };

    fetchBrand();
  },[categoryId])

  return (
    <nav className="flex md:my-5 mt-32" aria-label="Breadcrumb">
      <section className="bg-gray-200 py-2">
      <div className="container mx-auto flex items-center" style={{ marginLeft: '50px' }}>
        <Link href="/products">
          <span className="text-blue-300 hover:text-blue-500 mr-2">Volver</span>
        </Link>
          <ol className="flex items-center space-x-1 md:space-x-2">
            <li className="flex items-center">
              <Link href="/">
                <span className="text-gray-700 hover:text-blue-500 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                    ></path>
                  </svg>
                  Home
                </span>
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium cursor-pointer" aria-current="page" onClick={() => {
                  updateBody('categoryId', categoryId)
                  router.push('/products')
                }}>
                  {category}
                </span>
              </div>
            </li>
          </ol>
      </div>
    </section>
    </nav>
  );
};

export default Breadcrumb;