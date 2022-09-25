import { Button, Chip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { styles } from '../styles';

export const CartButton = props => {
  return (
    <Button
      variant='contained'
      color='secondary'
      startIcon={<ShoppingCartIcon />}
      sx={styles.cartButton}
      onClick={props.onClick}
    >
      Your Cart
      <Chip label={3} sx={{ ml: '10px', color: '#FA7070' }} />
    </Button>
  );
};
