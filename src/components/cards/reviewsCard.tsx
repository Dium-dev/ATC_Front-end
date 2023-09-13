/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from 'react';
import Icon from '~/assets/icons/icon';
import Image from 'next/image';

interface ReviewsProps {
  description: string;
  userImage: string;
  rating: number;
  userName: string;
}

const Reviews: React.FC<ReviewsProps> = ({ userName ,description, userImage, rating }) => {
    // Función para renderizar las estrellas de calificación
    const renderRatingStars = () => {
      const maxRating = 5;
      const filledStars = Math.min(maxRating, Math.max(0, rating)); // Limita la calificación entre 0 y 5
      const stars = Array.from({ length: maxRating }, (_, index) => (
        <span
          key={index}
          className={`text-2xl ${index < filledStars ? 'text-primary-lm' : 'text-secondary-dm'}`}
        >
          ★
        </span>
      ));
      return stars;
    };
  

  return (
    <div className="">
    <div className="bg-white m-3 p-4 lg:shadow-md rounded-lg">
      <Icon icon="quotationMarks"/>
      <div className="mb-4 xl:h-[260px] lg:h-[410px] md:h-[390px] ms:h-[380px]">
        <p className="overflow-hidden xl:h-[260px] lg:h-[410px] md:h-[390px] ms:h-[380px]l">
          {description}
        </p>
      </div>
      <div className="border-t border-secondary-dm opacity-20"></div>
      <div className="flex items-center mb-2 mt-4">
        <Image 
          src={userImage} 
          alt={`Imagen de ${userName}`} 
          className="w-12 h-12 rounded-full mr-2"         
          width={245}
          height={154}/>
        <div className='flex flex-col'>
          <p>{userName}</p>
          <div>{renderRatingStars()}</div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Reviews;


