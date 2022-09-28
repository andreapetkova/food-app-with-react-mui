import { Button, Chip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { styles } from '../styles';
import { useContext } from 'react';
import { CartCtx } from '../../store/cart-context';

export const CartButton = props => {
  const cartCtx = useContext(CartCtx);
  const numberOfItems = cartCtx.items.length;

  return (
    <Button
      variant='contained'
      color='secondary'
      startIcon={<ShoppingCartIcon />}
      sx={styles.cartButton}
      onClick={props.onClick}
    >
      Your Cart
      <Chip label={numberOfItems} sx={{ ml: '10px', color: '#FA7070' }} />
    </Button>
  );
};
