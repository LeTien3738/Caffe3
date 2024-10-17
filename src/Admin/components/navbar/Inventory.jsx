import React, { useState } from 'react';
import './Inventory.css';

const ProductTable = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Hạt cafe nguyên chất', category: 'Cafe', quantity: 1 },
        { id: 2, name: 'Sữa tươi', category: 'Khác', quantity: 1 },
        { id: 3, name: 'Túi trà', category: 'Trà', quantity: 1 }
    ]);

    // Hàm xử lý tăng số lượng
    const increaseQuantity = (productId) => {
        setProducts(products.map(product => 
            product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        ));
    };

    // Hàm xử lý giảm số lượng
    const decreaseQuantity = (productId) => {
        setProducts(products.map(product => 
            product.id === productId && product.quantity > 0 
            ? { ...product, quantity: product.quantity - 1 } 
            : product
        ));
    };

    // Hàm xử lý xóa sản phẩm
    const deleteProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    return (
        <div className="table-container">
            <button className="create-btn">Create</button>
            <div className="table">
                <div className="table-header">
                    <div className="header-item">Mã sản phẩm</div>
                    <div className="header-item">Tên sản phẩm</div>
                    <div className="header-item">Loại sản phẩm</div>
                    <div className="header-item">Số lượng</div>
                    <div className="header-item">Thao tác</div>
                </div>
                {products.map((product) => (
                    <div className="table-row" key={product.id}>
                        <div className="row-item">{product.id}</div>
                        <div className="row-item">{product.name}</div>
                        <div className="row-item">{product.category}</div>
                        <div className="row-item">
                            <button className="quantity-btn" onClick={() => decreaseQuantity(product.id)}>-</button>
                            <span className="quantity-value">{product.quantity}</span>
                            <button className="quantity-btn" onClick={() => increaseQuantity(product.id)}>+</button>
                        </div>
                        <div className="row-item">
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn" onClick={() => deleteProduct(product.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductTable;
