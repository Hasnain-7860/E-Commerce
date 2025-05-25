import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollection from '../components/Product/GenderCollection'
import NewArrival from '../components/Product/NewArrival'

const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollection/> 
        <NewArrival/>
    </div>
  )
}

export default Home