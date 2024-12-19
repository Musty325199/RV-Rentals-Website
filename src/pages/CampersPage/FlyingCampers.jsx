import React from 'react'
import { assets } from '../../assets/assets'
import TheCampersPage from '../../components/TheCampersPage'

const FlyingCampers = () => {
  return (
    <div>
        <TheCampersPage name='Flying Cloud'price='130 per night' img={assets.flying_camper}/>
    </div>
  )
}

export default FlyingCampers