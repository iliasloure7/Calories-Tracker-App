import InputGroup from './InputGroup';
import Edit from './Edit';
import MealContext from '../context/MealContext';
import { Flex } from './styles/layout/Flex.styled';
import { StyledButton } from './styles/Button.styled';
import { useState, useContext, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import AlertContext from '../context/AlertContext';

function Form() {
  const { setAlert } = useContext(AlertContext);
  const { handleAdd, editItem, handleUpdate, handleDelete } =
    useContext(MealContext);
  const [mealText, setMealText] = useState('');
  const [caloriesText, setCaloriesText] = useState('');

  // Checks a meal is in edit state
  useEffect(() => {
    if (!editItem.edit) {
      clearInputFields();
    } else {
      setMealText(editItem.name);
      setCaloriesText(editItem.calories.toString());
    }
  }, [editItem]);

  // Clears all the fields
  const clearInputFields = () => {
    setMealText('');
    setCaloriesText('');
  };

  // Shows an alert message if one of fields or all fields is empty
  const areEmptyFields = () => {
    console.log(typeof caloriesText);
    if (!(mealText.trim().length === 0) && !(caloriesText.trim().length === 0))
      return false;

    setAlert({ message: 'Please fill all the fields!', color: 'danger' });
    setTimeout(() => setAlert({}), 3000);
    return true;
  };

  // Shows an alert message if the calories field contains letters
  const isNumericValue = () => {
    if (caloriesText.match(/^[0-9]+$/)) return true;

    setAlert({
      message: 'Please use only numeric values in calories field!',
      color: 'danger',
    });
    setTimeout(() => setAlert({}), 3000);
    setCaloriesText('');
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Delete case
    if (e.target.innerText === 'DELETE MEAL') {
      clearInputFields();
      handleDelete(editItem.id);
      setAlert({ message: 'A meal was deleted!', color: 'success' });
      setTimeout(() => setAlert({}), 3000);
      return;
    }

    if (areEmptyFields()) return;

    if (!isNumericValue()) return;

    // Update case
    if (editItem.edit) {
      clearInputFields();
      handleUpdate(editItem.id, { name: mealText, calories: +caloriesText });
      setAlert({ message: 'A meal was updated!', color: 'success' });
      setTimeout(() => setAlert({}), 3000);
      return;
    }

    // Add case
    clearInputFields();
    handleAdd({ name: mealText, calories: +caloriesText });
    setAlert({ message: 'A meal was added!', color: 'success' });
    setTimeout(() => setAlert({}), 3000);
  };

  return (
    <form style={{ marginTop: '1rem' }} onSubmit={handleSubmit}>
      <Flex align='center' gap='1rem' style={{ marginBottom: '1rem' }}>
        <InputGroup
          labelText='Meal'
          placeholder='Add Item'
          text={mealText}
          setText={setMealText}
        />
        <InputGroup
          labelText='Calories'
          placeholder='Add Calories'
          text={caloriesText}
          setText={setCaloriesText}
        />
      </Flex>
      {!editItem.edit ? (
        <StyledButton color='primary'>
          <Flex gap='0.5rem'>
            <FaPlus color='#fff' />
            ADD MEAL
          </Flex>
        </StyledButton>
      ) : (
        <Edit handleSubmit={handleSubmit} />
      )}
    </form>
  );
}

export default Form;
