import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import Data from '../components/Data.json';
import { Link } from 'react-router-dom';
// import airpods from "../assets/images/airpods.jpg";
// import accessories from "../assets/images/accessories.jpg";
// import bags from "../assets/images/bags.jpg";
// import mobile from "../assets/images/mobile.jpg";
// import shirts from "../assets/images/shirts.jpg";

const Banner = () => {
//   const cards = [
//     {
//       title: 'I-Phone',
//       description: 'This is the description for card 1.',
//       price: "Rs: 500000",
//       image: mobile,
//     },
//     {
//       title: 'AirPods Pro',
//       description: 'This is the description for card 2.',
//       price: "Rs: 5000",
//       image: airpods,
//     },
//     {
//       title: 'Hand Bags',
//       description: 'This is the description for card 3.',
//       price: "Rs: 5000",
//       image: bags,
//     },
//     {
//       title: 'Accessories',
//       description: 'This is the description for card 4.',
//       price: "Rs: 500",
//       image: accessories,
//     },
//     {
//       title: "T-Shirts",
//       description: 'This is the description for card 5.',
//       price: "Rs: 500",
//       image: shirts,
//     }
//   ];

  return (
    <>

<Box>
      <Typography
        variant="h3"
        component="h3"
        sx={{ textAlign: 'center', marginBottom: 4, marginTop: 5,
        fontSize: {
            xs: '1.5rem', 
            sm: '2rem', 
          }
         }}
      >
        Featured Products
      </Typography>

    <Box sx={{ display: 'flex', justifyContent: 'center', width: "100%"}}>

      <Grid container spacing={2} sx={{ padding: 2 , justifyContent: 'center'}}>
        {Data.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Card>
            <Link to={`/products?productId=${card.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={card.image} alt={`Card ${index + 1}`} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.price}
                </Typography>
              </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Box>
    </>
  );
};

export default Banner;
