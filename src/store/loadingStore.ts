'use client';
import { useState } from 'react';
import create from 'zustand';

// zustand Store
interface LoadingState {
  isLoading: boolean;
}

const initialState = {
  isLoading: true,
};

export const useLoadingStore = () => {
  const [state, setState] = useState<LoadingState>(initialState);
  const setLoading = (isLoading: boolean) => setState({ isLoading });
  return { setLoading };
};