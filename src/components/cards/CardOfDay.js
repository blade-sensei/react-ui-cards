import React, {useState} from 'react';
import './CardOfDay.css'
function CardOfDay({card}) {
  
 
 
  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-avatar'> 
          <span className='avatar-circle'>
          
          <img className='avatar-img' src={card.imagePath} alt=''/>
          </span>
          <span className='compagny-name'> {card.compagnyName}</span>
        </div>
        <div className='card-rating-value'>
          <span> {card.rating} </span>
        </div>
      </div>
      <div className='card-body'>
        <div className='prof-title'> {card.profTitle}</div>
  <div className='salary'> ${card.salaryRange.start} - ${card.salaryRange.end} </div>
        <div className='location'>{card.location}</div>
      </div>
    </div>
  )
}

export default CardOfDay;