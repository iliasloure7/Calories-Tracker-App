import { StyledHeader } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { StyledButton } from './styles/Button.styled';
import { Flex } from './styles/layout/Flex.styled';
import MealContext from '../context/MealContext';
import { useContext } from 'react';

function Header() {
  const { clearAll } = useContext(MealContext);

  return (
    <StyledHeader>
      <Container>
        <Flex justify='space-between' align='center' textAlign='center'>
          <h1>Tracalorie</h1>
          <StyledButton color='primaryLighter' onClick={clearAll}>
            CLEAR ALL
          </StyledButton>
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
