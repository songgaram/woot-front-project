export const getColorCode = (mbti: string): string => {
  if (mbti.includes('N') && mbti.includes('F')) {
    return '_NF_';
  } else if (mbti.includes('N') && mbti.includes('T')) {
    return '_NT_';
  } else if (mbti.includes('S') && mbti.includes('J')) {
    return '_S_J';
  } else return '_S_P';
};
