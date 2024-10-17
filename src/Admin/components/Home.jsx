import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Employee from './navbar/Employee';
import Product from './navbar/Product';
import Inventory from './navbar/Inventory';
import Revenue from './navbar/Revenue';
import CreateProduct from './navbar/CRUDproduct/CreateProduct';
import UpdateProduct from './navbar/CRUDproduct/UpdateProduct';
import CreateEmployee from './navbar/CRUDemployee/CreateEmployee';
import UpdateEmployee from './navbar/CRUDemployee/UpdateEmployee';

function Home() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Trang Chủ</h1>} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/product" element={<Product />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/create-product" element={<CreateProduct />} /> {/* Route cho Tạo sản phẩm */}
          <Route path="/update-product/:id" element={<UpdateProduct />} /> {/* Route cho Cập nhật sản phẩm */}
          <Route path="/create-employee" element={<CreateEmployee />} /> {/* Route cho Tạo nhân viên */}
          <Route path="/update-employee/:id" element={<UpdateEmployee />} /> {/* Route cho Cập nhật nhân viên */}
        </Routes>
      </div>
    </Router>
  );
}

export default Home; 