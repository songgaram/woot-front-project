import React from 'react';
import { askListTypes, askTypes } from 'types';
import getEnfpAskList from 'utils/getEnfpAskList';

const EnfpAskList = () => {
  const [enfpAsk, setEnfpAsk] = React.useState<askTypes[]>([]);

  React.useEffect(() => {
    const { askList }: askListTypes = JSON.parse(localStorage.getItem('askList') || '{}');
    const enfpAskList = getEnfpAskList(askList);
    setEnfpAsk(enfpAskList);
  }, []);

  return <div>ENFP유형</div>;
};

export default EnfpAskList;
