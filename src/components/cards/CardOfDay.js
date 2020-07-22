import React from 'react';
import './CardOfDay.css'
function CardOfDay() {

  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-avatar'> 
          <img src='' alt=''/>
          <span> title spotify</span>
        </div>
        <div className='card-rating'>
          <span> 4.4 </span>
        </div>
      </div>
      <div className='card-body'>
        <div className='prof-title'> title prof </div>
        <div className='salary'> 1222</div>
        <div className='location'>location</div>
      </div>
    </div>
  )
}

export default CardOfDay;