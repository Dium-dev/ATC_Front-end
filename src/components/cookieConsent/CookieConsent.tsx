import Link from "next/link";
import { MainButton } from "../button/button";
import Cookie from "~/assets/icons/Cookie";
import { useEffect, useState } from "react";

function CookieConsent() {

    let cookiesValue;
    // Inicializar como "false" (default).
    let initialCookiesConsent = false;

    try {
        cookiesValue = localStorage.getItem("cookies");

        if (cookiesValue) initialCookiesConsent = JSON.parse(cookiesValue);

        // En caso de no encontrar "cookies" key en localStorage, setear "" (string vacia) a "cookie" key.
        else localStorage.setItem("cookies", "");

    } catch (error) {
        // Falback
        localStorage.setItem("cookies", "");
    }

    const [cookiesConsent, setCookiesConsent] = useState<boolean>(initialCookiesConsent);

    const handleClick = () => {
        // Actualizar localStorage y el estado local.
        const cookiesAuth = JSON.stringify(true);
        localStorage.setItem("cookies", cookiesAuth);
        setCookiesConsent(true);
    };

    useEffect(() => {
        console.log(cookiesConsent)
    }, [cookiesConsent]);


    // COMPONENT:
    if (cookiesConsent === true) return null;
    else return (
        <div className="fixed bottom-0 flex flex-col justify-center items-center xs:flex-row p-4 px-8 xs:p-4 w-full bg-[#1F2B36]">
            <div className="min-w-[calc(2rem+5vw)] w-[calc(2rem+5vw)] xs:min-w-[calc(2rem+4vw)] xs:w-[calc(2rem+4vw)] ms:min-w-[calc(0.5rem+5vw)] ms:w-[calc(0.5rem+5vw)] md:min-w-[calc(0.5rem+4vw)] md:w-[calc(0.5rem+4vw)]">
                <Cookie color={"#fff"} />
            </div>
            <div className="flex flex-col justify-center mb-4 xs:mr-4 xs:mb-0">
                <strong className="text-[clamp(0.4rem,1rem+0.3vw,4rem)]">Uso de cookies</strong>
                <p className="text-[clamp(0.25rem,0.75rem+0.25vw,3rem)]">
                    Al navegar por nuestro portal, consideramos que aceptas nuestras <Link href="/politica-de-datos-de-navegacion" className="underline hover:cursor-pointer">políticas de datos de navegación</Link>.
                </p>
            </div>
            <div
                className="inline"
                onClick={handleClick}
            >
                <MainButton color={"red"}>Entendido</MainButton>
            </div>
        </div>
    );
};


export default CookieConsent;