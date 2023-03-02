import MealContext from '../context/MealContext';
import { useContext } from 'react';

function TotalCalories() {
  const { meals } = useContext(MealContext);
  let totalCalories = 0;

  meals.forEach((meal) => (totalCalories += meal.calories));

  return (
    <h2 style={{ marginBottom: '0.7rem' }}>
      Total Calories: {meals.length === 0 ? 0 : totalCalories}
    </h2>
  );
}

export default TotalCalories;
