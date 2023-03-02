import { FaPen } from 'react-icons/fa';
import { Flex } from './styles/layout/Flex.styled';
import { StyledLi } from './styles/Li.styled';
import MealContext from '../context/MealContext';
import { useContext } from 'react';

function MealItem({ meal }) {
  const { setEditItem } = useContext(MealContext);

  const handleClick = () => {
    setEditItem({
      id: meal.id,
      name: meal.name,
      calories: meal.calories,
      edit: true,
    });
  };

  return (
    <StyledLi>
      <Flex align='center' justify='space-between'>
        <p>
          <b>{meal.name}</b>: {meal.calories} calories
        </p>
        <FaPen fill='#3795BD' cursor='pointer' onClick={handleClick} />
      </Flex>
    </StyledLi>
  );
}

export default MealItem;
