import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <div className='m-2'><Card/></div>
      
      <Footer/>
    </>
  )
}
