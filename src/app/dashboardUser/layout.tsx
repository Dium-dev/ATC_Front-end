import React from 'react';
import '~/assets/styles/tailwind.css';
// import { Switch, Route, Redirect } from 'react-router-dom';

// components

import AdminNavbar from '~/components/componetsDashboard/Navbars/AdminNavbar.js';
import Sidebar from '~/components/componetsDashboard//Sidebar/Sidebar.js';
import HeaderStats from '~/components/componetsDashboard//Headers/HeaderStats.js';
import FooterAdmin from '~/components/componetsDashboard//Footers/FooterAdmin.js';

// views

import Dashboard from '~/app/dashboardUser/page';
import { type } from 'os';
// import Maps from 'views/admin/Maps.js';
// import Settings from 'views/admin/Settings.js';
// import Tables from 'views/admin/Tables.js';
type AdminProps = {
  children: React.ReactNode;
};

export default function Admin({ children }: AdminProps) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
              <div className="px-4 md:px-10 mx-auto w-full -m-24">
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
