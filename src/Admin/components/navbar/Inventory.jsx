import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const ProductTable = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Hạt cafe nguyên chất', category: 'Cafe', quantity: 1, price: '50000', supplier: 'Supplier A', date: '2024-10-22' },
        { id: 2, name: 'Sữa tươi', category: 'Khác', quantity: 1, price: '20000', supplier: 'Supplier B', date: '2024-10-21' },
        { id: 3, name: 'Túi trà', category: 'Trà', quantity: 1, price: '10000', supplier: 'Supplier C', date: '2024-10-20' }
    ]);

    const navigate = useNavigate();

    // Hàm điều hướng đến trang cập nhật sản phẩm
    const handleEdit = (productId) => {
        navigate(`/update-inventory/${productId}`); // Điều hướng với id sản phẩm
    };

    // Hàm xử lý xóa sản phẩm
    const deleteProduct = (productId) => {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
        if (confirmDelete) {
            // Cập nhật state products bằng cách lọc bỏ sản phẩm có id tương ứng
            setProducts(products.filter(product => product.id !== productId));
        }
    };

    const handleCreate = () => {
        navigate('/create-inventory');
    };

    return (
        <div className="table-container">
            <button className="create-btn" onClick={handleCreate}>Create</button>
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
                        <div className="row-item">{product.quantity}</div>
                        <div className="row-item">
                            <button className="edit-btn" onClick={() => handleEdit(product.id)}>Edit</button>
                            <button className="delete-btn" onClick={() => deleteProduct(product.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductTable;
