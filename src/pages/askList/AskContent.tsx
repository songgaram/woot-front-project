import React from 'react';
import styled from 'styled-components';
import MbtiTag from 'components/tag/MbtiTag';
import { askTypes } from 'types';
import chatOutline from '../../assets/images/chatOutline.png';
import heartOutline from '../../assets/images/heartOutline.png';
import { ReactComponent as ChatIcon } from 'assets/svgs/chatbubbleOutline.svg';
import { ReactComponent as HeartIcon } from 'assets/svgs/heartOutline.svg';

const AskContent = ({ askData }: { askData: askTypes }) => {
  const { askContent, askMbti, authorMbti, like, comments } = askData;
  const CONTENT = `${askMbti}에게 질문`;
  console.log(askData);
  return (
    <AskContentContainer>
      <AskHeader>
        <MbtiTag mbti={askMbti} content={CONTENT} />
      </AskHeader>

      <AskDetail>{askContent}</AskDetail>
      <AuthorContainer>
        <MbtiTag mbti={authorMbti} content={authorMbti} />
        <Author>익명</Author>
      </AuthorContainer>
      <Footer>
        <HeartIcon /> {like}
        <ChatIcon /> {comments.length}
      </Footer>
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

const Img = styled.img``;
