import { Box } from '@mui/material';

import { HeaderBannerCard } from './HeaderBannerCard';
import { HeaderBannerImage } from './HeaderBannerImage';

export const HeaderBanner = () => {
  return (
    <Box component='div' sx={{ position: 'relative', height: '400px' }}>
      <HeaderBannerImage />
      <HeaderBannerCard />
    </Box>
  );
};
