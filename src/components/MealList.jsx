import { useContext } from 'react';
import MealContext from '../context/MealContext';
import MealItem from './MealItem';

function MealList() {
  const { meals } = useContext(MealContext);

  if (meals.length === 0) return <p>No meals yet.</p>;

  return (
    <ul style={{ border: '1px solid lightgray' }}>
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

export default MealList;
