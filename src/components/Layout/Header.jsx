import { AppBar, Toolbar, Typography } from '@mui/material';

import { styles } from '../styles';
import { CartButton } from './CartButton';
import { HeaderBanner } from './HeaderBanner';

function Header(props) {
  return (
    <AppBar position='static'>
      <Toolbar disableGutters={true} sx={{ px: '200px' }}>
        <Typography variant='h4' component='h4' sx={styles.logo}>
          DeliveRoo
        </Typography>
        <CartButton onClick={props.onShowCart} />
      </Toolbar>
      <HeaderBanner />
    </AppBar>
  );
}

export default Header;
