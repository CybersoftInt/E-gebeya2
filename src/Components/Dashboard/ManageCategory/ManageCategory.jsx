import React, { useState, useEffect } from 'react';
import './ManageCategory.css'; // Import CSS for styling

function ManageCategory() {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:5021/api/Category');
            if (!response.ok) throw new Error('Failed to fetch categories');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoadingCategories(false);
        }
    };

    const handleCategorySelect = async (categoryId) => {
        setSelectedCategoryId(categoryId);
        setLoadingProducts(true);
        try {
            const response = await fetch(`http://localhost:5021/api/Category/product/${categoryId}`);
            if (!response.ok) throw new Error('Failed to fetch products');
            const data = await response.json();
            setCategoryProducts(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoadingProducts(false);
        }
    };

    return (
        <div className="manage-category">
            <h1>Manage Categories</h1>
            {loadingCategories ? (
                <div>Loading categories...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <div>
                    <h2>Categories</h2>
                    <ul className="category-list">
                        {categories.map(category => (
                            <li key={category.categoryID}>
                                <button onClick={() => handleCategorySelect(category.categoryID)}>
                                    {category.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {selectedCategoryId && (
                        <div className="category-products">
                            <h2>Products in Selected Category</h2>
                            {loadingProducts ? (
                                <div>Loading products...</div>
                            ) : (
                                <ul className="product-list">
                                    {categoryProducts.map(product => (
                                        <li key={product.productID}>
                                            <img src={product.imageURL} alt={product.name} className="product-image" />
                                            <div>{product.name}</div>
                                            <div>{product.description}</div>
                                            <div>Price: ${product.price}</div>
                                            <div>Stock: {product.stockQuantity}</div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default ManageCategory;
