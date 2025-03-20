import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
//import { signIn } from "aws-amplify/auth";
//import awsExports from "../aws-exports";
import "./AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  

  return (
    <div className="admin-login-container">
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <h2>Welcome, {user?.username}</h2>
            <button onClick={() => { signOut(); navigate("/"); }}>Sign out</button>
            <button onClick={() => navigate("/admin-panel")}>Go to Admin Panel</button>
          </div>
        )}
      </Authenticator>
    </div>
  );
};

export default AdminLogin;
