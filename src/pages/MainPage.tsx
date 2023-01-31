import React from 'react';
import { MainContainer, MainContent } from './MainPage.style';
import Header from 'components/header/Header';

const MainPage = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <MainContent>메인</MainContent>
      </MainContainer>
    </>
  );
};

export default MainPage;
