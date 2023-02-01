import React from 'react';
import { askListTypes, askTypes } from 'types';
import AskContent from './AskContent';
import { MainContainer } from './AskList.style';

const AllAskList = () => {
  const [askData, setAskData] = React.useState<askTypes[]>([]);

  React.useEffect(() => {
    const { askList }: askListTypes = JSON.parse(localStorage.getItem('askData') || '{}');
    setAskData(askList.slice(0, 2));
  }, []);

  return (
    <MainContainer>
      {askData && askData.map((data) => <AskContent askData={data} key={data.askId} />)}
    </MainContainer>
  );
};

export default AllAskList;
