import { Flex } from './styles/layout/Flex.styled';
import { StyledButton } from './styles/Button.styled';
import MealContext from '../context/MealContext';
import { useContext } from 'react';
import { FaEdit, FaTimes, FaArrowCircleLeft } from 'react-icons/fa';

function Edit({ handleSubmit }) {
  const { setEditItem, editItem } = useContext(MealContext);

  return (
    <Flex align='center' justify='space-between'>
      <Flex gap='0.4rem'>
        <StyledButton color='warning' onClick={handleSubmit}>
          <Flex gap='0.5rem'>
            <FaEdit color='#fff' />
            UPDATE MEAL
          </Flex>
        </StyledButton>
        <StyledButton color='danger' onClick={(e) => handleSubmit(e)}>
          <Flex gap='0.5rem'>
            <FaTimes color='#fff' />
            DELETE MEAL
          </Flex>
        </StyledButton>
      </Flex>
      <StyledButton
        color='secondary'
        onClick={() => setEditItem({ ...editItem, edit: false })}
      >
        <Flex gap='0.5rem'>
          <FaArrowCircleLeft color='#fff' />
          BACK
        </Flex>
      </StyledButton>
    </Flex>
  );
}

export default Edit;
