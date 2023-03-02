import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  overflow: hidden;
  padding: 1rem;
`;

export const AppContainer = styled(Container)`
  margin: 40px auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const MealsContainer = styled(AppContainer)`
  padding: 0;
  box-shadow: none;
`;
