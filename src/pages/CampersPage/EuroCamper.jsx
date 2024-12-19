import React from 'react'
import TheCampersPage from '../../components/TheCampersPage'
import { assets } from '../../assets/assets'

const EuroCamper = () => {
  return (
    <div>
        <TheCampersPage name='EuroCamper'price='70 per night' img={assets.euro_camper}/>
    </div>
  )
}

export default EuroCamper