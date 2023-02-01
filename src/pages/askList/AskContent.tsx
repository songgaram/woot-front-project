import React from 'react';
import styled from 'styled-components';
import MbtiTag from 'components/tag/MbtiTag';
import { askTypes } from 'types';

const AskContent = ({ askData }: { askData: askTypes }) => {
  const { askContent, askMbti, authorMbti, Like } = askData;
  const CONTENT = `${askMbti}에게 질문`;

  return (
    <AskContentContainer>
      <AskHeader>
        <MbtiTag mbti={askMbti} content={CONTENT} />
      </AskHeader>

      <AskDetail>{askContent}</AskDetail>
      <AuthorContainer>
        <MbtiTag mbti={askMbti} content={askMbti} />
        <Author>익명</Author>
      </AuthorContainer>
    </AskContentContainer>
  );
};

export default AskContent;

const AskContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const AskHeader = styled.div``;

const AskDetail = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin: 5% 0;
`;
const AuthorContainer = styled.div``;
const Author = styled.span`
  margin-left: 5px;
`;
const Footer = styled.div``;
