import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  // Force solid navbar on specific pages
const noHeroRoutes = ['/careers/' ];
const forceScrolled = noHeroRoutes.some((path) => location.pathname.startsWith(path));
  const handleNavClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault(); // stop reloading the same route
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If it's a different path, let the Link do its job
  };
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false); // Close menu on route change
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav className={`main-navbar ${(scrolled || forceScrolled) ? 'scrolled' : ''}`}>
      <div className="main-navbar-container">
  <Link to="/" className="navbar-logo slide-in">
    <img src="/assets/logo.png" alt="Logo" className="navbar-logo-icon" />
    <span className="gradient-text">Transglobal Hiring LLC</span>
  </Link>

  <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
    {menuOpen ? <FaTimes /> : <FaBars />}
  </div>

  <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
    {navItems.map((item, index) => (
      <Link
        key={index}
        to={item.path}
        className={`main-link ${location.pathname === item.path ? 'active' : ''}`}
        onClick={(e) => handleNavClick(e, item.path)}
      >
        {item.name}
      </Link>
    ))}
  </div>
</div>
    </nav>
  );
};

export default Navbar;
