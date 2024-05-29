import React from 'react';
import Accessories from '../assets/images/accessories.jpg';
import Mobile from '../assets/images/mobile.jpg';
import Airpods from '../assets/images/airpods.jpg';
import Bags from '../assets/images/bags.jpg';
import Shirt from '../assets/images/shirts.jpg';
import { Container, Grid, Card, CardMedia, CardContent, Typography, TextField, Select, MenuItem, FormControl } from '@mui/material';

const Filters = () => {
  const products = [
    { image: Accessories, title: 'Mobile Back Covers', description: 'Description of the product goes here...', price: '$150' },
    { image: Mobile, title: 'I-Phone 15 Pro Max', description: 'Description of the product goes here...', price: '$1200' },
    { image: Airpods, title: 'Airpods Pro', description: 'Description of the product goes here...', price: '$20' },
    { image: Bags, title: 'Ladies Hand Bags', description: 'Description of the product goes here...', price: '$50' },
    { image: Shirt, title: "Men's T-Shirts", description: 'Description of the product goes here...', price: '$12' },
    { image: Accessories, title: 'Mobile Back Covers', description: 'Description of the product goes here...', price: '$150' },
    { image: Mobile, title: 'I-Phone 15 Pro Max', description: 'Description of the product goes here...', price: '$1200' },
    { image: Airpods, title: 'Airpods Pro', description: 'Description of the product goes here...', price: '$20' },
    { image: Bags, title: 'Ladies Hand Bags', description: 'Description of the product goes here...', price: '$50' },
    { image: Shirt, title: "Men's T-Shirts", description: 'Description of the product goes here...', price: '$12' },
    { image: Accessories, title: 'Mobile Back Covers', description: 'Description of the product goes here...', price: '$150' },
    { image: Mobile, title: 'I-Phone 15 Pro Max', description: 'Description of the product goes here...', price: '$1200' },
  ];
  
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <div>
            <Typography variant="h5">Search Bar</Typography>
            <TextField fullWidth placeholder="Search..." variant="outlined" margin="normal" />
            <FormControl fullWidth margin="normal">
              <Typography>Category</Typography>
              <Select defaultValue="all">
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <Typography>Price Range</Typography>
              <Select defaultValue="all">
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="0-50">$0 - $50</MenuItem>
                <MenuItem value="50-100">$50 - $100</MenuItem>
                <MenuItem value="100-200">$100 - $200</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>

        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia component="img" height="240" image={product.image} alt={`Product ${index + 1}`} />
                  <CardContent>
                    <Typography variant="h6">{product.title}</Typography>
                    <Typography variant="body2">{product.description}</Typography>
                    <Typography variant="body1">Price: {product.price}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Filters;
