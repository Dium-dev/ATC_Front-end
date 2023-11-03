import CardBarChart from "~/components/componetsDashboard/Cards/CardBarChart";
import CardLineChart from "~/components/componetsDashboard/Cards/CardLineChart";
import CardPageVisits from "~/components/componetsDashboard/Cards/CardPageVisits";
import CardProfile from "~/components/componetsDashboard/Cards/CardProfile";
import CardSettings from "~/components/componetsDashboard/Cards/CardSettings";
import CardSocialTraffic from "~/components/componetsDashboard/Cards/CardSocialTraffic";
import CardStats from "~/components/componetsDashboard/Cards/CardStats";
import CardTable from "~/components/componetsDashboard/Cards/CardTable";

// import Navbar from "~/components/componetsDashboard/Navbars/IndexNavbar";
// import NavBar from "~/components/navBar/navBar";
import Navbar from "../../components/componetsDashboard/Navbars/AdminNavbar";
import Sidebar from "~/components/componetsDashboard/Sidebar/Sidebar";
import CardUsers from "~/components/componetsDashboard/Cards/CardUsers"
import CardProducts from "~/components/componetsDashboard/Cards/CardProducts";



export default function landing() {
    return (
        <>
            {/* <NavBar /> */}
            <Navbar />
            <main className="mt-[109px] md:mt-[60px]">
                {/* <Sidebar /> */}
                <div className="bg-white dark:bg-background-dm w-full mb-6 shadow-lg rounded">
                    <h6 className="mb-1 px-4 py-3 uppercase text-blueGray-100 text-[2rem] font-semibold">Administración</h6>
                </div>

                {/* USERS */}
                <CardUsers/>

                {/* PRODUCTS */}
                <CardProducts/>

                {/* ORDERS */}
                <CardTable />

                {/* <CardBarChart /> */}
                SETTINGS:
                {/* SETTINGS */}
                <CardSettings />
                {/* <CardProfile /> */}

                {/* <CardLineChart /> */}
                {/* <CardPageVisits /> */}
                {/* <CardSocialTraffic /> */}
                {/* <CardStats /> */}
            </main>
        </>
    );
}
