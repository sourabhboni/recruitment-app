import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AdminHeader.css';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const AdminHeader = ({ user, onLogout }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard' },
    { name: 'Job Management', path: '/admin/jobs' },
    { name: 'Candidate Pool', path: '/admin/candidates' }
  ];

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className="admin-navbar">
      <div className="admin-navbar-container">
        {/* Left: Logo */}
        <Link to="/admin/dashboard" className="admin-logo">
          <img src={logo} alt="Logo" className="navbar-logo-icon" />
          <span className="gradient-text">Admin Panel</span>
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <div className="admin-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Center: Nav Menu */}
        <div className={`admin-navbar-menu ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`admin-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          {user && (
            <button onClick={onLogout} className="admin-logout-button">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;
