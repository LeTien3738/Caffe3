import React, { useState } from 'react';
import './UpdateProduct.css';
import { useNavigate, useLocation } from 'react-router-dom'; // Sử dụng useLocation để nhận dữ liệu

const UpdateProduct = () => {
    const navigate = useNavigate(); 
    const location = useLocation(); // Lấy dữ liệu từ route
    const { product } = location.state || {}; // Nhận dữ liệu product từ state khi điều hướng

    const [image, setImage] = useState(product?.image || null); // Dữ liệu ảnh của sản phẩm
    const [id, setId] = useState(product?.id || '');
    const [name, setName] = useState(product?.name || '');
    const [type, setType] = useState(product?.type || '');
    const [price, setPrice] = useState(product?.price || '');

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleClose = () => {
        navigate('/product'); // Điều hướng về trang Product khi nhấn nút thoát
    };

    const handleUpdate = () => {
        // Logic cập nhật sản phẩm ở đây, ví dụ gọi API để lưu sản phẩm
        console.log('Updated product:', { id, name, type, price, image });
        navigate('/product'); // Quay lại trang Product sau khi cập nhật
    };

    return (
        <>
            <div className="modal-overlay"></div>
            <div className="create-product-modal">
                <button className="close-button" onClick={handleClose}>X</button>
                <h2>Edit Product</h2>
                <div className="product-form">
                    <div className="image-section">
                        {image ? (
                            <img src={image} alt="Product" className="product-image" />
                        ) : (
                            <div className="image-placeholder"></div>
                        )}
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
                            <input 
                                type="text" 
                                value={id} 
                                onChange={(e) => setId(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Tên sản phẩm:</label>
                            <input 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Loại sản phẩm:</label>
                            <input 
                                type="text" 
                                value={type} 
                                onChange={(e) => setType(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Giá bán:</label>
                            <input 
                                type="number" 
                                value={price} 
                                onChange={(e) => setPrice(e.target.value)} 
                            />
                        </div>
                    </div>
                </div>
                <button className="add-button" onClick={handleUpdate}>Cập nhật</button>
            </div>
        </>
    );
};

export default UpdateProduct;
