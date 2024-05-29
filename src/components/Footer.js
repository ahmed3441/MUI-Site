import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#white', color: 'black', padding: '0 0 ' }}>
      <Box sx={{ maxWidth: '1200px', margin: '70px auto', padding: '0 20px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h3">
              About Us
            </Typography>
            <Typography variant="body2">
              Hello, We are launching our new store Waradly.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h3">
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyleType: 'none', padding: 0 }}>
              <li><Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>Home</Link></li>
              <li><Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>Shop</Link></li>
              <li><Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>About</Link></li>
              <li><Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>Contact</Link></li>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h3">
              Contact Us
            </Typography>
            <Typography variant="body2">
              123 Main Street, City, Country
            </Typography>
            <Typography variant="body2">
              Email: info@example.com
            </Typography>
            <Typography variant="body2">
              Phone: +123456789
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ textAlign: 'center', padding: '30px 0', borderTop: '1px solid #444' }}>
        <Typography variant="body2">
          &copy; 2024 E-commerce Website. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
