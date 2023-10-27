"use client"
import React from 'react';
import '~/assets/styles/tailwind.css';

// components

import CardSettings from "~/components/componetsDashboard/Cards/CardSettings" ;
import CardProfile from "~/components/componetsDashboard/Cards/CardProfile";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}