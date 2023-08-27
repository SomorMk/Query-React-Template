import { useState } from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Banner from './assets/Components/Banner/Banner'
import CommonSection from './assets/Components/CommonSection/CommonSection1'
import Climb from './assets/Components/Climb/Climb'
import CommonSection2 from './assets/Components/CommonSection/CommonSection2'
import Footer from './assets/Components/Footer/Footer'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <CommonSection></CommonSection>
    <Climb></Climb>
    <CommonSection2></CommonSection2>
    <Footer></Footer>
    </>
  )
}

export default App