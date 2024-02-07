/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import Icon from '~/assets/icons/icon';
import Image from 'next/image';

interface ReviewsProps {
  description: string;
  userImage: string;
  rating: number;
  userName: string;
}

const Reviews: React.FC<ReviewsProps> = ({
  userName,
  description,
  userImage,
  rating,
}) => {
  // Función para renderizar las estrellas de calificación
  const renderRatingStars = () => {
    const maxRating = 5;
    const filledStars = Math.min(maxRating, Math.max(0, rating)); // Limita la calificación entre 0 y 5
    const stars = Array.from({ length: maxRating }, (_, index) => (
      <span
        key={index}
        className={`text-2xl ${
          index < filledStars ? 'text-primary-lm' : 'text-secondary-dm'
        }`}
      >
        ★
      </span>
    ));
    return stars;
  };

  return (  // cambio de 320 a 1920 max
    <div className="flex flex-col max-w-[1920px] bg-white m-5 p-4 lg:shadow-md rounded-lg h-72 justify-around dark:bg-primary-dm mt-12"> 
      <div>
        <Icon icon="quotationMarks" />
      </div>
      <div className="h-24 flex items-center">
        <p className="line-clamp-3 hover:overflow-auto">{description}</p>
      </div>
      <div className="border-t border-secondary-dm opacity-20 dark:border dark:border-white"></div>
      <div className="object flex items-center mb-2 mt-4 ">
        <Image
          src={userImage}
          alt={`Imagen de ${userName}`}
          className="w-12 h-12 rounded-full mr-2"
          width={245}
          height={154}
        />
        <div className="flex flex-col">
          <p>{userName}</p>
          <div>{renderRatingStars()}</div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
