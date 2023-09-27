import { useState } from 'react';

export function useFlagState(initialValue: boolean) {
  const [flagState, setFlagState] = useState<boolean>(initialValue); // Tipa isOpenContact como boolean.

  const updateState = (newValue: boolean): void => {
    setFlagState(newValue);
  };

  return [flagState, updateState] as const; // Tipa la tupla de retorno como constante.
}
