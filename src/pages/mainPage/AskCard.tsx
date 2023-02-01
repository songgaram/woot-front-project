import React from 'react';
import MbtiTag from 'components/tag/MbtiTag';
import styled from 'styled-components';
import { askTypes } from 'types';

const AskCard = ({
  askData,
  onClick,
}: {
  askData: askTypes;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const { askTitle, comments, mbti } = askData;
  return (
    <AskCardContainer onClick={onClick}>
      <div>
        <MbtiTag mbti={mbti}>{mbti}</MbtiTag>
        <AskTitle>{askTitle}</AskTitle>
      </div>
      <Comment> {comments.length}</Comment>
    </AskCardContainer>
  );
};

export default AskCard;

export const AskCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3% 0;
  cursor: pointer;
`;

export const AskTitle = styled.span`
  font-weight: 600;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;
export const Comment = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;
