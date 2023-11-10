/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-key */
'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { TopSellers } from '~/components/containerCards/containerCards';
import { ContainerPage } from '~/app/container_page';
import { Carousel } from '~/components/carousels/carousel';
import { productos } from '~/mockData/mockProducts';
import Breadcrumb from '~/components/breadcrumb/index';
import BuyDetail from '~/components/buyDetail';
import { ProductDetail } from '~/types/products';
import Image from 'next/image';
import Close from '~/assets/icons/Close';

export default function Dinamica() {
    const {id} = useParams();
    const [productDetail, setProductDetail] = useState<ProductDetail>()

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`http://localhost:3001/products/${id}`)
            const data = await res.json();
            setProductDetail(data.product)
        }
        fetchProduct();
    },[id])

    // MockProducts como las imágenes de un mismo producto *hasta conseguir las imágenes correspondientes de un mismo producto.
    // Max: 10 images/product
    const productImagesSliced = productos.slice(0, 10);

    // Array of URL's:
    const productImages = productImagesSliced.map((product): string[] => product.image);

    // STATES:
    // La imagen principal.
    const [mainImage, setMainImage] = useState<string>(productImages[0][0]);

    // El modal para la imagen.
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    // FUNCTIONS:
    const toggleModalVisibility = () => {
        setIsModalVisible((prev) => !prev);
    };

    // COMPONENT:
    return (
        <ContainerPage>
            {productDetail && <Breadcrumb categoryId={productDetail?.categoryId}/>}
            <div className="flex flex-col items-center w-full bg-background-lm dark:bg-background-dm md:flex-row md:justify-center">
                <div className="flex flex-col items-center w-[75%] md:flex-row md:justify-between gap-y-8 md:gap-x-8">
                    {/* IMAGES */}
                    <div className="flex flex-col items-center min-w-[250px] max-w-[500px] md:h-[74vh]">
                        <div
                            className="min-w-full mb-2 hover:cursor-pointer h-full"
                            onClick={toggleModalVisibility}
                        >
                            <Image src={mainImage} className="w-full h-full" alt="Image" width={600} height={600}/>
                        </div>
                        <div
                            className={`${isModalVisible ? 'grid' : 'hidden'} z-[9999] fixed top-0 left-0 place-items-center min-w-full min-h-screen bg-[rgb(15,15,15,0.9)] xxl:bg-primary-lm`}
                            onClick={toggleModalVisibility}
                        >
                            <div className="absolute right-4 top-4 text-background-lm w-8 hover:cursor-pointer hover:opacity-80">
                                <Close />
                            </div>
                            <Image
                                src={mainImage}
                                className={`${isModalVisible ? 'opacity-100' : 'opacity-0'} p-4 w-[600px] h-auto select-none transition-opacity`}
                                onClick={(e) => e.stopPropagation()}
                                alt="Image"
                                width={600} height={600}
                            />
                        </div>
                        <div className="flex-1">
                            <Carousel
                                items={5}
                                setMainImage={setMainImage}
                                highlight={true}
                                stl={{
                                    width: 'w-[7%]',
                                    padding: 'p-0',
                                    buttonSquared: true
                                }}
                            >
                                {productImagesSliced.map((product, idx) => (
                                    <Image
                                        key={idx}
                                        src={product.image[0]}
                                        alt="Product"
                                        width={500} height={500}
                                    />
                                ))}
                            </Carousel>
                        </div>
                    </div>
                    {/* DETAILS */}
                    <div className="flex flex-col md:w-1/2 w-full">
                        {productDetail && <BuyDetail product={productDetail}/>}
                        </div>
                    </div>
                </div>
            {/* Descripcion Detail */}
        <div className="h-auto bg-background-lm dark:bg-background-dm flex justify-center pt-5">
        <div className="w-[75%]">
          <div className="bg-primary-lm justify-center items-center flex w-52 h-10 rounded-ss-[10px] rounded-se-[10px]">
            <h1 className="text-2xl items-center text-white">Descripción</h1>
          </div>
          <hr className="w-full bg-background-dm border-background-dm dark:bg-background-lm dark:border-background-lm h-[2px]" />
          <div className=" pl-2 pr-2 pt-5 pb-7">
          <p className="text-background-dm dark:text-background-lm text-2x">
            {/* para agregar un salto de línea en el renderizado, divido el contenido de la descripción del producto en líneas separadas utilizando el carácter de salto de línea ("\n") */}
          {productDetail?.description}
            </p>
          </div>
        </div>
      </div>
      <TopSellers />
    </ContainerPage>
  );
}