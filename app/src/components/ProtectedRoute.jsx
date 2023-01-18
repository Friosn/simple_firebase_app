import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import NavBar from './NavBar';

const ProtectedRoute = () => {
  const { user } = 'accessible!';

  if (!user) return <Navigate to="/" />;

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
