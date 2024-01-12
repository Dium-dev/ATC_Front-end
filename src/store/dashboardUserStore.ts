/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { Department } from '~/types/userDashboard';

export interface Address {
  id: string;
  address: string;
  department: {
    name: string;
    id: string;
  };
  city: string;
  phone: string;
  barrio: string;
  references: string;
}
interface DashboardUser {
  contactForm: boolean;
  setContactForm: (value: boolean) => void;
  registerForm: boolean;
  setRegisterForm: (value: boolean) => void;
  loginForm: boolean;
  setLoginForm: (value: boolean) => void;
  isOpenFormAddress: boolean;
  setFormAddress: (value: boolean) => void;
  addresses: Address[];
  departments: Department[];
  favorites: string[];
  addAddress: (value: Address) => void;
  addFavorite: (id: string) => void;
  updateAddress: (id: string, value: Partial<Address>) => void;
  deleteAddress: (id: string) => void;
  deleteFavorite: (id: string) => void;
}

export const useDashboardUserStore = create<DashboardUser>((set) => ({
  contactForm: false,
  setContactForm(value) {
    set((state) => ({
      ...state,
      contactForm: value
    }))
  },
  registerForm: false,
  setRegisterForm: (value) => {
    set((state) => ({
      ...state,
      registerForm: value
    }))
  },
  loginForm: false,
  setLoginForm: (value) => {
    set((state) => ({
      ...state,
      loginForm: value
    }))
  },
  isOpenFormAddress: false,
  addresses: [
    {
      id: '2',
      address: 'Carrera 1 #11-30',
      department: {
        name: 'Caquetá',
        id: '9',
      },
      city: 'El Doncello',
      phone: '3136299812',
      barrio: '20 de abril',
      references: 'A 1 cuadra de la tienda La Amistad'
    },
    {
      id: '4',
      address: 'Carrera 4 #12-34',
      department: {
        name: 'Caquetá',
        id: '9',
      },
      city: 'El Doncello',
      phone: '3124563478',
      barrio: 'Abas Turbay',
      references: 'Más abajo de Bocachico'
    },
  ],
  departments: [],
  favorites: ['21', '47', '25'],
  setFormAddress: (value) => {
    set(() => ({
      isOpenFormAddress: value,
    }));
  },
  addAddress: (value) => {
    set((state) => ({
      ...state,
      addresses: [...state.addresses, value],
    }));
  },
  addFavorite: (id) => {
    set((state) => ({
      ...state,
      favorites: [...state.favorites, id]
    }))
  },
  updateAddress: (id, value) => {
    set((state) => {
      const updateAddresses = state.addresses.map((address) => {
        if (address.id === id) {
          return { ...address, ...value };
        }
        return address;
      });

      return {
        ...state,
        addresses: [...updateAddresses],
      };
    });
  },
  deleteAddress: (id) => {
    set((state) => ({
      ...state,
      addresses: [...state.addresses.filter((address) => address.id !== id)],
    }));
  },
  deleteFavorite: (id) => {
    set((state) => ({
      ...state,
      favorites: [...state.favorites.filter((favorite) => favorite !== id)]
    }))
  }
}));
