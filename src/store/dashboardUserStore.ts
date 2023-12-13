/* eslint-disable no-unused-vars */
import { create } from 'zustand';

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
}

interface DashboardUser {
  isOpenFormAddress: boolean;
  setFormAddress: (value: boolean) => void;
  addresses: Address[];
  addAddress: (value: Address) => void;
  updateAddress: (id: string, value: Partial<Address>) => void;
  deleteAddress: (id: string) => void;
}

export const useDashboardUserStore = create<DashboardUser>((set) => ({
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
    },
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
}));
