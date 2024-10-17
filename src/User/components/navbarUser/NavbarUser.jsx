// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarUser.css'; // Nhập CSS

function Navbar({ coffeeShopName }) {
  return (
    <nav>
      <h2>{coffeeShopName}</h2> {/* Hiển thị tên cửa hàng */}
      <ul>
        <li><Link to="/">Trang Chủ</Link></li>
        <li><Link to="/cart">Giỏ Hàng</Link></li> {/* Thêm Giỏ hàng */}
        <li><Link to="/userinfo">Thông Tin</Link></li> {/* Thêm Thông tin */}
      </ul>
    </nav>
  );
}

export default Navbar;
