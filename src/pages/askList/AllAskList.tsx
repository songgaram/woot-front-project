import React from 'react';
import { askListTypes, askTypes } from 'types';

const AllAskList = () => {
  const [askData, setAskData] = React.useState<askTypes[]>([]);

  React.useEffect(() => {
    const { askList }: askListTypes = JSON.parse(localStorage.getItem('askList') || '{}');
    setAskData(askList.slice(0, 2));
  }, []);

  return <div>모든유형</div>;
};

export default AllAskList;
