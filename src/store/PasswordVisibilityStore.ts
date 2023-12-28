/* eslint-disable no-unused-vars */
import create from 'zustand';
import Eye from '~/assets/icons/Eye';
import EyeBlocked from '~/assets/icons/EyeBlocked';

interface PasswordVisibilityStore {
  Icon: typeof Eye | typeof EyeBlocked; // Assuming Eye and EyeSlash are the actual components
  isPasswordVisible: boolean;
  updateStateHide: (state: Partial<PasswordVisibilityStore>) => void;
}

const usePasswordVisibilityStore = create<PasswordVisibilityStore>((set) => ({
  Icon: Eye, // Initial value for the Icon
  isPasswordVisible: false,
  updateStateHide: (state) => set((prevState) => ({ ...prevState, ...state })),
}));

export default usePasswordVisibilityStore;