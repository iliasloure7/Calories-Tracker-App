import { MealContextProvider } from './context/MealContext';
import Header from './components/Header';
import Form from './components/Form';
import MealList from './components/MealList';
import TotalCalories from './components/TotalCalories';
import Alert from './components/Alert';
import GlobalStyle from './components/styles/Global';
import Theme from './components/styles/Theme';
import { ThemeProvider } from 'styled-components';
import {
  AppContainer,
  MealsContainer,
  Container,
} from './components/styles/Container.styled';
import { AlertContextProvider } from './context/AlertContext';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AlertContextProvider>
        <MealContextProvider>
          <GlobalStyle />
          <Header />
          <Container>
            <Alert />
          </Container>
          <AppContainer>
            <h2>Add Meal / Food Item</h2>
            <Form />
          </AppContainer>
          <MealsContainer>
            <TotalCalories />
            <MealList />
          </MealsContainer>
        </MealContextProvider>
      </AlertContextProvider>
    </ThemeProvider>
  );
}

export default App;
