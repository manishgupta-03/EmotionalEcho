import React from "react";
import "./CategoryCard.css";

interface CategoryCardProps {
  category: string;
  items: string[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, items }) => {
  return (
    <div className="category-card">
      <h3>{category}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryCard;
