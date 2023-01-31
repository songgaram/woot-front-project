import React from 'react';
import { MainContainer, MainContent, MainHeaderContainer } from './MainPage.style';
import Header from 'components/header/Header';
import AskCard from './AskCard';

const MainPage = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <MainContent>
          <MainHeaderContainer>
            ENFP에게 도착한 질문 <p>더 보기</p>
          </MainHeaderContainer>
          <AskCard />
          <MainHeaderContainer>
            모든 유형의 질문 <p>더 보기</p>
          </MainHeaderContainer>
        </MainContent>
      </MainContainer>
    </>
  );
};

export default MainPage;
