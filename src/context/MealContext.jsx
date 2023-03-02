import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '../hooks/useLocalStorage';

const MealContext = createContext(null);

export const MealContextProvider = ({ children }) => {
  const [meals, setMeals] = useLocalStorage('meals', []);
  const [editItem, setEditItem] = useState({
    id: '',
    name: '',
    calories: 0,
    edit: false,
  });

  const handleAdd = (newMeal) => {
    newMeal.id = uuidv4();
    setMeals([newMeal, ...meals]);
  };

  const handleDelete = (id) => {
    setMeals(meals.filter((meal) => meal.id !== id));
    resetEditItem();
  };

  const handleUpdate = (id, updMeal) => {
    const { name, calories } = updMeal;

    setMeals(
      meals.map((meal) => (meal.id !== id ? meal : { ...meal, name, calories }))
    );

    resetEditItem();
  };

  const clearAll = () => {
    setMeals([]);
    resetEditItem();
  };

  const resetEditItem = () =>
    setEditItem({
      id: '',
      name: '',
      calories: 0,
      edit: false,
    });

  return (
    <MealContext.Provider
      value={{
        meals,
        editItem,
        setEditItem,
        handleAdd,
        handleUpdate,
        handleDelete,
        clearAll,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export default MealContext;
