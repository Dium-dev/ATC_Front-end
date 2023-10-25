import React, { useState } from 'react';
import { TiHome } from 'react-icons/ti';
import Link from 'next/link';
import { useBreadcrumb } from '~/hooks/useBreadcrumb';
import { CategoryProps } from '../../types/products';

const Breadcrumb = () => {
  const { breadcrumbCategory } = useBreadcrumb(); // Obtener el estado del breadcrumb del hook useBreadcrumb
  const [selectedOption, setSelectedOption] = useState(breadcrumbCategory[0]); // Agregar un estado local para la opción seleccionada

  const handleOptionChange = (event) => {
    const selectedLabel = event.target.value;
    const selectedOption = breadcrumbCategory.find((item) => item.label === selectedLabel);
    setSelectedOption(selectedOption);
  }; // Agregar un manejador de eventos para actualizar el estado con la opción seleccionada

  return (
    <section className="bg-gray-200 py-2">
      <div className="container mx-auto flex items-center">
        <Link href="/">
          <a className="text-blue-300 mr-2">Volver</a> {/* Crear un enlace a la página de inicio */}
        </Link>
        <span className="mr-2">
          <TiHome className="text-gray-500" /> {/* Renderizar el icono de inicio */}
        </span>
        <select
          className="text-sm text-gray-500"
          value={selectedOption.label}
          onChange={handleOptionChange}
        >
          {breadcrumbCategory.map((item, index) => (
            <option key={index} value={item.label}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default Breadcrumb;