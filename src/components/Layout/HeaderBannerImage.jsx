import { Box } from '@mui/material';

import bannerPhoto from '../../assets/bannerPhoto.jpg';

export const HeaderBannerImage = () => {
  return (
    <Box
      component='img'
      sx={{
        height: '400px',
        width: '100%',
        objectFit: 'cover',
      }}
      alt='Table with food'
      src={bannerPhoto}
    />
  );
};
