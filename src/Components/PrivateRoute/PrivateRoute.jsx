import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import "./PrivateRoute.css";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    
    if (loading) {
        return (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        );
    }
    if (user) {
        return children;
    }

    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;