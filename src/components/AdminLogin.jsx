import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';
import logo from '../assets/logo.png';

const AdminLogin = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const targetEl = isMobile ? wrapperRef.current : vantaRef.current;
  
    if (!vantaEffect && targetEl) {
      setVantaEffect(
        NET({
          el: targetEl,
          THREE,
          color: 0x60a5fa,
          backgroundColor: 0x0f172a,
          points: 12.0,
          maxDistance: 18.0,
          spacing: 16.0,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }
  
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, isMobile]);

  useEffect(() => {
    const checkUser = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        navigate('/admin/dashboard');
      } catch {}
    };
    checkUser();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await Auth.signIn(username, password);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="admin-login-wrapper" ref={wrapperRef}>
      <img src={logo} alt="Logo" className="admin-login-logo" />

      {/* LEFT PANEL with Vanta Background */}
      <div className="admin-login-left" ref={vantaRef}>
        <div className="welcome-text">
          <h1>Hello, Admin 👋</h1>
          <p>Secure access only. You know the drill.</p>
        </div>
        <div className="admin-login-footer">
          © {new Date().getFullYear()} Transglobal Hiring LLC
        </div>
      </div>

      {/* RIGHT SIDE: LOGIN FORM */}
      <div className="admin-login-right">
        <form onSubmit={handleLogin} className="admin-login-form">
          <h2>Sign In</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="admin-login-error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
