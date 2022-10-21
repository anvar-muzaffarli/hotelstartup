import React from 'react'
import blanksvg from '../assets/svgs/blanksvg.svg'

const Card = () => {
  return (
    <div className='card'>
        <h1>Market Research</h1>
        <p>Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan mauris. Nunc pellentesque in tellus.</p>
        <img src={blanksvg} alt="" />
    </div>
  )
}

export default Card