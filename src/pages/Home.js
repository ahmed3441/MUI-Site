import React from 'react'
import Navabar from '../components/Navabar';
import Banner from '../components/Banner';
import Products from '../components/Products';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <Navabar/>
      <Banner/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home