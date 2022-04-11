import React from 'react';
import { Route, Navigate } from 'react-router-dom';



function PrivateRoutes({ children }) {
    const auth = true;
    return auth ? children : <Navigate to="/login" />;
  }
  export default PrivateRoutes;