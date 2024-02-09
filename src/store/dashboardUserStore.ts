/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { Department, Favorite } from '~/types/userDashboard';

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
  favorites: Favorite[];
  addAddress: (value: Address) => void;
  addAddresses: (addresses: any) => void;
  deleteAddress: (id: string) => void;
}

export const useDashboardUserStore = create<DashboardUser>((set) => ({
  contactForm: false,
  setContactForm(value) {
    set((state) => ({
      ...state,
      contactForm: value,
    }));
  },
  registerForm: false,
  setRegisterForm: (value) => {
    set((state) => ({
      ...state,
      registerForm: value,
    }));
  },
  loginForm: false,
  setLoginForm: (value) => {
    set((state) => ({
      ...state,
      loginForm: value,
    }));
  },
  isOpenFormAddress: false,
  addresses: [],
  departments: [],
  favorites: [
    {
      id: '21',
    },
    {
      id: '162',
    },
    {
      id: '2'
    }
  ],
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
  addAddresses: (addresses) => {
    set((state) => ({
      ...state,
      addresses,
    }));
  },
  deleteAddress: (id) => {
    set((state) => ({
      ...state,
      addresses: [...state.addresses.filter((address) => address.id !== id)],
    }));
  },
}));
