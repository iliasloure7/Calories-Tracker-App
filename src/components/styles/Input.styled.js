import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 0.5rem 0;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid lightgray;
  transition: all 200ms ease;
  font-size: 1rem;
  width: 100%;

  ::placeholder {
    color: lightgray;
  }

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }
`;
