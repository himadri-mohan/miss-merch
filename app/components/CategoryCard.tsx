import React from "react";

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  label: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  imageUrl,
  label,
}) => {
  return (
    <div className="relative">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-purple-700 bg-opacity-50 flex justify-center items-center rounded-lg">
        <span className="text-white text-xl">{label}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
