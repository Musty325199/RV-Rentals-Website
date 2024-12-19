import React from 'react'
import { assets } from '../../assets/assets'
import TheCampersPage from '../../components/TheCampersPage'


const RangerVan = () => {
  return (
    <div>
        <TheCampersPage name='Ranger Van'price='110 per night' img={assets.range_van}/>
    </div>
  )
}

export default RangerVan