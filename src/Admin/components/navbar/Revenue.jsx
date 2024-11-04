import React, { useState } from 'react';
import './Revenue.css';

function RevenueStatistics() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [period, setPeriod] = useState('day');

  // Example data
  const data = [
    {
      date: '30-05-2023',
      totalOrders: 3,
      deliveredOrders: 1,
      canceledOrders: 2,
      totalRevenue: '660,000 ₫',
      revenueDelivered: '35,000 ₫',
      revenueCanceled: '625,000 ₫'
    },
    {
      date: '31-05-2023',
      totalOrders: 4,
      deliveredOrders: 4,
      canceledOrders: 0,
      totalRevenue: '409,184 ₫',
      revenueDelivered: '409,184 ₫',
      revenueCanceled: '0 ₫'
    }
  ];

  const handleDateChange = (e) => {
    if (e.target.name === 'startDate') {
      setStartDate(e.target.value);
    } else {
      setEndDate(e.target.value);
    }
  };

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };

  return (
    <div className="revenue-statistics">
      <h2>Thống kê doanh thu</h2>
      
      <div className="filter-container">
        <label>Từ:</label>
        <input type="date" name="startDate" value={startDate} onChange={handleDateChange} />
        <label>Đến:</label>
        <input type="date" name="endDate" value={endDate} onChange={handleDateChange} />
        <label>Thống kê theo:</label>
        <select value={period} onChange={handlePeriodChange}>
          <option value="day">Ngày</option>
          <option value="week">Tuần</option>
          <option value="month">Tháng</option>
        </select>
        <button className="filter-button">Thống kê</button>
      </div>

      <table className="statistics-table">
        <thead>
          <tr>
            <th>Thời gian</th>
            <th>Tổng đơn hàng</th>
            <th>Số đơn hàng đã hủy</th>
            <th>Tổng thành tiền</th>
            <th>Tổng thành tiền đơn hàng đã hủy</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.totalOrders}</td>
              <td>{row.canceledOrders}</td>
              <td>{row.totalRevenue}</td>
              <td>{row.revenueCanceled}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RevenueStatistics;
