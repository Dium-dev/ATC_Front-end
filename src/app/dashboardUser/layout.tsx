'use client';
import React from 'react';
import '~/assets/styles/tailwind.css';
// import { Switch, Route, Redirect } from 'react-router-dom';

// components
import NavBar from '~/components/navBar/navBar';
import Sidebar from '~/components/componetsDashboard//Sidebar/Sidebar.js';
import FooterAdmin from '~/components/componetsDashboard//Footers/FooterAdmin.js';

// views

import Dashboard from '~/app/dashboardUser/page';
import { type } from 'os';
import Form from '~/components/form/Form';
import { useDashboardUserStore } from '~/store/dashboardUserStore';
// import Maps from 'views/admin/Maps.js';
// import Settings from 'views/admin/Settings.js';
// import Tables from 'views/admin/Tables.js';
type AdminProps = {
  children: React.ReactNode;
};

export default function Admin({ children }: AdminProps) {
  const { contactForm, setContactForm } = useDashboardUserStore(
    (state) => state
  );
  return (
    <>
      <NavBar />
      <Sidebar />
      <div className="md:ml-64 bg-blueGray-100 min-h-screen">
        <div className="min-h-screen p-4 md:p-10 mx-auto w-full flex flex-col justify-around">
          {contactForm && <Form updateState={setContactForm} />}
          <div className="mt-20">{children}</div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
