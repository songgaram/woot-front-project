import React from 'react';
import Button from 'components/button/Button';
import styled from 'styled-components';

const AskCard = () => {
  return (
    <AskCardContainer>
      <div>
        <Button>ENFP</Button>
        <AskTitle>이거 무슨 심리 일까요?</AskTitle>
      </div>
      <Comment> 15</Comment>
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
