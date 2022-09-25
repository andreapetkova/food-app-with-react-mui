import { Box, Modal, Typography, Button, Portal } from '@mui/material';

import { styles } from '../styles';

export const Cart = props => {
  const container = document.getElementById('overlay');

  return (
    <Portal container={container}>
      <Modal
        open={props.open}
        onClose={props.onHideCart}
        disablePortal
        aria-labelledby='modal-modal-title'
      >
        <Box sx={styles.cartModal}>
          <Typography
            id='modal-modal-title'
            variant='h5'
            component='h5'
            sx={{ textAlign: 'center' }}
          >
            Your Cart
          </Typography>
          <Button variant='contained' onClick={props.onHideCart} color='yellow'>
            Close
          </Button>
        </Box>
      </Modal>
    </Portal>
  );
};
