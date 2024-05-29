import React from 'react'
import Navbar from "../components/Navabar";
import ProductDescription from '../components/ProductsDescription';
import Filters from '../components/Filters';
 import Footer from '../components/Footer';

const Products = () => {
  return (
    <div>
      <Navbar/>
      <ProductDescription/>
      <Filters/>
      <Footer/>
    </div>
  )
}

export default Products