// src/Components/CategoryList/CategoryList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CategoryList.css";

function CategoryList({ onCategorySelect }) {
  const [categories, setCategories] = useState([null]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5021/api/Category');
        setCategories(response.data);
      } catch (error) {
        setError('Error fetching categories. Please try again later.');
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="category-list">
      <h2>Categories</h2>
      <ul>
        <li onClick={() => onCategorySelect(null)}>All Products</li>
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category.categoryID} onClick={() => onCategorySelect(category.categoryID)}>
              {category.name}
            </li>
          ))
        ) : (
          <li>No categories available.</li>
        )}
      </ul>
    </div>
  );
}

export default CategoryList;
