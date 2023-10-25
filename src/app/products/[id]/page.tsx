/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-key */
"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { TopSellers } from '~/components/containerCards/containerCards';
import { ContainerPage } from "~/app/container_page";
import { Carousel } from "~/components/carousels/carousel";
import { productos } from "~/mockData/mockProducts";
import Breadcrumb from "~/components/breadcrumb/index";
import BuyDetail from '~/components/buyDetail';


/* este es un nuevo moc donde se agrega la descripcion del producto, */
import { product } from '~/mockData/mocProductsD';

import Close from '~/assets/icons/Close';

import { ContainerPage } from "~/app/container_page";
import { Carousel } from "~/components/carousels/carousel";
import { productos } from "~/mockData/mockProducts";
import BuyDetail from '~/components/buyDetail';
import Close from "~/assets/icons/Close";


export default function Dinamica() {
    const Pathname = usePathname();
    const RouteName = Pathname.split("/").pop() || "";

    // MockProducts como las imágenes de un mismo producto *hasta conseguir las imágenes correspondientes de un mismo producto.
    // Max: 10 images/product
    const productImagesSliced = productos.slice(0, 10);
<<<<<<< HEAD

    // Array of URL's:
    const productImages = productImagesSliced.map((product): string[] => product.image);
=======
    // Array of URL's:
    const productImages = productImagesSliced.map((product): string[] => product.image);

>>>>>>> 0528e788e92d02f16c4b4cca14fe601742fcc869

    // STATES:
    // La imagen principal.
    const [mainImage, setMainImage] = useState<string>(productImages[0][0]);
<<<<<<< HEAD

    // El modal para la imagen.
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    // FUNCTIONS:
    const toggleModalVisibility = () => {
        setIsModalVisible((prev) => !prev);
    };

    // COMPONENT:
    return (
        <ContainerPage>
            <Breadcrumb />
            <div className="flex flex-col items-center w-full bg-background-lm dark:bg-background-dm ms:flex-row ms:justify-center">
                <div className="flex flex-col items-center w-[75%] ms:flex-row ms:justify-center">
                    {/* IMAGES */}
=======
    // El modal para la imagen.
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);


    // FUNCTIONS:
    const toggleModalVisibility = () => {
        setIsModalVisible((prev) => !prev)
    };


    // COMPONENT:
    return (
        <ContainerPage>
            <div className="flex flex-col items-center w-full bg-background-lm dark:bg-background-dm ms:flex-row ms:justify-center">
                <div className="flex flex-col items-center w-[75%] ms:flex-row ms:justify-center">
                {/* IMAGES */}
>>>>>>> 0528e788e92d02f16c4b4cca14fe601742fcc869
                    <div className="flex flex-col items-center min-w-[250px] max-w-[500px]">
                        <div
                            className="min-w-full mb-2 hover:cursor-pointer"
                            onClick={toggleModalVisibility}
                        >
                            <img src={mainImage} className="w-full h-auto" />
                        </div>
                        <div
                            className={`${isModalVisible ? "grid" : "hidden"} z-[9999] fixed top-0 left-0 place-items-center min-w-full min-h-screen bg-[rgb(15,15,15,0.9)] xxl:bg-primary-lm`}
                            onClick={toggleModalVisibility}
                        >
                            <div className="absolute right-4 top-4 text-background-lm w-8 hover:cursor-pointer hover:opacity-80">
                                <Close />
                            </div>
                            <img
                                src={mainImage}
                                className={`${isModalVisible ? "opacity-100" : "opacity-0"} p-4 w-[600px] h-auto select-none transition-opacity`}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                        <div className="flex-1">
                            <Carousel
                                items={5}
                                setMainImage={setMainImage}
                                highlight={true}
                                stl={{
                                    width: "w-[7%]",
                                    padding: "p-0",
                                    buttonSquared: true
                                }}
                            >
<<<<<<< HEAD
                                {productImagesSliced.map((product, idx) => (
                                    <img
                                        key={idx}
                                        src={product.image[0]}
                                    />
                                ))}
=======
                                {
                                    productImagesSliced.map((product, idx) => (
                                        <img
                                            key={idx}
                                            src={product.image[0]}
                                        />
                                    ))
                                }
>>>>>>> 0528e788e92d02f16c4b4cca14fe601742fcc869
                            </Carousel>
                        </div>
                    </div>
                    {/* DETAILS */}
                    <div className="flex flex-col w-1/2">
                        <BuyDetail />
<<<<<<< HEAD
                        </div>
                    </div>
                </div>
            {/* Descripcion Detail */}
        <div className="h-auto bg-background-lm dark:bg-background-dm flex justify-center pt-5">
        <div className="ms:w-[90%] md:w-[90%] lg:w-[64%] xl:w-[64%] w-[90%]">
          <div className="bg-primary-lm justify-center items-center flex w-52 h-10 rounded-ss-[10px] rounded-se-[10px]">
            <h1 className="text-2xl items-center text-white">Descripción</h1>
          </div>
          <hr className="w-full bg-background-dm border-background-dm dark:bg-background-lm dark:border-background-lm h-[2px]" />
          <div className=" pl-2 pr-2 pt-5 pb-7">
          <p className="text-background-dm dark:text-background-lm text-2x">
            {/* para agregar un salto de línea en el renderizado, divido el contenido de la descripción del producto en líneas separadas utilizando el carácter de salto de línea ("\n") */}
          {product[0].description.split ("\n").map (function (item) { return ( <span> {item} <br /> </span> ); })}
            </p>
          </div>
        </div>
      </div>
      <TopSellers />
    </ContainerPage>
  );
}
=======
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};
>>>>>>> 0528e788e92d02f16c4b4cca14fe601742fcc869
