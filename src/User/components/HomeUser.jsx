// User/components/HomeUser.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbarUser/NavbarUser'; // Giả sử bạn đã tạo Navbar cho HomeUser
import Cart from './navbarUser/Cart'; // Giả sử bạn đã tạo component Cart
import UserInfo from './navbarUser/UserInfo'; // Giả sử bạn đã tạo component UserInfo
import './HomeUser.css';

function HomeUser() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Trang Chủ Người Dùng</h1>} />
          <Route path="/cart" element={<Cart />} /> {/* Giỏ hàng */}
          <Route path="/userinfo" element={<UserInfo />} /> {/* Thông tin */}
        </Routes>
      </div>
    </Router>
  );
}

export default HomeUser;
