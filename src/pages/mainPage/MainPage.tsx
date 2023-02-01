import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContainer, MainContent, MainHeaderContainer } from './MainPage.style';
import Header from 'components/header/Header';
import AskCard from './AskCard';
import db from '../../data/db.json';
import { askListTypes, askTypes } from 'types';
import getEnfpAskList from 'utils/getEnfpAskList';

const MainPage = () => {
  const navigate = useNavigate();
  const [askData, setAskData] = React.useState<askTypes[]>([]);
  const [enfpAsk, setEnfpAsk] = React.useState<askTypes[]>([]);

  React.useEffect(() => {
    localStorage.setItem('askList', JSON.stringify(db));
  }, []);

  React.useEffect(() => {
    const { askList }: askListTypes = JSON.parse(localStorage.getItem('askList') || '{}');
    const enfpAskList = getEnfpAskList(askList);
    setEnfpAsk(enfpAskList);
    setAskData(askList.slice(0, 2));
  }, []);

  return (
    <>
      <MainContainer>
        <Header />
        <MainContent>
          <MainHeaderContainer>
            ENFP에게 도착한 질문 <p onClick={() => navigate('/ask/enfp')}>더 보기</p>
          </MainHeaderContainer>
          {enfpAsk &&
            enfpAsk.map((data) => (
              <AskCard onClick={() => navigate('/ask/enfp')} askData={data} key={data.askId} />
            ))}
          <MainHeaderContainer>
            모든 유형의 질문 <p onClick={() => navigate('/ask')}>더 보기</p>
          </MainHeaderContainer>
          {askData &&
            askData.map((data) => (
              <AskCard onClick={() => navigate('/ask')} askData={data} key={data.askId} />
            ))}
        </MainContent>
      </MainContainer>
    </>
  );
};

export default MainPage;
