"use client";
import { usePathname } from "next/navigation";

export default function Dinamica() {
  const Pathname = usePathname();

  const RouteName = Pathname.split("/").pop() || "";

  return <h1>Hola, soy {RouteName}</h1>;
}
