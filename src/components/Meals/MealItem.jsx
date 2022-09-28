import { ListItem, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { CartCtx } from '../../store/cart-context';
import { MealItemForm } from './MealItemForm';

export const MealItem = props => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const price = `$${Number(props.price).toFixed(2)}`;
  const cartContext = useContext(CartCtx);

  const addToCartHandler = () => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: props.amount,
      price: price,
    });
  };

  const onInputErrorHandler = () => {
    setAmountIsValid(false);
  };

  const onValidInput = () => {
    setAmountIsValid(true);
  };

  const errorMessage = (
    <Typography variant='subtitle2' component='p' sx={{ color: 'red', mr: '120px', mt: '15px' }}>
      Please enter a valid amount (more than 0)
    </Typography>
  );

  return (
    <ListItem disablePadding key={props.id} divider={true}>
      <ListItemText
        primary={
          <Typography component='h5' variant='h5'>
            {props.name}
          </Typography>
        }
        secondary={
          <>
            <Typography
              component='span'
              variant='subtitle1'
              sx={{ fontStyle: 'italic', display: 'block' }}
            >
              {props.description}
            </Typography>
            <Typography component='span' variant='h6' sx={{ color: '#FA7070' }}>
              {price}
            </Typography>
          </>
        }
      />
      {!amountIsValid && errorMessage}
      <ListItemSecondaryAction>
        <MealItemForm
          id={props.id}
          onAddToCart={addToCartHandler}
          onError={onInputErrorHandler}
          onValid={onValidInput}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};
