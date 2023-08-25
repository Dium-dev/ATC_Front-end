import React from "react";
import CardCategory from "../cards/categoryCard";
import { category } from "~/mockData/mockCategory";

const CategoryCategory = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {category.map((category) => (
        <CardCategory
          key={category.id}
          name={category.name}
          imageSrc={category.image[0]}
          description={category.description}
        />
      ))}
    </div>
  );
};

export default CategoryCategory;
