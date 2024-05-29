import React from 'react';
import { Box } from '@mui/material';
import BannerImg from '../assets/images/banners.jpg';

const Banner = () => {
  return (
    <Box
      sx={{
        width: '100%',
        margin: '0 auto',
        height: 0,
        paddingTop: '40%',
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}

export default Banner;
