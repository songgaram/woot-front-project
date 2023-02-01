import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 500px;
  border: 1px solid;
`;

export const MainContent = styled.main`
  width: 100%;
`;

export const MainHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary};

  p {
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.deepblue};
  }
`;
