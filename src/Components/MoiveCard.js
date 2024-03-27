import React from 'react'
import { IMAGE_URL } from '../utils/constant'


const MoiveCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
      <img alt='Moive Card' src={IMAGE_URL + posterPath} />
    </div>
  )
}

export default MoiveCard;