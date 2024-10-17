import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import CafeDenImage from '../../Image/Product/Cafeden.png';

const ProductRow = ({ product, navigate }) => (
  <div className="table-row" key={product.id}>
    <div className="row-item">{product.id}</div>
    <div className="row-item">
      <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px', borderRadius: '5px' }} />
    </div>
    <div className="row-item">{product.name}</div>
    <div className="row-item">{product.type}</div>
    <div className="row-item">{product.price}</div>
    <div className="row-item actions">
      <button className="edit-btn" onClick={() => navigate(`/update-product/${product.id}`, { state: { product } })}>
        Edit
      </button>
      <button className="delete-btn">Delete</button>
    </div>
  </div>
);

const Product = () => {
  const [products] = useState([
    { id: 1, name: 'Cà phê đen đá', type: 'Cà phê', price: '23.000', image: CafeDenImage },
    { id: 2, name: 'Trà sữa trân châu', type: 'Trà sữa', price: '30.000', image: CafeDenImage },
    { id: 3, name: 'Nước ép trái cây', type: 'Nước ép', price: '25.000', image: CafeDenImage }
  ]);

  const navigate = useNavigate();

  return (
    <div className="product-container">
      <button className="create-btn" onClick={() => navigate('/create-product')}>
        Create
      </button>

      <div className="product-table">
        <div className="table-header">
          <div className="header-item">Mã sản phẩm</div>
          <div className="header-item">Ảnh sản phẩm</div>
          <div className="header-item">Tên sản phẩm</div>
          <div className="header-item">Loại sản phẩm</div>
          <div className="header-item">Giá bán</div>
          <div className="header-item">Thao tác</div>
        </div>
        
        {products.map(product => (
          <ProductRow product={product} key={product.id} navigate={navigate} />
        ))}
      </div>
    </div>
  );
};

export default Product;
