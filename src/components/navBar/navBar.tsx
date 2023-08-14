"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/ATC_LOGO.png";
import ButtonComponent from "../button/button";
import { FaAtlas, FaUser } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import Link from "next/link";
import { DropDownMenu } from "../dropdownMenu/dropdownMenu";
import { ThemeModeButton } from "../ThemeMode";

export const NavBar = () => {
  return (
    <div className=" w-full h-[39.96px] min-w-[800px] flex flex-row justify-between items-center bg-text-dm">
      <div className="flex flex-row items-center space-x-8">
        <Link href={"/"}>
          <Image
            className="h-18 w-18"
            src={logo}
            alt="Your Company"
            width={150}

            // height={100}
          />
        </Link>

        <DropDownMenu
          title="Categorias"
          anchorArray={[
            { title: "Farolas", to: "/products/Farolas" },
            { title: "Stops", to: "/products/Stops" },
          ]}
        />
        <DropDownMenu
          title="Marcas"
          anchorArray={[
            { title: "Mazda", to: "/products/Mazda" },
            { title: "Toyota", to: "/products/Toyota" },
          ]}
        />
      </div>
      <div className="flex flex-row min-w-[500px] bg-secondary-lm">
        <input type="text" className="w-full" />
      </div>
      <div className="flex flex-row space-x-8 items-center">
        <ButtonComponent variant="white" text="Inicio" to="/" />
        <ButtonComponent variant="white" text="Sobre nosotros" to="/aboutUs" />
        <ButtonComponent variant="white" text="Contacto" to="/contact" />
        <FaAtlas className="cursor-pointer" />
        <FaUser className="cursor-pointer" />
        <BsCartFill className="cursor-pointer" />
        <ThemeModeButton />
      </div>
    </div>
  );
};
