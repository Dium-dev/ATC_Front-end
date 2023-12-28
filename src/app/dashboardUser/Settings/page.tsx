'use client'
import React from 'react';
import '~/assets/styles/tailwind.css';

// components

import CardSettings from '~/components/componetsDashboard/Cards/CardSettings' ;

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CardSettings />
        </div>
      </div>
    </>
  );
}
