// src/Components/CategoryList/CategoryList.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CategoryList.css"; // Optional: Add styling for your category list

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5021/api/Category');
        
        setCategories(response.data);
        console.log(response.data);
      } catch (error) {
        setError('Error fetching categories');
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;
//   const [selectC, setSelectC] = useState([]);
//   const ShowSelectedCatagory = () =>{
//     const url = `http://localhost:5179/api/Employee/${selectC}`;
//   }

  return (
    <div className="category-list">
      <h2>Categories</h2>
      <ul >
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category.categoryID}>{category.name}</li>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </ul>
    </div>
  );
}

export default CategoryList;
