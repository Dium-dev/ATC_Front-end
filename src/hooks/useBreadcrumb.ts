import create from 'zustand';

export const useBreadcrumb = create((set) => ({ // Crear una tienda que administre el estado del componente breadcrumb
  breadcrumb: [
    { label: 'Categorias', path: '/category' },
    { label: 'Repuestos', path: '/repuestos' },
    { label: 'Exterior', path: '/exterior' },
    { label: 'Bombillos', path: '/bombillos' },
    { label: 'Farolas', path: '/farolas' },
    { label: 'Stops', path: '/stops' },
    { label: 'Exploradoras', path: '/exploradoras' },
    { label: 'Audio', path: '/audio' },
    { label: 'Interior', path: '/interior' },
  ], // Inicializar el estado del breadcrumb con las categorías
  setBreadcrumb: (breadcrumb) => set({ breadcrumb }), // Agregar una función para actualizar el estado del breadcrumb
}));