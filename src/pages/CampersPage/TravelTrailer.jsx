import React from 'react'
import TheCampersPage from '../../components/TheCampersPage'
import { assets } from '../../assets/assets'

const TravelTrailer = () => {
  return (
    <div>
        <TheCampersPage name='Travel Trailer'price='110 per night' img={assets.travel_trailer}/>
    </div>
  )
}

export default TravelTrailer