import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/admin/products">Manage Products</Link></li>
          <li><Link to="/admin/users">Manage Users</Link></li>
          <li><Link to="/admin/orders">Manage Orders</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;