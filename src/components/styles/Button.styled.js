import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  background-color: ${({ theme, color }) => theme.colors[color]};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;
