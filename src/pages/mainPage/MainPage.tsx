import React from 'react';
import { MainContainer, MainContent, MainHeaderContainer } from './MainPage.style';
import Header from 'components/header/Header';
import AskCard from './AskCard';
import db from './data/db.json';
import { askListTypes, askTypes } from './types';

const MainPage = () => {
  const [askData, setAskData] = React.useState<askTypes[]>([]);

  React.useEffect(() => {
    localStorage.setItem('askList', JSON.stringify(db));
  }, []);

  React.useEffect(() => {
    const { askList }: askListTypes = JSON.parse(localStorage.getItem('askList') || '{}');
    setAskData(askList);
  }, [askData]);

  return (
    <>
      <MainContainer>
        <Header />
        <MainContent>
          <MainHeaderContainer>
            ENFP에게 도착한 질문 <p>더 보기</p>
          </MainHeaderContainer>

          <MainHeaderContainer>
            모든 유형의 질문 <p>더 보기</p>
          </MainHeaderContainer>
          {askData && askData.map((data) => <AskCard askData={data} key={data.askId} />)}
        </MainContent>
      </MainContainer>
    </>
  );
};

export default MainPage;
