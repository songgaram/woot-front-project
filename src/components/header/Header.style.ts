import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3% 0 7% 0;
`;

export const HeaderContent = styled.div``;

export const HeaderTitle = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
