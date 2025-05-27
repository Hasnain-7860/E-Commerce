import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollection from '../components/Product/GenderCollection'
import NewArrival from '../components/Product/NewArrival'
import ProductDetails from '../components/Product/ProductDetails'


const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollection/> 
        <NewArrival/>


        <h2 className='text-3xl text-center  font-bold mb-4'>Best Seller</h2>
        <ProductDetails/>
      
    </div>
  )
}

export default Home