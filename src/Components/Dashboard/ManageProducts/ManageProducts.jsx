import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import './ManageProducts.css';

function ManageProducts() {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: 0,
        categoryID: 0,
        color: '',
        size: '',
        stockQuantity: 0,
        imageURL: '',
        brand: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5021/api/ProductController2');
            if (!response.ok) throw new Error('Failed to fetch products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:5021/api/Category');
            if (!response.ok) throw new Error('Failed to fetch categories');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:5021/api/ProductController2/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setProducts(products.filter(product => product.productID !== id));
                toast.success('Product deleted successfully!');
            })
            .catch(error => {
                console.error('Error deleting product:', error);
                toast.error('Failed to delete product.');
            });
    };

    const handleSave = () => {
        fetch(`http://localhost:5021/api/ProductController2/${editingProduct.productID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editingProduct),
        })
            .then(response => response.json())
            .then(updatedProduct => {
                setProducts(products.map(product => 
                    product.productID === updatedProduct.productID ? updatedProduct : product
                ));
                setIsEditing(false);
                setEditingProduct(null);
                toast.success('Product updated successfully!');
            })
            .catch(error => {
                console.error('Error updating product:', error);
                toast.error('Failed to update product.');
            });
    };

    const handleAddProductChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddProduct = () => {
        fetch(`http://localhost:5021/api/ProductController2?categoryId=${newProduct.categoryID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
            .then(response => response.json())
            .then(addedProduct => {
                setProducts([...products, addedProduct]); // Add new product to the list
                setNewProduct({
                    name: '',
                    description: '',
                    price: 0,
                    categoryID: 0,
                    color: '',
                    size: '',
                    stockQuantity: 0,
                    imageURL: '',
                    brand: ''
                }); // Clear input fields
                setIsAdding(false);
                toast.success('Product added successfully!');
            })
            .catch(error => {
                console.error('Error adding product:', error);
                toast.error('Failed to add product.');
            });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditingProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    

    return (
        <div className="manage-products">
            <h1>Manage Products</h1>
            <button className="add-product-btn" onClick={() => setIsAdding(true)}>Add Product</button>

            {isAdding && (
                <div className="add-product-form">
                    <h2>Add New Product</h2>
                    <form onSubmit={(e) => { e.preventDefault(); handleAddProduct(); }}>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={newProduct.name}
                                onChange={handleAddProductChange}
                                required
                            />
                        </label>
                        <label>
                            Description:
                            <textarea
                                name="description"
                                value={newProduct.description}
                                onChange={handleAddProductChange}
                            />
                        </label>
                        <label>
                            Price:
                            <input
                                type="number"
                                name="price"
                                value={newProduct.price}
                                onChange={handleAddProductChange}
                                required
                            />
                        </label>
                        <label>
                            Category:
                            <select
                                name="categoryID"
                                value={newProduct.categoryID}
                                onChange={handleAddProductChange}
                                required
                            >
                                <option value="">Select a category</option>
                                {categories.map(category => (
                                    <option key={category.categoryID} value={category.categoryID}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Color:
                            <input
                                type="text"
                                name="color"
                                value={newProduct.color}
                                onChange={handleAddProductChange}
                            />
                        </label>
                        <label>
                            Size:
                            <input
                                type="text"
                                name="size"
                                value={newProduct.size}
                                onChange={handleAddProductChange}
                            />
                        </label>
                        <label>
                            Stock Quantity:
                            <input
                                type="number"
                                name="stockQuantity"
                                value={newProduct.stockQuantity}
                                onChange={handleAddProductChange}
                                required
                            />
                        </label>
                        <label>
                            Image URL:
                            <input
                                type="text"
                                name="imageURL"
                                value={newProduct.imageURL}
                                onChange={handleAddProductChange}
                            />
                        </label>
                        <label>
                            Brand:
                            <input
                                type="text"
                                name="brand"
                                value={newProduct.brand}
                                onChange={handleAddProductChange}
                            />
                        </label>
                        <button type="submit">Add Product</button>
                        <button type="button" onClick={() => setIsAdding(false)}>Cancel</button>
                    </form>
                </div>
            )}

            <table className="products-table">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Stock</th>
                        <th>Image</th>
                        <th>Brand</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.productID}>
                            <td>{product.productID}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>{product.categoryID}</td>
                            <td>{product.color}</td>
                            <td>{product.size}</td>
                            <td>{product.stockQuantity}</td>
                            <td><img src={product.imageURL} alt={product.name} className="product-image" /></td>
                            <td>{product.brand}</td>
                            <td>
                                <button className="edit-btn" onClick={() => handleEdit(product)}>Edit</button>
                                <button className="delete-btn" onClick={() => handleDelete(product.productID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isEditing && (
                <div className="edit-form">
                    <h2>Edit Product</h2>
                    {Object.keys(editingProduct).map(key => (
                        key !== 'productID' && (
                            <label key={key}>
                                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
                                <input
                                    type={typeof editingProduct[key] === 'number' ? 'number' : 'text'}
                                    name={key}
                                    value={editingProduct[key]}
                                    onChange={handleChange}
                                />
                            </label>
                        )
                    ))}
                    <div className="form-buttons">
                        <button className="save-btn" onClick={handleSave}>Save</button>
                        <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </div>
            )}

            <ToastContainer />
        </div>
    );
}

export default ManageProducts;
