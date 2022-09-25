import { ListItem, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
import { MealItemForm } from './MealItemForm';

export const MealItem = props => {
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
              ${props.price.toFixed(2)}
            </Typography>
          </>
        }
      />
      <ListItemSecondaryAction>
        <MealItemForm id={props.id} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};
