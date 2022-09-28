import { Box, Button, FormControl, Input, InputLabel, Typography } from '@mui/material';
import { useRef, Fragment } from 'react';

export const MealItemForm = props => {
  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    props.onValid();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      props.onError();
      return;
    }

    props.onAddToCart(amountInputRef);
  };

  return (
    <Fragment>
      <Box component='form' onSubmit={submitHandler}>
        <FormControl sx={{ flexDirection: 'row' }}>
          <InputLabel htmlFor={props.id} sx={{ position: 'relative' }}>
            Amount
          </InputLabel>
          <Input
            inputRef={amountInputRef}
            id={props.id}
            aria-describedby='amount'
            inputProps={{ min: '1', defaultValue: '1' }}
            sx={{ width: '30px' }}
          />
          <Button type='submit' size='small' variant='contained' color='yellow' sx={{ ml: '30px' }}>
            + Add
          </Button>
        </FormControl>
      </Box>
    </Fragment>
  );
};
