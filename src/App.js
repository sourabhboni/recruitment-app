import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminHeader from './components/AdminHeader';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPanel from './components/AdminPanel';
import NotFound from "./components/NotFound";
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const Services = lazy(() => import('./components/Services'));
const Careers = lazy(() => import('./components/Careers'));
const Contact = lazy(() => import('./components/Contact'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const JobDetails = lazy(() => import('./components/JobDetails'));
const Employers = lazy(() => import('./components/Employers'));
const AdminLogin = lazy(() => import('./components/AdminLogin'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const JobManagement = lazy(() => import('./components/JobManagement'));
const CandidatePool = lazy(() => import('./components/CandidatePool'));


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);
      } catch (err) {
        setUser(null);
      }
    };
    checkAuth();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AppContent user={user} setUser={setUser} />
    </Router>
  );
};

const AppContent = ({ user, setUser }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const isAdminPage = pathname.startsWith('/admin');
  const isAdminLogin = location.pathname === "/admin/login";

  // Refresh user state on route change
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        if (!user) setUser(currentUser);
      } catch {
        setUser(null);
      }
    };
    verifyUser();
  }, [pathname, user, setUser]);

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      setUser(null);
      navigate('/admin/login'); // redirect to login after logout
    } catch (err) {
      console.error('Logout error', err);
    }
  };

  return (
    <>
      {/* Header */}
      { !isAdminLogin && (isAdminPage ?
        <AdminHeader user={user} onLogout={handleLogout} /> : <Navbar />)
      }

      {/* Main Content */}
      <div className="app-main-wrapper">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:jobId" element={<JobDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/employers" element={<Employers />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            {/* ✅ Protect all other /admin/* routes */}
            <Route element={<ProtectedRoute user={user} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/jobs" element={<JobManagement />} />
            <Route path="/admin/candidates" element={<CandidatePool />} />
            <Route path="/admin/*" element={<NotFound />} />
            </Route>


            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      {/* Footer only on public pages */}
      {!isAdminPage && <Footer />}
    </>
  );
};

export default App;
