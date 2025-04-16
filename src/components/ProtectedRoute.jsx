import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ user }) => {
  return user ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
