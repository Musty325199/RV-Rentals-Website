import React from 'react'
import { assets } from '../../assets/assets'
import TheCampersPage from '../../components/TheCampersPage'

const Varagon = () => {
  return (
    <div>
        <TheCampersPage name='Vanagon'price='90 per night' img={assets.vanagon}/>
    </div>
  )
}

export default Varagon