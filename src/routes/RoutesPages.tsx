import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';

const RoutesPage = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  );
};

export default RoutesPage;
