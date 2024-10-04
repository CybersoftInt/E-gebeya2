import React, { useState, useEffect } from 'react';
import './ManageCategory.css'; // Import CSS for styling

import { toast, ToastContainer } from 'react-toastify';

function ManageCategory() {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [error, setError] = useState(null);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [creatingCategory, setCreatingCategory] = useState(false);

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

    const handleCategoryCreate = async (e) => {
        e.preventDefault();
        setCreatingCategory(true);
        try {
            const response = await fetch('http://localhost:5021/api/Category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: newCategoryName }),
            });
            if (!response.ok) throw new Error('Failed to create category');
            const newCategory = await response.json();
            setCategories([...categories, newCategory]); // Add new category to the list
            setNewCategoryName("");
            toast.success('Category created successfully!'); // Clear input field
        } catch (error) {
            setError(error.message);
        } finally {
            setCreatingCategory(false);
        }
    };

    return (
        <div className="manage-category">
            <h1>Manage Categories</h1>
            <div className="add-category">
                            <h2 className="section-title">Add New Category</h2>
                            <form onSubmit={handleCategoryCreate}>
                                <input
                                    type="text"
                                    placeholder="New category name"
                                    value={newCategoryName}
                                    onChange={(e) => setNewCategoryName(e.target.value)}
                                    required
                                />
                                <button type="submit" disabled={creatingCategory}>
                                    {creatingCategory ? 'Creating...' : 'Add Category'}
                                </button>
                            </form>
                        </div>
            {loadingCategories ? (
                <div className="loading-message">Loading categories...</div>
            ) : error ? (
                <div className="error-message">Error: {error}</div>
            ) : (
                <div className="container">
                    <div className="category-panel">
                        <h2 className="section-title">Categories</h2>
                        <ul className="category-list">
                            {categories.map(category => (
                                <li key={category.categoryID} className="category-item">
                                    <button className="category-button" onClick={() => handleCategorySelect(category.categoryID)}>
                                        {category.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        
                    </div>
                    {selectedCategoryId && (
                        <div className="product-panel">
                            <h2 className="section-title">Products in Selected Category</h2>
                            {loadingProducts ? (
                                <div className="loading-message">Loading products...</div>
                            ) : (
                                <ul className="product-list">
                                    {categoryProducts.map(product => (
                                        <li key={product.productID} className="product-item">
                                            <img src={product.imageURL} alt={product.name} className="product-image" />
                                            <div className="product-info">
                                                <div className="product-name">{product.name}</div>
                                                <div className="product-description">{product.description}</div>
                                                <div className="product-price">Price: ${product.price}</div>
                                                <div className="product-stock">Stock: {product.stockQuantity}</div>
                                            </div>
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
