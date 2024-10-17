import React, { useState } from 'react';
import './CreateProduct.css';
import { useNavigate } from 'react-router-dom'; // Thêm useNavigate để điều hướng

const ProductForm = () => {
    const [image, setImage] = useState(null);
    const navigate = useNavigate(); // Khởi tạo điều hướng

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleClose = () => {
        navigate('/product'); // Điều hướng về trang Product khi nhấn nút thoát
    };

    return (
        <>
            <div className="modal-overlay"></div>
            <div className="create-product-modal">
                <button className="close-button" onClick={handleClose}>X</button>
                <h2>Create Product</h2>
                <div className="product-form">
                    <div className="image-section">
                        {image ? (
                            <img src={image} alt="Product" className="product-image" />
                        ) : (
                            <div className="image-placeholder"></div>
                        )}
                        {/* Khung cho nút chọn tệp */}
                        <div className="file-upload-container">
                            <label htmlFor="image-upload" className="custom-file-upload">
                                Chọn tệp
                            </label>
                            <input 
                                id="image-upload"
                                type="file" 
                                onChange={handleImageChange} 
                                className="image-input" 
                                style={{ display: 'none' }} // Ẩn input file
                            />
                        </div>
                    </div>
                    <div className="form-fields">
                        <div className="form-group">
                            <label>Mã sản phẩm:</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Tên sản phẩm:</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Loại sản phẩm:</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Giá bán:</label>
                            <input type="number" />
                        </div>
                    </div>
                </div>
                <button className="add-button">Thêm</button>
            </div>
        </>
    );
};

export default ProductForm;
