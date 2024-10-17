// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Nhập CSS

function Navbar({ coffeeShopName }) {
  return (
    <nav>
      <h2>{coffeeShopName}</h2> {/* Hiển thị tên cửa hàng */}
      <ul>
        <li><Link to="/">Trang Chủ</Link></li>
        <li><Link to="/employee">Nhân viên</Link></li>
        <li><Link to="/product">Sản phẩm</Link></li>
        <li><Link to="/inventory">Kho</Link></li>
        <li><Link to="/revenue">Doanh thu</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
