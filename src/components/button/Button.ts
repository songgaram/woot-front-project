import styled from 'styled-components';

const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.small};
  display: inline-flex;
  align-items: center;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  padding: 0 0.9rem;
  background-color: ${({ theme }) => theme.colors.deepblue};
  color: ${({ theme }) => theme.colors.white};
`;

export default Button;
