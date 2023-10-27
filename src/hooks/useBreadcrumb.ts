import create from 'zustand';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbStore {
  breadcrumb: BreadcrumbItem[];
  setBreadcrumb: (breadcrumb: BreadcrumbItem[]) => void;
}

export const useBreadcrumb = create<BreadcrumbStore>((set) => ({
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
  ],
  setBreadcrumb: (breadcrumb) => set({ breadcrumb }),
}));
