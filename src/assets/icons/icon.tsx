'use client';
import React, { useState, useEffect } from 'react';
import { IconTypes } from '~/types/icons';
interface DynamicIconProps {
  icon: IconTypes;
}

const Icon = ({ icon }: DynamicIconProps): JSX.Element => {
  const [LoadedComponent, setLoadedComponent] = useState<JSX.Element | null>(
    null
  );

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const importDynamic = await import(`./${icon}`);
        setLoadedComponent(importDynamic.default);
      } catch (error) {
        console.error(error);
      }
    };
    loadComponent();
  }, [icon]);

  if (!LoadedComponent) {
    return <div></div>; // borré el Cargando... que molestaba en el login por ahora
  }

  return LoadedComponent;
};

export default Icon;
