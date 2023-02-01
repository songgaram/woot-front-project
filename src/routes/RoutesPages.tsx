import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from 'pages/mainPage/MainPage';
import Layout from 'components/layout/Layout';

const RoutesPage = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesPage;
