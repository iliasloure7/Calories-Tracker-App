import styled from 'styled-components';

export const StyledAlert = styled.div`
  background-color: ${({ theme, color }) => theme.colors[color]};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: white;
`;
