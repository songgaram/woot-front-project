import { askTypes } from '../types';

const getEnfpAskList = (askData: askTypes[]) => {
  const MBTI = 'ENFP';
  const filtedList = askData.filter((ask) => ask.askMbti.includes(MBTI));
  return filtedList.slice(0, 3);
};

export default getEnfpAskList;
