import CardSettings from "~/components/componetsDashboard/Cards/CardSettings";

// import Navbar from "~/components/componetsDashboard/Navbars/IndexNavbar";
import NavBar from "~/components/navBar/navBar";
import Navbar from "../../components/componetsDashboard/Navbars/AdminNavbar";
import Sidebar from "~/components/componetsDashboard/Sidebar/Sidebar";
import CardUsers from "~/components/componetsDashboard/Cards/CardUsers"
import CardProducts from "~/components/componetsDashboard/Cards/CardProducts";
import CardOrders from "~/components/componetsDashboard/Cards/Orders/CardOrders";
import CardCategories from "~/components/componetsDashboard/Cards/CardCategories";
import CardBrands from "~/components/componetsDashboard/Cards/CardBrands";


export default function Landing() {
    return (
        <>
            <NavBar />
            <Navbar />
            <main className="mt-[109px] md:mt-[60px]">
                {/* <Sidebar /> */}
                <div className="bg-white dark:bg-background-dm w-full mb-6 shadow-lg rounded">
                    <h6 className="mb-1 px-4 py-3 uppercase text-blueGray-100 text-[2rem] font-semibold">Administración</h6>
                </div>

                {/* USERS */}
                <CardUsers />

                {/* PRODUCTS */}
                <CardProducts />
                <CardCategories />
                <CardBrands />

                {/* ORDERS */}
                <CardOrders />

                {/* <CardBarChart /> */}
                SETTINGS:
                {/* SETTINGS */}
                {/* <CardSettings /> */}
                {/* <CardProfile /> */}

                {/* <CardLineChart /> */}
                {/* <CardPageVisits /> */}
                {/* <CardSocialTraffic /> */}
                {/* <CardStats /> */}
            </main>
        </>
    );
};