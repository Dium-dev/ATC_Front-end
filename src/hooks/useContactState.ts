import { useState } from 'react';

export function useContactState(initialValue: boolean) {
  const [isOpenContact, setIsOpenContact] = useState<boolean>(initialValue); // Tipa isOpenContact como boolean.

  const updateState = (newValue: boolean): void => {
    setIsOpenContact(newValue);
  };

  return [isOpenContact, updateState] as const; // Tipa la tupla de retorno como constante.
}
