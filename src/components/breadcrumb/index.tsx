import React, { useState } from 'react';
import { TiHome } from 'react-icons/ti';
import Link from 'next/link';
import { useBreadcrumb } from '~/hooks/useBreadcrumb';

// Uso
const Breadcrumb = () => {
  const { breadcrumb } = useBreadcrumb(); // Obtener el estado del breadcrumb del hook useBreadcrumb
  const [selectedOption, setSelectedOption] = useState(breadcrumb[0]); // Agregar un estado local para la opción seleccionada

  const handleOptionChange = (event) => {
    const selectedLabel = event.target.value;
    const selectedOption = breadcrumb.find((item) => item.label === selectedLabel);
    setSelectedOption(selectedOption);
  }; // Agregar un manejador de eventos para actualizar el estado con la opción seleccionada

  return (
    <section className="bg-gray-200 py-2">
      <div className="container mx-auto flex items-center">
        <span className="mr-2">
          <TiHome className="text-gray-500" /> {/* Renderizar el icono de inicio */}
        </span>
        <Link href="/">
          <a className="text-blue-700 mr-2">Volver</a> {/* Crear un enlace a la página de inicio */}
        </Link>
        <select
          className="text-sm text-gray-500"
          value={selectedOption.label}
          onChange={handleOptionChange}
        >
          {breadcrumb.map((item, index) => (
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