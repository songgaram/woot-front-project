import React from 'react';
import styled from 'styled-components';
import { getColorCode } from './utils';

const MbtiTag = ({ mbti, children }: { mbti: string; children: React.ReactNode }) => {
  const colorCode = getColorCode(mbti);
  return <Button colorCode={colorCode}>{mbti}</Button>;
};

const Button = styled.button<{ colorCode: string }>`
  font-size: ${({ theme }) => theme.fontSizes.small};
  display: inline-flex;
  align-items: center;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  background-color: ${(props) => props.theme.colors[props.colorCode]};
  color: ${({ theme }) => theme.colors.white};
`;

export default MbtiTag;
