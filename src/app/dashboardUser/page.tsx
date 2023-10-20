import React from 'react';
import '~/assets/styles/tailwind.css';

// components

import CardLineChart from "~/components/componetsDashboard/Cards/CardLineChart"
import CardBarChart from '~/components/componetsDashboard/Cards/CardBarChart';
import CardPageVisits from '~/components/componetsDashboard/Cards/CardPageVisits';
import CardSocialTraffic from '~/components/componetsDashboard/Cards/CardSocialTraffic';

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
