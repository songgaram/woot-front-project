import React from 'react';
import Button from 'components/button/Button';
import { HeaderContainer, HeaderContent, HeaderTitle, HeaderSubtitle } from './Header.style';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderSubtitle>에스크</HeaderSubtitle>
        <HeaderTitle>성격 유형에게 물어보세요</HeaderTitle>
      </HeaderContent>

      <Button>질문하기</Button>
    </HeaderContainer>
  );
};

export default Header;
