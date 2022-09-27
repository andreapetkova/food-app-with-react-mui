import { Box } from '@mui/system';
import { List, Typography } from '@mui/material';

import { styles } from '../styles';
import { MealItem } from './MealItem';
import { useEffect } from 'react';
import { getMeals } from '../../api/api';
import { useState } from 'react';

export const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMeals();
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchData().catch(err => {
      setIsLoading(false);
      setHttpError(err.message);
    });
    console.log('request is sent');
  }, []);

  const mealsList = meals.map(meal => (
    <MealItem
      name={meal.name}
      description={meal.description}
      price={meal.price}
      id={meal.id}
      key={meal.id}
    />
  ));

  if (isLoading) {
    return (
      <Box>
        <List sx={styles.mealsList}>
          <Typography variant='h5' component='h5'>
            Loading...
          </Typography>
        </List>
      </Box>
    );
  }

  if (httpError) {
    return (
      <Box>
        <List sx={styles.mealsList}>{httpError}</List>
      </Box>
    );
  }

  return (
    <Box>
      <List sx={styles.mealsList}>{mealsList}</List>
    </Box>
  );
};
