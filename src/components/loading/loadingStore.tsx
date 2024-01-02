/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import loadingGif from '../../../public/images/loading/loading.gif'

interface LoadingProps {
  loading?: boolean;
  error?: string | undefined;
  size?: number; // prop de tamaño opcional
}

const LoadingStore: React.FC<LoadingProps> = ({ loading, error, size }) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (error) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [error]);

  return (
    <div
      className={'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-80 h-80 flex items-center justify-center rounded-full bg-transparent p-4'}
    >
      {loading && (
        <Image
        src={loadingGif}
        alt="Loading"
        className="w-full h-full"
        width={size ? size : 24} // Utilizar la propiedad de tamaño o el valor predeterminado
        height={size ? size : 24} // Utilizar la propiedad de tamaño o el valor predeterminado
      />
      )}
      {showError && (
        <p className="text-red-500 mt-2">
           {error ? `: ${error}` : ''}
        </p>
      )}
    </div>
  );
};

export default LoadingStore;