// App.js
import React, { useState } from 'react';
import Login from './Admin/components/Login';
import Home from './Admin/components/Home';
import HomeUser from './User/components/HomeUser'; // Import HomeUser

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(''); // State để lưu vai trò người dùng

  const handleLogin = (username, password) => {
    if (username === 'Trung' && password === '1') {
      setIsLoggedIn(true);
      setUserRole('admin'); // Đặt vai trò là admin
    } else if (username === 'Trung2' && password === '2') {
      setIsLoggedIn(true);
      setUserRole('user'); // Đặt vai trò là user
    } else {
      alert('Tài khoản hoặc mật khẩu không đúng!');
    }
  };

  return (
    <div>
      {isLoggedIn ? (userRole === 'admin' ? <Home /> : <HomeUser />) : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
