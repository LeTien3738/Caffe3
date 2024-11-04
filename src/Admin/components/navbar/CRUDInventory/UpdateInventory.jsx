import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateInventory.css';

const UpdateInventory = () => {
    const { id } = useParams(); // Lấy id từ URL
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        id: '',
        name: '',
        category: '',
        quantity: 0,
        price: '',
        supplier: '',
        date: ''
    });

    const [image, setImage] = useState(null);

    // Mô phỏng việc lấy dữ liệu sản phẩm từ API hoặc cơ sở dữ liệu dựa trên id
    useEffect(() => {
        const fetchedProduct = {
            id: id,
            name: 'Hạt cafe nguyên chất',
            category: 'Cafe',
            quantity: 10,
            price: '50000',
            supplier: 'Supplier A',
            date: '2024-10-22'
        };
        setProduct(fetchedProduct); // Cập nhật state với dữ liệu sản phẩm
    }, [id]);

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleClose = () => {
        navigate('/inventory'); // Điều hướng về trang Inventory
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Product Info:', product);
        // Xử lý gửi dữ liệu đến server hoặc cập nhật sản phẩm tại đây
    };

    return (
        <>
            <div className="modal-overlay"></div>
            <div className="create-inventory-modal">
                <button className="close-button" onClick={handleClose}>X</button>
                <h2>CẬP NHẬT SẢN PHẨM</h2>
                <div className="inventory-form">
                    <div className="image-section">
                        {image ? (
                            <img src={image} alt="Product" className="inventory-image" />
                        ) : (
                            <div className="image-placeholder"></div>
                        )}
                        <div className="file-upload-container">
                            <label htmlFor="image-upload" className="custom-file-upload">
                                Thêm ảnh
                            </label>
                            <input
                                id="image-upload"
                                type="file"
                                onChange={handleImageChange}
                                className="image-input"
                                style={{ display: 'none' }}
                            />
                        </div>
                    </div>
                    <div className="form-fields">
                        <div className="form-group">
                            <label>MÃ SP:</label>
                            <input 
                                type="text" 
                                name="id" 
                                value={product.id}
                                onChange={handleInputChange} 
                            />
                        </div>
                        <div className="form-group">
                            <label>TÊN SẢN PHẨM:</label>
                            <input 
                                type="text" 
                                name="name"
                                value={product.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>LOẠI SẢN PHẨM:</label>
                            <input 
                                type="text" 
                                name="category" 
                                value={product.category}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>SỐ LƯỢNG:</label>
                            <input 
                                type="number" 
                                name="quantity"
                                value={product.quantity}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>GIÁ BÁN:</label>
                            <input 
                                type="text" 
                                name="price"
                                value={product.price}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>NHÀ CUNG CẤP:</label>
                            <input 
                                type="text"
                                name="supplier"
                                value={product.supplier}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>NGÀY NHẬP:</label>
                            <input 
                                type="date"
                                name="date"
                                value={product.date}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <button className="add-button" onClick={handleSubmit}>Hoàn tất</button>
            </div>
        </>
    );
};

export default UpdateInventory;
