'use client';
import Image from 'next/image';
import { Images } from '~/assets/img';
import ImagesList from './ImagesList';
import React, { FC } from 'react';
import Links from './Links';
import { useFlagState } from '~/hooks/useFlagState';
import Form from '~/components/form/Form';

interface FooterProps { }

const Footer: FC<FooterProps> = ({ }) => {
    const [flagState, updateState] = useFlagState(false);

    return (
        <footer className="flex flex-col items-center justify-center md:px-20 w-full bg-[#000]">
            <div className="flex flex-col md:flex-row pt-16 gap-12 max-w-[1920px] w-full min-h-[300px]">
                {/* LOGO */}
                <div className="flex flex-col items-center justify-between gap-8 px-4">
                    <Image
                        src={Images.logos.LogoShieldLight}
                        alt=""
                        width="180"
                        height="90"
                    />
                    <div className="flex gap-4">
                        <ImagesList />
                    </div>
                </div>
                {/* LINKS */}
                <div className="flex flex-col gap-12 items-center justify-between flex-1 px-4">
                    <nav className="flex flex-col xs:flex-row items-center justify-center gap-[clamp(.8rem,calc(1rem+3vw),4rem)] text-[clamp(.9rem,calc(0.5rem+.7vw),1.3rem)] text-white whitespace-nowrap">
                        <Links />
                        <button
                            onClick={() => updateState(true)}
                            className="relative uppercase after:content-[''] after:absolute after:-bottom-[5px] after:left-0 after:w-full after:h-[2.5px] after:bg-secondary-lm after:scale-x-0 after:transform after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
                        >Contacto</button>
                    </nav>
                    <Image
                        src="https://i.postimg.cc/7Ymwd4mS/Mercado-Pago.png"
                        alt=""
                        width="450"
                        height="290"
                    />
                </div>
            </div>
            <hr className="w-[90%] md:w-full max-w-[1920px] bg-gradient-to-r from-background-dm via-secondary-lm to-background-dm mt-[2.25rem] h-[2px]" />
            <p className="text-xs text-white text-center pb-4 pt-4 max-w-[1920px]">
                ©Copyrigth 2023. Todos los derechos reservados - Desarrollado por: <strong>Work Team</strong>
            </p>
            {flagState && <Form updateState={updateState} />}
        </footer>
    );
};

export default Footer;