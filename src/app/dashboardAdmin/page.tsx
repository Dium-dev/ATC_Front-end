import CardBarChart from "~/components/componetsDashboard/Cards/CardBarChart";
import CardLineChart from "~/components/componetsDashboard/Cards/CardLineChart";
import CardPageVisits from "~/components/componetsDashboard/Cards/CardPageVisits";
import CardProfile from "~/components/componetsDashboard/Cards/CardProfile";
import CardSettings from "~/components/componetsDashboard/Cards/CardSettings";
import CardSocialTraffic from "~/components/componetsDashboard/Cards/CardSocialTraffic";
import CardStats from "~/components/componetsDashboard/Cards/CardStats";
import CardTable from "~/components/componetsDashboard/Cards/CardTable";

import Navbar from "~/components/componetsDashboard/Navbars/IndexNavbar";

export default function landing() {
    return (
        <main>
            <Navbar />
            <CardBarChart />
            <CardLineChart />
            <CardPageVisits />
            <CardProfile />
            <CardSettings />
            <CardSocialTraffic />
            <CardStats />
            <CardTable />
        </main>
    );
}
