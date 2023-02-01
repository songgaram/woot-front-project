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

  return <div>모든유형</div>;
};

export default EnfpAskList;
