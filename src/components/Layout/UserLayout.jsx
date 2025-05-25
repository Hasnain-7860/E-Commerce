import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
    {/* Header
    Main content
    Footer */}
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default UserLayout