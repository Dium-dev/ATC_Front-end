'use client'
import React from 'react';
import '~/assets/styles/tailwind.css';
// import { Switch, Route, Redirect } from 'react-router-dom';

// components

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
  const {contactForm, setContactForm} = useDashboardUserStore(state => state);
  return (
    <>
      <Sidebar />
      <div className="md:ml-64 bg-blueGray-100 min-h-screen">
        <div className="min-h-screen p-4 md:p-10 mx-auto w-full flex flex-col justify-around">
        {contactForm && <Form updateState={setContactForm} />}
          {children}
          {/* <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch> */}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
