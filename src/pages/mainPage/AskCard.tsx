import React from 'react';
import Button from 'components/button/Button';
import styled from 'styled-components';
import { askTypes } from './types';

const AskCard = ({ askData }: { askData: askTypes }) => {
  const { askTitle, comments } = askData;
  return (
    <AskCardContainer>
      <div>
        <Button>ENFP</Button>
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
  padding: 0.5rem 1rem;
`;

export const AskTitle = styled.span``;
export const Comment = styled.div``;
