import { Box, Button, FormControl, Input, InputLabel } from '@mui/material';
import { useInput } from '../../hooks/use-input';

export const MealItemForm = props => {
  return (
    <Box component='form'>
      <FormControl sx={{ flexDirection: 'row' }}>
        <InputLabel htmlFor={props.id} sx={{ position: 'relative' }}>
          Amount
        </InputLabel>
        <Input
          id={props.id}
          aria-describedby='amount'
          inputProps={{ min: '1', max: '5', defaultValue: '1' }}
          sx={{ width: '30px' }}
        />
        <Button sixe='small' variant='contained' color='yellow' sx={{ ml: '30px' }}>
          + Add
        </Button>
      </FormControl>
    </Box>
  );
};
