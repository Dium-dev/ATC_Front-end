import React, { FC } from "react";

interface CartProps {}

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Image product",
    price: "$35",
    color: "Black",
  },
];

const Cart: FC<CartProps> = () => {
  return (
    // <div className="">
    //   <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
    //     <img
    //       src={products[0].imageSrc}
    //       alt={products[0].imageAlt}
    //       className="h-[154px] w-[227px]  object-center"
    //     />
    //   </div>
    //   <div className="mt-4 flex justify-between">
    //     <div>
    //       <h3 className="text-sm text-gray-700">
    //         <a href={products[0].href}>
    //           <span aria-hidden="true" className="absolute inset-0" />
    //           {products[0].name}
    //         </a>
    //       </h3>
    //       <p className="mt-1 text-sm text-gray-500">{products[0].color}</p>
    //     </div>
    //     <p className="text-sm font-medium text-gray-900">{products[0].price}</p>
    //   </div>
    // </div>
    <div className="relative w-[227px] h-[268px] border border-black">
      <img
        src={products[0].imageSrc}
        alt="Cubre Volante"
        className="object-center absolute w-[227px] h-[154px] border border-black"
      />
      <div className="absolute bottom-0 flex flex-col justify-center items-center w-full p-2 border border-black">
        <h3 className="w-[206px] h-[38px] font-oswald font-bold text-sm text-black ">
          Cubre Volante Alta Calidad Cuerina Cocido Negro Hilo Rojo
        </h3>
        <p className="w-[227px] h-[33px] font-oswald font-bold text-xl text-black text-center">
          $ 29500
        </p>
        <div className="w-[206px] flex justify-between">
          <p className="font-oswald font-bold text-xs text-black">
            Performance
          </p>
          <p className="font-oswald font-bold text-xs text-black">
            Envío Gratis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
