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
import CreateInventory from './navbar/CRUDInventory/CreateInventory';
import UpdateInventory from './navbar/CRUDInventory/UpdateInventory';

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
          
          {/* CRUD cho sản phẩm */}
          <Route path="/create-product" element={<CreateProduct />} /> {/* Tạo sản phẩm */}
          <Route path="/update-product/:id" element={<UpdateProduct />} /> {/* Cập nhật sản phẩm */}
          
          {/* CRUD cho nhân viên */}
          <Route path="/create-employee" element={<CreateEmployee />} /> {/* Tạo nhân viên */}
          <Route path="/update-employee/:id" element={<UpdateEmployee />} /> {/* Cập nhật nhân viên */}
          
          {/* CRUD cho kho */}
          <Route path="/create-inventory" element={<CreateInventory />} /> {/* Tạo kho, không cần id */}
          <Route path="/update-inventory/:id" element={<UpdateInventory />} /> {/* Cập nhật kho */}
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
