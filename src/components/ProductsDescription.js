import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import productsData from './Data.json';
import { Box, Card, CardMedia, CardContent, Typography, CircularProgress, Grid } from '@mui/material';

const ProductDetails = () => {
  const [searchParams] = useSearchParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = searchParams.get('productId');
    console.log("PRODUCT ID", productId);

    const foundProduct = productsData.find(item => item.id.toString() === productId);
    if (foundProduct) {
      setProduct(foundProduct); 
    } else {
      console.error('Product not found');
    }
  }, [searchParams]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', padding: 2 }}>
      {product ? (
        <Card sx={{ width: { xs: '100%', sm: '75%', md: '70%', lg: '80%' }, maxWidth: '700px', boxShadow: 3 }}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                height="100%"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: 'cover' }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: { md: 'center' } }}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {product.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Price: Rs. {product.price}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ marginTop: 2 }}>
                  {product.description}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default ProductDetails;
