import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import RVs from './pages/RVs'
import RoadTrips from './pages/RoadTrips'
import Faq from './pages/Faq'
import About from './pages/About'
import Footer from './components/Footer'
import EuroCamper from './pages/CampersPage/EuroCamper'
import Varagon from './pages/CampersPage/Varagon'
import RangerVan from './pages/CampersPage/RangerVan'
import TravelTrailer from './pages/CampersPage/TravelTrailer'
import MotorHomes from './pages/CampersPage/MotorHomes'
import { ScrollToTop } from './components/ScrollToTop'


const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/rvs' element={<RVs/>} />
      <Route path='/road-trips' element={<RoadTrips/>} />
      <Route path='/faq' element={<Faq/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/euro-campers' element={<EuroCamper/>} />
      <Route path='/vanagons' element={<Varagon/>} />
      <Route path='/vanagons' element={<Varagon/>} />
      <Route path='/ranger-vans' element={<RangerVan/>} />
      <Route path='/travel-trailers' element={<TravelTrailer/>} />
      <Route path='/motorhomes' element={<MotorHomes/>} />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App