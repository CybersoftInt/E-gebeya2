// src/Components/ProductManager/ProductManager.jsx
import React, { useState } from "react";
import CategoryList from "../CategoryList/CategoryList";
import Card from "../Card/Card";
import "./ProductManager.css"; // Optional: Add styling for your product manager

function ProductManager() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="product-manager">
      <CategoryList onCategorySelect={handleCategorySelect} />
      <Card categoryId={selectedCategoryId} />
    </div>
  );
}

export default ProductManager;
