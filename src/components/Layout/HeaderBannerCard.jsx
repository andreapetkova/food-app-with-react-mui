import { Card, CardContent, Typography } from '@mui/material';

import { styles } from '../styles';

export const HeaderBannerCard = () => {
  return (
    <Card sx={styles.bannerCard}>
      <CardContent>
        <Typography variant='h4' component='h4' sx={styles.logo} mb='20px'>
          Delicious Food, Delivered to you
        </Typography>
        <Typography variant='subtitle1' component='p'>
          Choose your favorite meal from our broad selection of available meal delicious lunch or
          dinner at home.
        </Typography>
        <Typography variant='subtitle1' component='p'>
          All our meals are cooked with high-quality ingredients, just-in-time and of course by
          experienced chefs!
        </Typography>
      </CardContent>
    </Card>
  );
};
