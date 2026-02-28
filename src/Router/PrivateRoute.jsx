import React from 'react';
import { Navigate, useNavigate } from 'react-router';

const PrivateRoute = ({children}) => {
const navigate = useNavigate()
    const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to='/'></Navigate> ;
  }

  return children;
};


export default PrivateRoute;