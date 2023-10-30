'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useBreadcrumb } from '~/hooks/useBreadcrumb';
import { CategoryProps } from '../../types/products';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumb = () => {
  const { breadcrumb } = useBreadcrumb();
  const [selectedOption, setSelectedOption] = useState<BreadcrumbItem>(breadcrumb[0]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLabel = event.target.value;
    const selectedOption = breadcrumb.find((item) => item.label === selectedLabel);
    if (selectedOption) {
      setSelectedOption(selectedOption);
    }
  };

  return (
    <nav className="flex mb-5" aria-label="Breadcrumb">
      <section className="bg-gray-200 py-2">
      <div className="container mx-auto flex items-center">
        <Link href="/">
          <span className="text-blue-300 mr-2">Volver</span>
        </Link>
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <Link href="/">
                <span className="text-gray-700 hover:text-gray-900 inline-flex items-center">
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
                <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium" aria-current="page">
                  {selectedOption.label}
                </span>
              </div>
            </li>
          </ol>
  
        <select className="text-sm text-gray-500" value={selectedOption.label} onChange={handleOptionChange}>
          {breadcrumb.map((item, index) => (
            <option key={index} value={item.label}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </section>
    </nav>
  );
};

export default Breadcrumb;