import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  text-align: ${({ textAlign }) => textAlign || 'start'};
  flex-direction: ${({ direction }) => direction || 'row'};
  gap: ${({ gap }) => gap || '0rem'};
`;
