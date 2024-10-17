import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Employee.css';

const EmployeeRow = ({ employee, onEdit, onDelete }) => (
  <div className="table-row" key={employee.id}>
    <div className="row-item">{employee.id}</div>
    <div className="row-item">
      <img src={employee.image} alt={employee.name} style={{ width: '50px', height: '50px', borderRadius: '5px' }} />
    </div>
    <div className="row-item">{employee.name}</div>
    <div className="row-item">{employee.phone}</div>
    <div className="row-item">{employee.startDate}</div>
    <div className="row-item actions">
      <button className="edit-btn" onClick={() => onEdit(employee)}>Edit</button>
      <button className="delete-btn" onClick={() => onDelete(employee.id)}>Delete</button>
    </div>
  </div>
);

const EmployeeTable = () => {
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Nguyễn Văn A', phone: '0123456789', startDate: '01/01/2022', image: require('../../Image/Product/Cafeden.png') },
    { id: 2, name: 'Trần Thị B', phone: '0987654321', startDate: '01/02/2022', image: require('../../Image/Product/Cafeden.png') },
    { id: 3, name: 'Lê Văn C', phone: '0123456789', startDate: '01/03/2022', image: require('../../Image/Product/Cafeden.png') }
  ]);

  const handleEdit = (employee) => {
    navigate(`/update-employee/${employee.id}`); // Điều hướng tới trang UpdateEmployee với ID nhân viên
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const handleCreate = () => {
    navigate('/create-employee'); // Điều hướng tới trang CreateEmployee
  };

  return (
    <div className="employee-container">
      <button className="create-btn" onClick={handleCreate}>Create</button> {/* Thêm onClick để điều hướng */}
      <div className="employee-table">
        <div className="table-header">
          <div className="header-item">Mã nhân viên</div>
          <div className="header-item">Ảnh nhân viên</div>
          <div className="header-item">Họ tên</div>
          <div className="header-item">Số điện thoại</div>
          <div className="header-item">Ngày vào làm</div>
          <div className="header-item">Thao tác</div>
        </div>
        {employees.map(employee => (
          <EmployeeRow 
            employee={employee} 
            key={employee.id} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeTable;
