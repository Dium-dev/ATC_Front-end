'use client';
import React from "react";
import CardCategory from "../cards/categoryCard";


type Category = {
  id: string;
  name: string;
  image: string[];
};

type ContainerCardProps = {
  category: Category[];
};

const CategoryCategory = ({ category }: ContainerCardProps) => {
  return (
    <div>
      <div className="flex flex-wrap justify-around mt-12">
        {category.map((category) => (
          <CardCategory
            key={category.id}
            name={category.name}
            imageSrc={category.image[0]}
          />
        ))}
      </div>
    </div>
  );
};
export default CategoryCategory;
