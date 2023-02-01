import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from 'pages/mainPage/MainPage';
import Layout from 'components/layout/Layout';
import AllAskList from 'pages/askList/AllAskList';
import EnfpAskList from 'pages/askList/EnfpAskList';

const RoutesPage = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='ask' element={<AllAskList />} />
        <Route path='ask/enfp' element={<EnfpAskList />} />
      </Route>
    </Routes>
  );
};

export default RoutesPage;
